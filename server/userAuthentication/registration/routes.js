/* Actual authentication logic, getting user from DB, validating password sending user back */
const passport = require("passport");
const Strategy = require("passport-github2");
const FBStrategy = require('passport-facebook')
const router = require("express").Router();
const { User } = require("../../models");
const registrations = require("./userRegistration");
const { signToken } = require('../../utils/auth');

//For Git hub
passport.use(
    new Strategy(
        {
            clientID: process.env["GH_CLIENT_ID"],
            clientSecret: process.env["GH_SECRET"],
            scope: ["user:email"],
            callbackURL: process.env["GH_CALLBACK"],
        },
        async function (accessToken, refreshToken, profile, cb) {
            if(!profile || !accessToken || !refreshToken){
                return cb(null, false, { message: "User Not authenticated" });
            }
            const emailID = profile.emails[0].value;
            const fullName = profile.displayName;
            console.log("Came to Github authentication");
            console.log(JSON.stringify(profile));
            const user = await User.findOne({ email: emailID })
                .select("-__v -password")
            console.log("user fetch result : " + JSON.stringify(user));
            if (!user) {
                console.log('new user');
                const newUser = registrations.createGHUser(fullName, emailID);
                const newToken = signToken(newUser);
                const newAuth = {
                    token: newToken,
                    user: newUser,
                };
                return cb(null, newAuth);
            } else {
                console.log('old user');
                if (user.accountSource == 'GH') {
                    console.log('already with github');
                    const token = signToken(user);
                    const auth = {
                        token: token,
                        user: user,
                    };
                    return cb(null, auth);
                } else {
                    return cb(null, false, { message: "User email already existed with other provider" });
                }
            }
        }
    )
);

router.get(
    "/api/auth/github",
    passport.authenticate("github", { scope: ["user:email"] })
);
//get email & Name http://localhost:3001/api/auth/github
router.get(
    "/api/auth/github/callback",
    passport.authenticate("github", { session: false }),  (req,res) => {
    console.log("callback after authentication came here");
        if (req.user) {
            console.log('Authenticated : ' + req.user.user.fullname + ' :  ' + req.user.token);
            res.json(JSON.stringify(req.user));
        }
        else {
            res.status(403);
            res.json({"message" : "User not authenticated"});;
        }
        
    }
);


//For FB


const fbStrategy = new FBStrategy({
    clientID: process.env['FB_APP_ID'],
    clientSecret: process.env['FB_SECRET'],
    callbackURL: process.env['FB_CALLBACK'],
    passReqToCallback: true,
    profileFields: ['id', 'email', 'link', 'locale', 'name',
        'timezone', 'updated_time', 'verified', 'displayName']
},
    async (req, accessToken, refreshToken, profile, cb) => {
        if(!profile){
            return cb(null, false, { message: "User Not authenticated" });
        }
        
        console.log('FB Profile ')
        console.log(profile);
        const emailID = profile.emails[0].value;
        const fullName = profile.displayName;
        const user = await User.findOne({ email: emailID })
            .select("-__v -password")
        console.log("user fetch result : " + JSON.stringify(user));
        if (!user) {
            console.log('new user');
            const newUser = registrations.createFBUser(fullName, emailID);
            console.log('New User is :'+JSON.stringify(newUser));
            const newToken = signToken(newUser);
            const newAuth = {
                token: newToken,
                user: newUser,
            };
            console.log('returning new auth');
            console.log(newAuth);
            return cb(null, newAuth);
        } else {
            console.log('old user');
            if (user.accountSource == 'FB') {
                console.log('already with FB');
                const token = signToken(user);
                const auth = {
                    token: token,
                    user: user,
                };
                return cb(null, auth);
            } else {
                return cb(null, false, { message: "User email already existed with other provider" });
            }
        }
    });


passport.use('facebook', fbStrategy);


router.get('/api/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));

router.get('/api/auth/facebook/callback',passport.authenticate('facebook', { session: false }),  (req,res) => {
    console.log("callback after authentication came here");
        if (req.user) {
            console.log('Authenticated : ' + req.user.user.displayName + ' :  ' + req.user.token);
            
            const path = "http://localhost:3000/redirectFederateUser/?idtoken="+req.user.token;
            res.redirect(path);
        }
        else {
            res.status(403);
            res.json({"message" : "User not authenticated"});;
        }
        
    }
);


module.exports = router;

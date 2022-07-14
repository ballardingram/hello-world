import React, { useEffect, useState, useId } from "react";
import NavSm from "../components/NavSm";

import NavLg from "../components/NavLg";
import FooterSticky from "../components/FooterSticky";
import FooterBody from "../components/FooterBody";
import Card from "../components/Card";
import { QUERY_USER, GET_PROJECT_OPPORTUNITIES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import defaultPic from "../assets/orange-pug-256.png";

const Profile = () => {
  const { data } = useQuery(QUERY_USER, {
    variables: { email: Auth.getUserEmail() },
  });
  const [userInfo, setUserInfo] = useState({});
  const [userSkills, setUserSkills] = useState([]);
  const userData = data ? data.user : "";
  const [projectOpportunities, setProjectOpportunities] = useState([]);
    
  useEffect(() => {
    if (userData) {
      setUserInfo(userData);
      console.log("settig user infor");
      setUserSkills(userData.skills.map((skill) => skill.skillName));
    }
  }, [userData]);
    
  const { data: skillProjects } = useQuery(GET_PROJECT_OPPORTUNITIES, {
    variables: { skills: userSkills },
  });
  const opportunitiesData = skillProjects ? skillProjects.skillProjects : "";

  useEffect(() => {
    if (opportunitiesData) {
      setProjectOpportunities([...opportunitiesData]);
    }
  }, [opportunitiesData ]);

  return (
    <>
      {userInfo && (
        <div className="flex flex-col h-screen justify-start">
          {/* navigation header start */}
          <header>
            <NavLg></NavLg>
            <NavSm></NavSm>
          </header>
          {/* navigation header end */}
          <h1 className="font-bold mb-1 text-2xl lg:text-xl px-4 pt-4 md:pt-0 w-screen md:text-right md:pr-9 lg:pb-5">
            Dashboard
          </h1>

          {/* body start */}
          <main className="sm:grid sm:grid-cols-2 lg:grid-cols-3 mx-4 text-lg">
            {/*md break column 1 */}
            <div id=";diunsapduchoijopij" className="pt-1 sm:px-2 rounded-lg w-sm lg:max-w-sm">
              <h2 className="font-semibold text-xl">Friends</h2>
              <h3 className="font-normal mb-1 text-lg">
                {userInfo.friendCount} friends
              </h3>
              <div
                className="grid grid-cols-4 gap-1 w-sm mb-5 rounded-2xl"
                id="friends"
              >
                {userInfo.friendCount > 0 ? (
                  userInfo.friends.map((friend) => {
                    return (
                      <div id={"frnd"+friend._id+Math.floor(Math.random()*100)}>
                      <a href="/">
                        <img
                          src={
                            friend.profilePicURL
                              ? friend.profilePicURL
                              : defaultPic
                          }
                          alt={friend.diplayName}
                          className="h-20 p-1"
                        />
                      </a>
                      </div>
                    );
                  })
                ) : (
                  <div>Make some friends!!</div>
                )}
              </div>
              <div className="hidden sm:contents">
                <h2 className="font-semibold text-xl mb-1 pt-2">
                  Message Center
                </h2>
                <div className="flex flex-col justify-center text-lg md:text-xl tracking-wide font-semibold">
                  {userInfo.friendCount > 0 ? (
                    userInfo.friends.map((friend) => {
                      return (
                        <div id={"msg"+friend._id+Math.floor(Math.random()*100)}>
                        <a
                          href="/"
                          className="flex flex-row items-center mb-1 rounded-r-2xl"
                        >
                          <img
                            src={
                              friend.profilePicURL
                                ? friend.profilePicURL
                                : defaultPic
                            }
                            alt={friend.diplayName}
                            className="h-20 p-1"
                          />
                          <div className="w-full text-center">
                            {friend.diplayName}
                          </div>
                        </a>
                        </div>
                      );
                    })
                  ) : (
                    <div>You have no friends to message 😭</div>
                  )}
                </div>
              </div>
            </div>
            {/*md break column 2 */}
            <div  className="pt-1 sm:px-2 rounded-lg min-w-md">
              <div className="flex flex-col justify-between">
                    {console.log(projectOpportunities)}
                {
                projectOpportunities.length > 0 &&
                  // projectOpportunities.map((project) => {
                  //   return <div key={"opprtunity"+project._id} ><Card projectContent={project}/></div>
                  // })}
                  <Card projectContent={projectOpportunities[0]}/>
                  }
              </div>
            </div>
          </main>
          {/* body end */}

          {/* footer start */}
          <FooterBody></FooterBody>
          <FooterSticky></FooterSticky>
          {/* footer end */}
        </div>
      )}
    </>
  );
};

export default Profile;

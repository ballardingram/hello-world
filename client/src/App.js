import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Terms from "./pages/TermsAndConditions";
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';
import ProjectHub from './pages/ProjectHub';
import NoMatch from './pages/NoMatch';
import RedirectFederate from './pages/RedirectFederate'
// import Home from './pages/Home'
import Auth from './utils/auth';
import Profile from './pages/Profile';
import PublicProfile from './pages/PublicProfile';
import Navigation from './components/Navigation';
import FooterSticky from './components/FooterSticky';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});



function App() {
  
    return (
      <ApolloProvider client={client}>
        <>
        {Auth.loggedIn() ? (
          <Router>
                <Routes>

                  <Route
                    path="/about"
                    element={<About />}
                  />
                  <Route
                    path="/publicprofile"
                    element={<PublicProfile />}
                  />

                  <Route 
                    path="/account"
                    element={<Account />}
                  />
                  <Route 
                    path="/terms"
                    element={<Terms />}
                  />
                  <Route
                    path="/"
                    element={<Profile />}
                  />
                  <Route
                    path='/projecthub'
                    element={<ProjectHub />}
                  />
                  <Route
                    path='*'
                    element={<NoMatch />}
                  />
                </Routes>
          </Router>
        ) : (
          <Router>
          
            <Routes>

            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/terms"
              element={<Terms />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/redirectFederateUser'
              element={<RedirectFederate />}
            />
            <Route
              path='*'
              element={<NoMatch />}
            />

            </Routes>
          </Router>
        )}
        </>
      </ApolloProvider>








  //   <ApolloProvider client={client}>
  //     <Router>
  //       <div class="flex flex-col h-screen justify-between">
  //         <Navigation></Navigation>
  //             {/* NEED TO RENDER BASED ON PAGE */}
  //             <h1 className='font-bold text-center lg:mx-5 mt-2 text-2xl lg:text-3xl lg:mt-36'>Page</h1>
  //         <div>
  //           <Routes>
  //           {Auth.loggedIn() ? (
  //           <>
  //           <Route
  //             path="/about"
  //             element={<About />}
  //           />
  //           <Route
  //             path="/account/"
  //             element={<Account />}
  //           />
  //           <Route
  //             path="/terms"
  //             element={<Terms />}
  //           />
  //           <Route
  //             path="/"
  //             element={<Profile />}
  //           />
  //           <Route
  //             path='/projecthub'
  //             element={<ProjectHub />}
  //           />
  //           <Route
  //             path='*'
  //             element={<NoMatch />}
  //           />
  //           </>
  //           ) : (
  //           <>
  //           <Route
  //             path="/"
  //             element={<Login />}
  //           />
  //           <Route
  //             path="/terms"
  //             element={<Terms />}
  //           />
  //           <Route
  //             path="/register"
  //             element={<Register />}
  //           />
  //           <Route
  //             path='/about'
  //             element={<About />}
  //           />
  //           <Route
  //             path='/redirectFederateUser'
  //             element={<RedirectFederate />}
  //           />
  //           <Route
  //             path='*'
  //             element={<NoMatch />}
  //           />

  //           </>
  //           )
  //           }
  //           </Routes>
  //           <FooterSticky></FooterSticky>
  //         </div>
  //       </div>
  //     </Router>
  //   </ApolloProvider>
  );
}

export default App;

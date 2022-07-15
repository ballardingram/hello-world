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
import Auth from './utils/auth';
import Profile from './pages/Profile';
import PublicProfile from './pages/PublicProfile';


const httpLink = createHttpLink({
  uri:  '/graphql',
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
  link: authLink.concat(httpLink),
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
              path='*'
              element={<NoMatch />}
            />

            </Routes>
          </Router>
        )}
        </>
      </ApolloProvider>

  );
}

export default App;

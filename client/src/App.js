import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Terms from "./pages/TermsAndConditions";
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';
import NoMatch from './pages/NoMatch';
// import Home from './pages/Home'
import Auth from './utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
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
      <Router>
        <div>
          {/* place for header if needed */ }
          <div>
            <Routes>
            {Auth.loggedIn() ? (
            <>
            <Route
              path="/"
              element={<About />}
            />
            <Route
              path="/account"
              element={<Account />}
            />
            <Route
              path='*'
              element={<NoMatch />}
            />
            </>
            ) : (
            <>
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
            </>
            )
            }
            </Routes>
          </div>
          {/* place for footer if needed */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

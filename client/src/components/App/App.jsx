import React, { useState } from 'react';
import { AuthProvider } from 'react-auth-kit';
import Login from '../Login/Login';
import '../../styles/App.css';
import NavBar from '../NavBar/NavBar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import { CohortProvider } from '../Context/CohortContext.jsx';

const App = () => {
  const [userAuth, setUserAuth] = useState(false);

  return (
    <div id='App'>
      <AuthProvider
        authType={'cookie'}
        authName={'_auth'}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        {!userAuth ? (
          <Login userAuth={() => setUserAuth(true)} />
        ) : (
          <CohortProvider>
            <NavBar logout={() => setUserAuth(false)}></NavBar>
            <Body></Body>
            <Footer></Footer>
          </CohortProvider>
        )}
      </AuthProvider>
    </div>
  );
};

export default App;

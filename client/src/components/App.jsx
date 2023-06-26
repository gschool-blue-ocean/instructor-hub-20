import React, { useState } from "react";
import { AuthProvider } from "react-auth-kit";
import Login from "./Login/Login";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import SplashScreen from "./SplashScreen/SplashScreen";
import { CohortProvider } from "./Context/CohortContext.jsx";

const App = () => {
  const [userAuth, setUserAuth] = useState(false);

  return (
    <div id="App">
      <AuthProvider
        authType="cookie"
        authName="_auth"
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        {!userAuth ? (
          <Login userAuth={() => setUserAuth(true)} />
        ) : (
          <CohortProvider>
            {userAuth ? (
              <SplashScreen logout={() => setUserAuth(false)} />
            ) : (
              <HomePage logout={() => setUserAuth(false)} />
            )}
          </CohortProvider>
        )}
      </AuthProvider>
    </div>
  );
};

export default App;

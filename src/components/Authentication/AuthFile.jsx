import React from 'react';
import { useNavigate } from "react-router-dom";
import {Amplify} from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

function AuthFile() {

    const navigate = useNavigate();

  return (
    <div>
      <Authenticator>
      {({ signOut, user }) => {
        if (user) {
          console.log(user)
          setTimeout(() => navigate("/home"), 500); // Redirect after login
          return <h2>Redirecting...</h2>;
        }
        return (
          <div>
            <h2>Welcome, {user?.username}</h2>
            <button onClick={signOut}>Sign Out</button>
          </div>
        );
      }}
    </Authenticator>
    </div>
  )
}

export default AuthFile

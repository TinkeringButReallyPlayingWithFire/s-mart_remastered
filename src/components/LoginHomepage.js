import * as React from "react";

import { SignIn, SignOut } from "gatsby-theme-amplify-cognito";

export const Homepage = ({ authState, authData }) => {
  return (
    <section>
      {authState !== "signedIn" ? (
        <SignIn authState={authState} />
      ) : (
        <>
          <h1>Hello {authData.username}</h1>
          <SignOut />
        </>
      )}
    </section>
  );
};

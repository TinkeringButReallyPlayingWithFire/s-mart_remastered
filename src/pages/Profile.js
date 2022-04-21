import React from "react";
import Amplify from "aws-amplify";
import awsmobile from "../aws-exports";
import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react";
import { AmplifyChatbot } from "@aws-amplify/ui-react/legacy";
import "@aws-amplify/ui-react/styles.css";
import { signContainer } from "../components/Profile/Profile.module.css";
Amplify.configure(awsmobile);

// import Homepage from "../components/Profile/Profile";
// import { body } from "./index.module.css";

// // markup
// const ProfilePage = () => {
//   return (
//     <div className={body}>
//       <Homepage />
//     </div>
//   );
// };

// export default ProfilePage;

// markup
const IndexPage = () => {
  return (
    <Authenticator
      signUpAttributes={[
        "birthdate",
        "email",
        "family_name",
        "name",
        "phone_number",
      ]}
    >
      {({ signOut, user }) => (
        <div className={signContainer}>
          <div>
            <h1>Hello {user.username}</h1>
            {console.log("da user b from aws", user.attributes)}
            <h4>
              Name: <br />
              {` ${user.attributes.name} ${user.attributes.family_name}`}
            </h4>
            <h4>Email address: {user.attributes.email}</h4>
            <h4>Contact number: {user.attributes.phone_number}</h4>
            <h4>Birthdate: {user.attributes.birthdate}</h4>

            <button onClick={signOut}>Sign Out</button>
          </div>
        </div>
      )}
    </Authenticator>
  );
};

export default IndexPage;

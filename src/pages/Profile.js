// import React from "react";
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
import { withAuthenticator } from "aws-amplify-react";

// markup
const IndexPage = () => {
  return (
    <div>
      <h1>WOWOWOWOOWOWOWOW</h1>
    </div>
  );
};

export default withAuthenticator(IndexPage);

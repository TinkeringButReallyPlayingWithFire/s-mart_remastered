import React from "react";
import "bulma/css/bulma.css";
import { useState, useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import awsmobile from "../../gatsby-browser";
import {
  Authenticator,
  useTheme,
  View,
  Text,
  Image,
  Button,
  Heading,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../components/Profile/Profile.css";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "../components/Navigation/Navigation";
import Navigation_LoggedIn from "../components/Navigation/Navigation_LoggedIn";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import bubbles from "../images/Bubbles.mp4";

Amplify.configure(awsmobile);
Auth.configure(awsmobile);

<Helmet>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <script
    type="module"
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
  />
  <script
    nomodule
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
  />
</Helmet>;

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <StaticImage
          id="sMartLogo"
          alt="Amplify logo"
          src="../images/S-Mart_logo.svg"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={`${tokens.colors.neutral["80"]}`}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: "Enter your email",
    },
  },
  signUp: {
    password: {
      labelHidden: false,
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      labelHidden: false,
      label: "Confirm Password:",
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      labelHidden: false,
      placeholder: "Enter your Password:",
    },
  },
  resetPassword: {
    username: {
      labelHidden: false,
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      labelHidden: false,
      placeholder: "Enter your Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      labelHidden: false,
      placeholder: "Enter your Password Please:",
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      labelHidden: false,
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      labelHidden: false,
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

const Signin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  const isUserLoggedIn = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  };
  return (
    <div className="profileInformationBody">
      <Authenticator
        formFields={formFields}
        components={components}
        signUpAttributes={[
          "birthdate",
          "email",
          "family_name",
          "name",
          "phone_number",
        ]}
      >
        {({ signOut, user }) => (
          <main>
            <Navigation props={isLoggedIn} />
            <div>
              <div>
                <video className="videoBody" preload="auto" loop autoPlay muted>
                  <source src={bubbles} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>

              <div className="profileInformationContainer">
                <h1 className="borders welcomeTitle">Hello {user.username}!</h1>
                <div className="profileInfoContainer">
                  <h3 className="borders">
                    <span className="profileTitle">
                      Your profile information
                    </span>
                  </h3>
                  <h5 className="borders">
                    <span className="headerBolding">Name: </span>
                    <br />
                    {user.attributes.name} {user.attributes.family_name}
                  </h5>
                  <h5 className="borders">
                    <span className="headerBolding">Birthday:</span> <br />
                    {user.attributes.birthdate}
                  </h5>
                  <h5 className="borders">
                    <span className="headerBolding">Email address: </span>
                    <br />
                    {user.attributes.email}
                  </h5>
                  <h5 className="borders">
                    <span className="headerBolding">Phone number: </span>
                    <br />
                    {user.attributes.phone_number}
                  </h5>
                </div>
                <button
                  onClick={signOut}
                  className="button is-primary signoutButton"
                >
                  Sign out
                </button>
              </div>
            </div>
          </main>
        )}
      </Authenticator>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};
export default Signin;

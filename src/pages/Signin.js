import React from "react";
import { useState } from "react";
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
Amplify.configure(awsmobile);
Auth.configure(awsmobile);

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

const Signing = () => {
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
        >
        {({ signOut, user }) => (
          <main>
            <div>
              <div className="profileInformationContainer">
                <h1 className="borders">Hello {user.username}!</h1>
                <h3 className="borders">Profile information</h3>
                <h5 className="borders">
                  Name: <br />
                  {user.attributes.name} {user.attributes.family_name}
                </h5>
                <h5 className="borders">
                  Birthday: {user.attributes.birthdate}
                </h5>
                <h5 className="borders">
                  Email address: {user.attributes.email}
                </h5>
                <h5 className="borders">
                  Phone number: {user.attributes.phone_number}
                </h5>
                {console.log(user)}
                <button onClick={signOut}>Sign out</button>
              </div>
            </div>
          </main>
        )}
      </Authenticator>
    </div>
  );
};
export default Signing;

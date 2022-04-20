import Amplify, { Auth } from "aws-amplify";
import awsConfig from "./src/utils/aws-exports";
const React = require("react");
Amplify.configure(awsConfig);

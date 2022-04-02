/* /lib/apollo.js */
//extract the Apollo logic into a lib folder and wrap our _app.js component with a function called withData to give access to Apollo client config inside all child components. This is what gives Apollo access to make GraphQL queries directly in our components as you will see
import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

const config = {
  link: new HttpLink({
    uri: `${API_URL}/graphql`, // Server URL (must be absolute)
  })
};
export default withData(config);
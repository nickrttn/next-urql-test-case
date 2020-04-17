import { withUrqlClient } from "next-urql";
import { useClient } from "urql";

const Index = () => {
  return <h1>Hello world</h1>;
};

export default withUrqlClient((ctx) => {
  if (!ctx && typeof window === "undefined") {
    throw new Error("No context provided");
  }

  return { url: "some-graphql-api" };
})(Index);

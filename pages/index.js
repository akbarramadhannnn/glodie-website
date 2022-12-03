import React from "react";
import Home from "./views/home";

const Index = (props) => {
  return <Home {...props} />;
};

export async function getServerSideProps(context) {
  return {
    props: { urlPath: context.resolvedUrl },
  };
}

export default Index;

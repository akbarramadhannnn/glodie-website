import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Main = styled.main`
  ${tw`min-h-screen`}
`;

const Index = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Index;

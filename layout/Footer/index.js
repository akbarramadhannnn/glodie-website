import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useRouter } from "next/router";

const Footer = styled.footer`
  ${tw`h-20 flex flex-col items-center justify-between pt-4 pb-4 lg:pt-3 lg:pb-3`}

  ${(props) => (props.isRouter === '/' ? tw`bg-white2` : props.isRouter === '/charity' ? tw`bg-purple1` : tw`bg-pink1`)}
`;

const Area = styled.div``;

const H1 = styled.h1`
  ${tw`lg:text-xl font-bold`}

  ${(props) => (props.isRouter === '/' ? tw`text-pink1` :  tw`text-white`)}
`;

const Paragraf = styled.p`
  ${tw`text-sm font-normal`}

  ${(props) => (props.isRouter === '/' ? tw`text-pink1` :  tw`text-white`)}
`;

const Index = () => {
  const router = useRouter();

  return (
    <Footer
      // isRouter={router.pathname === "/" || router.pathname === "/charity"}
      isRouter={router.pathname}
    >
      <Area>
        <H1
          // isRouter={router.pathname === "/" || router.pathname === "/charity"}
          isRouter={router.pathname}
        >
          Alglodieloggy project @2022
        </H1>
      </Area>

      <Area>
        <Paragraf
          // isRouter={router.pathname === "/" || router.pathname === "/charity"}
          isRouter={router.pathname}
        >
          Website designed by Rainbowpee and built by Pitik
        </Paragraf>
      </Area>
    </Footer>
  );
};

export default Index;

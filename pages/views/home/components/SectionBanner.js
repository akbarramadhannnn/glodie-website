import styled from "styled-components";
import tw from "twin.macro";

const SectionBanner = styled.section`
  ${tw`relative h-36xl sm:h-36xl md:h-42xl lg:h-30xl`}
  background-color: rgba(0, 0,0 , 0.4);
`;

export const ImageBannerDekstop = styled.img`
  ${tw`w-full h-full hidden lg:block`}
`;

export const ImageBannerMobile = styled.img`
  ${tw`w-full h-full md:hidden lg:hidden`}
`;

export const ImageBannerIpad = styled.img`
  ${tw`w-full h-full hidden md:block lg:hidden`}
`;

export const ImageTextWrapperBanner = styled.div`
  ${tw`pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-40 lg:flex lg:items-center w-full h-full absolute top-0 mt-10 sm:mt-10 lg:mt-0`}/* background-color: red; */
`;

export const FlexTextBanner = styled.div`
  ${tw`h-80 lg:h-64 sm:h-64 md:h-26xl lg:h-80 flex flex-col justify-between`}
  /* background-color: blue; */
`;

export const TextTitleOneBanner = styled.h1`
  ${tw`text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center sm:text-center md:text-center lg:text-left text-white`}
`;

export const TextTitleTwoBanner = styled.h1`
  ${tw`text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-center md:text-center lg:text-left font-bold text-white`}
`;

export const AreaDescriptionWrapperBanner = styled.div`
  ${tw`lg:w-2/3`}
`;

export const DescriptionBanner = styled.p`
  ${tw`text-base sm:text-base md:text-3xl lg:text-2xl text-center sm:text-center md:text-center lg:text-left text-white font-gloria-hallelujah`}
`;

export const AreaButtonWrapperBanner = styled.div`
  ${tw`h-32 flex flex-col justify-between md:h-32 md:flex md:flex-col md:justify-between lg:w-72 lg:h-auto lg:flex lg:flex-row lg:justify-between lg:items-center`}
  /* background-color: red; */
`;

export const ButtonBanner = styled.button`
  ${tw`text-xl sm:text-xl md:text-xl lg:text-lg md:w-26xl lg:w-36 h-12 font-bold shadow-md bg-orange1 lg:bg-pink1 text-purple1 lg:text-orange1 rounded-3xl border-0 md:self-center`}
`;

export const WrapButtonSosmed = styled.div`
  ${tw`self-center flex justify-between lg:justify-between border-0 w-32 sm:w-32 md:w-32 lg:h-full lg:w-28`}
`;

export const ButtoIconBanner = styled.button``;

export default SectionBanner;

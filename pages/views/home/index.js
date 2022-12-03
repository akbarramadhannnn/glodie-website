import React, { Fragment, useCallback, useState } from "react";
import Gambar1 from "../../../public/images/gambar1.png";
import Gambar1Mobile from "../../../public/images/IMG_6068.png";
import Gambar2 from "../../../public/images/gambar2.png";
import Gambar3 from "../../../public/images/gambar3.png";
import BannerGradient1 from "../../../public/images/banner-gradient1.png";
import BannerGradientResponsive from "../../../public/images/banner-responsive-home.png";
import BannerGradientIpad from "../../../public/images/ipad-banner-home.png";
import TwitterYellowSVG from "../../../public/svg/twitter-yellow.svg";
import DiscordSVG from "../../../public/svg/discord.svg";
import ArrowUpSVG from "../../../public/svg/arrow-up.svg";
import ArrowSVG from "../../../public/svg/arrow.svg";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import SectionBanner, {
  ImageBannerDekstop,
  ImageBannerMobile,
  ImageBannerIpad,
  ImageTextWrapperBanner,
  FlexTextBanner,
  AreaButtonWrapperBanner,
  WrapButtonSosmed,
  ButtonBanner,
  ButtoIconBanner,
  TextTitleOneBanner,
  TextTitleTwoBanner,
  AreaDescriptionWrapperBanner,
  DescriptionBanner,
} from "./components/SectionBanner";
import SectionAbout from "./components/SectionAbout";
import SectionCollections from "./components/SectionCollections";
import SectionFaq from "./components/SectionFaq";
import { Head, Image } from "../../../components";

const Home = () => {
  const [accordionIndex, setAccordionIndex] = useState("");
  const [faqData] = useState([
    {
      title: "What is the total supply of Glodies and Kiddies collections?",
      decription:
        "There will be 150 Glodies and 150 Kiddies, so total supply for V1 would be 300 NFTS.",
    },
    {
      title: "What`s the diferrence between Alglodieloggy and Kiddie Glodie?",
      decription:
        "The difference between Glodie and Kiddie is the art and the collection, but they’re still under our V1 category. We use Kiddie as benefit for our Glodie Ifrit holders, each one of Ifrit holders deserve to have a custom Kiddie.",
    },
    {
      title: "Will there be more future utilities?",
      decription:
        "Of course! We’re still building and we’ll always try to give our best. We’re always open for feedback and suggestions, so please don’t hesitate to reach us out!",
    },
  ]);

  const handleClickAccordion = useCallback(
    (i) => {
      if (accordionIndex === i) {
        setAccordionIndex("");
      } else {
        setAccordionIndex(i);
      }
    },
    [accordionIndex]
  );

  const handleClickSosmed = useCallback((sosmedName) => {
    if (sosmedName === "twitter") {
      window.open("https://twitter.com/Alglodieloggy");
    } else if (sosmedName === "discord") {
      window.open("http://discord.gg/tSfYq4jfKV");
    } else {
      window.open("https://linktr.ee/alglodieloggy");
    }
  }, []);

  return (
    <Fragment>
      <Head title="Glodie | Home" urlLink="/" />

      <SectionBanner
      // className="h-30xl pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-40 flex items-center"
      >
        <ImageBannerDekstop src={BannerGradient1.src} alt="BannerGradient1" />
        <ImageBannerMobile
          src={BannerGradientResponsive.src}
          alt="BannerGradientResponsive"
        />
        <ImageBannerIpad
          src={BannerGradientIpad.src}
          alt="BannerGradientIpad"
        />

        <ImageTextWrapperBanner>
          <FlexTextBanner>
            <TextTitleOneBanner>Welcome to</TextTitleOneBanner>
            <TextTitleTwoBanner>ALglodieloggy Army!</TextTitleTwoBanner>

            <AreaDescriptionWrapperBanner>
              <DescriptionBanner>
                An army of 150 Glodies and 150 Kiddies on Algorand blockchain.
              </DescriptionBanner>
            </AreaDescriptionWrapperBanner>

            <AreaButtonWrapperBanner>
              <ButtonBanner onClick={handleClickSosmed}>Get Yours</ButtonBanner>
              <WrapButtonSosmed>
                <ButtoIconBanner onClick={() => handleClickSosmed("discord")}>
                  <DiscordSVG className="w-14 h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-12 lg:h-12" />
                </ButtoIconBanner>
                <ButtoIconBanner onClick={() => handleClickSosmed("twitter")}>
                  <TwitterYellowSVG className="w-14 h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-12 lg:h-12" />
                </ButtoIconBanner>
              </WrapButtonSosmed>
            </AreaButtonWrapperBanner>
          </FlexTextBanner>
        </ImageTextWrapperBanner>
      </SectionBanner>

      <SectionAbout>
        <div className="flex justify-center lg:w-1/2 lg:ml-6 lg:h-full">
          <Image
            className="w-10xl sm:w-10xl md:w-16xl lg:w-4/5 h-full block lg:hidden"
            src={Gambar1Mobile}
            alt="Gambar1Mobile"
          />

          <Image
            className="shadow-xl w-3/5 sm:w-3/5 md:w-2/5 lg:w-4/5 h-full hidden lg:block"
            src={Gambar1}
            alt="Gambar1"
          />
        </div>

        <div className="lg:w-1/2 flex h-26xl sm:h-26xl md:h-30xl lg:h-full flex-col justify-between pt-10 pb-10 sm:pt-10 sm:pb-10 md:pt-11 md:pb-11 lg:pt-11 lg:pb-11">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl text-center sm:text-center md:text-center lg:text-left font-bold text-purple1">
            About
          </h1>

          <p className="text-purple1 text-base sm:text-base md:text-3xl lg:text-xl font-gloria-hallelujah opacity-80 text-center sm:text-center md:text-center lg:text-left">
            Glodies were hated since they were born, because they’re ugly, crazy
            and stinks. They became sad and started showing symptoms of
            cannibalism. They began to eat each other and eventually got sick
            and turned into some kind of zombie.
          </p>

          <p className="text-purple1 text-base sm:text-base md:text-3xl lg:text-xl font-gloria-hallelujah text-center sm:text-center md:text-center lg:text-left">
            The more they eat, the more hatred and negativity they consume, the
            more they’re going to multiply and mutate.
          </p>
        </div>
      </SectionAbout>

      <SectionCollections>
        <div className="w-full sm:w-full md:w-full lg:w-3/6 h-52 sm:h-52 md:h-14xl lg:h-60 flex flex-col justify-between">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-center md:text-center lg:text-left font-bold text-orange1">
            First Gene Variant
          </h1>

          <div className="lg:w-4/5">
            <p className="text-lg sm:text-lg md:text-3xl lg:text-2xl text-center sm:text-center md:text-center lg:text-left font-gloria-hallelujah text-white">
              The first gene variant of glodie mutations is a combination of
              Alglodieloggy and kiddie glodie collections with a total of 300
              hand-drawn NFTS.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-7/12 md:w-9/12 lg:w-7/12 h-14xl sm:h-14xl md:h-80 lg:h-full flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="flex justify-center items-center">
              <Image
                className="rounded-full w-40 sm:w-40 md:w-60 lg:w-72 xl:w-72 h-full"
                src={Gambar1}
                alt="Gambar1"
              />
            </div>

            <button
              className="bg-orange1 shadow-lg rounded-3xl text-purple1 h-10 font-bold text-lg"
              onClick={() => {
                window.open(
                  "https://www.nftexplorer.app/collection/alglodie-loggy"
                );
              }}
            >
              Alglodieloggy
            </button>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex justify-center items-center">
              <Image
                className="rounded-full w-40 sm:w-40 md:w-60 lg:w-72 xl:w-72 h-full"
                src={Gambar2}
                alt="Gambar2"
              />
            </div>

            <button
              className="bg-orange1 shadow-lg rounded-3xl text-purple1 h-10 font-bold text-lg"
              onClick={() => {
                window.open(
                  "https://www.nftexplorer.app/collection/kiddie-glodie"
                );
              }}
            >
              Kiddie Glodie
            </button>
          </div>
        </div>
      </SectionCollections>

      <SectionFaq>
        <div className="flex justify-center items-center lg:w-2/5 lg:flex lg:flex-col lg:justify-end lg:items-start -mt-2 lg:mt-0">
          <div className="w-3/5 sm:w-3/5 md:w-3/5 lg:w-16xl lg:w-full">
            <Image
              className="w-full h-full lg:-ml-12"
              src={Gambar3}
              alt="Gambar3"
            />
          </div>
        </div>

        <div className="lg:w-3/5 pt-14 pb-14 flex flex-col justify-between">
          <div className="h-24 flex flex-col justify-between">
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left">
              FAQ
            </h1>
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-normal text-white text-center lg:text-left">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="h-24xl lg:h-96 sm:h-96 md:h-96 lg:h-80 flex flex-col justify-center">
            {faqData.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`cursor-pointer justify-center pt-3 pb-3 ${
                    i === 0 ? "border-b-2 border-t-2" : "border-b-2"
                  } border-white flex flex-col`}
                  onClick={() => handleClickAccordion(i)}
                  style={{
                    minHeight: 60,
                  }}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-sm sm:text-sm md:text-lg lg:text-md text-white">
                      {data.title}
                    </p>

                    <div className="pr-2 sm:pr-2 md:pr-2 lg:pr-5">
                      {accordionIndex === i ? (
                        <ArrowUpSVG className="w-6 h-6" />
                      ) : (
                        <ArrowSVG className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {accordionIndex === i && (
                    <div className="pt-2">
                      <p className="text-sm sm:text-sm md:text-lg lg:text-lg text-white font-normal font-gloria-hallelujah">
                        {data.decription}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="h-16 flex flex-col justify-between">
            <p className="text-lg sm:text-lg md:text-xl lg:text-xl font-normal text-white">
              Do you have any more questions?
            </p>
            <p className="text-lg sm:text-lg md:text-xl lg:text-xl font-normal text-white">
              Feel free to reach us out on{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => handleClickSosmed("discord")}
              >
                Discord
              </span>{" "}
              or{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => handleClickSosmed("twitter")}
              >
                Twitter!
              </span>{" "}
              {"<3"}
            </p>
          </div>
        </div>
      </SectionFaq>
    </Fragment>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  );
};

export default Home;

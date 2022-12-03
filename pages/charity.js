import { Fragment, useCallback, useState } from "react";
import Gambar10 from "../public/images/gambar10.jpg";
import Gambar11 from "../public/images/gambar11.jpg";
import Gambar12 from "../public/images/gambar12.png";
import Gambar13 from "../public/images/gambar13.jpg";
import Gambar14 from "../public/images/gambar14.png";
import Gambar15 from "../public/images/gambar15.jpg";
import Gambar16 from "../public/images/gambar16.png";
import Gambar17 from "../public/images/gambar17.png";
import Gambar18 from "../public/images/gambar18.jpg";
import Gambar19 from "../public/images/gambar19.jpg";
import Gambar20 from "../public/images/gambar20.jpg";
import Gambar21 from "../public/images/gambar21.jpg";
import Gambar22 from "../public/images/gambar22.jpg";
import Banner from "../public/images/banner-charity-desktop.png";
import BannerMobile from "../public/images/banner-charity-responsive.png";
import ArrowLeft from "../public/svg/arrow-purple-left.svg";
import ArrowRight from "../public/svg/arrow-purple-right.svg";
import { Head, Image } from "../components";
import { ApiGetDonationsLists } from "../api/donations";

const Charity = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [data, setData] = useState([
    {
      name: "AlglodieLoggy X Al Goanna collab auction, won by *Lux22Gott.algo* at 144A.",
      images1: Gambar18,
      images2: Gambar10,
    },
    {
      name: "Kiddie Glodie X Alex NFTs collab auction, won by *algoistheway.algo* at 300A.",
      images1: Gambar19,
      images2: Gambar12,
    },
    {
      name: "Kiddie Glodie X Graffe collab auction, won by *Lux22Gott.algo* at 530A.",
      images1: Gambar11,
      images2: Gambar13,
    },
    {
      name: "Kiddie Glodie X AoA collab auction, won by *Domes.algo* at 100A.",
      images1: Gambar20,
      images2: Gambar14,
    },
    {
      name: "Kiddie Glodie charity auction, won by *Iron.algo* at 180A.",
      images1: Gambar21,
      images2: Gambar15,
    },
    {
      name: "Kiddie Glodie charity auction, won by *Error404.algo* at 127A.",
      images1: Gambar11,
      images2: Gambar16,
    },
    {
      name: "Kiddie Glodie x YBG collab auction, won by *Adithimawan* at 182A.",
      images1: Gambar22,
      images2: Gambar17,
    },
  ]);

  const handleClickPrevious = useCallback(() => {
    const index = activeIndex - 1;
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [activeIndex]);

  const handleClickNext = useCallback(() => {
    const index = activeIndex + 1;
    if (index < props.dataDonations.length) {
      // if (index < data.length) {
      setActiveIndex(index);
    }
  }, [activeIndex, props.dataDonations]);

  return (
    <Fragment>
      <Head title="Glodie | Charity" urlLink={props.urlPath} />

      <section
        className="relative h-26xl sm:h-26xl md:h-42xl lg:h-30xl"
        style={{
          backgroundColor: "rgba(0,0,0, .3)",
        }}
      >
        <Image
          className="w-full h-full hidden lg:block"
          src={Banner}
          alt="Banner"
        />
        <Image
          className="w-full h-full lg:hidden"
          src={BannerMobile}
          alt="BannerMobile"
        />

        <div className="pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-26 flex items-center lg:w-2/4 h-16xl sm:h-16xl md:h-28xl lg:h-full absolute top-0">
          <div className="h-full w-full flex flex-col justify-between pt-10 pb-8 sm:pt-10 sm:pb-8 md:pt-24 md:pb-24 lg:pt-24 lg:pb-24 xl:pt-24 xl:pb-24">
            <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl text-white font-dynapuff font-bold">
              Glodie Charity
            </h1>

            <p className="leading-5 text-sm sm:text-sm md:text-3xl lg:text-2xl text-white font-dynapuff font-regular">
              One of our goal is to be able to help and contribute to good cause
              and giving back to the community.
            </p>

            <p className="leading-5 text-sm sm:text-sm md:text-3xl lg:text-2xl text-white font-dynapuff font-regular">
              Here are some of our past donations, we also hope to continue to
              do so in the long run.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="h-28xl sm:h-28xl md:h-34xl lg:h-34xl xl:h-34xl flex justify-between items-center">
        <div className="h-full w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 flex flex-col justify-between pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-16 pt-10 pb-10 sm:pt-10 sm:pb-10 md:pt-20 md:pb-20 lg:pt-20 lg:pb-20 xl:pt-20 xl:pb-20">
          <h1 className="text-xl sm:text-xl md:text-md lg:text-lg xl:text-5xl font-bold text-pink1 text-center sm:text-center md:text-left lg:text-center xl:text-left">
            Save the Children Indonesia
          </h1>

          <p className="text-xl sm:text-xl md:text-md lg:text-lg xl:text-2xl font-regular font-indie-flower text-pink1 text-center sm:text-center md:text-left lg:text-center xl:text-left">
            Save the Children Indonesia is part of the Save the Children global
            movement in over 118 countries. They’ve been operating in Indonesia
            since 1976, focusing on advocating children rights, helping them
            with their needs and creating a safe environment for children to
            grow, learn and play.
          </p>

          <div className="text-center sm:text-center md:text-left lg:text-center xl:text-left">
            <button className="text-xl sm:text-xl md:text-md lg:text-lg xl:text-xl w-40 h-12 sm:w-40 sm:h-12 md:w-40 md:h-12 lg:w-40 lg:h-12 xl:w-40 xl:h-12 font-bold shadow-md bg-pink1 text-white rounded-3xl">
              More Info
            </button>
          </div>
        </div>

        <div className="hidden sm:hidden md:block lg:hidden xl:block w-6/12 h-full pt-10 pb-10 sm:pt-10 sm:pb-10 md:pt-14 md:pb-14 lg:pt-14 lg:pb-14 xl:pt-14 xl:pb-14 xl:pl-16">
          <Image src={Gambar9} alt="Gambar9" className="w-full h-full" />
        </div>
      </section> */}

      <section className="h-full pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-40 flex flex-col justify-between items-center bg-white2 pt-14 pb-14">
        <div>
          <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-5xl text-center sm:text-center md:text-center lg:text-left text-white font-dynapuff font-bold text-purple1">
            Past Donations
          </h1>
        </div>

        <div className="w-full h-full flex flex-col justify-between items-center mt-8">
          <div className="flex flex-wrap justify-center lg:justify-start">
            {props.dataDonations.lenght > 0 &&
              props.dataDonations[activeIndex].title
                .split(" ")
                .map((text, i) => (
                  // {data[activeIndex].name.split(" ").map((text, i) => (
                  <h2
                    key={i}
                    className={`text-base sm:text-base md:text-3xl lg:text-2xl font-dynapuff text-purple1 mr-1.5 ${
                      /[*]/.test(text) ? "font-bold" : "font-regular"
                    }`}
                  >
                    {text.replace(/[*]/g, "")}{" "}
                  </h2>
                ))}
          </div>

          {props.dataDonations.lenght > 0 && (
            <div className="w-full flex justify-between items-center mt-6 mb-6">
              <button onClick={handleClickPrevious}>
                <ArrowLeft className="h-8 w-8 sm:h-8 sm:w-8 md:h-24 md:w-24 xl:h-10 xl:w-10" />
              </button>
              <div
                className="h-26xl md:h-56xl lg:h-full w-5/6 justify-between flex flex-col-reverse lg:flex-row pl-5 pr-5 md:pl-10 md:pr-10 lg:pl-0 lg:pr-0"
                // style={{ backgroundColor: "red" }}
              >
                {/* <div className="mr-3 ml-3 xl:mr-8 w-full sm:w-full"> */}
                <div>
                  <Image
                    src={props.dataDonations[activeIndex].sertificateImagePath}
                    // src={data[activeIndex].images1}
                    alt="images"
                    className="lg:h-20xl"
                    width={500}
                    height={500}
                  />
                </div>

                {/* <div className="hidden sm:hidden xl:block"> */}
                <div>
                  <Image
                    src={props.dataDonations[activeIndex].glodieImagePath}
                    // src={data[activeIndex].images2}
                    alt="images"
                    className="w-full h-full md:w-full md:h-30xl lg:w-20xl lg:h-20xl"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <button onClick={handleClickNext}>
                <ArrowRight className="h-8 w-8 sm:h-8 sm:w-8 md:h-24 md:w-24 xl:h-10 xl:w-10" />
              </button>
            </div>
          )}

          <div
            className="flex justify-center items-center"
            // className="w-10xl md:w-14xl lg:w-10xl flex justify-center items-center"
          >
            {props.dataDonations.lenght > 0 &&
              props.dataDonations.map((_, i) => {
                // {data.map((_, i) => {
                return (
                  <div
                    key={i}
                    className={`rounded-full bg-purple1
                    ${
                      activeIndex === i
                        ? "opacity-100 w-5 h-5 md:w-7 md:h-7 lg:w-5 lg:h-5"
                        : "opacity-50 w-3 h-3 md:w-4 md:h-4 lg:w-3 lg:h-3"
                    }
                    ${props.dataDonations.length - 1 === i ? "mr-0" : "mr-2"}
                  `}
                  />
                );
              })}
          </div>
        </div>
      </section>
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

export async function getServerSideProps(context) {
  const response = await ApiGetDonationsLists();
  let dataDonations = [];
  if (response?.status === 200) {
    dataDonations = response.result.data;
  }
  return {
    props: { urlPath: context.resolvedUrl, dataDonations },
  };
}

export default Charity;

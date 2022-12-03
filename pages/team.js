import React, { Fragment, useState, useEffect } from "react";
import Gambar7 from "../public/images/gambar7.png";
import Gambar8 from "../public/images/gambar8.png";
import TwitterSvg from "../public/svg/twitter-red.svg";
import LinkedinSvg from "../public/svg/linkedin.svg";
import { Head, Image } from "../components";
import { ApiGetTeamsLists } from "../api/teams";

const Team = () => {
  const [dataTeams, setDataTeams] = useState([]);
  // const data = [
  //   {
  //     name: "Sintrongk",
  //     title: "Artist",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at rutrum quam, sagittis malesuada mauris. Cras interdum orci vel quam pulvinar,",
  //     image: Gambar2,
  //   },
  //   {
  //     name: "Rainbowpee_",
  //     title: "Artist",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at rutrum quam, sagittis malesuada mauris. Cras interdum orci vel quam pulvinar,",
  //     image: Gambar5,
  //   },
  //   {
  //     name: "Lux22G",
  //     title: "Project Manager",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at rutrum quam, sagittis malesuada mauris. Cras interdum orci vel quam pulvinar,",
  //     image: Gambar6,
  //   },
  //   {
  //     name: "DeleNFTs",
  //     title: "Community Manger",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at rutrum quam, sagittis malesuada mauris. Cras interdum orci vel quam pulvinar,",
  //     image: Gambar4,
  //   },
  // ];
  useEffect(() => {
    const FetchData = async () => {
      const response = await ApiGetTeamsLists();
      if (response?.status === 200) {
        setDataTeams(response.result.data);
      }
    };
    FetchData();
  }, []);
  return (
    <Fragment>
      <Head title="Glodie | Team" urlLink="/team" />

      <section className="h-26xl md:h-40xl lg:h-80 bg-black1 pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-40 flex flex-col justify-between pt-10 lg:pt-0 lg:flex lg:flex-row lg:justify-between lg:items-center">
        <div className="h-8xl sm:h-8xl md:h-8xl lg:h-44 lg:w-2/5 flex flex-col justify-between">
          <h1 className="text-orange1 text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-dynapuff text-center sm:text-center md:text-center lg:text-left">
            Team
          </h1>

          <p className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-regular text-white lg:text-left font-dynapuff opacity-90 text-center sm:text-center md:text-center lg:text-left">
            Teamwork makes the dream work {` ;)`}
          </p>
        </div>

        <div className="lg:w-3/5 flex justify-end">
          <div className="h-full flex flex-col justify-end">
            <Image className="lg:w-80 lg:h-80" src={Gambar7} alt="Gambar7" />
          </div>

          <div className="h-full flex flex-col justify-end">
            <Image className="lg:w-80 lg:h-80" src={Gambar8} alt="Gambar8" />
          </div>
        </div>
      </section>

      <section className="min-h-1xl pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-40 pt-10 pb-10">
        {dataTeams.map((d, i) => {
          return (
            <div
              className={`flex ${
                dataTeams.length - 1 === i ? "" : "mb-10"
              }`}
              key={i}
              // style={{ backgroundColor: "red" }}
            >
              <div className="w-12xl md:w-16xl lg:w-1/5 lg:h-1/5">
                <Image
                  src={d.pathPhoto}
                  alt="image"
                  width={1000}
                  height={1000}
                  className="rounded-full"
                />
              </div>

              <div className="w-4/5 h lg:pt-6 lg:pb-6 pl-3 lg:pl-8 flex flex-col justify-between">
                <h1 className="text-pink1 text-md md:text-2xl lg:text-3xl font-medium mb-1 opacity-50">
                  {d.title}
                </h1>
                <div className="flex items-center mb-3">
                  <h1 className="text-purple1 text-xl md:text-4xl lg:text-4xl font-bold mr-2 lg:pr-5">
                    {d.name}
                  </h1>

                  {d.twitterLink !== "" && (
                    <button
                      onClick={() => {
                        window.open(d.twitterLink);
                      }}
                    >
                      <TwitterSvg className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11" />
                    </button>
                  )}

                  {d.linkedinLink !== "" && (
                    <button
                      onClick={() => {
                        window.open(d.linkedinLink);
                      }}
                    >
                      <LinkedinSvg className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11" />
                    </button>
                  )}
                </div>
                <p className="text-purple1 opacity-80 font-gloria-hallelujah text-md md:text-xl lg:text-2xl">
                  {d.description}
                </p>
              </div>
            </div>
          );
        })}
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

// export async function getServerSideProps(context) {
//   const response = await ApiGetTeamsLists();
//   let dataTeams = [];
//   if (response?.status === 200) {
//     dataTeams = response.result.data;
//   }
//   return {
//     props: { urlPath: context.resolvedUrl, dataTeams },
//   };
// }

export default Team;

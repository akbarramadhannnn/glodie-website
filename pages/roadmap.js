import React, { Fragment, useCallback, useState } from "react";
import Gambar22 from "../public/images/gambar23.png";
import Gambar23 from "../public/images/gambar24.png";
import Gambar24 from "../public/images/gambar25.png";
import GambarKecil41 from "../public/images/kecil_41.png";
import GambarKecil38 from "../public/images/kecil_38.png";
import GambarKiddieKing from "../public/images/kiddie_king.png";
import SeeSvg from "../public/svg/see.svg";
import CloseSvg from "../public/svg/x.svg";
import { Head, Image } from "../components";

const Roadmap = (props) => {
  const dataRoadmap = [
    {
      name: "Phase 1",
      image: Gambar22,
      listDescription: [
        "Launch 100 AlglodieLoggy (total supply 150)",
        "Building the Glodie Army on Twitter and Discord",
        "Collabs with other projects",
        "Holders giveaways",
        "Donate to charity",
      ],
    },
    {
      name: "Phase 2",
      image: Gambar23,
      listDescription: [
        "Launch Kiddie Glodie (total supply 150)",
        "Auctions & Weekly shuffle",
        "Collabs with other projects",
        "Glodie Friday annual events for holders (giveaways and Twitter invasion)",
        "Increasing value and moving secondary sales",
        "Launch roadmap and benefits",
        "Donate to charity",
        "Launch community wallet (10% of primary sales)",
        "Support other projects by collecting NFTs for our Glodie vault",
      ],
    },
    {
      name: "Phase 3",
      image: Gambar24,
      listDescription: [
        "Launch website",
        "Donate to charity",
        "End of Gene 1 variants",
        "Staking",
      ],
    },
  ];

  const dataBenefits = [
    {
      name: "Glodie Army",
      image: GambarKecil41,
      listDescription: [
        "Full commercial rights to any Glodies or Kiddies you own",
        "Access to Glodie Army private chat on Discord",
        "Access to join surprise and weekly holders giveaways",
        "Discounted price on Glodie or Kiddie shuffle",
        "Access to vote on projects to be added to Glodie vault",
      ],
    },
    {
      name: "Glodie OG",
      image: GambarKecil38,
      listDescription: [
        "All of Glodie Army’s benefits, plus…",
        "Access to Glodie OG private chat on Discord",
        "Early sneak peeks on new releases and collabs",
        "Access to Glodie OG special giveaways",
        "Access to get a piece of Vellas Universe at discounted price",
        "Early access to Gene 2",
      ],
    },
    {
      name: "Glodie Ifrit",
      image: GambarKiddieKing,
      listDescription: [
        "All of Glodie OG’s benefits, plus…",
        "Access to Glodie Ifrit private chat on Discord",
        "Voice in decision-making related to the projects",
        "Free custom Kiddie Glodie",
        "Free Vellas Universe piece",
        "Free and early access to Gene 2",
      ],
    },
  ];

  const [detailDataRoadMap, setDetailDataRoadMap] = useState({
    isOpen: false,
    data: {},
  });

  const [detailDataBenefits, setDetailDataBenefits] = useState({
    isOpen: false,
    data: {},
  });

  const handleClickDetailRoadMap = useCallback(
    (index) => {
      const data = dataRoadmap.find((_, i) => i === index);
      setDetailDataRoadMap((oldState) => ({
        ...oldState,
        isOpen: true,
        data: data,
      }));
    },
    [dataRoadmap]
  );

  const handleCloseDetailRoadMap = useCallback(() => {
    setDetailDataRoadMap((oldState) => ({
      ...oldState,
      isOpen: false,
      data: {},
    }));
  }, []);

  const handleClickDetailBenefits = useCallback(
    (index) => {
      const data = dataBenefits.find((_, i) => i === index);
      setDetailDataBenefits((oldState) => ({
        ...oldState,
        isOpen: true,
        data: data,
      }));
    },
    [dataBenefits]
  );

  const handleCloseDetailBenefits = useCallback(() => {
    setDetailDataBenefits((oldState) => ({
      ...oldState,
      isOpen: false,
      data: {},
    }));
  }, []);

  return (
    <Fragment>
      <Head title="Glodie | Roadmap" urlLink={props.urlPath} />

      <section className="h-12xl lg:h-64 bg-purple1 pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-40 flex flex-col justify-between items-center pt-12 pb-12 lg:pt-20 lg:pb-20">
        <h1 className="text-4xl lg:text-5xl font-bold text-white">RNB</h1>
        <h1 className="text-3xl lg:text-4xl font-bold text-white">
          Roadmap {`n'`} benefits
        </h1>
      </section>

      {/* <section className="h-42xl bg-pink1 pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-40 flex flex-col justify-between items-center pt-14 pb-14"> */}
      <section className="bg-pink1 pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-40 pt-14 pb-14">
        <div className="flex flex-col justify-between items-center h-24 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Roadmap</h1>
          <p className="text-xl text-white">
            (Click to see more details)
          </p>
        </div>

        <div className="w-full flex flex-col jutify-end">
          <div
            className={`w-full h-full ${
              !detailDataRoadMap.isOpen ? "lg:grid lg:grid-cols-3 lg:gap-8" : ""
            }`}
          >
            {!detailDataRoadMap.isOpen &&
              dataRoadmap.map((d, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      dataBenefits.length - 1 === i
                        ? "mb-0 sm:mb-0 md:mb-0"
                        : "mb-8 sm:mb-8 md:mb-8"
                    } lg:mb-0 rounded-xl bg-white p-8 h-96 flex flex-col justify-between`}
                    style={{
                      boxShadow: "0px 10px 20px #00000029",
                    }}
                  >
                    <div className="flex justify-between">
                      <div className="w-48 lg:w-36">
                        <h1 className="text-3xl lg:text-4xl font-bold text-purple1">
                          {d.name}
                        </h1>
                      </div>

                      <div>
                        <button onClick={() => handleClickDetailRoadMap(i)}>
                          <SeeSvg
                            className="w-10 h-10 lg:h-12 lg:w-12"
                            style={{
                              marginTop: -12,
                            }}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="w-52 h-52">
                      <Image
                        className="w-full h-full"
                        src={d.image}
                        alt="image"
                      />
                    </div>
                  </div>
                );
              })}

            {detailDataRoadMap.isOpen && (
              <div
                className="rounded-xl bg-white p-7 w-full flex flex-col-reverse lg:flex lg:justify-between lg:flex-row"
                style={{
                  boxShadow: "0px 10px 20px #00000029",
                }}
              >
                <div className="lg:w-1/3 h-full">
                  <Image
                    className="w-16xl h-full"
                    src={detailDataRoadMap.data.image}
                    alt="image"
                  />
                </div>

                <div className="w-full h-full flex justify-between">
                  <div>
                    <div>
                      <h1 className="text-4xl font-bold text-purple1">
                        {detailDataRoadMap.data.name}
                      </h1>
                    </div>

                    <div className="mt-6">
                      <ul>
                        {detailDataRoadMap.data.listDescription.map(
                          (text, i) => {
                            return (
                              <li
                                key={i}
                                className={`text-purple1 text-lg lg:text-2xl font-gloria-hallelujah opacity-90 mb-3 list-disc ml-7`}
                              >
                                {text}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>

                  <div
                    className="w-1/5 h-full flex justify-end items-start"
                    // style={{
                    //   backgroundColor: "blue",
                    // }}
                  >
                    <button onClick={handleCloseDetailRoadMap}>
                      <CloseSvg className="w-8 h-8" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* <section className="h-42xl pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-40 flex flex-col justify-between items-center pt-14 pb-14"> */}
      <section className="pl-5 pr-5 lg:pl-16 lg:pr-16 xl:pl-40 xl:pr-40 pt-14 pb-14 bg-white2">
        <div className="flex flex-col justify-between items-center h-24 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-purple1">
            Benefits
          </h1>
          <p className="text-xl text-purple1">
            (Click to see more details)
          </p>
        </div>

        <div className="w-full flex flex-col jutify-end">
          <div
            className={`w-full h-full ${
              !detailDataBenefits.isOpen
                ? "lg:grid lg:grid-cols-3 lg:gap-8"
                : ""
            }`}
          >
            {!detailDataBenefits.isOpen &&
              dataBenefits.map((d, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      dataBenefits.length - 1 === i
                        ? "mb-0 sm:mb-0 md:mb-0"
                        : "mb-8 sm:mb-8 md:mb-8"
                    } lg:mb-0 rounded-xl bg-white p-8 h-96 flex flex-col justify-between`}
                    style={{
                      boxShadow: "0px 10px 20px #00000029",
                    }}
                  >
                    <div className="flex justify-between">
                      <div className="w-48 lg:w-36">
                        <h1 className="text-3xl lg:text-4xl font-bold text-purple1">
                          {d.name}
                        </h1>
                      </div>

                      <div>
                        <button onClick={() => handleClickDetailBenefits(i)}>
                          <SeeSvg
                            className="w-10 h-10 lg:h-12 lg:w-12"
                            style={{
                              marginTop: -12,
                            }}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="w-52 h-52">
                      <Image
                        className="w-full h-full"
                        src={d.image}
                        alt="image"
                      />
                    </div>
                  </div>
                );
              })}

            {detailDataBenefits.isOpen && (
              <div
                className="rounded-xl bg-white p-7 w-full flex flex-col-reverse lg:flex lg:justify-between lg:flex-row"
                style={{
                  boxShadow: "0px 10px 20px #00000029",
                }}
              >
                <div className="lg:w-1/3 h-full">
                  <Image
                    className="w-16xl h-full"
                    src={detailDataBenefits.data.image}
                    alt="image"
                  />
                </div>

                <div className="w-full h-full flex justify-between">
                  <div>
                    <div>
                      <h1 className="text-4xl font-bold text-purple1">
                        {detailDataBenefits.data.name}
                      </h1>
                    </div>

                    <div className="mt-6">
                      <ul>
                        {detailDataBenefits.data.listDescription.map(
                          (text, i) => {
                            return (
                              <li
                                key={i}
                                className={`text-purple1 text-lg lg:text-2xl font-gloria-hallelujah opacity-90 mb-3 list-disc ml-7`}
                              >
                                {text}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>

                  <div
                    className="w-1/5 h-full flex justify-end items-start"
                    // style={{
                    //   backgroundColor: "blue",
                    // }}
                  >
                    <button onClick={handleCloseDetailBenefits}>
                      <CloseSvg className="w-8 h-8" />
                    </button>
                  </div>
                </div>
              </div>
            )}
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
  return {
    props: { urlPath: context.resolvedUrl },
  };
}

export default Roadmap;

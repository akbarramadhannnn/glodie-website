import React from "react";
import Head from "next/head";
import ConfigEnv from "../../config/env";

const MetaHead = ({
  title = "",
  deskripsi = "",
  urlLink = "",
  imageContent,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={deskripsi} />
      <link
        rel="canonical"
        href={`${ConfigEnv.baseUrlDomain}${urlLink}`}
      ></link>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={deskripsi} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${ConfigEnv.baseUrlDomain}${urlLink}`}
      />
      <meta property="og:site_name" content="glodie" />

      {/* {
                pathname === '/' && (
                    <Fragment>
                        <meta property="og:image" content='/static/assets/image/Aksatara4.png'  />
                        <meta property="og:image:secure_url" content='/static/assets/image/Aksatara4.png'  />
                        <meta property="og:image:type" content="image/jpeg/jpg/png" />
                    </Fragment>
                )
            }

            {
                pathname === '/wisata' && (
                    <Fragment>
                        <meta property="og:image" content='/static/assets/image/background-tes.png'  />
                        <meta property="og:image:secure_url" content='/static/assets/image/background-tes.png'  />
                        <meta property="og:image:type" content="image/jpeg/jpg/png" />
                    </Fragment>
                )
            }

            {
                pathname === '/wisata/[provinsi]/[kabupaten]/[kategori]/[destinasi]' && (
                    <Fragment>
                        <meta property="og:image" content={`${API}/wisata/background/${imageContent}`}  />
                        <meta property="og:image:secure_url" content={`${API}/wisata/background/${imageContent}`}  />
                        <meta property="og:image:type" content="image/jpeg/jpg/png" />
                    </Fragment>
                )
            }

            {
                pathname === '/provinsi' && (
                    <Fragment>
                        <meta property="og:image" content='/static/assets/image/background-tes.png'  />
                        <meta property="og:image:secure_url" content='/static/assets/image/background-tes.png'  />
                        <meta property="og:image:type" content="image/jpeg/jpg/png" />
                    </Fragment>
                )
            } */}

      {/* {
                pathname === '/provinsi/[slugProvinsi]' && (
                    <Fragment>
                        <meta property="og:image" content={`${API}/wisata/background/${blog.slug}`}  />
                        <meta property="og:image:secure_url" content={`${API}/wisata/background/${blog.slug}`}  />
                        <meta property="og:image:type" content="image/jpeg/jpg/png" />
                    </Fragment>
                )
            } */}
    </Head>
  );
};

export default MetaHead;

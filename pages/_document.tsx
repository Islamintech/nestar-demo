import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT - Pages Router")
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo"/>
        <meta name="robots" content="index, follow"/>
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg"/>
        {/* {Search Engine Optimazation} */}
        <meta name="keyword" content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"}/>
        <meta name="description" content={"Buy and sell properties anywhere anytime in South Korea. |" + "한국 부동산, 언제 어디서나 스마트하게." + "Недвижимость в Корее. В любое время. В любом месте."}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

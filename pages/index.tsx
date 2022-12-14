import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="pl-4 pt-4 grid h-screen place-items-center">
      <Head>
        <title>Typing Practice WebApp</title>
        <meta name="description" content="Practice To Type More Fastly And Accurately" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center">
        <Link href="/typing"><a className="text-3xl hover:text-blue-600">Practice Typing</a></Link>
        <p className="text-sm mt-1">Developed By Rao Zaeem</p>
        <a className="text-sm hover:text-blue-600" href="https://github.com/raozaeemshahid/typing-practice-webapp">Source Code</a>
      </div>
    </div>
  );
};

export default Home;

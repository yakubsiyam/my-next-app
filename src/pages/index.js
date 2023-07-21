import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Js Home Page</title>
        <meta name="Home Page" description="Made ny nextjs"></meta>
      </Head>
      <h1 style={{ color: "#000" }}>This is Nextjs home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

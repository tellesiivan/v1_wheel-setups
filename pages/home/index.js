import Head from "next/head";
import FeedLayout from "../../components/feed/FeedLayout";

export default function FeedPage() {
  return (
    <>
      <Head>
        <title>Feed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeedLayout />
    </>
  );
}

import Landing from "../components/Landing"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='user-scalable=no, width=480' />
      </Head>
      <Landing />
    </>
  )
}

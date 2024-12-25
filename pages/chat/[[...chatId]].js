import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>New Chat</title>
      </Head>

      <div className="grid h-screen grid-cols-[260px_1fr]">
        <div>SideBar</div>
        <div className="flex flex-col bg-gray-400">
          <div className="flex-1">Chat Window</div>
          <footer className="bg-gray-800 p-10">footer</footer>
        </div>
      </div>
    </>
  );
}

import { ChatSideBar } from "components/ChatSideBar";
import Head from "next/head";

export default function ChatPage() {
  return (
    <>
      <Head>
        <title>New Chat</title>
      </Head>

      <div className="grid h-screen grid-cols-[260px_1fr]">
        <ChatSideBar />
        <div className="flex flex-col bg-gray-400">
          <div className="flex-1">Chat Window</div>
          <footer className="bg-gray-800 p-10">
            <form>
              <fieldset className="flex gap-2">
                <textarea
                  placeholder="Send a message"
                  className="w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:border-emerald-500 focus:bg-gray-600 focus:outline focus:outline-emerald-500"
                />
                <button className="btn" type="submit">
                  Send
                </button>
              </fieldset>
            </form>
          </footer>
        </div>
      </div>
    </>
  );
}

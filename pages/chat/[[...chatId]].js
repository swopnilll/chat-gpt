import { ChatSideBar } from "components/ChatSideBar";
import Head from "next/head";
import { streamReader } from "openai-edge-stream";
import { useState } from "react";

export default function ChatPage() {
  const [messageState, setMessageState] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(`message text ${messageState}`);

    let response;

    try {
      response = await fetch(`/api/chats/sendMessage`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ message: messageState }),
      });
    } catch (error) {
      console.log("error");
      console.log(error);
    }

    console.log("Received response from server:", response);

    const data = response.body;

    console.log({ data });

    if (!data) {
      console.log("No data received from the stream.");
      return;
    }

    const reader = data.getReader();

    await streamReader(reader, (message) => {
      console.log(`Message = ` + message);
    });
  };

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
            <form onSubmit={handleSubmit}>
              <fieldset className="flex gap-2">
                <textarea
                  value={messageState}
                  onChange={(event) => setMessageState(event.target.value)}
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

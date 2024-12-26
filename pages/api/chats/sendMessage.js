import { OpenAIEdgeStream } from "openai-edge-stream";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  console.log("Request received at /api/chats/sendMessage");
  try {
    const { message } = await req.json();

    console.log("Received message:", message);

    console.log("Sending request to OpenAI...");

    const stream = await OpenAIEdgeStream(
      "https://api.openai.com/v1/chat/completions",
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.OpenAIEdgeStream}`,
        },
        method: "POST",
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ content: message, role: "user" }],
          stream: true,
        }),
      }
    );

    console.log("Received response from server:", response);

    console.log("Stream received from OpenAI.");

    console.log(stream);

    return new Response(stream);
  } catch (error) {
    console.log(error);
  }
}

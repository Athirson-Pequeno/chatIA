import { GoogleGenAI } from "@google/genai";
import type { Chat } from "@google/genai";

// Inicializa cliente Uma única vez
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_API_KEY,
});

/**
 * Cria um chat stateful com o prompt de sistema que você passar.
 */
export async function createAgentChat(systemPrompt: string): Promise<Chat> {
  const chat = await ai.chats.create({
    model: "gemini-2.0-flash",
    history: [
      {
        role: "user",
        parts: [{ text: systemPrompt }],
      },
    ],
  });
  return chat;
}

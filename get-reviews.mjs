import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

async function getReviews() {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: "Find 3-5 real Google reviews for the business 'Lakewood Garage Door Repair Experts' in Lakewood, CA. Return them as a JSON array of objects with properties: name, text, rating (number), and date.",
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json",
    },
  });
  console.log(response.text);
}

getReviews();

import { GoogleGenAI, Type } from "@google/genai";
import { Article } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const translateArticles = async (
  articles: Article[],
  targetLanguage: string
): Promise<Article[]> => {
  if (!apiKey) {
    console.error("API Key missing");
    return articles;
  }

  // We optimize by sending a simplified version of the articles to save tokens, 
  // then merge back, or send the whole thing if it's small enough. 
  // For this demo, sending the whole object is fine as the content is relatively short.

  const prompt = `
    You are a professional translator for a high-end news publication.
    Translate the following JSON array of news articles into ${targetLanguage}.
    
    IMPORTANT GUIDELINES:
    1. Translate headline, subheadline, location, imageCaption, and content arrays.
    2. DO NOT translate the 'id', 'imageUrl', 'videoUrl', 'author' (unless it's a generic title like 'Team'), 'date', or 'category' (keep category in English for routing, or map it if display only). Actually, translate 'category' for display purposes.
    3. Maintain the exact JSON structure.
    4. Ensure the tone remains formal, journalistic, and objective (New York Times style).
    5. For the phone number +13162946313, keep it exactly as is.
    6. For 'Meridian Post', keep it as 'Meridian Post'.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: JSON.stringify(articles) + "\n\n" + prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              headline: { type: Type.STRING },
              subheadline: { type: Type.STRING },
              author: { type: Type.STRING },
              date: { type: Type.STRING },
              location: { type: Type.STRING },
              category: { type: Type.STRING },
              imageUrl: { type: Type.STRING },
              imageCaption: { type: Type.STRING },
              content: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              isBreaking: { type: Type.BOOLEAN, nullable: true },
              videoUrl: { type: Type.STRING, nullable: true }
            },
            required: ["id", "headline", "subheadline", "content", "location"]
          }
        }
      }
    });

    if (response.text) {
      const translatedArticles = JSON.parse(response.text) as Article[];
      // Merge back strictly to ensure safety, though Schema enforces it.
      return translatedArticles;
    }
    
    throw new Error("No response text");
  } catch (error) {
    console.error("Translation error:", error);
    throw error;
  }
};
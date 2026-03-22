
import { GoogleGenAI } from "@google/genai";

export const generateRomanticMessage = async (keywords: string): Promise<string> => {
  // Always initialize with apiKey from process.env.API_KEY directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a very romantic, short, and poetic love letter for Propose Day based on these keywords: ${keywords}. 
      CRITICAL INSTRUCTIONS: 
      1. Do NOT use any Markdown formatting.
      2. Do NOT use asterisks (**) for bolding or any other symbols.
      3. Use only plain, beautiful text.
      4. Make it emotional and heartfelt for Jasmine.
      5. Keep it under 120 words.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });

    // Accessing text property directly as it is not a method
    return (response.text || "").replace(/\*\*/g, '');
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "My love for you grows more every day, Jasmine. Words can't describe how much you mean to me. Will you stay by my side forever?";
  }
};

import { GoogleGenAI } from "@google/genai";

const api = async (promt) => {

    const ai = new GoogleGenAI({ apiKey: "AIzaSyBS6y_IM_eC73rYkfNAXVmOHMCCNEVbq6Q" });

        const response = await ai.models.generateContent({
            model: "models/gemini-2.0-flash",
            contents: promt,})
        console.log(response.text);
        return response.text
}

export default api
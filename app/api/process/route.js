import { NextRequest, NextResponse } from "next/server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { processFile } from "@/utils/fileProcessor";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import mdTojson from "@/utils/mdTojson";


dotenv.config();
const gemini_api_key = process.env.API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiConfig = {
  temperature: 0.4,
  topP: 1,
  topK: 32,
  maxOutputTokens: 8096,
};

const geminiModel = googleAI.getGenerativeModel({
  // model: 'gemini-1.5-flash',
  model: "gemini-1.5-pro-latest",
  geminiConfig,
});


const fileManager = new GoogleAIFileManager(process.env.API_KEY);


export const POST = async (req) => {

  try {

    let formData;

    try {
      formData = await req.formData();
      // console.log(formData);

    } catch (e) {
      console.log(e);
      return NextResponse.json(
        { error: "Invalid Request" },
        { status: 400 }
      );
    }


    // Get all files from the form data
    const files = formData.getAll("files");

    // console.log(files);
    if (files.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }

    const fileDataArray = [];

    for (const file of files) {

      const fileBuffer = Buffer.from(await file.arrayBuffer());

      // console.log(fileBuffer);

      // console.log(file);

      const fileData = await processFile(fileBuffer, file.type);

      // console.log(fileData);
      fileDataArray.push(fileData);
    }

    // console.log(fileDataArray);

    // console.log("File data array:", fileDataArray);


    const promptConfig = [
      {
        text: `
                  You are an advanced AI data extractor. Extract structured data from this file.
        Required output format (strict JSON):
        {
          "invoices": [
            {
              "serialNumber": string,
              "customerName": string,
              "productName": string,
              "quantity": number,
              "tax": number,
              "totalAmount": number,
              "date": string
            }
          ],
          "products": [
            {
              "name": string,
              "quantity": number,
              "unitPrice": number,
              "tax": number,
              "priceWithTax": number
            }
          ],
          "customers": [
            {
              "name": string,
              "phoneNumber": string,
              "totalPurchaseAmount": number
            }
          ]
        }
        
        If any required field is missing, use null or leave it empty.
                
                ` },
      ...fileDataArray.map((fileData) => ({
        inlineData: {
          mimeType: fileData.mimeType,
          data: fileData.data,
        },
      })),
    ];



    const model = await geminiModel.generateContent({
      contents: [{ role: 'user', parts: promptConfig }],
    });

    // console.log(result.response.text());

    const response = await model.response;

    if (response.error) {
      console.error('Error:', response.error);
    }

    let result = response.text()

    result = mdTojson(result);

    // console.log(response.candidates[0].text);


    return NextResponse.json({ "status": 200, result });
  }
  catch (error) {

    console.log(error);
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
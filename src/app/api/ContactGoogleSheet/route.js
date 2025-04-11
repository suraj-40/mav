import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
    const body = await req.json();
    const {
        firstName,
        lastName,
        phone,
        query,
        message
    } = body;

    try {
       
        const endpoint ="https://script.google.com/macros/s/AKfycbxKA79JfB1LIGBmPOqZ5Przk6L8VaC-OqiGAOUYTEk9Vw8BcuNxe_gWrnIOAUf9CBWY/exec"
             
       const response =await axios.post(endpoint, {
            firstName,
            lastName,
            phone,
            query,
            message
       }) 
     console.log(response.data);
       
           return NextResponse.json({ message: "google sheets updated" }, { status: 200 });
        
       } catch (error) {
           console.log("Error:", error);
           
           return NextResponse.json({ message: "google sheets not updated" }, { status: 400 });
       }
   

}
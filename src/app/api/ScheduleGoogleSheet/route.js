import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    const {
      childName,
      parentEmail,
      fatherName,
      fatherContact,
      motherName,
      motherContact,
      dateOfBirth,
      nationality,
      branch,
      admissionClass,
      gender,
      lastSchool,     
      acceptPolicy,
      date,
    } = body;

  

    try {
       
     const endpoint ="https://script.google.com/macros/s/AKfycbxOUp9zU1XrfXObYvA1JMzzIjPpeLgP6nOlRCuL0A_sQe90RYrtEBpEYpI6E-gUf463/exec"
          
    // const response =await axios.post(endpoint, {
    //     childName,
    //     parentEmail,
    //     fatherName,
    //     fatherContact,
    //     motherName,
    //     motherContact,
    //     dateOfBirth,
    //     nationality,
    //     branch,
    //     admissionClass,
    //     gender,
    //     lastSchool,
    //     date
    // }) 

    await axios.post(endpoint, {...body}) ;    
        return NextResponse.json({ message: "google sheets updated" }, { status: 200 });
     
    } catch (error) {
        console.log("Error:", error);
        
        return NextResponse.json({ message: "google sheets not updated" }, { status: 400 });
    }

}






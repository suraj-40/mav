import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    const {
      childName,
      parentEmail,
      parentContact,
      branch,
      gender,
      lastSchool,
      admissionClass,
      acceptPolicy,
      date,
    } = body;
  

    try {
       
     const endpoint ="https://script.google.com/macros/s/AKfycbzEP9zroD_r5-NgeFmh9K60Nq-0hifegCjxkrhTijDRH3G82tDONDmVOnuFuRTtQhs/exec"
          
    const response =await axios.post(endpoint, {
        childName,
        parentEmail,
        parentContact,
        branch,
        gender,
        lastSchool,
        admissionClass,
        date
    }) 

    
        return NextResponse.json({ message: "google sheets updated" }, { status: 200 });
     
    } catch (error) {
        console.log("Error:", error);
        
        return NextResponse.json({ message: "google sheets not updated" }, { status: 400 });
    }

}






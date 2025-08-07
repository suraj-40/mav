import axios from 'axios';

export async function POST(req) {
    // WhatsApp functionality commented out due to expired plan
    // Only email functionality will be used
    
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
        selectedTime,
    } = body;
    
    // Commented out WhatsApp message logic
    /*
    const parentName1=fatherName+" and "+motherName;
    const parentName2=motherName+" and "+fatherName;
    const dateTime=date+" at "+selectedTime.slice(0, 8);
    let phone,address,youtube,brochure;

    if (branch === "AV Ullal") {
        phone = "7760776098 | 7760776046";
        address = "#170/3, 6th block, Sir M. Vishweshwaraiah Layout, Ullal Ring road, Bengaluru-560110";
        youtube = "https://youtu.be/JtNwasPIvO4";
        brochure = "https://adobe.ly/4kkrfSE";
      } else {
        phone = "9880906633 | 9972342144";
        address = "# 1566, 'D' Group Layout, 60 ft. Road, Near 2nd Water Tank, Srigandhakaval, Bengaluru - 560091. Landmark: Nagarabhavi Ring Road   ";
        youtube ="https://youtu.be/ZxUeiNTYHfA";
        brochure = "https://adobe.ly/42T5cfU";
      }

        try {

            if(motherContact){
                const response = await axios.post("https://backend.aisensy.com/campaign/t1/api/v2", {
                "apiKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWVkZDhlNTExNzcxM2UwMTM2NWYwZSIsIm5hbWUiOiJBZ2FzdGh5YSBWaWR5YW5pa2V0aGFuIDMyNTMiLCJhcHBOYW1lIjoiQWlTZW5zeSIsImNsaWVudElkIjoiNjgxZWRkOGU1MTE3NzEzZTAxMzY1ZjA3IiwiYWN0aXZlUGxhbiI6IkZSRUVfRk9SRVZFUiIsImlhdCI6MTc0Njg1MzI2Mn0.vvC0Da8bu60G3siBVF3Gzk-vUqlgWafh4um8Ld9ulRg",
                "campaignName": "visitconfirmation_v2",
                "userName": "digitalmarketing@av.school",
                "destination": `91${motherContact.trim()}`, 
                "templateParams": [parentName2, childName, dateTime, address, youtube, brochure, phone],
            });

            }
            const response = await axios.post("https://backend.aisensy.com/campaign/t1/api/v2", {
                "apiKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWVkZDhlNTExNzcxM2UwMTM2NWYwZSIsIm5hbWUiOiJBZ2FzdGh5YSBWaWR5YW5pa2V0aGFuIDMyNTMiLCJhcHBOYW1lIjoiQWlTZW5zeSIsImNsaWVudElkIjoiNjgxZWRkOGU1MTE3NzEzZTAxMzY1ZjA3IiwiYWN0aXZlUGxhbiI6IkZSRUVfRk9SRVZFUiIsImlhdCI6MTc0Njg1MzI2Mn0.vvC0Da8bu60G3siBVF3Gzk-vUqlgWafh4um8Ld9ulRg",
                "campaignName": "visitconfirmation_v2",
                "userName": "digitalmarketing@av.school",
                "destination": `91${fatherContact.trim()}`, 
                "templateParams": [parentName1, childName, dateTime, address, youtube, brochure, phone],
            });

            return new Response(
                JSON.stringify({ success: true, data: response.data }),
                { status: 200 }
              );

        } catch (error) {
            if (error.response) {
                console.error("Error response from server:", error.response.data);
                console.error("Status code:", error.response.status);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error setting up request:", error.message);
            }
            // Return error details
            return {
                success: false,
                error: error.response ? error.response.data : error.message
            };
        }
    */

    // Return success response without sending WhatsApp messages
    return new Response(
        JSON.stringify({ success: true, message: "WhatsApp functionality disabled - email only" }),
        { status: 200 }
    );
}
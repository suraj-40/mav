import axios from 'axios';

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
        selectedTime,
    } = body;
    
    const parentName=fatherName+" and "+motherName;
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
            const response = await axios.post("https://backend.aisensy.com/campaign/t1/api/v2", {
                "apiKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZGY4ZWM5MzY4ZDQ2NmJkZTYwNmY4NiIsIm5hbWUiOiJBQkMgLSBUZWNobm9sb2d5IFRyYWluaW5nICYgVXBza2lsbGluZyIsImFwcE5hbWUiOiJBaVNlbnN5IiwiY2xpZW50SWQiOiI2N2RmOGVjOTM2OGQ0NjZiZGU2MDZmODEiLCJhY3RpdmVQbGFuIjoiRlJFRV9GT1JFVkVSIiwiaWF0IjoxNzQyNzA0MzI5fQ.o6Jhif5O1BFjt6NYKt2rCYRgeZhbvw1w1b_YPT5h1N8",
                "campaignName": "schedulecampusvisit_v1",
                "userName": "digitalmarketing@av.school",
                "destination": fatherContact, 
                "templateParams": [parentName, childName, dateTime, address, youtube, brochure, phone],
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
}
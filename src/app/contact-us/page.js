import React from "react";
import ContactForm from "@/components/sections/contact-form/ContactUsForm";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import Script from "next/script";

const ContactUs = () => {
    return (
        <PageWrapper>
            <main>
                <ContactForm/>
                <Script id="local-business-schema" type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Agasthya Vidyanikethan, Nagarbhavi",
                        "image": "https://www.av.school/",
                        "url": "https://www.av.school/",
                        "telephone": "99723 42144",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Nagarbhavi, 1566, 6th Main Rd, D-Group Layout, 4th Avenue, Purva Nagar",
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "postalCode": "560091",
                            "addressCountry": "IN"
                        }
                    })}
                </Script>
            </main>
        </PageWrapper>
    );
}

export default ContactUs;

export const metadata = {
  alternates: {
    canonical: "https://www.av.school/contact-us"
  }
};
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const VisionAndMission = () => {
        return (
            <PageWrapper>
            <main className="container flex flex-col items-center py-50px md:py-70px lg:py-20 2xl:py-100px">
                <section className="gap-30px">
                    <div data-aos="fade-up" className="2xl:ml-65px">
                        <h1 className="text-3xl font-bold text-primaryColor dark:text-primaryColor-dark mb-25px">
                            Vision and Mission
                        </h1>
                        <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-25px">
                            Our vision is to create a world where every child has access to quality education and the opportunity to reach their full potential.
                        </p>
                        <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-25px">
                            Our mission is to provide innovative and effective educational solutions that empower students, teachers, and communities to thrive in a rapidly changing world.
                        </p>
                    </div>
                </section>
            </main>
            </PageWrapper>
        );
}

export default VisionAndMission;
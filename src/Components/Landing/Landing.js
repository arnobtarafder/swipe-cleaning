import React from "react";

const Landing = () => {
    return (
        <div className="relative">
            <div className="hero h-screen lg:h-[60vh] bg-accent mt-16 lg:px-36">
                <div className="hero-content flex-col lg:flex-row md:flex-row">
                    <div className="">
                        <p
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="700"
                            className="text-xl">
                            Best Quality
                        </p>
                        <h1
                            data-aos="fade-right"
                            data-aos-delay="400"
                            data-aos-duration="900"
                            className="text-5xl font-bold">
                            Professional Cleaning Service
                        </h1>
                        <p
                            data-aos="fade-right"
                            data-aos-duration="1100"
                            data-aos-delay="600"
                            className="py-6 max-w-xl">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button
                            data-aos="zoom-in"
                            data-aos-delay="1300"
                            className="btn btn-primary">
                            Get Started
                        </button>
                    </div>
                    <div className="h-[60vh] hidden md:block lg:block shrink-0">
                        <img src="https://github.com/mir-hussain/clean-co-live/blob/main/src/assets/image/bucketgirl.png?raw=true" className="h-full" alt="" />
                    </div>
                </div>
            </div>

            <div className="relative rounded-2xl mx-auto mt-[-50px] bg-gray-100 shadow-lg p-10 w-5/6">
                <h1 className="text-primary text-3xl pb-6">Get Free Estimate</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="number"
                        placeholder="Phone Number"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="text"
                        placeholder="Type of service"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="text"
                        placeholder="Type of cleaning"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="number"
                        placeholder="Total square feet"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="number"
                        placeholder="Number of bedrooms"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="number"
                        placeholder="Number of bathrooms"
                        className="input input-bordered w-full"
                    />


                    <input
                        type="text"
                        placeholder="Frequency of cleaning"
                        className="input input-bordered w-full"
                    />
                </div>

                <button className="btn btn-primary mt-4">Request a Quote</button>

            </div>
        </div>
    );
};

export default Landing;
import React from "react";

const Landing = () => {
    return (
        <div className="relative">
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16 lg:px-36">
                <div class="hero-content flex-col lg:flex-row md:flex-row">
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
                            data-aos-duration="700"
                            class="text-5xl font-bold">
                            Professional Cleaning Service
                        </h1>
                        <p
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-delay="600"
                            class="py-6 max-w-xl">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button 
                        data-aos="zoom-in"
                        data-aos-delay="1100"
                        class="btn btn-primary">
                            Get Started
                            </button>
                    </div>
                    <div className="h-[60vh] hidden md:block lg:block shrink-0">
                        <img src="https://github.com/mir-hussain/clean-co-live/blob/main/src/assets/image/bucketgirl.png?raw=true" class="h-full" alt="" />
                    </div>
                </div>
            </div>

            <div className="relative rounded-2xl mx-auto mt-[-50px] bg-base-200 shadow-lg p-10 w-5/6">
                <h1 className="text-primary">Get Free Estimate</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                    />

                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                    />

                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                    />

                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                    />

                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                    />

                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                    />

                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                    />

                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                    />
                </div>

                <button className="btn btn-primary mt-4">Get a Quote</button>

            </div>
        </div>
    );
};

export default Landing;
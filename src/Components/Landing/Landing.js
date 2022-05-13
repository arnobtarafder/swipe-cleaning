import React from "react";

const Landing = () => {
    return (
        <>
        <div class="hero h-screen lg:h-[60vh] bg-accent mt-16 lg:px-36">
            <div class="hero-content flex-col lg:flex-row md:flex-row">
                <div className="">
                    <p className="text-xl">Best Quality</p>
                    <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                    <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <div className="h-[60vh] hidden md:block lg:block shrink-0">
                    <img src="https://github.com/mir-hussain/clean-co-live/blob/main/src/assets/image/bucketgirl.png?raw=true" class="h-full" alt="" />
                </div>
            </div>  
        </div>

        <div className="">
                <h1>Get Free Estimate</h1>
                <div>
                <input 
                type="text" 
                placeholder="Type here" 
                class="input input-bordered w-full max-w-xs" 
                />
                
                <input 
                type="text" 
                placeholder="Type here" 
                class="input input-bordered w-full max-w-xs" 
                />
                
                <input 
                type="text" 
                placeholder="Type here" 
                class="input input-bordered w-full max-w-xs" 
                />
                
                <input 
                type="text" 
                placeholder="Type here" 
                class="input input-bordered w-full max-w-xs" 
                />

                </div>
            </div>
        </>
    );
};

export default Landing;
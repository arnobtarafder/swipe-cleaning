import React from "react";

const Landing = () => {
    return (
        <div className="relative">
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

        <div className="relative rounded-2xl mx-auto mt-[-50px] bg-base-100 z-20 shadow-lg p-10 w-5/6">
                <h1>Get Free Estimate</h1>
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
            </div>
        </div>
    );
};

export default Landing;
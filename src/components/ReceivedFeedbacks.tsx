import React, { useState, useEffect } from 'react';

const feedbacks = [
    "The cleaning service was excellent! The team organized the spaces very efficiently, which helped me get everything in order quickly. I recommend it to everyone!",
    "The quality of the cleaning service is unparalleled. Always fast, efficient, and with fair prices. I wouldn't choose another company!",
    "Impressed with the speed and quality of the cleaning. Very satisfied and I will definitely use the services again!",
    "Excellent work! The team was friendly, efficient, and left everything spotless. I highly recommend their cleaning services."
];




export default function ReceivedFeedbacks() {
    const [activeFeedback, setActiveFeedback] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveFeedback((currentFeedback) => (currentFeedback + 1) % feedbacks.length);
        }, 5000); // Changes feedback every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className='feedback-background min-h-[150vh] md:min-h-[90vh] flex justify-end items-center text-start' id='received-feedback'>

            <div className="relative flex flex-col gap-10 p-5">

                <div className="text-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primeira mt-20 md:mt-10 pt-36 p-5 md:p-0 flex flex-col gap-3 items-center md:items-end lg:items-start">
                    <h3 className="text-3xl text-primeira mb-5 md:mb-0 text-center md:text-end lg:text-start ">Come and Learn More.</h3>
                    
                    <span className="text-md md:text-lg tracking-wider text-segunda md:max-w-md lg:max-w-lg md:text-end lg:text-start">
                    What people are saying about us on social media and in reviews.
                    </span>
                </div>
                
                <p className="text-2xl md:text-2xl text-center md:max-w-md xl:max-w-3xl text-terceira leading-normal md:text-end xl:text-start">
                    "{feedbacks[activeFeedback]}"
                </p>

                <div className='grid md:flex gap-5'>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-50 focus:ring-terceira hover:ring-terceira">See more feedback</button>

                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-50 focus:ring-terceira hover:ring-terceira">Our contact</button>
                </div>

            </div>
            
        </section>
    );
}


import imageOne from '../../public/assets/Carrosel/sala/IMG-20200204-WA0032.jpg';

export default function Service(){
    return (
        <section className="bg-terceira text-gray-800" id='services'>
            <div className="container max-w-6xl p-4 mx-auto space-y-6 sm:space-y-12 md:pt-22">

                <div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-snug md:leading-relaxed mb-10 md:mb-0">Discover the services
                        <span className="text-white"> crafted</span> <span className="text-white"></span>uniquely for you.
                    </h2>
                </div>

                <div rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50 rounded-md">
                    <img src="/assets/Service/louca.webp" alt="services photos" className="object-fill w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold md:text-4xl mb-5 uppercase">Regular Cleaning</h3>
                        <p>Our regular cleaning service is ideal for keeping your home or office always clean and organized. With scheduled visits tailored to your needs, our team ensures a pleasant and sanitized environment, allowing you to focus on what truly matters.</p>
                    </div>
                </div>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 rounded-md">
                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 rounded-md">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="/assets/Service/servico-residencial.png" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold mb-5 uppercase">Commercial Services</h3>
                            <p>We understand the importance of a clean and well-maintained work environment. Our commercial cleaning services are tailored to meet the specific needs of your business, providing a professional and welcoming space for your employees and clients.</p>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 rounded-md">
                        <img role="presentation" className="object-fill w-full rounded h-44 bg-gray-500" src="/assets/Carrosel/sala/IMG-20200204-WA0032.jpg" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold mb-5 uppercase">Move In / Move Out</h3>
                            <p>Moving can be stressful, but our team is here to help. We offer comprehensive cleaning services for when you are moving into a new location or leaving an old one. We ensure that everything is spotless for this new chapter in your life.</p>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 rounded-md">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="/assets/Service/chao.webp" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold mb-5 uppercase">Deep Cleaning</h3>
                            <p>
                                For a deeper and more thorough cleaning, our deep cleaning service is the perfect choice. Ideal for special occasions or for a complete refresh of your space, our team uses advanced techniques and products to reach even the most challenging corners.</p>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block rounded-md">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="/assets/Service/quarto1.png" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold mb-5 uppercase">Events</h3>
                            <p>Planning an event can be challenging, but cleaning doesn’t have to be a concern. We offer cleaning services before, during, and after your event, ensuring everything is perfect for your guests and that the venue is left in order after the celebration.</p>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block rounded-md">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="/assets/Service/fogao.webp" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold mb-5 uppercase">Customized Services</h3>
                            <p>Every home has its unique characteristics, and we are here to meet your specific needs. We offer personalized services where you can request cleaning for specific areas, such as inside the refrigerator, the stove, cabinets, and other hard-to-reach spots. Our team is ready to make every detail spotless, just as you desire.</p>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block rounded-md">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="/assets/Service/quarto2.png" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold mb-5 uppercase">Additional Services</h3>
                            <p>Garages and basements, or even inside closets, can accumulate a lot of dirt and clutter over time. Our specialized cleaning service for these areas ensures that every corner is cleaned and organized, providing a more functional and pleasant space. Leave the dirt and mess to us, and enjoy a refreshed and well-maintained environment.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600">Get a free, no-obligation estimate.</button>
                </div>
            </div>
        </section>
    );
}

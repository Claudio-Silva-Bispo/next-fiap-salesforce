export default function Quote() {
    return (
        <div className="quote-background relative md:min-h-full p-5" id="quote">
            <div className="flex flex-col justify-end items-start md:items-end">
                <h2 className="text-5xl md:text-6xl md:leading-none max-w-2xl lg:max-w-4xl text-primeira md:text-end pt-10 font-bold">Request your quote.</h2>
                <p className="mt-10 mb-8 text-lg md:text-xl sm:mb-12 text-gray-900 md:text-end leading-relaxed max-w-4xl">To ensure you receive the best service, it is essential that the quote request is filled out with attention to detail. The more information you provide, the more accurate and tailored the quote will be to your needs. Don't hesitate to share your expectations and requirements!</p>
            </div>

            <div className="flex flex-col space-y-4 sm:items-start sm:justify-start sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-end mb-96 text-center">
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-primeira text-gray-50 ">Fill out</a>
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-white text-primeira">Call now</a>
            </div>
        </div>
    );
}

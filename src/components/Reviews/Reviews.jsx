

const Reviews = () => {
    return (
        <div className="flex flex-col border justify-center items-center max-w-xl p-8 bg-white shadow-sm rounded-xl">
            <h2 className="text-3xl font-semibold mb-4">Customer Reviews</h2>
            <div className="flex flex-wrap justify-center items-center space-x-2">
                <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </button>
                {/* Add other star buttons */}
            </div>
            <div className="flex items-center justify-center mt-2">
                <span className="text-gray-600 text-lg">3 out of 5</span>
            </div>
            <p className="text-sm text-gray-600 text-center mt-1">861 global ratings</p>
            <div className="flex flex-col mt-4 space-y-4">
                {/* Rating progress bars */}
                {/* Each rating category */}
                <div className="flex items-center space-x-1">
                    <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                        <div className="bg-yellow-500 h-4 w-5/6"></div>
                    </div>
                    <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                        <div className="bg-yellow-500 h-4 w-4/6"></div>
                    </div>
                    <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                        <div className="bg-yellow-500 h-4 w-3/6"></div>
                    </div>
                    <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                        <div className="bg-yellow-500 h-4 w-2/6"></div>
                    </div>
                    <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                        <div className="bg-yellow-500 h-4 w-1/6"></div>
                    </div>
                    <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                </div>
            </div>
        </div>
    );
};

export default Reviews;

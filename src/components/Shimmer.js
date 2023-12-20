const Shimmer = () => {
    return (
        <div className="shimmer-container flex flex-wrap gap-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="shimmer-card p-4 w-64 h-80 bg-white rounded-md shadow-md">
                    <div className="shimmer-image w-full h-2/3 bg-gray-200 animate-shimmer"></div>
                    <div className="shimmer-details mt-4 space-y-2">
                        <div className="shimmer-line w-3/4 h-4 bg-gray-200 animate-shimmer"></div>
                        <div className="shimmer-line w-1/2 h-4 bg-gray-200 animate-shimmer"></div>
                        <div className="shimmer-line w-3/4 h-4 bg-gray-200 animate-shimmer"></div>
                        <div className="shimmer-line w-1/2 h-4 bg-gray-200 animate-shimmer"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;

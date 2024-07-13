const Shimmer = () => {
    return (
      <div className="shimmer-wrapper">
        {Array(8).fill("").map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-thumbnail"></div>
            <div className="shimmer-line shimmer-line-1"></div>
            <div className="shimmer-line shimmer-line-2"></div>
            <div className="shimmer-line shimmer-line-3"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
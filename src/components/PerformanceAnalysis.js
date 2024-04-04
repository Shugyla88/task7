import React, { useEffect, useState } from 'react';

const PerformanceAnalysis = () => {
  const [loadTime, setLoadTime] = useState(null);

  useEffect(() => {
    const measureLoadTime = () => {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      setLoadTime(loadTime);
    };

    if (window.performance && window.performance.timing) {
      measureLoadTime();
    }
  }, []);

  return (
    <div className="performance-analysis">
      <h2>Performance Analysis</h2>
      <p>Load Time: {loadTime ? `${loadTime} milliseconds` : 'Loading...'}</p>
      {/* Add additional performance metrics as needed */}
    </div>
  );
};

export default PerformanceAnalysis;

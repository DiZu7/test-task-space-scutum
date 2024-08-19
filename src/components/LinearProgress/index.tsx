import React, { useState, useEffect } from 'react';
import * as SC from './LinearProgress.styled';

const LinearProgress: React.FC = () => {
  // State Initialization and management for representing the current percentage (0-100) of the progress bar.
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // set up an interval to update the progress every 5ms.
    const timer = setInterval(() => {
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 10));
    }, 1);

    // Clean up the interval when the component unmounts to avoid memory leaks.
    return () => clearInterval(timer);
  }, []);

  return (
    <SC.ProgressContainer>
      <SC.ProgressBar $progress={progress} />
    </SC.ProgressContainer>
  );
};

export default LinearProgress;

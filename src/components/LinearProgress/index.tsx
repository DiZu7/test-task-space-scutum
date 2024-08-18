import React, { useState, useEffect } from 'react';
import * as SC from './LinearProgress.styled';

const LinearProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 10));
    }, 5);

    return () => clearInterval(timer);
  }, []);

  return (
    <SC.ProgressContainer>
      <SC.ProgressBar $progress={progress} />
    </SC.ProgressContainer>
  );
};

export default LinearProgress;

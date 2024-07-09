// components/LoadingButton.tsx

import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Button } from '../ui/button';

interface LoadingButtonProps {
  text: string;
  onClick: () => Promise<void>;
  className?: string;
}

const LoadingButton = ({ text, onClick, className }:LoadingButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className={`relative flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded ${className}`}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? (
        <FaSpinner className="animate-spin mr-2" />
      ) : null}
      {text}
    </Button>
  );
};

export default LoadingButton;

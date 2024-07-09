// hooks/useLoading.tsx

import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const withLoading = async (callback: () => Promise<void>) => {
    setLoading(true);
    try {
      await callback();
    } finally {
      setLoading(false);
    }
  };

  const LoadingIcon = () => (
    <FaSpinner className="animate-spin mr-2" />
  );

  return { loading, withLoading, LoadingIcon };
};

export default useLoading;

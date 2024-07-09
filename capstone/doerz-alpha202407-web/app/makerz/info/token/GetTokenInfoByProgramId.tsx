import { TokenInfoResponse } from '@/app/api/tokens/info/programId/[programId]/route';
import { extractFirstPairData } from '@/components/tokens-info/display/extractFirstPairData';
import { ExtractedData } from '@/components/tokens-info/display/types';
import React, { useState, useEffect } from 'react';


const GetTokenInfoByProgramId: React.FC<{ programId: string }> = ({ programId }) => {
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/tokens-info/programId/${programId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: TokenInfoResponse = await response.json();
        const extracted = extractFirstPairData(data);
        setExtractedData(extracted);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [programId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {extractedData && (
        <div>
          <h2>{extractedData.dexId}</h2>
          {/* Render other extracted data */}
        </div>
      )}
    </div>
  );
};

export default GetTokenInfoByProgramId;

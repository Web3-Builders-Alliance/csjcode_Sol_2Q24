import React, { useState, useEffect } from 'react';
import { extractFirstPairData } from './extractFirstPairData';
import { ExtractedData } from './types';

const DisplayExtractedData: React.FC<{ data: ExtractedData }> = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Token Information</h2>
      <p><strong>Chain ID:</strong> {data.chainId}</p>
      <p><strong>DEX ID:</strong> {data.dexId}</p>
      <p><strong>URL:</strong> <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a></p>
      <h3 className="text-md font-bold">Base Token</h3>
      <p><strong>Address:</strong> {data.baseToken.address}</p>
      <p><strong>Name:</strong> {data.baseToken.name}</p>
      <p><strong>Symbol:</strong> {data.baseToken.symbol}</p>
      <p><strong>Price (USD):</strong> {data.priceUsd}</p>
      <p><strong>24h Volume:</strong> {data.volumeH24}</p>
      <h3 className="text-md font-bold">Info</h3>
      <img src={data.info.imageUrl} alt={`${data.baseToken.name} logo`} className="w-20 h-20" />
      <h4 className="text-sm font-bold">Websites</h4>
      <ul>
        {data.info.websites.map((website, index) => (
          <li key={index}><a href={website.url} target="_blank" rel="noopener noreferrer">{website.label}</a></li>
        ))}
      </ul>
      <h4 className="text-sm font-bold">Socials</h4>
      <ul>
        {data.info.socials.map((social, index) => (
          <li key={index}><a href={social.url} target="_blank" rel="noopener noreferrer">{social.type}</a></li>
        ))}
      </ul>
    </div>
  );
};


export default DisplayExtractedData;

import React from 'react';
import { REFERENCES } from '../constants';

export const parseTextWithRefs = (text: string) => {
  // Regex to find [R#]
  const regex = /\[R(\d+)\]/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const refId = `R${match[1]}`;
    const refData = REFERENCES[refId];

    if (refData) {
      parts.push(
        <a
          key={`${refId}-${match.index}`}
          href={refData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-1.5 py-0.5 mx-1 text-xs font-bold text-white bg-black rounded hover:bg-gray-700 transition-colors cursor-pointer align-middle transform -translate-y-0.5"
          title={refData.title}
        >
          {refId}
        </a>
      );
    } else {
      parts.push(match[0]); // Keep original if not found
    }

    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

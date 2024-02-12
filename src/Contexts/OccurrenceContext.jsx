import React, { createContext, useContext, useState } from 'react';

const OccurrenceContext = createContext();

export const useOccurrenceContext = () => useContext(OccurrenceContext);

export const OccurrenceProvider = ({ children }) => {
  const [occurrences, setOccurrences] = useState([]);

  const addOccurrence = (occurrence) => {
    setOccurrences([...occurrences, occurrence]);
  };

  return (
    <OccurrenceContext.Provider value={{ occurrences, addOccurrence }}>
      {children}
    </OccurrenceContext.Provider>
  );
};

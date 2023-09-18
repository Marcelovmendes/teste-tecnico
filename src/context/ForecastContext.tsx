import { createContext, useContext, useState, ReactNode } from 'react';
import { ForecastContextType, ForecastData } from '../interfaces/ClimateData';

const ForecastContext = createContext<ForecastContextType | undefined>(undefined);

const useForecast = () => {
  const context = useContext(ForecastContext);
  if (!context) {
    throw new Error('useForecast must be used within a ForecastProvider');
  }
  return context;
};

export const ForecastProvider = ({ children }: { children: ReactNode }) => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  return (
    <ForecastContext.Provider value={{ forecastData, setForecastData }}>
      {children}
    </ForecastContext.Provider>
  );
};

export default useForecast;

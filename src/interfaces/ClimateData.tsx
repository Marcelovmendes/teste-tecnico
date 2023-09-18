export interface WeatherData {
  city: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  description: string;
}
export interface WeatherContextType {
  weatherData: WeatherData | null;
  setWeatherData: (data: WeatherData | null) => void;
}

export interface ForecastData {
  temp: number;
  minTemp: number;
  maxTemp: number;
  dt: string;
}

export interface ForecastContextType {
  forecastData: ForecastData[];
  setForecastData: (data: ForecastData[]) => void;
}

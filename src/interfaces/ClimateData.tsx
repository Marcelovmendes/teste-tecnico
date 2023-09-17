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

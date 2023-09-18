import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useForecast from '../../context/ForecastContext';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const WeatherGraphic = () => {
  const { forecastData } = useForecast();
  console.log(forecastData);
  return (
    <LineChart width={540} height={240} data={forecastData}>
      <XAxis
        dataKey="dt"
        interval={Math.ceil(forecastData.length / 7)}
        tickFormatter={(value) => format(new Date(value), 'dd/MM(eee)', { locale: pt })}
      />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="" stroke="red" />
    </LineChart>
  );
};

export default WeatherGraphic;

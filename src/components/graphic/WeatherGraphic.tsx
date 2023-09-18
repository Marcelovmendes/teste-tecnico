import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useForecast from '../../context/ForecastContext';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const WeatherGraphic = () => {
  const { forecastData } = useForecast();
  return forecastData && forecastData.length > 0 ? (
    <LineChart
      width={550}
      height={300}
      data={forecastData}
      margin={{ top: 40, right: 20 }}
    >
      <XAxis
        dataKey="dt"
        interval={Math.ceil(forecastData.length / 7)}
        tickFormatter={(value) => format(new Date(value), 'dd/MM(eee)', { locale: pt })}
        fontSize={12}
        textAnchor="start"
      />
      <YAxis />
      <CartesianGrid stroke="#ccc" opacity={0.4} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="temp" name="Temperatura" stroke="#F49C50" />
    </LineChart>
  ) : null;
};

export default WeatherGraphic;

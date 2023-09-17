import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{ name: 'Page', uv: 400, pv: 2400, amt: 2400 }];
const WeatherGraphic = () => {
  return (
    <LineChart
      width={400}
      height={160}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default WeatherGraphic;

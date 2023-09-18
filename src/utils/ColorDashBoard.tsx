export const weatherConditionStyles: Record<
  string,
  { background: string; legend: string }
> = {
  Clear: {
    background: 'yellow',
    legend: 'Céu aberto',
  },
  Clouds: {
    background: 'gray',
    legend: 'Nublado',
  },
  Rain: {
    background: 'blue',
    legend: 'Chovendo',
  },
  Snow: {
    background: 'lightgray',
    legend: 'Nevando',
  },
  Thunderstorm: {
    background: 'purple',
    legend: 'Tempestade',
  },
  Drizzle: {
    background: 'lightblue',
    legend: 'Chuviscando',
  },
  Mist: {
    background: 'lightgray',
    legend: 'Neblina',
  },
  'Broken Clouds': {
    background: 'gray',
    legend: 'Nublado',
  },
};

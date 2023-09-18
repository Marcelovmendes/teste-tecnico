export const weatherConditionStyles: Record<
  string,
  { background: string; legend: string; color: string }
> = {
  Clear: {
    background: 'yellow',
    legend: 'Céu aberto',
    color: 'black',
  },
  Clouds: {
    background: 'gray',
    legend: 'Nublado',
    color: 'white',
  },
  Rain: {
    background: '#3970FE',
    legend: 'Chovendo',
    color: 'white',
  },
  Snow: {
    background: 'lightgray',
    legend: 'Nevando',
    color: 'white',
  },
  Thunderstorm: {
    background: 'purple',
    legend: 'Tempestade',
    color: 'white',
  },
  Drizzle: {
    background: 'lightblue',
    legend: 'Chuviscando',
    color: 'black',
  },
  Mist: {
    background: 'lightgray',
    legend: 'Neblina',
    color: 'white',
  },
  'Broken Clouds': {
    background: 'gray',
    legend: 'Nublado',
    color: 'white',
  },
};

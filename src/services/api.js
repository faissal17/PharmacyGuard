import * as axios from 'react-native-axios';

const options = {
  method: 'GET',
  url: 'https://pharmacies-de-garde-nc.p.rapidapi.com/q/health',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'pharmacies-de-garde-nc.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

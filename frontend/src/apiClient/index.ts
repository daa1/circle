import axios, {AxiosRequestHeaders} from 'axios';
import config from '../config';

const host = "https://api.particle.io";
const version = "/v1/";
const devicesEP = host + version + "devices" + "?access_token=" + config.particletoken;

const deviceID = "????";

export const getDevices = async () => {
  try {
    const { data, status } = await axios.get<any>(
      devicesEP,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
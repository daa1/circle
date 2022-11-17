import axios, {AxiosRequestConfig, AxiosRequestHeaders} from 'axios';

const host = "https://api.particle.io";
const version = "/v1/";
const token = "db1293d2a8d6e4a1eafe2738c65e38d6e2493c10"; 
const deviceId = "2c003b000c47393334363636";

const devicesEP = host + version + "devices";
const deviceEP  = host + version + "devices/" + deviceId;

export const getAllDevices = async () => {
  try {
    const { data } = await axios.get<any>(devicesEP, headers);
    return data;
  } catch (error) {
    handleError(error);
  }
}

export const getDeviceInfo = async () => {
  try {
    const { data } = await axios.get<any>(deviceEP, headers);
    return data;
  } catch (error) {
    handleError(error);
  }
}

const headers: AxiosRequestConfig = {
  headers: {
    Authorization: 'Bearer ' + token,
    Accept: 'application/json',
  },
}

const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.log('error message: ', error.message);
    return error.message;
  } else {
    console.log('unexpected error: ', error);
    return 'An unexpected error occurred';
  }
}
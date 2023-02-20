import axios from 'axios';

// const {REACT_APP_API_USER_DEFAULT} = process.env;
import {APP_API_USER_DEFAULT} from 'react-native-dotenv';

export const api = axios.create({
  baseURL: 'https://api-driver-titon.herokuapp.com/',
});

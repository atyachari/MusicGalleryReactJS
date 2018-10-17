import axios from 'axios';
import config from '../config/config';


export default function api()
{
  return axios.get(config.REST_API);
}

import { apiURL } from "../constants/config";
import axios from 'axios'

export const makeTransaction = async (data) => {
    try {
        let URL = apiURL + "transactions";
        console.log("API URL endpoint = ", URL);
        console.log(data);
        let resp = await axios.post(URL, data);
        // console.log(resp);
        return {
          success: true,
          data: resp.data,
          message: "",
        };
      } catch (e) {
        return {
          success: false,
          message: e.message,
        };
      }
}

export const getSingleTransaction = async (id) => {
    try {
        let URL = apiURL + "transactions/" + id;
        console.log("API URL endpoint = ", URL);
        console.log(id);
        let resp = await axios.get(URL);
        // console.log(resp);
        return {
          success: true,
          data: resp.data?resp.data:false,
          message: "",
        };
      } catch (e) {
        return {
          success: false,
          message: e.message,
        };
      }
}
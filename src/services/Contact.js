import { apiURL } from "../constants/config";
import axios from 'axios'
import {request} from '../utils/requestService'

export const makeQuery = async (data) => {
    try {
        let URL = apiURL + "messages";
        console.log("API URL endpoint = ", URL);
        console.log(data);
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        };
        // let resp = await fetch(URL, requestOptions)
        //     .then(response => response.json())
        // let resp = await request(URL, "POST", {'Content-Type': 'application/json'}, data); //Example of new request Service
        let resp = await axios.post(URL, data);
        console.log(resp);
        return {
          success: true,
          data: resp.data,
          message: "",
        };
      } catch (e) {
        return {
          success: false,
          data: {},
          message: e.message,
        };
      }
}
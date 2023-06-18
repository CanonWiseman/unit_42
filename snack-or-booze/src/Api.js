import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getData(subDirectory){
    const result = await axios.get(`${BASE_API_URL}/${subDirectory}`);
    return result.data;
  }

  static async postData(subDirectory, data){
    const response = await axios.post(`${BASE_API_URL}/${subDirectory}`, data);
    return response;
  }

}

export default SnackOrBoozeApi;

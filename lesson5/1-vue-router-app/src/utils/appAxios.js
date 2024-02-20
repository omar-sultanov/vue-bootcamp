import axios from 'axios'
const appAxios = axios.create({
    withCredentials: false,
    baseURL:"http://localhost:3000/",
    headers:{
        tokenX:"myToken",
        "Content-Type":"application/json"
    }

  });

  export default  appAxios
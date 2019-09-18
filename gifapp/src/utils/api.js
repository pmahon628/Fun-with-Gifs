import axios from "axios";
const BASEURL = "https://api.tenor.com/v1/search?tag=";
const APIKEY = "ONPUIGAU3VNI";

export default {
    search: function(query){
        return axios.get(BASEURL + query + APIKEY);
    }
};
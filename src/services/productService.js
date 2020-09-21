import axios from "axios";

export function  getProducts(){
    return axios.get("https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments");
}
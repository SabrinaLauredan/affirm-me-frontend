import axios from "axios";

export default axios.create({
    //replace w heroku link once deployed
    baseURL: "http://localhost:4000",
    headers: {
        "Content-type": "application/json"
    }
});

import axios from "axios";

export default axios.create({
    baseURL: "https://affirm-me-backend.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});

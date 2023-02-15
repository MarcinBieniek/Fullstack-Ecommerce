import axios from "axios";

const BASE_URL = "http://localhost:8083/api/";
// temporary token added manually; after redux we'll use storage
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGE1ZGQ1ZmY2MTE0ZGJhMzM3ZDc1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjI5NzExNCwiZXhwIjoxNjc2NTU2MzE0fQ.PEnrm4wCDF3E0dCEoOXw7W6NNTokn4bFWygxy96HzFE";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}`}
})

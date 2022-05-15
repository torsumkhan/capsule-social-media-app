import axios from "axios";

//This url is point to the backend route
const url = "http://localhost:8000/posts";

export const fetchPosts = () => axios.get(url);
export const createCapsule = (newCapsule) => axios.post(url, newCapsule);

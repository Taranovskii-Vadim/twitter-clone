import axios from "axios";

const token = window.localStorage.getItem("token");

axios.defaults.headers.common = { Authorization: `bearer ${token}` };

export { axios };

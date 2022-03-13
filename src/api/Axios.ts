import axios from "axios";

import packageJson from "../..//package.json";

export const Axios = axios.create({
    baseURL: packageJson.homepage,
})

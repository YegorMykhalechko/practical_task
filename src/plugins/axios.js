import axios from "axios";

export const ApiPlugin = {
    install: (app, options) => {
        app.config.globalProperties.$axios = axios.create({
            withCredentials: true,
            baseURL: options.baseUrl,
        });
    },
};
import axios from "axios";
import { generateAuthHeader } from "./generateAuthHeader";

let configHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
  locale: "en-ltr",
};

/**
 * axios instance
 */
let instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: configHeaders,
  transformRequest: [
    function (data, headers) {
      // Do whatever you want to transform the data
      return data;
    },
  ],
});

// request header
instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response parse
instance.interceptors.response.use(
  (response) => {
    return parseBody(response);
  },
  (error) => {
    if (error && error.response && error.response.status === 401) {
      alert("Session timedout, please login again.");
    }
    if (error.response) {
      return parseError(error.response.data);
    } else {
      return Promise.reject(error);
    }
  }
);

function parseError(messages) {
  // error
  if (messages) {
    if (messages instanceof Array) {
      return Promise.reject({ messages: messages });
    } else {
      return Promise.reject({ messages: [messages] });
    }
  } else {
    return Promise.reject({ messages: ["Error"] });
  }
}

/**
 * parse response
 */
function parseBody(response) {
  if (response.status === 200) {
    return response.data;
  } else {
    return this.parseError(response.data.messages);
  }
}

export default instance;

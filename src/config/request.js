import axios from "axios";
import Cookies from "js-cookie";
const requst = axios.create({ baseURL: import.meta.env.VITE_APP_URL });

const PostData = (config) => {
  setTimeout(() => {
    if (
      config.url !== "/login" &&
      config.url !== "/register" &&
      config.method == "post"
    ) {
      axios
        .post("http://localhost:8000/all", JSON.parse(config.data))
        .then((res) => res.data);
    }
  }, 500);

  return;
};

requst.interceptors.request.use(
  (config) => {
    const token = Cookies.get("user");
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    PostData(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

requst.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      return (window.location.pathname = "/login");
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { requst };

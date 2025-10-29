import axios, {type AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create({
	baseURL: "/api", // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 5000 // request timeout
});
axiosInstance.interceptors.request.use(
	config => {
		config.headers['X-Token'] = "test-test";
		return config;
	},
	error => {
		// do something with request error
		console.log(error); // for debug
		return Promise.reject(error);
	}
);
export default axiosInstance;
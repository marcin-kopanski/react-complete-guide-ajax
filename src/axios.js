import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.post['Content-Type'] = 'application/json';

let axiosRequestInterceptor = instance.interceptors.request.use(request => {
	console.log(request);
	// Can edit request
	return request;
}, error => {
	console.log(error);
	return Promise.reject(error);
});

let axiosResponseInterceptor = instance.interceptors.response.use(response => {
	console.log(response);
	// Can edit response
	return response;
}, error => {
	console.log(error);
	return Promise.reject(error);
});

instance.interceptors.request.eject(axiosRequestInterceptor);
instance.interceptors.response.eject(axiosResponseInterceptor);

export default instance;
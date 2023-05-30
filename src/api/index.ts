import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-training.hrm.div4.pgtest.co/api/v1',
});

// Xử lý Interceptor trước khi gửi yêu cầu
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    // const token = sessionStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Xử lý Interceptor trước khi nhận phản hồi
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xử lý lỗi phản hồi
    return Promise.reject(error);
  }
);

export default api;
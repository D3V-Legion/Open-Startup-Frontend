import axios from 'axios'

//Manejador de peticiones.
const apiManager = axios.create({
    baseURL:"https://ffdq9t4z-3000.use2.devtunnels.ms",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'mode': 'no-cors'
    }
})

apiManager.interceptors.request.use((config) => {
    //Este token debe estraerce desde el servidor.
    const token = '';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default apiManager;
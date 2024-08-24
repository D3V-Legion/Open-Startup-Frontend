import axios from 'axios'

//Manejador de peticiones.
const apiManager = axios.create({
    baseURL:"https://openstartup.com",
    headers: {
        'Content-Type': 'application/json',
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
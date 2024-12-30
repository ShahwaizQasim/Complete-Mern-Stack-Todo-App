


const dev = `http://localhost:3000/`;
const prod = `https://backend-learning-rho.vercel.app/`

const BASE_URL = prod;

export const APP_ROUTES = {
    signUp: `${BASE_URL}api/users/auth`,
    login: `${BASE_URL}api/users/auth/login`,
}
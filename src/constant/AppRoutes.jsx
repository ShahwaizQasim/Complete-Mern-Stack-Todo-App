


const dev = `http://localhost:3000/`;
const prod = `https://backend-learning-rho.vercel.app/`

export const BASE_URL = prod;

export const APP_ROUTES = {
    signUp: `${BASE_URL}api/users/auth`,
    login: `${BASE_URL}api/users/auth/login`,
    userInfo: `${BASE_URL}api/users/auth/UserInfo`,
    AddCourse: `${BASE_URL}api/addCourse`,
    GetCourse: `${BASE_URL}api/addCourse`
}
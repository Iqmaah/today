// import axios from "axios"
// const base_URL = 'http://stageapi.hervest.ng/api/'


// const base_URL = process.env.REACT_APP_API_BASE_URL

// export const POSTwithoutTOKEN = (URI, data) => {
//     console.log('CALLED AXIOS');
//     console.log(data);
//     return axios.post(base_URL+URI, data)
// }

// export const signUp = (signUpData) =>{
//     return axios.post(`http://stageapi.hervest.ng/api/account/register`, {
//         firstName: signUpData.firstname,
//         lastName: signUpData.lastname,
//         password: signUpData.password,
//         phoneNumber: signUpData.phone,
//         email: signUpData.email
//     })
// }

// export const verifyEmail = (verifyEmailData) => {
//     return axios.post(`http://stageapi.hervest.ng/api/account/verifyemail`, {
//         code: verifyEmailData.code
//     })
// }

// export const login = (loginData)=>{
//     return axios.post("http://stageapi.hervest.ng/api/account/login", {
//         email: loginData.email,
//         password: loginData.password
//     })
// }

// export const resetPassword = (resetPasswordData) =>{
//     return axios.post(`http://stageapi.hervest.ng/api/account/reset_password`, {
        
//         email: resetPasswordData.email
//     })
// } 

// export const changePassword = (changePasswordData) => {
//     return axios.post(`http://stageapi.hervest.ng/api/account/change_password`,{
//             code : changePasswordData.code,
//             password : changePasswordData.password, 
//     })
// }
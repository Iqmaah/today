import axios from "axios";
//import { useEffect, useState } from "react";
const base_URL = 'https://stageapi.hervest.ng/api/'
// const token = localStorage.getItem('HVST_TOKEN')
//const token = "NcPBdwq7xT4F8Gxbax8gL2AM/tDQv7yzU3WGUbeX+wNRcQ6g9jDuQLSSOm77jlYyoW/5kzYAiggCalprr1Y4f8vneIU1kqyKyKYSvF0zjb1eomqLkSc+BZAW2g0xiOLWuCQVW/uXnEv29dWESOcSOJg="
//iconst token = "3KkpM3Ezt3FWauqxxonIN+jdwwV/itrRu5TM36SucsSZNEAh34Wkwv4/7ucn/un5Latt26swDvYLXgmpuf0eHnAt5uabWiw+u353n4vXMhP2ik1bFrkaL3ZFaazVvqC3TmYlIuvkXvkAav0I895BTh"
const token = localStorage.getItem("token")
// const [token, setToken] = useState("")

// useEffect(() => {
//    setToken(localStorage.getItem("token")) 
//   console.log("token", token);
// }, [])



// const headers =  {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`
// }

export const GETwithTOKEN = async (URI) => {
    const res = await axios({
      method: "GET",
      url: `${base_URL}${URI}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    return res;
  };

// export const GETwithTOKEN = async (URI) => {
//     console.log('THE TOKEN USED',token);
//     console.log('CALLED AXIOS');
//     return await axios.get(base_URL+URI, {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`
//     })
// }

export const POSTwithoutTOKEN = async (URI, data) => {
    console.log('CALLED AXIOS');
    console.log(data);
    return await axios.post(base_URL+URI, data)
}


export const POSTwithTOKEN = (URI, data) => {
    console.log(data)
    return axios.post(base_URL + URI, {
      method: "POST",
      url: `${base_URL}${URI}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
}

export const addMonths = (date, months) => {
  var d = date.getDate();
  date.setMonth(date.getMonth() + +months);
  if (date.getDate() !== d) {
    date.setDate(0);
  }
  return date;
}
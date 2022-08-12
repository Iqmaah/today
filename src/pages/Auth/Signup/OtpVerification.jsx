import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import SignupImg from '../../../assets/images/Signup.svg'
import HerVest from '../../../assets/images/hervest.svg'
import Button from '../../../shared-components/Form/Button'
import Dropdown from '../../../shared-components/Form/Dropdown'
//import { verifyEmail } from "../../../services/api"
import toast from 'react-hot-toast'
import { POSTwithoutTOKEN } from "../../../services/network/users"

const OtpVerification = () => {

    const navigate = useNavigate()
    const [otp, setOtp] = useState("")

    const verifyEmailData = {
        code:otp
    }

    // useEffect(() => {

    // }, []);

    const onVerifyEmail = async () => {
        console.log('I  ran immediately');
        try {
        const response = await POSTwithoutTOKEN('account/verifyemail',verifyEmailData)
        console.log('message', response.data.message)
        localStorage.clear();
         navigate('/Welcome')
        } catch (error) {
            console.log(error);
            toast(error.response.data.message)
        }
    }


   
    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>

                <div className="min-h-full hidden md:block py-8 px-12 lg:px-8 ">
                    <div className='hidden md:block'>
                        <img src={HerVest} alt="HerVest logo" className='sm:hidden md:block'></img><br/>
                    </div>
                    <div className="hidden md:block flex justify-center  ">
                        <img src={SignupImg} alt="Signup today" className='sm:hidden md:block' />
                    </div>              
                </div>

                <div className="relative border border-white-100 rounded-2xl bg-white mt-12 mb-12 mx-4 flex items-center py-8">
                    <div className=" px-28 py-24 w-full space-y-8">
                    
                        <div className=''>
                            <h1 className='BoldFonter text-[32px] font-[700px] text-[#5B2E4F] leading-10'>OTP Verification</h1>
                            <p className='text-[#B4B5C1] text-[16px] font-[400px] leading-6'>Enter the OTP sent to your mail to verify your account</p>
                        </div><br/><br/>
                        <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5" >
                            <input className="m-2 border border-[#5B2E4F] bg-[#F8F1F6] h-10 w-full text-center form-control rounded" type="text" id="first" maxLength="6" onChange={(e) => setOtp(e.target.value)} value={otp}/>
                            {/* <input className="m-2 border border-[#5B2E4F] bg-[#F8F1F6] h-10 w-10 text-center form-control rounded" type="text" id="second" maxLength="1" />
                            <input className="m-2 border border-[#5B2E4F] bg-[#F8F1F6] h-10 w-10 text-center form-control rounded" type="text" id="third" maxLength="1" />
                            <input className="m-2 border border-[#5B2E4F] bg-[#F8F1F6] h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxLength="1" />
                            <input className="m-2 border border-[#5B2E4F] bg-[#F8F1F6] h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxLength="1" />
                            <input className="m-2 border border-[#5B2E4F] bg-[#F8F1F6] h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxLength="1" /> */}

                        </div>

                        <div > 
                            {/* <Link to="/Welcome"> */}
                                <Button text="VERIFY" onClick={() => { onVerifyEmail()}}/>
                            {/* </Link> */}
                            
                        </div>
                        <div className="text-center">
                            <span className="text-[14px] font-[400px] leading-5">Didn't get an OTP,</span>
                            <span className="text-[14px] font-[400px] text-[#5B2E4F] MediumFonter leading-5">
                                <button>Resend</button>
                                </span>
                        </div>
                        
                    </div>      
                </div>

        </div>
    )
}

export default OtpVerification
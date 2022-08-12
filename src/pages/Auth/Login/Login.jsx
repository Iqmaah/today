import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HerVest from './../../../assets/images/hervest.svg'
import LoginImg from './../../../assets/images/Login1.svg'
import Button from '../../../shared-components/Form/Button'
import mail from '../../../assets/images/mail.svg'
import lock from '../../../assets/images/lock.svg'
import google from '../../../assets/images/google.png'
import facebook from '../../../assets/images/facebook.png'
import { FaEye, FaEyeSlash, FaMailBulk, FaBlenderPhone } from "react-icons/fa";
import RegLoginInputs from '../../../shared-components/Form/RegLoginInputs'
import toast from 'react-hot-toast'
import { POSTwithoutTOKEN } from '../../../services/network/users'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordShown, SetpasswordShown] = useState("")

    const navigate = useNavigate()

    const loginData = {
        email,
        password
    }

    const onLogin = async () => {
        try { 
            const response = await POSTwithoutTOKEN('account/login', loginData)
           localStorage.setItem('token', response.data.data.token)
            console.log('message', response.data)
            console.log(response.data.data);
            navigate('/Dashboard')
        } catch (error) {
            console.log(error)
            toast(error.response.data.message ? error.response.data.message : "Incorrect Login Credentials")
            
        }
    }

    

    const handleLogin = () => {
        onLogin()
    }

    function handleOnSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block flex py-8 px-12 lg:px-8 ">
                <div className="hidden md:block">
                    <img src={HerVest} alt="HerVest logo" className='hidden md:block'></img>
                </div><br />
                <div className="hidden md:block flex justify-center items-center">
                    <img src={LoginImg} alt="Signup today" className='hidden md:block' />
                </div>
            </div>
            <div className="border border-white-100 rounded-2xl bg-white my-6 mx-8 flex justify-center items-center py-6">
                <div className="py-8 px-12 rounded-2xl max-w-md w-full space-y-8">
                    <div className=' flex flex-row justify-end mb-6 absolute top-4 right-12'>
                            <p className='text-gray-400 text-[16px] font-[300px] leading-5'>New user?</p>&nbsp;
                            <p className='text-[#5B2E4F] BoldFonter text-[16px] font-[300px] leading-5'><Link to="/" className='text-[#5B2E4F]'>Create new account</Link></p>
                    </div>
                    <div className=''>

                        <h1 className='BoldFonter text-[32px] text-[#5B2E4F] font-[700px] leading-10 mb-2'  > Welcome! </h1>
                        <p className='text-gray-500 text-[16px] font-[400px] leading-6'>Log in to your account</p>

                    </div>

                    <form onSubmit={handleOnSubmit}>
                        <div className='mb-2'>
                            <label htmlFor="email" className="text-[13px] font-[500px] leading-5">Email </label>

                            <RegLoginInputs icon={mail} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>

                        <div className='relative'>
                            <label htmlFor="lastname" className="text-[13px] font-[500px] leading-5">Password</label>
                            <RegLoginInputs icon={lock} type={passwordShown ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />

                            <div className="absolute inset-y-0 right-0 mt-5 pr-3 flex items-center text-sm leading-5">
                                {passwordShown ? (
                                    <FaEye
                                        onClick={() => SetpasswordShown(false)}
                                        className="text-right"
                                    />
                                ) : (
                                    <FaEyeSlash
                                        onClick={() => SetpasswordShown(true)}
                                        className="text-right"
                                    />
                                )}
                            </div>
                        </div>


                        <div className='flex justify-end mt-2'>
                            <p className='mb-14 text-[14px] font-[400px] leading-4'>Forgot password? <Link to="/PasswordReset1" className='text-[#5B2E4F] BoldFonter'>Reset it here</Link></p>
                        </div>
                        <div>
                            {/* <Link to="/Dashboard"> */}
                                <Button text="LOG IN" onClick={() => { onLogin()}} />
                            {/* </Link> */}
                        </div>

                    </form>
                    <div className="flex items-center py-2">
                        {/* <!-- The left line --> */}
                        <div className="flex-grow h-px bg-[#5B2E4F]"></div>

                        {/* <!-- Your text here --> */}
                        <span className="flex-shrink px-4 text-[13px] font-[500px] leading-5 MediumFonter">or log in with</span>

                        {/* <!-- The right line --> */}
                        <div className="flex-grow h-px bg-[#5B2E4F]"></div>
                    </div>

                    <div className='flex space-x-4 justify-center'>
                        <div>
                            <img src={google} className="h-11 w-11"></img>
                        </div>
                        <div>
                            <img src={facebook} className="h-11 w-11"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Login
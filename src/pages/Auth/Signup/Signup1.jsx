import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import SignupImg from '../../../assets/images/Signup.svg'
import HerVest from '../../../assets/images/hervest.svg'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField.jsx'
import Button from '../../../shared-components/Form/Button'
import user from '../../../assets/images/user.svg'
import mail from '../../../assets/images/mail.svg'
import lock from '../../../assets/images/lock.svg'
import Phone from '../../../assets/images/phone.svg'
//import { signUp } from '../../../services/api'
import eye from '../../../assets/images/Eye.png'
import google from '../../../assets/images/google.png'
import facebook from '../../../assets/images/facebook.png'
import { FaEye, FaEyeSlash, FaMailBulk, FaBlenderPhone } from "react-icons/fa";
import RegLoginInputs from '../../../shared-components/Form/RegLoginInputs'
import toast from 'react-hot-toast'
import { POSTwithoutTOKEN } from '../../../services/network/users'


const Signup1 = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [passwordShown, SetpasswordShown] = useState("")

    const navigate= useNavigate()

    const signUpData = {
        firstName,
        lastName,
        email,
        phoneNumber, 
        password
    }
    // const onSignUp = async () => {
    //     console.log("i clicked");
    //     try {
    //         const response = await signUp(signUpData)
    //         console.log('message', response)
    //         navigate('/OtpVerification')
    //     } catch (error) {
    //         console.log(error);
    //         toast(error.response)
    //     }

    // }

    const handleClick = async () => {
        try {
         console.log('ENtered Handle click');
    const res = await POSTwithoutTOKEN('account/register', signUpData)
        console.log(res);
        console.log(signUpData);
        navigate('/OtpVerification')   
        } catch (error) {
            console.log(error);
            toast(error.response.data.message)
        }
        
        // console.log("i entered handleclick");
        // localStorage.setItem('firstname', firstname)
        // localStorage.setItem('lastname', lastname)
        // localStorage.setItem('email', email)
        // localStorage.setItem('phone', phone)
        // onSignUp()
    }

    function handleOnSubmit(e) {
        e.preventDefault()
    }

    // const onLoadPage= () =>{
    //     document.getElementById('signUp').onload = onGetItems()

    // }
    const onGetItems = () => {
        setFirstName(localStorage.getItem('firstname'))
        setLastName(localStorage.getItem('lastname'))
        setEmail(localStorage.getItem('email'))
        setPhoneNumber(localStorage.getItem('phone'))
    }


    return (
        <div className=' bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center' onLoad={onGetItems}>

            <div className="min-h-full hidden md:block py-8 px-12 lg:px-8 ">
                <div className="hidden md:block ">
                    <img src={HerVest} alt="HerVest logo" className='sm:hidden md:block'></img>
                </div><br />
                <div className="hidden md:block flex justify-center">
                    <img src={SignupImg} alt="Signup today" className='' />
                </div>
            </div>

            <div className="relative overflow-auto border border-white-100 bg-white lg:mx-8 lg:my-12 rounded-2xl flex items-center py-8 ">

                <div className="px-20 md:px-24 w-full space-y-4">
                    <div className='absolute right-5 top-3'>
                        <p className='text-gray-800 text-[16px] font-[500px] leading-4'>Already own an account? <Link to="/Login" className='text-[#5B2E4F] MediumFonter'>Log in</Link></p>
                    </div>
                    <div className=''>

                        <h1 className='BoldFonter text-[32px] font-[700px] leading-10'> Create an account </h1>
                        <p className='text-gray-400 text-[16px] font-[400px] leading-6'> Hey there, let’s get to meet you!</p>

                    </div>

                    <form onSubmit={handleOnSubmit}>


                        <div className='flex flex-wrap'>
                            <div className='w-full md:w-1/2 mb-2 md:pr-2'>
                                <label htmlFor="firstname" className="text-[13px] font-[500px] leading-5">First Name</label>
                                {/* <span >
                                    <img src={user} className="mt-3 ml-3 absolute z-10 h-5 w-5 "
                                        aria-hidden="true"></img>
                                </span> */}
                                <RegLoginInputs icon={user} type="text" id="firstname" required placeholder="Firstname" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                            </div>

                            <div className='w-full md:w-1/2 mb-2  md:pl-2'>
                                <label htmlFor="lastname" className="text-[13px] font-[500px] leading-5">Last Name</label>
                                
                                <RegLoginInputs icon={user} type="text" placeholder="Lastname" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                            </div>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="email" className="text-[13px] font-[500px] leading-5">Email </label>

                            <RegLoginInputs icon={mail} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="phone" className="text-[13px] font-[500px] leading-5">Phone Number </label>

                            <RegLoginInputs icon={Phone} type="number" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                        </div>

                        <div className='relative mb-6'>
                            <label htmlFor="password" className="text-[13px] font-[500px] leading-5">Password</label>
                            <RegLoginInputs icon={lock}  type={passwordShown ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />

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


                        <div>
                            {/* <Link to="/OtpVerification"> */}
                                <Button text="NEXT" onClick={ () => handleClick()}></Button>
                            {/* </Link> */}
                        </div>
                    </form>
                    <div className="flex items-center pt-4">
                        {/* <!-- The left line --> */}
                        <div className="flex-grow h-px bg-[#5B2E4F]"></div>

                        {/* <!-- Your text here --> */}
                        <span className="flex-shrink px-4 text-[13px] font-[500px] leading-5 MediumFonter">or sign up with</span>

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

export default Signup1
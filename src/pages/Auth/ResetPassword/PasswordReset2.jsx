import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignupImg from '../../../assets/images/Signup.svg'
import HerVest from '../../../assets/images/hervest.svg'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField'
import Button from '../../../shared-components/Form/Button'
import lock from '../../../assets/images/lock.svg'
import { FaEye, FaEyeSlash, FaMailBulk, FaBlenderPhone } from "react-icons/fa";
import RegLoginInputs from '../../../shared-components/Form/RegLoginInputs.jsx'
import toast from 'react-hot-toast'
import { POSTwithoutTOKEN } from '../../../services/network/users'

// import { ResetPassword } from '../../../services/api'

const PasswordReset2 = () => {

    const [code, setCode] = useState("")
    const [newPassword, setnewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [passwordShown, SetpasswordShown] = useState("")

    const navigate = useNavigate()

    const changePasswordData = {
        code,
        password: confirmNewPassword
    }

    const onChangePassword = async () => {
        try {
            if (newPassword === confirmNewPassword){
                const response = await POSTwithoutTOKEN('account/change_password' ,changePasswordData)
                console.log('message', response.data.message)
                navigate('/Login')
            }
        } catch (error) {
            console.log(error);
            toast(error.response.data.message)
        }
        
    }

    function handleOnSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block py-8 px-12 lg:px-8 ">
                <div className="hidden md:block mt-2">
                    <img src={HerVest} alt="HerVest logo" className='sm:hidden md:block'></img>
                </div><br />
                <div className="hidden md:block mt-16 mx-20 flex justify-center">
                    <img src={SignupImg} alt="Signup today" className='' />
                </div>
            </div>
            <div className="relative border border-white-100 rounded-2xl bg-white my-8 mx-8 flex items-center justify-center py-6">
                <div className="py-16 px-16 lg:px-28 w-full space-y-2">

                    <div className=''>

                        <h1 className='font-bold BoldFonter text-[32px] font-[700px] leading-10 mb-2'> Reset Password </h1>
                        <p className='text-gray-500 m text-[16px] font-[400px] leading-6'>Enter the code sent your email to reset your password .</p>

                    </div>

                    <form onSubmit={handleOnSubmit}>
                        <div>
                            <label htmlFor="enter code" className="text-[13px] font-[500px] leading-5 ">Enter code </label>

                            <PrimaryFormField type="text" placeholder="**********" onChange={(e) => setCode(e.target.value)} value={code} />
                        </div><br />

                            <p className='text-gray-500  text-[16px] font-[400px] leading-6 mb-2'>Kindly enter and set up a new password for your account.</p>

                        <div className='relative'>
                            <label htmlFor="password" className="text-[13px] font-[500px] leading-5">Enter new password</label>

                            <RegLoginInputs icon={lock} type={passwordShown ? "text" : "password"} placeholder="Enter new password" onChange={(e) => setnewPassword(e.target.value)} value={newPassword} />
                            <div className="absolute inset-y-0 right-0 mt-6 pr-3 flex items-center text-sm leading-5">
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
                        </div><br />
                        <div className="relative">
                            <label htmlFor="confirm-old-password" className="text-[13px] font-[500px] leading-5">Confirm new password</label>

                            <RegLoginInputs icon={lock} type={passwordShown ? "text" : "password"} placeholder="Confirm new password" onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} />
                            <div className="absolute inset-y-0 right-0 mt-6 pr-3 flex items-center text-sm leading-5">
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
                        </div><br />

                        <div className='mt-4 text-[#5B2E4F]'>
                                <Button text="VERIFY" onClick={() => {onChangePassword()}}/>
                        </div><br />

                        <div className="text-center">
                            <span className="text-[14px] font-[400px] leading-5">Didn't get a code,</span>
                            <span className="text-[14px] font-[400px] text-[#5B2E4F] MediumFonter leading-5">Resend</span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset2
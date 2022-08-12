import { useState } from 'react'
import { Link } from 'react-router-dom'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField.jsx'
import Button from '../../../shared-components/Form/Button.jsx'
import SignupImg from '../../../assets/images/Signup.svg'
import HerVest from '../../../assets/images/hervest.svg'
import lock from '../../../assets/images/lock.svg'
import eye from '../../../assets/images/Eye.png'
import { changePassword } from '../../../services/api.js'
import { FaEye, FaEyeSlash, FaMailBulk, FaBlenderPhone } from "react-icons/fa";
import RegLoginInputs from '../../../shared-components/Form/RegLoginInputs.jsx'


const PasswordReset3 = () => {

    const [newPassword, setnewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [passwordShown, SetpasswordShown] = useState("")


    const changePasswordData = {
        password: confirmNewPassword
    }

    const onChangePassword = async () => {

        if (newPassword === confirmNewPassword) {
            const response = await changePassword.changePassword(changePasswordData)
            console.log('message', response.data.message)
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
            <div className="relative border border-white-100 rounded-2xl bg-white my-8 mx-8 flex items-center justify-center py-6 ">
                <div className="py-16 px-10  max-w-md w-full space-y-8">

                    <div className=''>

                        <h1 className='font-bold BoldFonter text-[32px] font-[700px] leading-10 mb-2 text-[#5B2E4F]'> Create a new password </h1>
                        <p className='text-gray-500  text-[16px] font-[400px] leading-6'>Kindly enter and set up a new password for your account.</p>

                    </div>

                    <form onSubmit={handleOnSubmit} className="">
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
                        <div className="mb-8 relative">
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

                        <div className=''>
                            <Link to="/Login">
                                <Button text="VERIFY" onClick={onChangePassword} />
                            </Link>
                        </div><br />

                    </form>
                </div>
            </div>

        </div>
    )
}

export default PasswordReset3
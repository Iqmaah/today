import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField.jsx'
import Button from '../../../shared-components/Form/Button.jsx'
import HerVest from '../../../assets/images/hervest.svg'
import resetpwrd from '../../../assets/images/Login2.svg'
import mail from '../../../assets/images/mail.svg'
import RegLoginInputs from '../../../shared-components/Form/RegLoginInputs.jsx'
import { POSTwithoutTOKEN } from '../../../services/network/users'
import toast from 'react-hot-toast'

const PasswordReset1 = () => {

    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const resetPasswordData = {
        email
    }

    const onPasswordReset= async() => {
        try {
            const response = await POSTwithoutTOKEN('account/reset_password' ,resetPasswordData)
            console.log('message', response.data.message)
            navigate('/PasswordReset2')
        } catch (error) {
            console.log(error);
            toast(error.response.data.message)
        }
    }

    const handleResetPassword = () => {
        onPasswordReset()
    }

    function handleOnSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block lg:px-8 ">
                <div className="hidden md:block mt-2">
                        <img src={HerVest} alt="HerVest logo" className='sm:hidden md:block'></img>    
                    </div><br/>
                    <div className="hidden md:block mt-16 mx-20 flex justify-center">
                        <img src={resetpwrd} alt="Signup today" className='' />
                </div>
            </div>

            <div className="relative border border-white-100 rounded-2xl bg-white my-8 mx-8 flex items-center justify-center py-6">
                    <div className="py-16 px-16 lg:px-28 w-full space-y-8">
                        
                        <div className=''>
                          
                            <h1 className='font-bold BoldFonter text-[32px] font-[700px] leading-10 mb-2'> Forgot Password </h1>
                            <p className='text-gray-500  text-[16px] font-[400px] leading-6'>Enter the email address linked with your HerVest account. An OTP will be sent to you.</p>
                        
                        </div>
                        
                        <form onSubmit={handleOnSubmit}>
                                <div>
                                    <label htmlFor="email" className="text-[13px] font-[500px] leading-5 mb-2">Email Address </label>
                                    
                                    <RegLoginInputs icon={mail} type="email" placeholder="Email Address"  onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div><br />

                                <div className='mt-4'>
                                    {/* <Link to="/PasswordReset2" className='text-[#5B2E4F]'> */}
                                        <Button text="SEND OTP"  onClick={ () => handleResetPassword()}/>
                                    {/* </Link>  */}
                                
                                </div><br/>

                                <div>
                                    <Link to="/Login">
                                        <button className='border border-[#5B2E4F] rounded text-[#5B2E4F] w-full px-10 py-2 text-[12px] font-[500px] leading-4'>
                                            REMEMBER PASSWORD? LOG IN
                                        </button>
                                    </Link>
                                </div>
                               
                        </form>
                    </div>      
            </div>
        </div>
    )
}

export default PasswordReset1
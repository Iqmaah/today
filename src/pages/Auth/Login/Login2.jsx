import { useState } from 'react'
import { Link } from 'react-router-dom'
import HerVest from './../../../assets/images/hervest.svg'
import LoginImg from './../../../assets/images/Login2.svg'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField.jsx'
import Button from '../../../shared-components/Form/Button'

const Login2 = () => {
   
    const [password, setPassword] = useState("")


    function handleOnSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block py-18 px-12 lg:px-8 ">
                    <div className="hidden md:block mt-2">
                        <img src={HerVest} alt="HerVest logo" className='hidden md:block'></img>    
                    </div><br/>
                    <div className="hidden md:block mt-16 mx-20 flex justify-center items-center">
                        <img src={LoginImg} alt="Signup today" className='sm:hidden md:block' />
                    </div>              
            </div>
            <div className="relative border border-white-100 rounded-2xl bg-white my-8 mx-6 flex items-center justify-center py-6">
                    <div className="sm:px-20 lg:px-28 py-8 w-full space-y-8">
                        <div className='absolute top-10 right-12 flex flex-row'>
                            <p className='text-gray-400 text-[16px] font-[300px] leading-5'>New user?</p>&nbsp;
                            <p className='text-[#5B2E4F] BoldFonter text-[16px] font-[300px] leading-5'><Link to="/" className='text-[#5B2E4F]'>Create new account</Link></p>
                        </div>
                        <div className='pt-8'>
                          
                            <h1 className='font-bold BoldFonter text-[32px] font-[700px] leading-10'> Hello, Aminat </h1>
                            <p className='text-gray-500 text-[16px] font-[400px] leading-6'>Feels good to have you back</p>
                        
                        </div><br/>
                        
                        <form onSubmit={handleOnSubmit}>
                                
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <PrimaryFormField type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value={password}/>
                                </div><br />

                                <Link to="/PasswordReset1"><p className='text-[#5B2E4F] BoldFonter mb-14 text-[14px] font-[400px] leading-4'>Forgot password?</p></Link>
                                <div> 
                                    <Link to="/Loginmodal">
                                        <Button text="LOG IN" />
                                    </Link>
                                </div><br/>
                                <div className='flex justify-center'>
                                    <Link to="/Dashboard">
                                        <p className='text-[#5B2E4F] BoldFonter text-[16px] font-[700px] leading-5'>Sign up to another account</p>
                                    </Link>
                                </div>
                        </form>
                    </div>      
            </div>

        </div>
    )
}


export default Login2
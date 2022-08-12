import { Link } from "react-router-dom"
import SignupImg from '../../../assets/images/Signup.svg'
import HerVest from '../../../assets/images/hervest.png'
import Button from '../../../shared-components/Form/Button'

const Signup4 = () => {
    return(
        
            <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>

                <div className="min-h-full sm:hidden md:block  py-8 px-12 lg:px-8 ">
                    <div className="hidden md:block ">
                        <img src={HerVest} alt="HerVest logo" className='hidden md:block'></img>    
                    </div><br/>
                    <div className="hidden md:block flex justify-center items-center ">
                        <img src={SignupImg} alt="Signup today" className='sm:hidden md:block' />
                    </div>              
                </div>

                <div className="relative border border-white-100 rounded-2xl bg-white mt-8 mb-8 mx-4 flex items-center py-8">
                    <div className=" px-28 py-40 w-full space-y-8">
                    
                        <div className='text-center'>
                            <h1 className='md:text-center BoldFonter text-[32px] font-[700px] leading-10'>Confirm your account</h1>
                            <p className='text-[#B4B5C1] text-center text-[16px] font-[400px] leading-6'>A confirmation mail was sent to you. Please check your mail to verify your account.</p>
                        </div><br/><br/>

                        <div> 
                            <Link to="/Welcome">
                                <Button text="LOG IN" onClick={()=> localStorage.clear()}/>
                            </Link>
                            
                        </div>
                        
                    </div>      
                </div>

            </div>
        
    )
}


export default Signup4
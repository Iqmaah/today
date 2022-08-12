

import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import SignupImg from '../../../assets/images/Signup.svg'
import HerVest from '../../../assets/images/hervest.svg'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField'
import Button from '../../../shared-components/Form/Button'
import Dropdown from '../../../shared-components/Form/Dropdown'

const Signup3 = () => {

    const [color, setColor] = useState("")

    function handleOnSubmit(e) {
        e.preventDefault()
    }
    

    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>

                <div className="min-h-full hidden md:block py-8 px-12 lg:px-8 ">
                    <div className='hidden md:block '>
                        <img src={HerVest} alt="HerVest logo" className='hidden md:block'></img><br/>
                    </div>
                    <div className="hidden md:block flex justify-center items-center">
                        <img src={SignupImg} alt="Signup today" className='sm:hidden md:block' />
                    </div>              
                </div>

                <div className="relative border border-white-100 rounded-2xl bg-white my-12 mx-8 flex items-center py-6">
                    <div className="px-20 md:px-16 lg:px-32 w-full space-y-8">
                        <div className='absolute top-5 right-5'>
                            <p className='text-gray-800 text-[16px] font-[500px] leading-4'>Already own an account? <Link to="/Login1" className='text-[#5B2E4F] MediumFonter'>Log in</Link></p>
                        </div>
                        <div className='pt-4'><br/>
                          
                            <h1 className='BoldFonter text-[32px] font-[700px] leading-10' > Let’s get to know you </h1>
                            <p className='text-gray-400 text-[16px] font-[400px] leading-6'> Hey smart woman, get started by creating an account on HerVest</p>
                        
                        </div><br/>
                        
                        <form onSubmit={handleOnSubmit}>
                            
                            <div className="flex flex-wrap justify-center">
                                <div className="mb-6 sm:w-96">
                                    <Dropdown placeholder="City" valueArr={["1","2", "tayo","4"]}></Dropdown>
                                </div>
                                
                            </div>

                            <div className="flex justify-center">
                                <div className="mb-6 sm:w-96">
                                    <Dropdown placeholder="Country" valueArr={["1","2", "tayo","4"]}></Dropdown>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="Favourite Color" className="sr-only">Favourite Color </label>
                                <PrimaryFormField type="text" placeholder="Favourite Color"  onChange={(e) => setColor(e.target.value)} />
                            </div><br />

                            <div className="flex justify-center">
                                
                                    <div className="mb-6 w-96 md:w-96 lg:w-full">
                                        <Dropdown placeholder="Interests" valueArr={["1","2", "tayo","4"]}></Dropdown>
                                    </div>
                                
                            </div>
                                    
                                <div> 
                                    <Link to="/Signup4">
                                        <Button text="NEXT"></Button>
                                    </Link>
                                </div>
                        </form>
                    </div>      
                </div>

        </div>
    )
}

export default Signup3
import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Dashboard from '../../Dashboard/Dashboard'
import DashboardModal from '../../../contexts/DashboardModal'

const Loginmodal = () => {

    const {setShowDashboardModal } = useContext(DashboardModal)
    // const test= () => {
    //     console.log("it is clicked")
    //     setShowDashboardModal(false)
    // }

        return(
            <div className="relative z-10 transition-opacity grid place-content-center"  aria-labelledby="modal-title" role="dialog" aria-modal="true">
           
                <div className="fixed z-10 inset-0 overflow-y-auto bg-opacity-75 bg-[#33343D] ">
                    <div className="flex items-end sm:items-center justify-center px-4 sm:p-0">
                        <div className=" border-2 bg-white rounded-[2.5rem]  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                        <div className="relative bg-white rounded-3xl h-screen" >
                        <div className="px-8 pt-6">
                            <h1 className="text-center BoldFonter mb-2 px-4 text-[24px] font-[700px] leading-8" >New on HerVest</h1>
                            <p className="text-center text-gray-600 px-4 pb-6 text-[14px] font-[400px] leading-5">
                                You're at the right place! At HerVest, you grow your money and grow into your best self. Here's why you'll love it here.
                            </p>

                            <div className='absolute right-5 top-2' >
                             
                                    <button 
                                        type="button" 
                                        className="text-gray-400 bg-[#5B2E4F]  hover:bg-[#5B2E4F] hover:text-gray-900 rounded-lg text-sm p-1 mr-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" 
                                        // onClick={() => setShowDashboardModal(false)}
                                        onClick= { () => setShowDashboardModal(false)} 
                                        >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                    </button>
                            </div>

                            
                                <div className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#5B2E4F]"  viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                        
                                    <span className="text-[#5B2E4F] BoldFonter text-[20px] font-[700px] leading-7">Easy to use</span>
                                    <p className='px-8 text-[16px] font-[400px] leading-6 mb-6'>We offer easy-to-use platform designs, frictionless user experience and a guided approach to investing for women.</p> 

                                    <div className=''>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#5B2E4F]"  viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                            
                                        <span className="text-[#5B2E4F] BoldFonter text-[20px] font-[700px] leading-7">Safe</span>
                                        <p className='px-8 text-[16px] font-[400px] leading-6 mb-6'>All funds are held and managed by FBNQuest Trustees Limited, a member of the FBN Holdings on behalf of HerVest. FBNQuest Trustees Limited is regulated by the Securities and Exchange Commission (SEC).</p> 
                                    </div>
                                
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#5B2E4F]"  viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        
                                        <span className="text-[#5B2E4F] BoldFonter text-[20px] font-[700px] leading-7">Women-centered Support</span>
                                        <p className='px-8 text-[16px] font-[400px] leading-6'>We are available to help you navigate through your everyday issues or deep women issues.</p> 
                                    </div>
                                </div>

                        </div>
                    
                    </div>
                            
                        </div>
                    </div>
                </div>
             </div>

    )
}

export default Loginmodal


   
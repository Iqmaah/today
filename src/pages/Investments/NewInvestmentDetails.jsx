import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import Button from "../../shared-components/Form/Button"

const NewInvestmentDetails =() => {
    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>

            <div>
                <div className="mx-8 mt-8 mb-4 font-bold">
                    <h classname="text-[32px] font-[700px] leading-8 ">Plans</h>
                </div>
                <div className="mx-8 mb-8">
                    <span className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 "><Link to="/Plans">Plans</Link></span>
                    <span className="ml-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/Investments">Investments</Link></span>
                    <span className="ml-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/NewInvestmentDetails">Add new investment</Link></span>
                </div>
 
                <div className="bg-white rounded-2xl m-8 px-12 py-8">
                    <div className="pb-8">
                        <Link to="/NewInvestments">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 12.2739L19.25 12.2739" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.2988 18.2985L4.24883 12.2745L10.2988 6.24951" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-[16px] font-[300px] leading-6 text-[#626375]">Back</span>
                        </Link>
                    </div>

                    {/* <div className='grid sm:grid-rows-1 md:grid-cols-2 gap-2 h-screen'> */}
                    <div className="grid grid-cols-2 h-screen">
                        <Link to="/NewInvestmentDetails2">
                            <div>
                                <h className="text-[32px] font-[700px] leading-10 BoldFonter pb-4">Cocoa Farm</h>
                                <p className="text-[14px] font-[300px] leading-5 text-[#626375] pb-2">Description</p>
                                <p className="text-[16px] font-[300px] leading-6 text-[#7C7F93] pt-4 pb-20">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam 
                                consequat sunt nostrud amet.</p>
                                <p className="text-[16px] font-[400px] leading-5">Status: &nbsp; <span className="text-[#5B2E4F]">Available</span></p>
                            </div>
                        </Link>
                        

                        <div className="rounded-2xl border-2 border-gray-300 p-4 mr-8 mb-40" style={{ width: "450px"}}>
                           
                            <div className="grid grid-rows-3 grid-flow-col gap-x-20 gap-y-6 mb-8 mt-6" >
                                <div>
                                    <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Slot Price</p>
                                    <p className='text-[16px] font-[400px] leading-6'>₦64,000</p>
                                </div>

                                <div>
                                    <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Tenure</p>
                                    <p className='text-[16px] font-[400px] leading-6'>24 months</p>
                                </div>
                                
                                <div>
                                    <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Rate</p>
                                    <p className='text-[16px] font-[400px] leading-6'>12% per annum</p>
                                </div>
                                
                                <div>
                                    <p className='text-[#666666] pb-2 text-[14px] font-[300px] leading-5'>Available slots</p>
                                    <p className='text-[16px] font-[400px] leading-6'>112</p>
                                </div>
                                
                                
                            </div>

                            <div className="pt-20">
                                <Link to="/NewInvestmentDetails2">
                                    <Button text="INVEST" />
                                </Link>
                            </div>
                        </div>

                        
                        
                    
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default NewInvestmentDetails
import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import Button from "../../shared-components/Form/Button"

const NewInvestmentDetails3 = () => {
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
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/NewInvestmentDetails3">Add new investment</Link></span>
                </div>
 
                <div className="bg-white rounded-2xl m-8 px-12 py-8 h-full">
                    <div className="pb-8">
                        <Link to="/NewInvestmentDetails2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 12.2739L19.25 12.2739" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.2988 18.2985L4.24883 12.2745L10.2988 6.24951" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-[16px] font-[300px] leading-6 text-[#626375]">Back</span>
                        </Link>
                    </div>

                    {/* <div className='grid sm:grid-rows-1 md:grid-cols-2 gap-2 h-screen'> */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 h-screen">
                        <div>
                            <h className="text-[32px] font-[700px] leading-10 BoldFonter pb-4">Make payment</h>
                            <p className="text-[14px] font-[300px] leading-5 text-[#626375] pb-2">Description</p>
                            <p className="text-[16px] font-[300px] leading-6 text-[#7C7F93] pt-4 pb-20">Please pay exact amount of N234,000 into the account details below to book your spot.</p>
                           
                        </div>

                        <div className="rounded-2xl border border-1 px-8 py-16 mr-8 mb-40">
                            
                            <div className="bg-[#FFF6F6] text-center p-6 rounded-xl">
                                <p className="text-[#5B2E4F] BoldFonter text-[14px] font-[700px] leading-5">0123456789</p>
                                <p className="pb-6 text-[14px] font-[300px] leading-5">HerVest Agri Business</p>
                                <p className="pb-6 text-[14px] font-[300px] leading-5">Providus bank</p>
                                
                            </div>

                            <div className="text-center py-8">
                                <Link to="/NewInvestments">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3906 6.75H8.64062C7.8122 6.75 7.14062 7.42157 7.14062 8.25V15C7.14062 15.8284 7.8122 16.5 8.64062 16.5H15.3906C16.2191 16.5 16.8906 15.8284 16.8906 15V8.25C16.8906 7.42157 16.2191 6.75 15.3906 6.75Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.14062 11.25H3.39062C2.9928 11.25 2.61127 11.092 2.32996 10.8107C2.04866 10.5294 1.89063 10.1478 1.89062 9.75V3C1.89062 2.60218 2.04866 2.22064 2.32996 1.93934C2.61127 1.65804 2.9928 1.5 3.39062 1.5H10.1406C10.5384 1.5 10.92 1.65804 11.2013 1.93934C11.4826 2.22064 11.6406 2.60218 11.6406 3V3.75" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span className="text-[16px] font-[300px] leading-6 text-[#626375]">Tap to copy</span>
                                </Link>
                            </div>

                            <div className="pt-10">
                                <Link to="/NewInvestmentDetails2">
                                    <Button text="I HAVE PAID" />
                                </Link>
                            </div>
                            
                        </div>

                        
                        
                    
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default NewInvestmentDetails3
import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import ReferralEarningHistory from "../../shared-components/ReferralEarningHistory"


const Referral1 = () => {
    const [showDiv, setShowDiv] = useState(false);

    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>

            <div>
                <div className="mb-4">
                    <div className="mx-8 mt-8 mb-6 font-bold">
                        <h classname="text-[32px] font-[700px] leading-8 ">Referral</h>
                    </div>
                    <div className="mx-8 mb-12">
                        <div className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 mb-2">Available reward earnings</div>

                        <div className="text-[48px] font-[700px] leading-relaxed BoldFonter">N20,548.00</div> 
                    </div>

                    <div className="grid grid-cols-2 gap-8 mx-8">
                        <div className="bg-[#FBEAEF] p-4 rounded-xl">
                            <p className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 mb-4">Your referral code is</p>

                            <div className="flex space-x-32">
                                <div className="text-[20px] font-[700px] leading-7 ">4832BVV4</div>
                                <button className=" rounded-xl bg-[#5B2E4F] text-white py-2.5 px-4 text-center" onClick={() => setShowDiv(true)}>
                                    <p className="text-[14px] font-[500px] leading-5">SHARE REFERRAL LINK &nbsp;
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.166 4.84098L1.16602 4.84098" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.13281 0.824754L11.1661 4.84075L7.13281 8.85742" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </p>
                                </button>

                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-16 bg-white rounded-xl py-4 px-10">
                            <div>
                                <p className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 mb-2">Total referrals</p>
                                <p className="text-[20px] font-[700px] leading-7 BoldFonter">100</p>
                            </div>
                            <div>
                                <p className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 mb-2">Total referral earnings</p>
                                <p className="text-[20px] font-[700px] leading-7 BoldFonter">N42,060</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ReferralEarningHistory/>
                {showDiv ? (
                     <>
                        <div className="bg-[#5B2E4F] text-[14px] font-[700px] leading-5 text-white text-center mt-12">
                            Link copied successfully
                        </div>
                     </>
                )
                : null }

                
            </div>
            

        </div>
    )
}

export default Referral1
//import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import Button from "../../shared-components/Form/Button"
import { POSTwithTOKEN } from "../../services/network/users"
import toast from 'react-hot-toast'


const PlanSummary = () => {
    const addPlanData = useLocation();
    console.log(addPlanData.state);
    const { planName,targetAmount,frequency,savingAmount,targetDuration,interestRate,targetDate } = addPlanData.state

    // const planName= localStorage.getItem('planName')
    // const targetAmount = localStorage.getItem('targetAmount')
    // const frequency = localStorage.getItem('frequency')
    // const savingAmount = localStorage.getItem('savingAmount',)
    // const targetDuration = localStorage.getItem('targetDuration')

    // const addPlanData = 

    const navigate = useNavigate()


    const addPlan = async () => {
        try {
            const response =await POSTwithTOKEN('savings/addplan', addPlanData.state)
            console.log(response)
            console.log(addPlanData);
            navigate("/PlanPaymentMethod")
            
        } catch (error) {   
            console.log(error);
            toast(error.response.data.message)
            
        }
    }

    // function formatDate(date, format) {
    //     const map = {
    //         mm: date.getMonth() + 1,
    //         dd: date.getDate(),
    //         yy: date.getFullYear().toString().slice(-2),
    //         yyyy: date.getFullYear()
    //     }
    
    //     return format.replace(/yy-mm-dd-yyy/gi, matched => map[matched])
    // }

    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>

            <div>
                <div className="mx-8 mt-8 mb-4 font-bold">
                    <h1 className="text-[32px] font-[700px] leading-8 ">Plans</h1>
                </div>
                <div className="mx-8 mb-8">
                    <span className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 "><Link to="/Plans">Plans</Link></span>
                    <span className="ml-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/CreatePlan">Create a new plan</Link></span>
                </div>
 
                <div className="bg-white rounded-2xl m-8 px-12 py-8">
                    <div className="pb-8">
                        <Link to="/CreatePlan">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 12.2739L19.25 12.2739" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.2988 18.2985L4.24883 12.2745L10.2988 6.24951" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-[16px] font-[300px] leading-6 text-[#626375]">Back</span>
                        </Link>
                    </div>

                    <div className='grid sm:grid-rows-1 sm:gap-4 md:grid-cols-2 md:gap-2 '>
                    
                        <div>
                            <p className="text-[32px] font-[700px] leading-10 BoldFonter">Here’s a summary</p>
                            <p className="text-[16px] font-[300px] leading-6 text-[#7C7F93] pt-4">Before you go, here’s a summary of your savings plan.</p>
                        </div>

                        <div className="rounded-2xl border-2 border-gray-300 p-4  mb-8" style={{ width: ""}}>
                            <div className="mb-8">
                                <p className="text-[#666666] text-[16px] font-[400px] leading-5 pb-2">Plan name</p>
                                <p className="text-[20px] font-[400px] leading-6 BoldFonter">{planName}</p>
                            </div><hr/>

                            <div className="grid grid-cols-2 gap-x-20 gap-y-4 mb-8 mt-8" >
                                <div>
                                    <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Target amount</p>
                                    <p className='text-[16px] font-[400px] leading-6'>{targetAmount}</p>
                                </div>
                                
                                <div>
                                    <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Periodic savings</p>
                                    <p className='text-[16px] font-[400px] leading-6'>{savingAmount}</p>
                                </div>

                                <div>
                                    <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Start date</p>
                                    <p className='text-[16px] font-[400px] leading-6'>{(new Date().toISOString()).slice(0,10)}</p>
                                </div>
                                
                                <div>
                                    <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Maturity date</p>
                                    <p className='text-[16px] font-[400px] leading-6'>{targetDate}</p>
                                    {/* <input className='text-[16px] font-[400px] leading-6' type={'date'}  /> */}
                                </div>

                                <div>
                                    <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Saving frequency</p>
                                    <p className='text-[16px] font-[400px] leading-6'>{frequency}</p>
                                </div>
                                
                                <div >
                                    <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Saving tenure</p>
                                    <p className='text-[16px] font-[400px] leading-6'>{targetDuration}</p>
                                </div>
                            </div><hr/>

                            <div className="grid grid-cols-2 gap-x-20 gap-y-4 mt-8">
                                    <div>
                                        <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Interest rate</p>
                                        <p className='text-[16px] font-[400px] leading-6'>{interestRate}%</p>
                                    </div>
                                    
                            </div>
                            <div className="flex justify-end mt-8">
                                        {/* <Link to="/PlanPaymentMethod"> */}
                                            <Button text="NEXT" onClick={() => addPlan()}/>
                                        {/* </Link> */}
                            </div>
                        </div>
                        
                    </div>
                     
                        
                   
                </div>
                
            </div>
        </div>
    )
}



export default PlanSummary
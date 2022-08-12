import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../../../shared-components/Sidebar/Sidebar"
import Dropdown from "../../../shared-components/Form/Dropdown"
import PrimaryFormField from "../../../shared-components/Form/PrimaryFormField"
import Button from "../../../shared-components/Form/Button"

const SavingsPlan = () => {

    const [amount, setAmount] = useState("")


    function handleOnSubmit(e) {
        e.preventDefault()
    } 

    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>

            <div>
                <div className="mx-8 mt-8 mb-4 font-bold">
                    <h classname="text-[32px] font-[700px] leading-8 ">Purse</h>
                </div>
                <div className="mx-8 mb-8">
                    <span className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 "><Link to="/Purse">Purse</Link></span>
                    <span className="ml-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>  
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/SendMoney1">Send money</Link></span>
                    <span className="ml-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/SavingsPlan">Send money to a savings plan</Link></span>
                </div>

                <div className="bg-white rounded-2xl m-8 px-12 py-8">
                        <div className="pb-8">
                            <Link to="/SendMoney3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 12.2739L19.25 12.2739" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.2988 18.2985L4.24883 12.2745L10.2988 6.24951" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-[16px] font-[300px] leading-6 text-[#626375]">Back</span>
                            </Link>
                        </div>

                        <div className='flex flex-row space-x-16 h-screen'>
                            <div>
                                <h className="text-[32px] font-[700px] leading-10 BoldFonter">Send money to a savings plan</h>
                                <p className="text-[16px] font-[300px] leading-6 text-[#7C7F93] pt-4">Select savings plan</p>
                            
                            </div>

                            <div>
                                <form onSubmit={handleOnSubmit}>

                                    <div className="flex justify-center">
                                        <div className="mb-6 sm:w-96">
                                            <Dropdown placeholder="Choose savings plan" valueArr={["1","2", "tayo","4"]}></Dropdown>
                                        </div>
                                    </div>
                                
                                    <div className="">
                                        <label htmlFor="How much do you want to save" className="sr-only">How much do you want to save</label>
                                        <PrimaryFormField type="text" placeholder="How much do you want to save"  onChange={(e) => setAmount(e.target.value)} value={amount} />
                                        
                                    </div><br/>
                                        
                                    <div> 
                                        <Link to="/PlanSummary"> 
                                            <Button text="NEXT"></Button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
            </div>

        </div>
    )
}

export default SavingsPlan
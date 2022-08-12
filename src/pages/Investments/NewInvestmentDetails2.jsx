import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import Button from "../../shared-components/Form/Button"
import PrimaryFormField from "../../shared-components/Form/PrimaryFormField"

const NewInvestmentDetails2 =() => {

    const [showModal, setShowModal] = useState(false);
    const [number, setNumber] = useState("")


    function handleOnSubmit(e) {
        e.preventDefault()
    }
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
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/NewInvestmentDetails2">Add new investment</Link></span>
                </div>
 
                <div className="bg-white rounded-2xl m-8 px-12 py-8">
                    <div className="pb-8">
                        <Link to="/NewInvestmentDetails">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 12.2739L19.25 12.2739" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.2988 18.2985L4.24883 12.2745L10.2988 6.24951" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-[16px] font-[300px] leading-6 text-[#626375]">Back</span>
                        </Link>
                    </div>

                    {/* <div className='grid sm:grid-rows-1 md:grid-cols-2 gap-2 h-screen'> */}
                    <div className="grid grid-cols-2 gap-x-6 h-screen">
                        <div>
                            <h className="text-[32px] font-[700px] leading-10 BoldFonter pb-4">Cocoa Farm</h>
                            <p className="text-[14px] font-[300px] leading-5 text-[#626375] pb-2">Description</p>
                            <p className="text-[16px] font-[300px] leading-6 text-[#7C7F93] pt-4 pb-20">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                            Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam 
                            consequat sunt nostrud amet.</p>
                            <p className="text-[16px] font-[400px] leading-5">Status: &nbsp; <span className="text-[#5B2E4F]">Available</span></p>
                        </div>

                        <div className=" p-4 mr-8 mb-40">
                           
                            <form onSubmit={handleOnSubmit}>
                                <div>
                                    <label htmlFor="number" className="sr-only">How many women would you like to fund? </label>
                                    <PrimaryFormField type="number" placeholder="How many women would you like to fund?"  onChange={(e) => setNumber(e.target.value)} value={number} />
                                </div><br />
                            </form>

                            <p className="text-[16px] font-[400px] leading-5 text-center pb-10">5 slots = N325,000</p>

                            <div className="bg-[#FFF6F6] text-center p-2 rounded-xl">
                                <p className="pb-6 text-[14px] font-[300px] leading-5">Your total payout on this Investment would yield</p>
                                <p className="text-[#5B2E4F] BoldFonter text-[14px] font-[700px] leading-5">N364,000</p>
                            </div>

                            <p className="text-center text-[14px] font-[300px] leading-5 p-6">Returns quoted for our 'fund a female farmer' investments are annual returns. Actual returns depends on the tenure of the investment. </p>


                            <div className="text-[14px] font-[300px] leading-5 mt-10">
                                <p className="text-[#666666]">
                                    Holding Period Return
                                </p>
                                <p className="text-[16px] font-[400px] leading-6">
                                    Quoted Annual Return * (Project Duration/12)
                                </p>
                            </div>

                            <div className="pt-20">
                                <Link to="/NewInvestmentDetails2">
                                    <Button text="NEXT"  onClick={() => setShowModal(true)}/>
                                </Link>
                            </div>
                            {/* change password modal popup */}
                            {showModal ? (
                                <>
                                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-auto my-6 mx-auto max-w-lg">
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            <div className="my-28 mx-20">
                                                <h1 className="text-center BoldFonter mb-2 px-4 text-[24px] font-[700px] leading-8" >Hey, quick notice</h1>
                                                <p className="text-center text-gray-600 px-4 pb-10 text-[14px] font-[400px] leading-5">
                                                    It is adviced you use Purse bank transfer for investment of more than N2,000,000 for your Agro investments.
                                                </p>

                                                <div className='absolute right-5 top-2' onClick={() => setShowModal(false)} >
                                                    <Link to='/SinglePlanPage'>
                                                        <button type="button" className="text-gray-400 bg-[#5B2E4F]  hover:bg-[#5B2E4F] hover:text-gray-900 rounded-lg text-sm p-1 mr-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                                        </button>
                                                    </Link>
                                                </div>

                                                <div className="pt-10">
                                                    <Link to="/NewInvestmentDetails2">
                                                        <Button text="OK, GOT IT"></Button>
                                                    </Link>  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                            </>
                                ) : null}
                            {/* modal popup ends */}
                        </div>

                        
                        
                    
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default NewInvestmentDetails2
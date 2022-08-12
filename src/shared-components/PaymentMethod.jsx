import { useState } from "react";
import { Link } from "react-router-dom";
import cardellipse from ".././assets/images/cardellipse.svg"
import shoppingbag from ".././assets/images/shopping-bag.png"
import arrow from ".././assets/images/arrow1.png"
import creditcard from ".././assets/images/credit-card.png"
import PrimaryFormField from "./Form/PrimaryFormField";
import Button from "./Form/Button";

const PaymentMethod = () => {

    const [showModal, setShowModal] = useState(false);
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [cardNumber, setCardNumber] = useState("")


    function handleOnSubmit(e) {
        e.preventDefault()
    }

    return(
                        

                        <div className='flex flex-row space-x-16'>
                            <div>
                                <h className="text-[32px] font-[700px] leading-10 BoldFonter">Choose a payment method</h>
                                <p className="text-[16px] font-[300px] leading-6 text-[#7C7F93] pt-4">Before you go, here’s a summary of your savings plan.</p>
                            </div>

                            <div className="rounded-2xl border border-gray-300 p-8">
                                <div className="flex flex-row items-center space-x-4 my-8">
                                    <img src={cardellipse}></img>
                                    <span className="pr-24">
                                        <h className="text-[16px] font-[400px] leading-6">**** 5654</h>
                                        <p className="text-[14px] font-[500px] leading-6 MediumFonter">Guarantee Trust Bank</p>
                                    </span> 
                                    <span className="flex justify-end">
                                        <img src={arrow}></img>
                                    </span>
                                </div><hr/>
                                <div className="flex flex-row items-center space-x-4 my-8">
                                    <img src={cardellipse}></img>
                                    <span className="pr-36">
                                        <h className="text-[16px] font-[400px] leading-6">**** 1234</h>
                                        <p className="text-[14px] font-[500px] leading-6 MediumFonter">Sterling Bank</p>
                                    </span> 
                                    <span className="flex justify-end">
                                        <img src={arrow}></img>
                                    </span>
                                </div><hr/>
                                <div className="flex flex-row items-center space-x-4 my-8">
                                    <img src={creditcard}></img>
                                    <span className="pr-36">
                                        <button className="text-[14px] font-[500px] leading-6 MediumFonter" onClick={() => setShowModal(true)}>Add a new bank card</button>
                                    </span> 
                                </div><hr/>
                                    {/* add bank modal popup */}
                                    {showModal ? (
                                        <>
                                            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                        <div className="p-12">
                                                            <h1 className="text-center BoldFonter mb-2 px-4 text-[24px] font-[700px] leading-8" >Add bank card</h1>
                                                            <p className="text-center text-gray-600 px-4 pb-10 text-[14px] font-[400px] leading-5">
                                                                Enter valid card details
                                                            </p>

                                                            <div className='absolute right-5 top-2' onClick={() => setShowModal(false)} >
                                                                <Link to='/SinglePlanPage'>
                                                                    <button type="button" className="text-gray-400 bg-[#5B2E4F]  hover:bg-[#5B2E4F] hover:text-gray-900 rounded-lg text-sm p-1 mr-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                                                    </button>
                                                                </Link>
                                                            </div>

                                                            <form onSubmit={handleOnSubmit}>
                                                                <div>
                                                                    <label htmlFor="Card number" className="sr-only">Card number</label>
                                                                    <PrimaryFormField type="number" placeholder="Card number" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" onChange={(e) => setCardNumber(e.target.value)} value={cardNumber}/>
                                                                </div><br />
                                                                <div className='flex flex-wrap'>
                                                                    <div className='mb-6 md:mb-0 w-full md:w-1/2 md:pr-3'>
                                                                        <label htmlFor="First name" className="sr-only">First name</label>
                                                                        <PrimaryFormField type="text" placeholder="First name" onChange={(e) => setFirstname(e.target.value)} value={firstname}  />
                                                                    </div><br />
                                                                    <div className='w-full md:w-1/2'>
                                                                    <label htmlFor="lastname" className="sr-only">Last name</label>
                                                                    <PrimaryFormField type="text" placeholder="Lastname" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                                                                    </div><br />
                                                                </div><br/>
                                                                <div>
                                                                    <Link to="/Plans">
                                                                        <Button text="NEXT"></Button>
                                                                    </Link>  
                                                                </div>
                                                                
                                                                
                                                            </form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : null}
                                    {/* modal popup ends */}

                                <div className="flex flex-row items-center space-x-4 my-8">
                                    <img src={shoppingbag}></img>
                                    <span className="pr-40">
                                        <p className="text-[14px] font-[500px] leading-6 MediumFonter">Pay from purse</p>
                                    </span> 
                                    <span className="flex justify-end">
                                        <img src={arrow}></img>
                                    </span>
                                </div>
                            </div>
                        </div>

                    
    )
}

export default PaymentMethod
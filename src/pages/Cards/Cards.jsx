import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import cardbg from "../../assets/images/cardbg.png"
import cardbg2 from "../../assets/images/cardbg2.png"
import Plus from "../../assets/images/Plus.png"
import PrimaryFormField from "../../shared-components/Form/PrimaryFormField"
import Button from "../../shared-components/Form/Button"

const Cards = () => {
    const [showModal, setShowModal] = useState(false);
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [cardNumber, setCardNumber] = useState("")


    function handleOnSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>

            <div>
                <div className="mx-8 mt-8 mb-6 font-bold">
                    <h className="text-[32px] font-[700px] leading-8 ">Banks & Cards</h>
                </div>

                <div className="bg-white p-8 rounded-2xl m-4 border">

                    <div className="flex flex-row  space-x-8 items-center pb-6 ">
                            <div>
                                <Link to="/Cards"><p className='text-[14px] font-[400px] leading-5'>Cards</p></Link>
                            </div>
                            <div className=''>
                                <Link to="/Banks"><p className='text-[14px] font-[400px] leading-5 float-right'>Banks</p></Link>
                            </div>  
                    </div><hr/>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">

                        <div className= "w-72 h-44 max-w-sm rounded-3xl px-6 flex items-center space-x-4 border border-gray-200 shadow-md bg-[#33343D] text-white " style={{ backgroundImage: `url(${cardbg})`, backgroundSize: "", backgroundRepeat: "no-repeat", backgroundPosition: "",}}>
                            {/* <Link to="/CreatePlan">    */}
                                <div className="">
                                    <h2 className="BoldFonter text-[32px] font-[700px] leading-10"> **** 4225 </h2>     
                                </div>
                            {/* </Link>     */}
                        </div>
                        <div className= "w-72 h-44 max-w-sm rounded-3xl px-6 flex items-center border border-gray-200 shadow-md bg-[#265859] text-white " style={{ backgroundImage: `url(${cardbg2})`, backgroundSize: "", backgroundRepeat: "no-repeat", backgroundPosition: "",}}>
                            {/* <Link to="/CreatePlan">    */}
                                <div className="">
                                    <h2 className="BoldFonter text-[32px] font-[700px] leading-10"> **** 4225 </h2>     
                                </div>
                            {/* </Link>     */}
                        </div> 
                       
                            
                        <button className= "grid grid-rows-2 gap-4 pt-5 pr-5 pl-5  bg-white rounded-3xl border border-gray-200 shadow-md " onClick={() => setShowModal(true)}>
                                    <div className="flex flex-row space-x-4 pb-4">
                                        <div className="bg-[#F4CDE0] rounded-full items-center p-4 ">
                                            <img src= {Plus} alt="Plus"/>
                                        </div>  
                                    </div>
                                    <div className='mb-4'>
                                        <h2 className="text-[#B4B5C1] BoldFonter text-[24px] font-[700px] leading-8">Add a new card</h2>
                                    </div>
                        </button> 
                             
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
                        

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Cards
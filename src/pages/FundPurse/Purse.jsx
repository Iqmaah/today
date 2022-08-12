import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import Button from "../../shared-components/Form/Button"
import SavingsHistory from "../../shared-components/SavingsHistory"

const Purse = () => {
    return(
        <div className="flex bg-slate-50 pb-20">
            <Sidebar/>

            <div>
                    <div className="mx-8 mt-8 mb-4 font-bold">
                        <h className="text-[32px] font-[700px] leading-8 ">Purse</h>
                    </div>
                    <div className="mx-8 mb-8">
                        <span className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 "><Link to="/Plans">Purse</Link></span>
                       
                    </div>

                    <div className='mx-8 p-5 md:p-10 rounded-lg bg-[#5B2E4F] w-full' >
                        <div className="mx-auto grid grid-cols-1 gap-10 items-center md:grid-cols-2 md:gap-40 lg:grid-cols-2 lg:gap-96 lg:justify-between text-white">
                            <div>
                                <p className='text-[#FAFAFA] pb-2  text-[14px] font-[400px] leading-5'>Purse Balance</p>
                                <p className='text-[#FFFFFF] text-[20px] font-[700px] leading-10'>N520,000.00</p> 
                            </div>
                            <div className="">
                                <p className='text-[#FAFAFA] pb-2 text-[14px] font-[400px] leading-5'>Account number</p>
                                <p className='text-[#FFFFFF] text-[20px] font-[700px] leading-7'>0123456789</p>
                                <p className='text-[#FFFFFF] text-[12px] font-[400px] leading-4'>Providus bank</p>
                            </div>  
                        </div>
                    </div><br/>

                    <div className="grid grid-cols-2 justify-items-center">
                        <Link to="/FundPurse">
                            <div className="text-white px-12 py-2 rounded-md bg-[#5B2E4F] text-[14px] font-[500px] leading-5"> FUND PURSE</div>
                        </Link>

                        <Link to="/SendMoney1">
                            <div className="text-[#5B2E4F] px-12 py-2 rounded-md border border-[#5B2E4F] text-[14px] font-[500px] leading-5">SEND MONEY</div>
                        </Link>
                            
                    </div> 
                    <br/>

                    
                        <SavingsHistory />
                    

                    


            </div>
        </div>
    )
}

export default Purse
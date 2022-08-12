import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import cocoa from "../../assets/images/cocoa.png"
import maize from "../../assets/images/maize.png"


const NewInvestments = () => {

    const Investments= [
        {
            "id" : "1",
            "name": "Cocoa Farm",
            "status": "Available",
            "tenure" : "24 months",
            "slotprice": "N64,000",
            "rate" : "12%",
            "time" : "5 months",
            "picture": [cocoa]
        },
        {
            "id" : "2",
            "name": "Maize",
            "status": "Available",
            "tenure" : "24 months",
            "slotprice": "N64,000",
            "rate" : "12%",
            "time" : "8 months",
            "picture": [maize]
        }
    ]
    return(
        <div className="flex min-h-screen bg-slate-50">
            <Sidebar/>

            <div className="">
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
                        <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/CreatePlan">Investments</Link></span>
                        <span className="ml-2">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/CreatePlan">Add new investment</Link></span>
                    </div>

                    <div className="bg-white rounded-2xl m-8 px-12 py-8 pb-72 w-full pr-12">
                        <div className="pb-8">
                            <Link to="/CreatePlan">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 12.2739L19.25 12.2739" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.2988 18.2985L4.24883 12.2745L10.2988 6.24951" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-[16px] font-[300px] leading-6 text-[#626375]">Back</span>
                            </Link>
                        </div>
                        <div className="text-[32px] font-[700px] leading-10 BoldFonter mb-10">
                            Add new Investment
                        </div>

                        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {
                                Investments.map((Investment,i) =>
                                    <Link to="/NewInvestmentDetails" key={Investment.id} className="grid grid-rows-2 gap-y-4 p-4 border border-[#F1F1F1] rounded-lg transition ease-in duration-300">  
                                            <div className="flex flex-row space-x-4">
                                                <img className="w-14 rounded-2xl" src={Investment.picture} alt="user" />
                                                <div className="flex flex-col">
                                                    <h2 className="text-2xl font-medium">{Investment.name}</h2>
                                                    <span className="text-gray-700">{Investment.status}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row-3 space-x-4">
                                                <div>
                                                    <h1 className="text-[14px] font-[400px] leading-5 text-[#999999]">Tenure</h1>
                                                    <p className="text-[16px] font-[700px] leading-6 MediumFonter">{Investment.tenure}</p>
                                                </div>
                                                <div>
                                                    <h1 className="text-[14px] font-[400px] leading-5 text-[#999999]">Slot Price</h1>
                                                    <p className="text-[16px] font-[700px] leading-6 MediumFonter">{Investment.slotprice}</p>
                                                </div>
                                                <div>
                                                    <h1 className="text-[14px] font-[400px] leading-5 MediumFonter text-[#D43E8A]">{Investment.rate}</h1>
                                                    <p className="text-[16px] font-[700px] leading-6 text-[#D43E8A]">{Investment.time}</p>
                                                </div>
                                            </div>
                                    </Link>

                                )    
                            }
                            

                        </section>

                    </div>
            </div>

        </div>
    )
}



export default NewInvestments
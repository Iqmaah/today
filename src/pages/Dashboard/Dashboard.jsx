import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from '../../shared-components/Sidebar/Sidebar'
import tobi from './../../assets/images/Tobi.png'
import bgdash from './../../assets/images/bg-dash.png'
import piggybank from './../../assets/images/piggybank.png'
// import Plus from './../../assets/images/Plus.png'
import img1 from './../../assets/images/img1.png'
import img2 from './../../assets/images/img2.svg'
import img3 from './../../assets/images/img3.png'
import EmptyPlan from './EmptyPlan'
import LoginModal from '../Auth/Login/Loginmodal'
import DashboardModal from "../../contexts/DashboardModal"
import { GETwithTOKEN } from "../../services/network/users"



const Dashboard = () => {

  const { showDashboardModal } = useContext(DashboardModal)
  const [availableBalance, setSAvailableBalance] = useState("")
  const [totalSavings, setTotalSavings] = useState("")
  const [totalReturns, setTotalReturns] = useState("")
  const [impactInvestments, setImpactInvestments] = useState()
  const [referralCode, setRefferalCode] = useState("")

useEffect(() => {
    MyStats()
    console.log('USE EFFECT');

}, []);
 
  const MyStats = async () => {
      try{
          console.log('I RAN MY STATSSSSS');
          const response = await GETwithTOKEN('user/mystats')
          console.log(response.data);
          const investments = parseFloat(response.data.data.totalSavings) + parseFloat(response.data.data.totalInterest)
        //   totalSavings
        setSAvailableBalance(response.data.data.totalPurseBalance)
        setTotalSavings(response.data.data.totalSavings)
        setTotalReturns(response.data.data.totalInterest)
        setImpactInvestments(JSON.stringify(investments))
        console.log(investments);
        setRefferalCode(response.data.data.referralCode)
      } catch(error) {
 
      }
  }

    const Plans = [
         
      ]

     

    return(
    <div className="flex bg-slate-50 pb-20">
       { showDashboardModal ?  <LoginModal  /> : null }
        <Sidebar/>

        <div className='mt-6 px-6'>
            
            <div className='flex flex-row space-x-4 pb-2'>
                <img src={tobi} className=" w-14 h-14"></img>
                <div className="">
                    <p className="text-base text-[#B4B5C1] ">Hello,</p>
                    <p className="text-[#B4B5C1] text-lg font-bold">Oluwatobi</p>
                </div> 
            </div>


            {/* <div className='w-full p-5 md:p-10 rounded-lg mx-auto flex flex-row space-16 items-center lg:grid-cols-12 lg:justify-between text-white' style={{ backgroundImage: `url(${bgdash})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "" }}> */}
            <div className="w-full relative mt-3">
                <div className='flex flex-row flex-wrap p-5 md:p-12 justify-evenly rounded-lg w-full centered text-white' style={{ backgroundImage: `url(${bgdash})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "" }}>
                        <div>
                            <p className='text-[#FAFAFA] pb-2  text-[14px] font-[400px] leading-5'>Available Balance</p>
                            <p className='text-[#FFFFFF] text-[20px] font-[700px] leading-10'>₦{availableBalance? availableBalance : "00.00" }</p> 
                        </div>
                        <div>
                            <p className='text-[#FAFAFA] pb-2 text-[14px] font-[400px] leading-5'>Impact Investments</p>
                            <p className='text-[#FFFFFF] text-[20px] font-[700px] leading-10'>₦{impactInvestments? impactInvestments : "00.00"}</p>
                        </div>
                        <div>
                            <p className='text-[#FAFAFA] pb-2 text-[14px] font-[400px] leading-5'>Total Savings</p>
                            <p className='text-[#FFFFFF] text-[20px] font-[700px] leading-10'>₦{totalSavings? totalSavings : "00.00"}</p>
                        </div>
                        <div>
                            <p className='text-[#FAFAFA] pb-2 text-[14px] font-[400px] leading-5'>Total Returns</p>
                            <p className='text-[#FFFFFF] text-[20px] font-[700px] leading-10'>₦{totalReturns ? totalReturns : "00.00"}</p>
                        </div>  
                    
                </div>
            </div><br/>
            


            <div>
                  <h1 className='font-bold text-[#B4B5C1]' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "16px", lineHeight: "43.2px"}}>Watch your plans</h1>
                  <p className='text-[#B4B5C1]' style={{fontFamily: 'Satoshi', fontWeight: "500px",fontSize: "16px", lineHeight: "24px"}}>A goal without a plan is just a wish</p>
            </div><br/>

            {
                (Plans.length === 0) ?
                    <EmptyPlan/>
                    :
                (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {
                                Plans.map((Plan,i) => 

                                    <div key={Plan.id} className= "grid grid-rows-2 gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
                                            <div  className="flex flex-row space-x-4">
                                                <div className="bg-[#F4CDE0] rounded-full items-center p-4 ">
                                                    <img src= {piggybank} alt="piggybank"/>
                                                </div> 
                                                <span><h2 className="text-sm pt-2 text-[16px] font-[400px] leading-6">{Plan.name}</h2></span>
                                            </div>

                                            <div>
                                                <h2 className="BoldFonter pb-2 text-[24px] font-[700px] leading-8">{Plan.amount}</h2>
                                                    
                                                <div className="w-full bg-gray-300 h-1">
                                                    <div className="bg-[#265859] h-1" style={{width: "45%"}}></div>
                                                </div>  
                                            </div>
                                    </div>
                                    
                                    
                                )   
                            } 
                        </div>   
                        
                )
            }<br/>    

            {/* control */}
                {/* <div class=" top-1/2 w-full flex justify-between z-20">
                     <label for="carousel-3" class="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                     </svg>
                     </label>
                     <label for="carousel-2" class="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                     </svg>
                     </label>
                </div> */}

            {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    NewPlans.map((NewPlan,i) => 

                        <div key={NewPlan.id} className= "grid grid-rows-2 gap-4 pt-5 pr-5 pl-5  bg-white rounded-lg border border-gray-200 shadow-md ">
                            <div className="relative flex flex-row space-x-4">
                                <div className="bg-[#F4CDE0] rounded-full items-center p-4 ">
                                    <img src= {NewPlan.picture} alt="piggybank"/>
                                </div> 
                                <span><h2 className="text-sm pt-2" style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>{NewPlan.name}</h2></span>
                            </div>

                            <div className='flex justify-end mt-2 text-[#265859]'>
                                <h2 className="" style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>{NewPlan.create}</h2> 
                            </div>
                        </div>   
                    )
                } 
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                <div className= "grid grid-rows-2 gap-4 p-6 h-48 max-w-sm rounded-lg border border-gray-200 shadow-md bg-[#5B2E4F] text-white" style={{ backgroundImage: `url(${img1})`, backgroundSize: "", backgroundRepeat: "no-repeat", backgroundPosition: "right",}}>
                    <Link to="/CreatePlan">   
                        <div className="">
                            <h2 className="BoldFonter text-[16px] font-[700px] leading-5 pb-2"> Create a savings plan </h2>  
                            <p className="text-[10px] font-[400px] leading-3"> Earn up to 12% </p> 
                        </div>
                    </Link>    
                </div> 

                {/* <div className= "grid grid-rows-2 gap-4 p-6 h-48 max-w-sm rounded-lg border  border-gray-200 shadow-md bg-[#265859] text-white" style={{ backgroundImage: `url(${img2})`, backgroundSize: "", backgroundRepeat: "no-repeat", backgroundPosition: "right",}}>
                        <div className="">
                            <h2 className="BoldFonter text-[16px] font-[700px] leading-5"> Invest in a Female</h2> 
                            <h2 className="BoldFonter text-[16px] font-[700px] leading-5 pb-2">Farmer </h2>
                            <p className="text-[10px] font-[400px] leading-3"> Get competitive returns per annum</p>
                            
                        </div>
                </div>  */}
                <div
                    style={{ backgroundColor: "#265859" }}
                    className="flex flex-row h-48 drop-shadow w-full max-w-xs mb-10 pl-5 py-4 text-left rounded-xl text-white"
                    >
                    <div className="w-2/3">
                        <p className="boldText ">Invest in a Female Farmer</p>
                        <small>Get up to 25% returns per anum</small>
                    </div>
                    <img alt="icon" src={img2} className="w-36 -mb-4" />
                </div>


                <div className= "grid grid-rows-2 gap-4 p-6 h-48 max-w-sm rounded-lg border border-gray-200 shadow-md bg-[#F2F1F3]" style={{ backgroundImage: `url(${img3})`, backgroundSize: "", backgroundRepeat: "no-repeat", backgroundPosition: "right",}}>
                        <div className="">
                            <h2 className="text-[#5B2E4F] BoldFonter text-[16px] font-[700px] leading-5"> Invite your girls to  </h2> 
                            <h2 className="text-[#5B2E4F] BoldFonter text-[16px] font-[700px] leading-5 pb-2">HerVest </h2> 
                            <p className="text-xs pb-2 text-[10px] font-[400px] leading-"> Share your girl code</p>
                            
                        </div>
                        <div className="mt-5 flex flex-row space-x-4">
                            <div to="" className="inline-flex items-center text-[16px] font-[700px] leading-5 py-1 px-3 BoldFonter text-center text-white bg-[#5B2E4F] rounded-lg ">
                                {referralCode}   
                            </div>
                            <div>
                                <button className="text-[#265859] inline-flex items-center text-[16px] font-[700px] leading-5 pt-3">
                                    Share
                                </button>
                            </div>
                    
                        </div>
                </div> 

            </div>
        

        </div>
  
    </div>
    )
}


export default Dashboard

import arrow from '../assets/images/savingsarrow.png'

const ReferralEarningHistory = () => {

    const Earnings =[
        {
            id:1,
            name: "Earnings",
            amount: "N32,000",
            category: "Savings",
        },

        {
            id:2,
            name: "Savings",
            amount: "N32,000",
            category: "Savings",
        },

        {
            id:3,
            name: "Earnings",
            amount: "N32,000",
            category: "Savings",
        },

        {
            id:4,
            name: "Earnings",
            amount: "N32,000",
            category: "Savings",
        },

        {
            id:5,
            name: "Earnings",
            amount: "N32,000",
            category: "Savings",
        },
        
    ]

    return(
        <div className="bg-white p-8 rounded-2xl m-8 border">
                <div className="flex flex-row items-center justify-between pb-6 ">
                    <div>
                        <p className='text-[14px] font-[400px] leading-5'>Referral earning history</p>
                    </div>
                    <div className=''>
                        <p className='text-[14px] font-[400px] leading-5 float-right'>View all</p>
                    </div> 
                </div><hr/>

                <div className="grid grid-rows gap-4"> 
                    {
                        Earnings.map((Earning,i) =>

                            <div key={Earning.id} className="flex flex-row justify-between pt-6">
                                <div className='flex flex-row items-center' >
                                    <span><img src={arrow}></img></span>
                                    <span className='text-[14px] font-[400px] leading-6 pl-8'>{Earning.name}</span>
                                </div>

                                <div className='flex items-center'>
                                    <div className='text-[16px] font-[400px] leading-6'> {Earning.amount} </div>
                                </div>
                            </div>
                        
                    
                    
                    )}
                    
                </div>

        </div>
    )
}

export default ReferralEarningHistory
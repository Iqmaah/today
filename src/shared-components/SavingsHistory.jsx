import arrow from '../assets/images/savingsarrow.png'

const SavingsHistory = () => {

    const Savings =[
        {
            id:1,
            name: "Savings",
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
            name: "Savings",
            amount: "N32,000",
            category: "Savings",
        },

        {
            id:4,
            name: "Savings",
            amount: "N32,000",
            category: "Savings",
        },

        {
            id:5,
            name: "Savings",
            amount: "N32,000",
            category: "Savings",
        },
        
    ]

    return(
        <div className="bg-white p-8 rounded-2xl ml-8 border" style={{width:"920px"}}>
                <div className="flex flex-row items-center justify-between pb-6 ">
                    <div>
                        <p className='text-[14px] font-[400px] leading-5'>Savings history</p>
                    </div>
                    <div className=''>
                        <p className='text-[14px] font-[400px] leading-5 float-right'>View all</p>
                    </div> 
                </div><hr/>

                <div className="grid grid-rows gap-4"> 
                    {
                        Savings.map((Saving,i) =>

                            <div key={Saving.id} className="flex flex-row justify-between pt-6">
                                <div className='flex flex-row items-center' >
                                    <span><img src={arrow}></img></span>
                                    <span className='text-[14px] font-[400px] leading-6 pl-8'>{Saving.name}</span>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='text-[16px] font-[400px] leading-6'> {Saving.amount} </div>
                                    <div className='text-[12px] font-[700px] leading-5'> {Saving.category} </div> 
                                </div>
                            </div>
                        
                    
                    
                    )}
                    
                </div>

        </div>
    )
}

export default SavingsHistory
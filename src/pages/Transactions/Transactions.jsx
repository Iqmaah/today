import Sidebar from "../../shared-components/Sidebar/Sidebar"
import document from "../../assets/images/Document.png"
import iconly from "../../assets/images/Iconly.png"

const Transactions= () => {

    const Transactions =[
        {
            id:1, 
            name: "Purse",
            amount: "N32,000",
            date: "Mar 20, 2019 23:14",
            image: [document],
        },

        {
            id:2,
            name: "Harvard MBA",
            amount: "N32,000",
            date: "Mar 20, 2019 23:14",
            image: [iconly],
        },

        {
            id:3,
            name: "Purse",
            amount: "N32,000",
            date: "Mar 20, 2019 23:14",
            image: [document],
        },

        {
            id:4,
            name: "Purse",
            amount: "N32,000",
            date: "Mar 20, 2019 23:14",
            image: [document],
        },

        {
            id:5,
            name: "Retirement Plan",
            amount: "N32,000",
            date: "Mar 20, 2019 23:14",
            image: [document],
        },

        {
            id:6,
            name: "Harvard MBA",
            amount: "N32,000",
            date: "Mar 20, 2019 23:14",
            image: [iconly],
        },

        {
            id:7,
            name: "Cassava Agroinvest",
            amount: "N32,000",
            date: "Mar 20, 2019 23:14",
            image: [iconly],
        },

        {
            id:8,
            name: "Purse name",
            amount: "N32,000",
            date: "Mar 20, 2019 23:14",
            image: [document],
        },
        
    ]

    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>

            <div>
                <div className="mx-8 mt-8 mb-6 font-bold">
                    <h classname="text-[32px] font-[700px] leading-8 ">Transactions</h>
                </div>

                <div className="bg-white p-8 rounded-2xl m-4 border">
                    <div className="flex flex-row  space-x-8 items-center pb-6  ">
                        <div>
                            <p className='text-[14px] font-[400px] leading-5'>All</p>
                        </div>
                        <div className=''>
                            <p className='text-[14px] font-[400px] leading-5 float-right'>Savings</p>
                        </div>
                        <div className=''>
                            <p className='text-[14px] font-[400px] leading-5 float-right'>Purse</p>
                        </div>
                        <div className=''>
                            <p className='text-[14px] font-[400px] leading-5 float-right'>Refferals</p>
                        </div> 
                    </div><hr/>

                    <div className="grid grid-rows gap-4"> 
                        {
                            Transactions.map((Transaction,i) =>

                                <div key={Transaction.id} className="flex flex-row pt-6 justify-between" style={{ width: "900px"}}>
                                    <div className="flex">
                                        <span><img src={Transaction.image}></img></span>
                                        <span className='flex flex-col items-center pl-2' >
                                            <div className='text-[14px] font-[400px] leading-6 '>{Transaction.name}</div>
                                            <div className='text-[12px] font-[700px] leading-5 text-[#B4B5C1] pl-6'> {Transaction.date} </div>
                                        </span>
                                    </div>

                                    <div className='flex justify-end'>
                                        <div className='text-[16px] font-[400px] leading-6'> {Transaction.amount} </div>
                                    </div>
                                    
                                    
                                </div>
                            
                        
                        
                        )}
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Transactions
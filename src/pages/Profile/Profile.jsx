import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import PrimaryFormField from "../../shared-components/Form/PrimaryFormField"
import Button from "../../shared-components/Form/Button"
import profilepic from "../../assets/images/profilepic.png"
import camera from "../../assets/images/camera.png"


const Profile = () => {

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [date, setDate] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [bvn, setBVN] = useState("")
    const [relationship, setRelationship] = useState("")
    const [OldPassword, setOldPassword] = useState("")
    const [confirmOldPassword, setConfirmOldPassword] = useState("")
    const [newPassword, setnewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")


    function handleOnSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>

            <div className="w-full mr-8">
                <div className="mx-8 mt-8 mb-6 font-bold">
                    <h classname="text-[32px] font-[700px] leading-8 ">Profile</h>
                </div>

                <div className="bg-white p-8 rounded-2xl m-4  border w-full">

                    <div className="pb-6 ">
                        <div>
                            <p className='text-[16px] font-[700px] leading-5 text-[#666666] BoldFonter'>Personal Information</p>
                        </div>
                    </div><hr/>
                    {/* Personal info */}
                    <form className="w-full max-w-sm mt-10 mb-10">

                        <div className="md:grid grid-cols-2 gap-x-12 w-full">
                            <div className="">
                                <label className="block pt-8 text-[20px] font-[500px] leading-7 MediumFonter mb-1 md:mb-0" for="inline-phone-number">
                                    Profile Picture
                                </label>
                            </div>
                            <div className="relative"> 
                                <img className="w-32 rounded-full ml-12" src={profilepic}></img>
                                <img className="absolute -bottom-2 right-0" src={camera}></img>
                            </div><br /><br/>
                        </div>
                        <div className="md:grid grid-cols-2 gap-x-12">
                            <div className="">
                                <label class=" text-[20px] font-[500px] leading-7 MediumFonter mb-1" for="inline-full-name">
                                    Full Name
                                </label>
                            </div>
                            <div className=" flex flex-wrap w-full  md:w-80">
                                <div className='mb-6 w-full md:w-1/2 md:pr-2'>
                                    <label htmlFor="firstname" className="sr-only">Firstname</label>
                                    <PrimaryFormField type="text" placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname}  />
                                </div><br />
                                <div className='w-full md:w-1/2 md:pl-2'>
                                    <label htmlFor="lastname" className="sr-only">Lastname</label>
                                    <PrimaryFormField type="text" placeholder="Lastname" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                                </div><br />
                            </div>
                        </div>

                        <div className="md:grid grid-cols-2 gap-x-12 w-full">
                            <div className="">
                                <label className="block text-[20px] font-[500px] leading-7 MediumFonter mb-1 md:mb-0" for="inline-phone-number">
                                    Phone number
                                </label>
                            </div>
                            <div className="w-full md:w-80"> 
                                <PrimaryFormField type="text" placeholder="Phone number"  onChange={(e) => setPhone(e.target.value)} value={phone}  />
                            </div><br /> 
                        </div>
                        
                        <div className="md:grid grid-cols-2 gap-x-12 w-full">
                            <div className="">
                                <label className="block text-[20px] font-[500px] leading-7 MediumFonter mb-1 md:mb-0" for="inline-date-of-birth">
                                    Date of birth
                                </label>
                            </div>
                            <div className="w-full md:w-80"> 
                                <PrimaryFormField type="text" placeholder="10th August, 1998"  onChange={(e) => setDate(e.target.value)} value={date}  />
                            </div><br /> 
                        </div>

                        <div className="md:grid grid-cols-2 gap-x-12 w-full">
                            <div className="">
                                <label className="block text-[20px] font-[500px] leading-7 MediumFonter mb-1 md:mb-0" for="inline-address">
                                    Address
                                </label>
                            </div>
                            <div className="w-80"> 
                                <PrimaryFormField type="text" placeholder="8 Asiawu Adebola, Ajanakum Kwara state ..."  onChange={(e) => setAddress(e.target.value)} value={address}  />
                            </div><br /> 
                        </div>
                    </form>

                    <div className="pb-6 ">
                        <div>
                            <p className='text-[16px] font-[700px] leading-5 text-[#666666] BoldFonter'>Next of kin</p>
                        </div>
                    </div><hr/>
                    {/* Next of kin */}
                    <form className="w-full max-w-sm mt-10 mb-10">

                        <div className="md:grid grid-cols-2 gap-x-12">
                            <div className="">
                                <label class=" text-[20px] font-[500px] leading-7 MediumFonter mb-1" for="inline-full-name">
                                    Full Name
                                </label>
                            </div>
                            <div className=" flex flex-wrap w-80">
                                <div className='mb-6 w-full md:w-1/2 md:pr-2'>
                                    <label htmlFor="firstname" className="sr-only">Firstname</label>
                                    <PrimaryFormField type="text" placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname}  />
                                </div><br />
                                <div className='w-full md:w-1/2 md:pl-2'>
                                    <label htmlFor="lastname" className="sr-only">Lastname</label>
                                    <PrimaryFormField type="text" placeholder="Lastname" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                                </div><br />
                            </div>
                        </div>

                        <div className="md:grid grid-cols-2 gap-x-12 w-full">
                            <div className="">
                                <label className="block text-[20px] font-[500px] leading-7 MediumFonter mb-1 md:mb-0" for="inline-phone-number">
                                    Phone number
                                </label>
                            </div>
                            <div className="w-80"> 
                                <PrimaryFormField type="text" placeholder="Phone number"  onChange={(e) => setPhone(e.target.value)} value={phone}  />
                            </div><br /> 
                        </div>

                        <div className="md:grid grid-cols-2 gap-x-12 w-full">
                            <div className="">
                                <label className="block text-[20px] font-[500px] leading-7 MediumFonter mb-1 md:mb-0" for="inline-address">
                                    Address
                                </label>
                            </div>
                            <div className="w-80"> 
                                <PrimaryFormField type="text" placeholder="8 Asiawu Adebola, Ajanakum Kwara state ..."  onChange={(e) => setAddress(e.target.value)} value={address}  />
                            </div><br /> 
                        </div>

                        <div className="md:grid grid-cols-2 gap-x-12 w-full">
                            <div className="">
                                <label className="block text-[20px] font-[500px] leading-7 MediumFonter mb-1 md:mb-0" for="inline-relationship">
                                    Relationship
                                </label>
                            </div>
                            <div className="w-80"> 
                                <PrimaryFormField type="text" placeholder="Sister"  onChange={(e) => setRelationship(e.target.value)} value={relationship}  />
                            </div><br /> 
                        </div>
                    </form>

                    {/* Security */}
                    <div className="pb-6 ">
                        <div>
                            <p className='text-[16px] font-[700px] leading-5 text-[#666666] BoldFonter'>Security</p>
                        </div>
                    </div><hr/>

                    <form className="w-full max-w-sm mt-20 mb-16">

                        <div className="md:grid grid-cols-2 gap-x-12 w-full">
                            <div className="">
                                <label className="block text-[20px] font-[500px] leading-7 MediumFonter mb-1 md:mb-0" for="inline-phone-number">
                                    Verified Email
                                </label>
                            </div>
                            <div className="w-80"> 
                                <PrimaryFormField type="text" placeholder="johnoe.doe@gmail.com"  onChange={(e) => setEmail(e.target.value)} value={email}  />
                            </div><br /> 
                        </div>
                        
                        <div className="md:grid grid-cols-2 gap-x-12 w-full">
                            <div className="">
                                <label className="block text-[20px] font-[500px] leading-7 MediumFonter mb-1 md:mb-0" for="inline-date-of-birth">
                                    BVN
                                </label>
                            </div>
                            <div className="w-80"> 
                                <PrimaryFormField type="number" placeholder="22245677890"  onChange={(e) => setBVN(e.target.value)} value={bvn}  />
                            </div><br /> 
                        </div>

                        <div className="md:grid grid-cols-2 gap-x-12 w-full">
                            <div className="">
                                <label className="block text-[20px] font-[500px] leading-7 MediumFonter mb-1 md:mb-0" for="inline-address">
                                    Change Password
                                </label>
                            </div>
                            <div className=""> 
                                <button onClick={() => setShowModal(true)}>
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1L8.5 8L1.5 15" stroke="#200E32" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div><br /> 
                        </div>
                         {/* change password modal popup */}
                         {showModal ? (
                                        <>
                                            <div className="flex justify-center items-center overflow-x-hidden transition-opacity bg-opacity-75 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                                                    <div className="border-0 rounded-3xl shadow-lg relative  flex flex-col w-full bg-white outline-none focus:outline-none">
                                                        <div className="p-28">
                                                            <h1 className="text-center BoldFonter mb-8 px-4 text-[24px] font-[700px] leading-8" >Change password</h1>
                                                            

                                                            <div className='absolute right-5 top-2' onClick={() => setShowModal(false)} >
                                                                <Link to='/Profile'>
                                                                    <button type="button" className="text-gray-400 bg-[#5B2E4F]  hover:bg-[#5B2E4F] hover:text-gray-900 rounded-lg text-sm p-1 mr-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                                                    </button>
                                                                </Link>
                                                            </div>

                                                            <form onSubmit={handleOnSubmit}>
                                                                <div>
                                                                    <label htmlFor="password" className="sr-only">Old password</label>
                                                                    <PrimaryFormField type="password" placeholder="Old password"  onChange={(e) => setOldPassword(e.target.value)} value={OldPassword}/>
                                                                </div><br />
                                                                <div className="mb-8">
                                                                    <label htmlFor="confirm-old-password" className="sr-only">Confirm old password</label>
                                                                    <PrimaryFormField type="confirm-password" placeholder="Confirm old password"  onChange={(e) => setConfirmOldPassword(e.target.value)} value={confirmOldPassword}/>
                                                                </div><br />
                                                               
                                                                <div>
                                                                    <Link to="">
                                                                        <Button text="NEXT" onClick={() => setShowModal1(true)}></Button>
                                                                    </Link>  
                                                                </div>
                                                                {/* change password modal popup */}
                                                                    {showModal1 ? (
                                                                                    <>
                                                                                        <div className="flex justify-center items-center overflow-x-hidden transition-opacity bg-opacity-75 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                                                            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                                                                                                <div className="border-0 rounded-3xl shadow-lg relative  flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                                                    <div className="p-28">
                                                                                                        <h1 className="text-center BoldFonter mb-8 px-4 text-[24px] font-[700px] leading-8" >Change password</h1>
                                                                                                        
                                                                                                        <form onSubmit={handleOnSubmit}>
                                                                                                            <div>
                                                                                                                <label htmlFor="password" className="sr-only">Enter new password</label>
                                                                                                                <PrimaryFormField type="password" placeholder="Enter new password"  onChange={(e) => setnewPassword(e.target.value)} value={newPassword}/>
                                                                                                            </div><br />
                                                                                                            <div className="mb-8">
                                                                                                                <label htmlFor="confirm-old-password" className="sr-only">Confirm new password</label>
                                                                                                                <PrimaryFormField type="confirm-password" placeholder="Confirm new password"  onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword}/>
                                                                                                            </div><br />
                                                                                                        
                                                                                                            <div>
                                                                                                                <Link to="/Plans">
                                                                                                                    <Button text="NEXT" onClick={() => setShowModal(false)}></Button>
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
                                                                
                                                                
                                                            </form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : null}
                                    {/* modal popup ends */}

                        <div className="md:grid grid-cols-2 gap-x-12 w-full">
                            <div className="">
                                <label className="block text-[20px] font-[500px] leading-7 MediumFonter mb-1 md:mb-0" for="inline-address">
                                    Update PIN
                                </label>
                            </div>
                            <div className=""> 
                                <button onClick={() => setShowModal(true)}>
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1L8.5 8L1.5 15" stroke="#200E32" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div><br /> 
                        </div>
                         
                    </form>
                
                    <div className="w-fit">
                        <Link to="/Profile">
                            <Button text="SAVE CHANGES"></Button>
                        </Link>  
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Profile
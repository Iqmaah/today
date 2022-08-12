import { useState } from 'react'
import { Link } from 'react-router-dom'
import Union from './../../assets/images/union.png'
import './Sidebar.css'

const Sidebar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <nav>

            <section className='MOBILE-MENU md:hidden'>

                <div className="HAMBURGER-ICON w-full space-y-2 p-5"  onClick={() => setIsNavOpen((prev) => !prev)}>
                    <span className="block h-0.5 w-8 animate-pulse bg-[#E2698D]"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-[#E2698D]"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-[#E2698D]"></span>
                </div>   

                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    

                        <div 
                        className="CROSS-ICON absolute -top-8 inset-y-0 left-52 px-0 py-8"
                        onClick={() => setIsNavOpen(false)}>
                        <svg
                            style={{float:"right"}}
                            className="h-8 w-8 text-[#E2698D]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        </div>

                    <div className='hidden sm:block w-60 bg-white border-r border-gray-200'>
                        <div className="p-6">

                            <div className='pb-10 flex align-items-end justify-content-center'>
                                <img src={Union} alt='Union' style={{ display: "inline" }} className="mr-4" />
                                {/* <img src={HerVest} alt='HerVest' style={{display:"inline"}}/>  */}
                                {/* <h1 className="text-[#5B2E4F] font-bold text-2xl">HerVest</h1> */}
                            </div>

                            <h3 className="  mt-2">MENU</h3>
                            <ul className="list-none px-4 pt-4">
                                <li>
                                    <div className="pt-2 pb-5 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] pb-2 pl-2 rounded ">
                                        <Link to="/Dashboard"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                            <span className="text-gray-600 ml-4">Dashboard</span>
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                        <Link to="/Plans"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                            <span className='ml-4'>Plans</span>
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Purse"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                        </svg>
                                            <span className='ml-4'>Purse</span>
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Transactions"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                            <span className='ml-4'>Transactions</span>
                                    </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Cards"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                        </svg>
                                            <span className='ml-4'>Bank & Cards</span>
                                    </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Refferal1"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                        </svg>
                                            <span className='ml-4'>Girl Code</span>
                                    </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Profile"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                            <span className='ml-4'>Profile</span>
                                    </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Purse"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                        </svg>
                                            <span className='ml-4'>Portfolio</span>
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Purse"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                            <span className='ml-4'>About HerVest</span>
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Purse"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                        </svg>
                                            <span className='ml-4'>Support</span>
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Purse"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                            <span className='ml-4'>Logout</span>
                                        </Link>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

            </section>

            <section>
                <div className='hidden md:block w-60 bg-white border-r border-gray-200'>
                    <div className="p-6">

                        <div className='pb-10 flex align-items-end justify-content-center'>
                            <img src={Union} alt='Union' style={{ display: "inline" }} className="mr-4" />
                            {/* <img src={HerVest} alt='HerVest' style={{display:"inline"}}/>  */}
                            {/* <h1 className="text-[#5B2E4F] font-bold text-2xl">HerVest</h1> */}
                        </div>

                        <h3 className="  mt-2">MENU</h3>
                        <ul className="list-none px-4 pt-4">
                            <li>
                                <div className="pt-2 pb-5 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] pb-2 pl-2 rounded ">
                                    <Link to="/Dashboard"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                        <span className="text-gray-600 ml-4">Dashboard</span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Plans"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                        <span className='ml-4'>Plans</span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Purse"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                    </svg>
                                        <span className='ml-4'>Purse</span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                    <Link to="/Transactions"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                    </svg>
                                        <span className='ml-4'>Transactions</span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                <Link to="/Cards"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                    </svg>
                                        <span className='ml-4'>Bank & Cards</span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                <Link to="/Referral1"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                        <span className='ml-4'>Girl Code</span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                <Link to="/Profile"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                        <span className='ml-4'>Profile</span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                <Link to="/Purse"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                    </svg>
                                        <span className='ml-4'>Portfolio</span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                <Link to="/Purse"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                        <span className='ml-4'>About HerVest</span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                <Link to="/Purse"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                    </svg>
                                        <span className='ml-4'>Support</span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="pb-5 text-gray-600 hover:text-[#5B2E4F] hover:bg-[#FDF6F8] py-2 pl-2 rounded">
                                <Link to="/Purse"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                        <span className='ml-4'>Logout</span>
                                    </Link>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </section>

        </nav>
    )
}

export default Sidebar
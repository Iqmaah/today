import { Link } from 'react-router-dom'
import welcome from '../../../assets/images/welcome.svg'
import Button from '../../../shared-components/Form/Button'



const Welcome = () => {
    return(
        <div className=' grid place-content-center h-screen'>
            <div className="bg-white my-16 py-28 px-20 rounded-xl">
                <img src={welcome} className=""></img>
                <p className='BoldFonter text-center text-[32px] font-[900px] text-[#5B2E4F] leading-10 mb-2'>Welcome to HerVest</p>
                <p className='text-[17px] font-[400px] leading-6 mb-16'>Your account has been created successfully!</p>

                <div>
                    <Link to="/Dashboard">
                        <Button text="PROCEED"></Button>
                    </Link>  
                </div>
            </div>
            
        </div>
    )
}
// onClick={()=> localStorage.clear()}


export default Welcome
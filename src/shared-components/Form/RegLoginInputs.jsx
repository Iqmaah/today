import { FaEye } from "react-icons/fa";

const RegLoginInputs = ({ type, icon, label, placeholder, onChange, value,id, ...props }) => {

    return (
        <>
        <label htmlFor="lastname" className="text-[13px] font-[500px] leading-5">{label}</label>
            <div className="mt-3.5 ml-2 absolute z-10 h-5 w-5" aria-hidden="false">
                    {/* {icon} */}
                    <img src={icon}></img>
            </div>

            <input
                type={type || "text"}
                required
                value={value}
                className="pl-8 appearance-none rounded-md relative block w-full
             px-3 py-3 text-[14px] font-[300px] leading-5 bg-[#F8F1F6] placeholder-[#33343D]
             text-gray-900 hover:border-[#D43E8A] focus:outline-none focus:ring-[#D43E8A]
              focus:border-[#D43E8A] focus:z-10 sm:text-sm placeholder:text-[13px] font-[500px] leading-5 "
                placeholder={placeholder || "Fill in the details"}
                onChange={onChange}
                id={id}
                {...props}
                onSubmit={(e) => e.preventDefault()}
            />
        </>
    )
}

export default RegLoginInputs
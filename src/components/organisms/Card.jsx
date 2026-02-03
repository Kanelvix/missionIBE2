import FormField from "../molecules/FormField";
import google from "../../assets/google-icon.svg";
import PhoneNumberField from "../molecules/PhoneNumberField";
import { Link, NavLink } from "react-router";
import Button from "../atoms/Button";

const Card = (props) => {
  return (
    <div className='h-full mt-20 py-8'>
      <div className='flex flex-col items-center px-5 py-6 bg-white w-80 md:w-[520px] gap-7 rounded-md border-[1px] border-[#F1F1F1]'>
        <div className='flex flex-col items-center gap-2 text-center'>
          <p className='text-[#222325] font-bold text-2xl'>{props.title}</p>
          <p>{props.text}</p>
        </div>
        <form className='w-full flex flex-col gap-5'>
          {props.fields.map((field) => (
            field.type === "phone" ? (
              <PhoneNumberField 
                key={field.name} 
                label={field.label}
              />
            ) : (
              <FormField 
                key={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                options={field.options}
              />
            )
          ))}
          <p className='text-right text-[#333333AD] hover:text-[#9E9E9E] duration-100 cursor-pointer text-sm my-2 font-medium'>Lupa Password?</p>
        </form>
        <div className='flex flex-col gap-4 w-full'>
          <Button color="#FFFFFF" text={props.btnText1} bg="#3ECF4C" />
          <NavLink to={`/${props.toPage}`} className=''>
            <Button color="#3ECF4C" text={props.btnText2} bg="#E2FCD9CC" />
          </NavLink>
        </div>

        <div className='flex items-center w-full before:flex-1 before:content-[""] before:h-0.5 before:bg-[#3A35411F] before:m-1 after:flex-1 after:content-[""] after:h-0.5 after:bg-[#3A35411F] after:m-1'>
          <p className='text-[#4A505C] text-sm'>atau</p>
        </div>

        <button className='h-10 text-[#4A505C] bg-transparent rounded-lg font-semibold cursor-pointer hover:bg-[#F9FAFC] duration-100 w-full flex items-center justify-center gap-1 border-[1px] border-[#3A35411F]'>
          <img src={google} alt="google-icon"/>
          {props.btnText1} dengan Google
        </button>
      </div>
    </div>
  );
};

export default Card;
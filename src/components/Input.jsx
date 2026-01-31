import eyeIcon from '../assets/eye-off.svg'

const Input = (props) => {
  return (
    <div className="relative">
      <input 
        className={`h-12 p-3 rounded-lg outline-none border-2 border-[#3A35411F] w-full placeholder:text-[#33333360] ${props.type === "password" && "pr-12"}`}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.type === "password" && <img src={eyeIcon} alt="eye-off" className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer hover:opacity-80 duration-100" />}
    </div>
  );
};

export default Input;

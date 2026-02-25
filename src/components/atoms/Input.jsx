import eyeIcon from '../../assets/eye-off.svg'

const Input = ( {type, placeholder, required} ) => {
  return (
    <div className='relative'>
      <input 
        className={`h-12 p-3 rounded-lg outline-none border-2 border-[--border-color] w-full placeholder:text-[#33333360] ${type === "password" && "pr-12"}`}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {type === "password" && <img src={eyeIcon} alt="eye-off" className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer hover:opacity-80 duration-100' />}
    </div>
  );
};

export default Input;

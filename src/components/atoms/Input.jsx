import eyeIcon from '../../assets/eye-off.svg'

const Input = ( {type, placeholder, required, value, setSearch, inputType, onChange, setCurrentPage} ) => {
  return (
    <div className='relative'>
      <input 
        className={`
          h-12 p-3 rounded-lg outline-none border-[--border-color] w-full placeholder:text-[--base-color]
          ${type === "search" ? "border" : "border-2"}
          ${type === "password" && "pr-12"}
          ${type === "search" && "placeholder:font-medium pr-12"}
        `}
        type={type}
        placeholder={placeholder}
        onChange={inputType === 'search' ? (e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        } : onChange}
        required={required}
        value={value}
      />
      {type === "password" && <img src={eyeIcon} alt="eye-off" className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer hover:opacity-80 duration-100' />}
    </div>
  );
};

export default Input;

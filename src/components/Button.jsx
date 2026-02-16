const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
    return (
      <button className={`flex justify-center items-center gap-2 
          px-7 py-4 border font-montserrat text-lg leading-none rounded-lg ${fullWidth && 'w-full'}
            ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` 
            : 'bg-cyan-blue  text-white'}`}>
          {label}
          {iconURL && <img src={iconURL}
              alt="arrow right icon"
              className="ml-2 rounded-md w-5 h-5"
              >
          </img>}
      </button>
    )
  }
  
  export default Button
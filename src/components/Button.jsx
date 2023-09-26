const Button = ({
    variant = 'default',
    additionalStyles,
    isSubmit = false,
    isDisabled = false,
    justifyStart = false,
    onClick,
    children,
  }) => {
    const ButtonStyles = {
      default: 'bg-primary',
      custom: '',
      disabled: 'cursor-not-allowed bg-gray-100',
    };
  
    return (
      <button
        className={`${additionalStyles} ${justifyStart ? 'justify-start' : 'justify-center' } flex items-center hover:shadow-lg rounded-lg ${ButtonStyles[variant]} `}
        disabled={isDisabled}
        type={isSubmit ? 'submit' : 'button'}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;

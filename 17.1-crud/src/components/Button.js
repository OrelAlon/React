const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        className='btn btn-wide'
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

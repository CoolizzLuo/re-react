const SelectButton = ({ options, value, setValue }) => {
  return (
    <nav>
      {options.map((option) => (
        <button className={value === option ? 'active' : null} key={option} onClick={() => setValue(option)}>
          {option}
        </button>
      ))}
    </nav>
  );
};

export default SelectButton;

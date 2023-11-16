
import PropTypes from "prop-types"; 

const InputControl = (props) => {
  return (
    <div className="mb-4">
      {props.label && <label className="block text-gray-700 text-sm font-bold mb-2">{props.label}</label>}
      <input
        className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded"
        type={props.type || "text"}
        placeholder={props.placeholder || ""}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};


InputControl.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string, 
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default InputControl;

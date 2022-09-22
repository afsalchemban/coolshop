export const OperationDropdown = (props)=>{

    //User selecting (Plus/Minus)
    const handleOnChange = (e)=>{
        props.onChange(e.target.value)
    };

    //Return the select box html for selecting (plus/minus)
    return (
        <select className="operation-select-box" onChange={handleOnChange} disabled={props.isDisabled}>
          <option>+</option>
          <option>-</option>
        </select>
    );
}
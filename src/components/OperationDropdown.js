export const OperationDropdown = (props)=>{

    //handle when user selecting operations
    const handleOnChange = (e)=>{
        props.onChange(e.target.value)
    };
    //return the select box html for selecting (plus/minus)
    return (
        <select className="operation-select-box" onChange={handleOnChange} disabled={props.isDisabled}>
          <option>+</option>
          <option>-</option>
        </select>
    );
}
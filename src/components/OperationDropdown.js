export const OperationDropdown = (props)=>{
    const handleOnChange = (e)=>{
        props.onChange(e.target.value)
    };
    return (
        <select onChange={handleOnChange}>
          <option>+</option>
          <option>-</option>
        </select>
    );
}
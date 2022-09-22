export const InputField = (props) => {
    const handleOnChange = (e)=>{
        props.onChange(e.target.value)
    }
    return <input type="number" disabled={props.isDisabled} onChange={handleOnChange} />;
}
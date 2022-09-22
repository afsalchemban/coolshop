import Button from 'react-bootstrap/Button';

//return disable button HTML
export const DisableButton = (props)=>{

    //change css class according to disabled status of row
    return <Button id="disable-button" onClick={props.onClick} variant={props.isDisabled?'secondary':'outline-secondary'}>{props.isDisabled?'Disabled':'Disable'}</Button>;
}
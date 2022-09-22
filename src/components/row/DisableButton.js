import Button from 'react-bootstrap/Button';

export const DisableButton = (props)=>{
    return (
        <Button id="disable-button" 
            onClick={props.onClick} 
            variant={props.isDisabled?'secondary':'outline-secondary'}
        >
            {props.isDisabled?'Disabled':'Disable'}
        </Button>
    );
}
import Button from 'react-bootstrap/Button';

//return delete button HTML
export const DeleteButton = (props)=>{  
    return <Button onClick={props.onClick} variant="outline-danger" ><span aria-hidden="true">&times;</span></Button>;
}
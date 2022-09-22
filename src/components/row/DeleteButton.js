import Button from 'react-bootstrap/Button';

export const DeleteButton = (props)=>{  
    return (
        <Button onClick={props.onClick} variant="outline-danger" >
            <span aria-hidden="true">&times;</span>
        </Button>
    );
}
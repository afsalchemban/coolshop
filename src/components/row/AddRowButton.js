import Button from 'react-bootstrap/Button';

export const AddRowButton = (props) => {
    return (
        <Button onClick={props.onClick} variant="success">
            Add row
        </Button>
    );
}
import Button from 'react-bootstrap/Button';

// return add button HTML
export const AddRowButton = (props) => {
    return <Button onClick={props.onClick} variant="success">Add row</Button>;
}
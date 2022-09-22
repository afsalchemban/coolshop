import Button from 'react-bootstrap/Button';

// Return add button HTML
export const AddRowButton = (props) => {
    return <Button onClick={props.onClick} variant="success">Add row</Button>;
}
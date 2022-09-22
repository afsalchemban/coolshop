import Alert from 'react-bootstrap/Alert';

//Return result in label HTML
export const Result = (props) => {
    return (
        <Alert style={{ width: '40%', margin: 'auto'}} key='success' variant='success'>
          Result: {props.result}
        </Alert>
    );
}
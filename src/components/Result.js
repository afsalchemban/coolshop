import Alert from 'react-bootstrap/Alert';

//return result in label HTML
export const Result = (props) => {
    return (
        <Alert style={{ width: '40%', margin: 'auto'}} key='success' variant='success'>
          Result: {props.result}
        </Alert>
    );
}
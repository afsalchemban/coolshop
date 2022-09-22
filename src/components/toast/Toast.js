import Toast from 'react-bootstrap/Toast';
export const ToastMessage = (props) => {
    return (
        <Toast  show={props.showToast} onClose={props.onCloseToast} animation={false} autohide delay={2000}>
            <Toast.Header>
                <strong className="me-auto">React Calculator</strong>
            </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    );
}
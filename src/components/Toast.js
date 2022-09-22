import Toast from 'react-bootstrap/Toast';
export const ToastMessage = (props) => {
    return (
        <Toast  show={props.showToast} onClose={props.onCloseToast} animation={false} autohide delay={2000}>
            <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">React Calculator</strong>
            </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    );
}
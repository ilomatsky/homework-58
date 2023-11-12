import React, {useState} from 'react';
import Modal from './Modal/Modal';
import Alert from './Alert/Alert';

const App: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(true);

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="container mt-5">
            {showAlert && (
                <Alert type="warning" onDismiss={closeAlert}>
                    This is a warning type alert
                </Alert>
            )}

            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Open Modal
            </button>

            <Modal show={showModal} title="Some kinda modal title" onClose={() => setShowModal(false)}>
                <p>This is modal content</p>
            </Modal>
        </div>
    );
};

export default App;

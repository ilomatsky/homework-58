import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

interface ModalProps {
    show: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({show, title, onClose, children}) => {
    const onInnerClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <>
            <Backdrop show={show} onClick={onClose}/>
            <div className={`modal ${show ? 'show' : ''}`}>
                <div className="modal-dialog" onClick={onInnerClick}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close">x</button>
                        </div>
                        <div className="modal-body">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;

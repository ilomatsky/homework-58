import React from 'react';

interface AlertProps {
    type: 'primary' | 'success' | 'danger' | 'warning';
    onDismiss?: () => void;
    children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
    const alertClasses = `alert alert-${type} alert-dismissible`;

    return (
        <div className={alertClasses} role="alert">
            {children}
            {onDismiss && (
                <button type="button" className="btn-close" onClick={onDismiss} aria-label="Close"></button>
            )}
        </div>
    );
};

export default Alert;


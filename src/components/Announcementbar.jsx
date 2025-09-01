import React from 'react';
import './Announcementbar.css';

function Announcementbar({ onClose }) {
    return (
        <div className="announcement-bar">
            <p>This is global announcement!</p>
            <div
                className="announcement-close"
                onClick={onClose}
                style={{ cursor: 'pointer' }}
                aria-label="Close announcement"
                tabIndex={0}
                role="button"
            >
                &#10006;
            </div>
        </div>
    );
}

export default Announcementbar;

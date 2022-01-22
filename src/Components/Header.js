import React from 'react';

const Header = ({ variant, label, customStyle }) => {
     return (
        <div className={`header ${variant}`} style={customStyle}>
            <h1>{label}</h1>
        </div>
    );
};

Header.defaultProps = {
    variant: 'normal',
    label: '',
    customStyle: {}
}

export default Header;

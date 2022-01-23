import React from 'react';

const Sidebar = ({ label, items, selected, onSelect }) => {
    return (
        <div className='sidebar'>
            <div className='sidebar-title small'>
                <p>{label}</p>
            </div>
            {items.map((item, index) => {
                return (
                        <div key={index} className={selected !== null && selected.name === item.name ? 'sidebar-item selected' : 'sidebar-item clickable'} onClick={() => onSelect(item)}>
                            {item.name}
                        </div>
                    )
            })}
        </div>
    );
};

export default Sidebar;

import React from 'react';

const Sidebar = ({ label, items, selected, onSelect }) => {
    return (<>
        <div className='sidebar'>
            <br />
            {items.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div className={selected !== null && selected.name === item.name ? 'sidebar-item large-spacing selected' : 'sidebar-item large-spacing clickable'} onClick={() => onSelect(item)}>
                            {item.name}
                        </div>
                        {index !== items.length-1 && <div className='separator'></div>}
                    </React.Fragment>
                    )
            })}
        </div></>
    );
};

export default Sidebar;

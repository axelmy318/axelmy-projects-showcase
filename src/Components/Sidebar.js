import React from 'react';

const Sidebar = ({ label, items, selected, onSelect }) => {
    return (<>
        <div className='sidebar'>
            <br />
            {items.map((item, index) => {
                return (
                    <>
                        <div key={index} className={selected !== null && selected.name === item.name ? 'sidebar-item large-spacing selected' : 'sidebar-item large-spacing clickable'} onClick={() => onSelect(item)}>
                            {item.name}
                        </div>
                        {index !== items.length-1 && <div key={index+items.length+1} className='separator'></div>}
                    </>
                    )
            })}
        </div></>
    );
};

export default Sidebar;

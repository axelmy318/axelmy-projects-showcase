import React from 'react';
import { MdOpenInNew as LogoUrl } from 'react-icons/md'
import { IoCopyOutline as LogoCopy } from 'react-icons/io5'
import { CgReadme as LogoReadme } from 'react-icons/cg'

const ExampleSidebar = ({ project, items, selected, onSelect }) => {
    const openLink = (url) => {
        window.open(url, '_blank').focus();
    }

    return (
        <div className='sidebar clearer'>
            {project.installation && <>
            <div style={{paddingTop: '10px'}}></div>
            <div className={'sidebar-installation clickable'} onClick={() => navigator.clipboard.writeText(project.installation)}>
                <span>{project.installation}</span>
                <span className='copy'><LogoCopy /></span>
            </div>
            </>}
            <div className='sidebar-title small'>
                <p>Links</p>
            </div>
            {project.github && <div className={selected.type === 'readme' ? 'sidebar-item selected' : 'sidebar-item clickable'} onClick={() => onSelect({type: 'readme', item: project})}>
                <span><LogoReadme /> README.md</span>
            </div>}
            {project.github && <div className={'sidebar-item clickable'} onClick={() => openLink(`https://github.com/${project.github.username}/${project.github.repository}.git`)}>
                <span>GitHub <LogoUrl /></span>
            </div>}
            {project.npmjs && <div className={'sidebar-item clickable'} onClick={() => openLink(project.npmjs)}>
                <span>npmjs <LogoUrl /></span>
            </div>}
            <br />
            <div className='sidebar-title small'>
                <p>Examples</p>
            </div>
            {items.map((item, index) => {
                return (
                        <div key={index} className={selected.type === 'example' && selected.item !== null && selected.item.name === item.name ? 'sidebar-item selected' : 'sidebar-item clickable'} onClick={() => onSelect({type:'example', item})}>
                            {item.name}
                        </div>
                    )
            })}
        </div>
    );
};

export default ExampleSidebar;

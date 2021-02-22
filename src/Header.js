import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header(){
    return(
        <div className='header'>


           <IconButton>
            <PersonIcon fontSize='large' className='header-icon'/>
            </IconButton>


            <img class='header-logo' src="data:image/jpeg;base64,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"/>
        
        
            <IconButton>
            <ForumIcon fontSize='large' className='header-icon'/>
            </IconButton>
            
        </div>
    )
}

export default Header;
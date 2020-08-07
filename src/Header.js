import React from 'react'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
export default function Header() {
    return (
        <div className="header">
<MenuSharpIcon
            />


            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
            alt=""
                />

                 <input type="text" />
                <SearchIcon/>
                <VideoCallSharpIcon />
                <AppsSharpIcon />
                <NotificationsNoneSharpIcon />
        </div>
    )
}


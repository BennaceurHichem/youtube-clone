import React from 'react'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import Avatar from '@material-ui/core/Avatar'
import Image from './assets/hichem.jpg'

//css header file 
import './styles/header.css'

export default function Header() {
    return (
        <div className="header">
            
            <div className="header__left">
                
                    <MenuSharpIcon/>


                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
                    alt=""
                        />
            </div>

            
            <div className="header__input">

                 <input alt="Search" type="text" />
                <SearchIcon className="header__inputButton" />
            </div>
            <div className="header__icons">

                <VideoCallSharpIcon />
                <AppsSharpIcon />
                <NotificationsNoneSharpIcon />
                <Avatar src={Image} alt="hichem bennaceur"  />

            </div>
               
        </div>
    )
}


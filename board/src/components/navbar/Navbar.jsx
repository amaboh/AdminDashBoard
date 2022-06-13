import "./navbar.scss"

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import Brightness5Icon from '@mui/icons-material/Brightness5';

import {useContext} from 'react'
import {DarkModeContext} from '../../context/darkModeContext'

const Navbar = () => {

  const {dispatch, darkMode} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon />
        </div>
        <div className="items"> 
            <div className="item">
                <LanguageOutlinedIcon className="icon"/>
                English
            </div>
            <div className="item">
              {darkMode ?
              <Brightness5Icon onClick={()=>dispatch({type:"TOGGLE"})}className="icon"/>
              :
              <DarkModeOutlinedIcon onClick={()=>dispatch({type:"TOGGLE"})}className="icon"/>  
              }
                
            </div>
            <div className="item">
                <FullscreenExitOutlinedIcon className="icon"/>
            </div>
            <div className="item">
                <NotificationsNoneOutlinedIcon className="icon"/>
                <div className="counter">1</div>
            </div>
            <div className="item">
                <ChatBubbleOutlineOutlinedIcon className="icon"/>
                <div className="counter">2</div>
            </div>
            <div className="item">
                <ListOutlinedIcon className="icon"/>
            </div>
            <img src="https://images.pexels.com/photos/2764975/pexels-photo-2764975.jpeg?cs=srgb&dl=pexels-tubarones-photography-2764975.jpg&fm=jpg"
                alt=""
                className="avatar"/>
        </div>
      </div>
    </div>
  ) 
}

export default Navbar

import '../App.css';
import DetailSong from "./detailSong"
import ListSongs from './listSong';
import PlayerLayout from './playerLayout';
import {useDispatch,useSelector} from "react-redux"

import allActions from '../redux/actions/index';
import { useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function Songs() {
  const dispatch=useDispatch();
  const [statusOfDetailSong,setStatusOfDetailSong]=useState(0)
  const enableMobileMenu=useSelector(state=>state.enableMobileMenu.status)
  if(enableMobileMenu==true && statusOfDetailSong==0 ||enableMobileMenu==true && statusOfDetailSong==2){

    setStatusOfDetailSong(1)
  }
  else if(enableMobileMenu==false && statusOfDetailSong==1){
    setStatusOfDetailSong(2)
  }


  return (
    <div className="songs">
    
      {/* phần thân */}
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-play overflow-hidden lg:relative'>
        <div className={statusOfDetailSong==0?"lg:hidden":(statusOfDetailSong==1&&enableMobileMenu==true?'lg:block lg:w-[100%] lg:h-[100%] lg:bg-gray-800 lg:bg-opacity-50 lg:absolute lg:z-10 lg:enable':(statusOfDetailSong==2 && enableMobileMenu==false?"lg:hidden":""))}>
        <DetailSong/>
        </div>
        
        <ListSongs/>
      </div>
      <PlayerLayout/>
    </div>
  );
}

export default Songs;

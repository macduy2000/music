import React from "react";
import AudioPlayer from"react-h5-audio-player"
import 'react-h5-audio-player/lib/styles.css';
import '../App.css'
import { useSelector ,useDispatch} from "react-redux";
import allActions from "../redux/actions";

function PlayerLayout() {
  const dispatch=useDispatch();
  const DataSongs = useSelector(state =>state.listSong.list)
  const songToPlay = useSelector(state =>state.playSong.song)
  
  const animation =useSelector(state=>state.animation.status)
  const currentSong=songToPlay
const handleClickNext=()=>{
 if(currentSong.index<DataSongs.length){
  dispatch(allActions.playSong(DataSongs.find(song => song.index==currentSong.index+1)))   }
  else { alert("Đay là bài cuối cùng.")}
}
const handleClickPre=()=>{
  if(currentSong.index>1){
  dispatch(allActions.playSong(DataSongs.find(song => song.index==currentSong.index-1)))  }
  else {alert("Đây là bài đầu tiên. ")}
}
const handleOnPlay=()=>{
  dispatch(allActions.animationDisk(true))
}
 
  const handleOnPause=()=>{
    dispatch(allActions.animationDisk(false))
  }
    return (
      <div className="bg-slate-800 text-gray-400">
      <AudioPlayer src={songToPlay.id==undefined?"":songToPlay.url} 
      layout="stacked-reverse" showJumpControls={true} 
      showSkipControls={true}
      onPlay={handleOnPlay}
      onPause={handleOnPause}
       className="play"
       onClickNext={handleClickNext}
      onClickPrevious={handleClickPre}
      onEnded={handleClickNext}
       />
     
      </div>
    );
  }
  
  export default PlayerLayout;
  
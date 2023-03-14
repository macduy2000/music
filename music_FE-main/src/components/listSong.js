import React, { useState, useEffect, useContext } from 'react';
import { songs } from '../context';
import { useSelector ,useDispatch} from "react-redux";
import allActions from '../redux/actions';
function ListSongs() {
// const {DataSongs}=useContext(songs)
  const DataSongs = useSelector(state =>state.listSong.list)
  const songToPlay = useSelector(state =>state.playSong.song)
  const listAlbum=useSelector(state=>state.albumReducer.list)
  const selectedAlbum =useSelector(state=>state.selectedAlbum.status)
  const selectedItem =useSelector(state=>state.selectedItem.status)
  const [songId,setSongId]=useState(-1)
  const user=useSelector(state=>state.login.user)
  const [idUser,setIdUser]=useState({
    user_id:user.id==undefined?-1:user.id,
  })
 

 
useEffect(()=>{

    dispatch(allActions.getAllAlbum(idUser))
  
},[])
 const dispatch =useDispatch();
  const playSong=(song,index)=>{
   dispatch(allActions.playSong({...song,index:index}))
   dispatch(allActions.animationDisk(true))
   dispatch(allActions.enablePageAction(1))
   dispatch(allActions.enableMobileMenu(true))
  }
 
  var addSong=async(album_id)=>{
 var song={
  list_id:album_id,
  user_id:user.id==undefined?-1:user.id,
  song_id:songId
 }
 if(song.list_id==0  || song.user_id==-1||song.song_id==-1){
  alert("có lỗi xảy ra !")
 }
 else {dispatch(allActions.addSong(song))
}

  }

  var deleteSong=async(idDB,idList)=>{
   
  await dispatch(allActions.deleteSong({...idUser,id:idDB,list_id:idList}))
  await dispatch(allActions.getSong({...idUser,list_id:idList}))
  }

    return (
      <div className="col-span-2 scroll-smooth  overflow-y-scroll  lg:w-[100%] lg:h-[100%] lg:absolute lg:z-0 ">

 <table className="table-auto max-h-full   scroll-smooth    block ">
  <thead className=" flex items-center justify-between font-semibold text-slate-50 h-12 sticky top-0 bg-slate-700  ">
    {/* <th className="w-[10%]">Thứ tự</th>
    <th className="text-left w-[53%]">Bài hát</th>
    <th  className="w-[10%]">Tác giả</th>
    <th><i className="fa fa-download w-[10%]"></i></th> */}
 <th className="w-20">Thứ tự</th>
    <th className="text-left w-song_name">Bài hát</th>
    <th  className="w-author_name">Tác giả</th>
    <th className='w-option'><i className="fa fa-download "></i></th>

  </thead>
  <tbody className='block relative'>
{ 

DataSongs.map((song,index)=>(

  <tr key={index} className="flex items-center justify-between bg-slate-800 h-12 hover:bg-slate-500 hover:cursor-pointer" > 
<td className={songToPlay.id==song.id? "w-20 text-center font-semibold text-green-700": "w-20 text-center font-semibold text-gray-400"} onClick={()=>{playSong(song,index+1)}}>{index+1}</td>
<td className={songToPlay.id==song.id? "w-song_name text-left font-semibold text-green-700": "w-song_name text-left font-semibold text-gray-400"} onClick={()=>{playSong(song,index+1)}}>{song.name}</td>
<td className={songToPlay.id==song.id? "w-author_name text-center font-semibold text-green-700": "w-author_name text-center font-semibold text-gray-400"} onClick={()=>{playSong(song,index+1)}}>{song.author}</td>
<td className={songToPlay.id==song.id? "w-option text-center font-semibold text-green-700 hover-to-select hover:text-green-700  hover:cursor-pointer": "w-option text-center font-semibold text-gray-400 hover-to-select"}><i className="fa fa-ellipsis-v"></i>
<div className='more-action'>
 
<ul className='option w-full'>
<li className='option_item  hover:text-green-700 hover: cursor-auto' > 
<a href={song.url}><i className="fa fa-download" style={{ display: "inline", marginLeft: "-0.8rem"}} aria-hidden="true"><p style={{ display: "inline", marginLeft: "0.5rem"}}>Tải về</p></i> </a>
</li>
<li className={user.id==undefined || listAlbum[0]==undefined?"hidden":"option_item hover:cursor-pointer show-list-custom-album relative"} onMouseEnter={()=>{setSongId(song.id+1)}}> 
<div className='w-full h-full m-0 p-0 hover:text-green-700 '>
<i className="fa fa-heart" style={{ display: "inline", marginLeft: "0.5rem"}} aria-hidden="true"><p style={{ display: "inline", marginLeft: "0.5rem"}}>Yêu thích</p></i></div>
<div className='show-list-album'>

<ul className='option  mt-2 mb-2'>


{
listAlbum.map((al,index,song)=>{
  return (
    <li className='option_item  hover:text-green-700' onClick={()=>{addSong(al.id)}}>
<p>{al.name}</p>
</li>
  )
})}

</ul>
</div>

</li>
<li className={user.id!=undefined && selectedAlbum> 0 && selectedItem==4?'option_item  hover:text-green-700 hover:cursor-pointer':"hidden"} onClick={()=>{deleteSong(song.idDB,song.idList)}}> 
<i className="fa fa-trash-o" style={{ display: "inline" ,marginRight:"0.5rem"}} aria-hidden="true"><p style={{ display: "inline", marginLeft: "0.6rem"}}>Xoá bỏ</p></i>
</li>

</ul>
</div>




</td> 
</tr>
)) 
}

  </tbody>

 </table>
      </div>
    );
  }
  
  export default ListSongs;
  
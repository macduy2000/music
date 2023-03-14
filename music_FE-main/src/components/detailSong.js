import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import allActions from '../redux/actions';
import Data from "../data/songs.json"
import '../App.css';
function DetailSong() {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.login.user)
  const  [enableModal,setEnableModal]=useState(false)
  const [idAlbum,setIdAlbum]=useState(0)
  const [enableDeleteAlbum,setEnableDeleteAlbum]=useState(false)
  const [album,setAlbum]=useState({
    name:"",
    user_id:user.id==undefined?-1:user.id,
    id:""
  })
  const [optionAlbum,setOptionAlbum]=useState(0)
 const playStatus =useSelector(state=>state.animation.status)
 const [searchDetail, setSearchDetail]=useState("")
 const [enableModalEditAlbum,setEnableModalEditAlbum]=useState(false)
 const page =useSelector(state=>state.page.status)
 const DataSongs = useSelector(state =>state.listSong.list)
 const songToPlay=useSelector(state=>state.playSong.song)
 const selectedItem =useSelector(state=>state.selectedItem.status)
 const enableAlbum =useSelector(state=>state.album.status)
 const getAllAlbum =useSelector(state=>state.albumReducer.list)
const selectedAlbum =useSelector(state=>state.selectedAlbum.status)

 const [enableModalAlbum,setEnableModalAlbum]=useState(false)


var home=async ()=>{
 await dispatch(allActions.listSong(Data));
 await dispatch(allActions.selectedItemAction(1))
 dispatch(allActions.enableMobileMenu(false))
}
var search=()=>{
  if(searchDetail!=""){
  

   var songsFilter= DataSongs.filter(function(value){
      if (value.name.includes(searchDetail) || value.author.includes(searchDetail)){
          return true;
      }
      return false;
  });
  if(songsFilter[0]!=undefined){
  dispatch(allActions.findSong(songsFilter))
  dispatch(allActions.enableMobileMenu(false))

}
  else {setEnableModal(true)}

  }
 
}
var get20month=async()=>{

 await dispatch(allActions.topMonth());
 await dispatch(allActions.selectedItemAction(3))
 dispatch(allActions.enableMobileMenu(false))
}
var detailInputSearch =(data)=>{
  setSearchDetail(data)
}

var get10week=async()=>{
 
await dispatch(allActions.topWeek());
 await dispatch(allActions.selectedItemAction(2))
 dispatch(allActions.enableMobileMenu(false))
}
var getCustomAlbum=()=>{
  dispatch(allActions.selectedItemAction(4))
  dispatch(allActions.enableAlbumAction(true))
  dispatch(allActions.getAllAlbum(album))
}
const agreeModal=()=>{
  setEnableModal(false)
}
function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
var addNewAlbum=()=>{
  if(album.name!=""){
dispatch(allActions.addAlbum(album))
setEnableModalAlbum(false)
}
}

var disableModalAlbum=()=>{
setEnableModalAlbum(false)
}

var enableOptionAlbum =(id)=>{
  setIdAlbum(id)
  setAlbum({...album,id:id})
  if(optionAlbum==0 || optionAlbum==2){setOptionAlbum(1)}
  else if (optionAlbum==1){setOptionAlbum(2)}
}
var selectedIDAlbum = async(id)=>{
  await dispatch(allActions.selectedAlbumAction(id))
 await dispatch(allActions.getSong({...album,list_id:id}))
 dispatch(allActions.enableMobileMenu(false))
 
}

var enableEditAlbum=()=>{
  setEnableModalEditAlbum(!enableModalEditAlbum)
  setEnableModalAlbum(true)
}
var editNameAlbum=async()=>{
 await dispatch(allActions.updateAlbum(album))
  setEnableModalEditAlbum(!enableModalEditAlbum)
  setEnableModalAlbum(false)
  setOptionAlbum(0)
}

var enableModalDeleteAlbum=()=>{
  setEnableModal(true)
  setEnableDeleteAlbum(!enableDeleteAlbum)
}

var deleteAlbum=async()=>{
 await dispatch(allActions.deleteAlbum(album))
 setEnableModal(false)
 setEnableDeleteAlbum(!enableDeleteAlbum)
 setOptionAlbum(0)
}

var closeModalAlbum=()=>{
  setEnableModal(false)
 setEnableDeleteAlbum(!enableDeleteAlbum)
 setOptionAlbum(0)
}

    return (
      <div className="lg:w-[100%] lg:absolute lg:h-[100%] lg:z-20 laptop:h-[100%]"  style={{backgroundImage:`linear-gradient(rgba(15,23,42, 0.8), rgba(51, 65, 85, 0.8)), url(${songToPlay.id==undefined?"images/background.jpeg": songToPlay.links.images[0].url})`}}>
        <div id="popup-modal" tabindex="-1" className={enableModal==true?"enable-modal flex items-center justify-center bg-black bg-opacity-25 fixed m-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full":"disable"}>
    <div className={enableModal==true?"enable-modal-detail relative p-4 w-full max-w-md h-full md:h-auto":"disable-modal-detail"}>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-6 text-center">
                <svg aria-hidden="true" className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{enableDeleteAlbum==true?"Bạn chắc chắn muốn xoá chứ ?":"Không tìm thấy bài hát hoặc nhạc sĩ này"}</h3>
              {enableDeleteAlbum==false?  <button data-modal-toggle="popup-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-500  focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={()=>agreeModal()}>
                   Ok
                </button>: ( <button data-modal-toggle="popup-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-500  focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={()=>deleteAlbum()}>
                   Xoá
                </button>
                
                )
              }
              {enableDeleteAlbum==true?  <button data-modal-toggle="popup-modal" type="button" className="text-white bg-gray-500 hover:bg-gray-400  focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={()=>closeModalAlbum()}>
                   Thoát
                </button>:""
                
                
              }
            </div>
        </div>
    </div>
</div>

{/* them album */}
<div id="popup-modal" tabindex="-1" className={enableModalAlbum==true?"enable-modal flex items-center justify-center bg-black bg-opacity-25 fixed m-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full":"disable"}>
    <div className={enableModalAlbum==true?"enable-modal-detail relative p-4 w-full max-w-md h-full md:h-auto":"disable-modal-detail"}>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-6 text-center">
            <input type="text" value={album.name} onChange={(e)=>setAlbum({...album,name:e.target.value})} name="name" placeholder="Tên Album..." className="w-search text-l border-b-2 border-blue-400 outline-none focus:border-green-400  text-gray-400  bg-transparent inline-block   mt-1  mb-10" />
              
                
                {enableModalEditAlbum==false?
                    <button data-modal-toggle="popup-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-500  focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={()=>addNewAlbum()}>
                    Thêm
                 </button>:
                   <button data-modal-toggle="popup-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-500  focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={()=>editNameAlbum()}>
                   Sửa
                </button>
                }
                <button data-modal-toggle="popup-modal" type="button" className="text-white bg-gray-500 hover:bg-gray-400  focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={()=>disableModalAlbum()}>
                   Thoát
                </button>
            </div>
        </div>
    </div>
</div>



       <div className={page==0 ?"h-9":"disable"}>
       <input type="text" value={searchDetail} onChange={(e)=>detailInputSearch(e.target.value)} name="name" placeholder="tìm kiếm..." className="w-[73%] mt-margin_top_search text-l border-b-2 border-blue-400 outline-none focus:border-green-400  text-gray-400  bg-transparent inline-block   mt-1 " />
    <span className="inline ml-2  input-group-text  items-center right-28 top-11 text-base font-normal text-blue-400 text-center whitespace-nowrap rounded hover:cursor-pointer hover:text-green-700" id="basic-addon2"onClick={()=>search()} >
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4 inline mt-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </span> 
       </div>
        <>
      <div className={page==1 ?"col-span-1 detail-song h-full enable":"col-span-1 detail-song disable"}>
      <div className=" w-full laptop:h-full lg:h-[90%] relative bg-fixed bg-center bg-cover bg-no-repeat p-3 flex items-center flex-col justify-around ">
        <div className="w-full">
     <h3 className="text-cyan-500 text-left font-semibold">Now playing</h3>
     <h2  className="text-neutral-300 text-left font-light text-2xl">{songToPlay.id==undefined?"Chìm đắm trong âm nhạc": songToPlay.name}</h2>
   {/* chứa ảnh */}
   </div>
      <div className="h-[38%] text-center w-full h-full">
        <div>
     <img src={songToPlay.id==undefined? "images/diskBackground.jpg": songToPlay.links.images[1].url } alt="Alan Walker" className={playStatus==true && songToPlay.id!=undefined?"h-[50%] w-[50%] p-0 inline-block rounded-full animate-spin-slow":"h-[50%] w-[50%] p-0 inline-block rounded-full animate-spin-stop"}/>
     </div>

     </div>
     <div className="col-span-1 w-52 text-center block mt-6 w-[100%] flex items-center justify-center">
    
    <h3 className="text-neutral-100 text-left font-light text-2xl inline">{songToPlay.id==undefined? "": songToPlay.author }</h3>
    </div>

      </div>
      <div className="laptop:hidden lg:block lg:w-[100%] lg:h-[50%]">
    <i className="fa fa-circle mr-4 text-gray-300 lg:p-4 lg:hover:cursor-pointer" aria-hidden="true" onClick={()=>dispatch(allActions.enablePageAction(0))}></i>
     <i className="fa fa-circle text-green-800 lg:p-4 lg:hover:cursor-pointer" aria-hidden="true"></i>
</div>
      </div>

      {/*hiển thị danh sách bài hát*/}
      <div className={page==0 && enableAlbum==false?" col-span-1 list enable h-full":" col-span-1 list disable"}>
        
      <div className="  grid grid-cols-2 place-items-center w-full laptop:h-full lg:h-[83%] relative bg-fixed bg-center bg-cover bg-no-repeat p-3" >
       <div className="item  transform hover:scale-110 transition duration-300 relative">
      <img src="images/home.jpg" className={selectedItem==1?"image_of_list_light":"image_of_list"}  onClick={()=>{home()}} />
     <div className="detail"  onClick={()=>{home()}}><h4 className={selectedItem==1?"text-green-700":""}>Trang chủ</h4></div> 
       </div>
       {/*top 10 tuan*/}
       <div className="item transform  hover:scale-110 transition duration-300" onClick={()=>{get10week()}}>
      <img src="images/10tuan.jpg" className={selectedItem==2?"image_of_list_light":"image_of_list"} />
     <div className="detail"><h4 className={selectedItem==2?"text-green-700":""}>Hot nhất tuần</h4></div> 
       </div>
       {/*top thang*/}
       <div className="item  transform hover:scale-110 transition duration-300" onClick={()=>{get20month()}}>
      <img src="images/10thang.jpg" className={selectedItem==3?"image_of_list_light":"image_of_list"} />
     <div className="detail"><h4 className={selectedItem==3?"text-green-700":""}>Hot nhất tháng</h4></div> 
       </div>
      {/* album tự tạo */}

      <div className={user.userName==undefined?"disable":"item transform hover:scale-110 transition duration-300"} onClick={()=>{getCustomAlbum()}}>
      <img src="images/background_user.jpg" className="image_of_list h-27" />
     <div className="detail"><h4 className={selectedItem==4?"text-green-700":""}>Album của bạn</h4></div> 
       </div>

      </div>
      <div className="laptop:hidden lg:block lg:w-[100%] lg:h-[50%]">
    <i className="fa fa-circle lg:p-4 text-green-800 lg:hover:cursor-pointer" aria-hidden="true"></i>
     <i className="fa fa-circle lg:p-4  text-gray-300 lg:hover:cursor-pointer" aria-hidden="true" onClick={()=>dispatch(allActions.enablePageAction(1))}></i>
</div>

 </div>
 {/*album tự chọn */}
 <div className={page==0 && enableAlbum==true?"fixed w-[29%] ml-[2%] mt-[0px] flex p-[24px]":"disable"}>
<i className="fa fa-chevron-left  left-12 bottom-0 mt-0 hover:cursor-pointer text-yellow-100 hover:text-green-700" aria-hidden="true" onClick={()=>dispatch(allActions.enableAlbumAction(false))}></i>
<i class="fa fa-plus left-12 bottom-0 hover:cursor-pointer ml-80 text-yellow-100 hover:text-green-700" aria-hidden="true" onClick={()=>setEnableModalAlbum(true)}></i></div>


 <div className={page==0 && enableAlbum==true?" col-span-1 h-80  flex list enable scroll-smooth  mt-[13%] overflow-y-scroll":" col-span-1 list disable"}>

        <div className="  grid grid-cols-2 place-items-center items-start w-full h-full relative bg-fixed bg-center bg-cover bg-no-repeat p-3" >
      
       
  
       {
        getAllAlbum.map((album,index)=>{ return (
          <div className={user.userName==undefined?"disable":"item transform hover:scale-110 transition duration-300 mb-8 relative"} >
          <img src="images/background_user.jpg" className={selectedAlbum==album.id?"image_of_list_light h-27":"image_of_list h-27"} onClick={()=>{selectedIDAlbum(album.id)}}/><i className="fa fa-ellipsis-v w-1 absolute z-50 top-2 right-2 text-gray-400 hover:text-green-700 option-album " aria-hidden="true" onClick={()=>enableOptionAlbum(album.id)}></i>
          <div className={optionAlbum==0 ?'disable':(optionAlbum==1 && idAlbum==album.id?"more-action-album enable-option-album":(optionAlbum==2 && idAlbum==album.id?"disable-option-album":"disable"))}>
 
<ul className={optionAlbum==0  ?"disable":(optionAlbum==1 && idAlbum==album.id?'option  mt-2 mb-2 enable-option-album':"disable")}>
<li className='option_item  hover:text-green-700 ' onClick={()=>enableEditAlbum()} > 
<button><i className="fa fa-pencil" style={{ display: "inline", marginLeft: "0.8rem",color:"rgb(156 163 175)"}} aria-hidden="true"><p style={{ display: "inline", marginLeft: "0.5rem"}}>Đổi tên</p></i> </button>
</li>
<li className='option_item  hover:text-green-700' onClick={()=>{enableModalDeleteAlbum()}}> 
<i className="fa fa-trash-o" style={{ display: "inline", marginLeft: "0.5rem",color:"rgb(156 163 175)"}} aria-hidden="true"><p style={{ display: "inline", marginLeft: "0.5rem"}}>Xoá bỏ</p></i>
</li>
</ul>
</div>

         <div className="detail" onClick={()=>{selectedIDAlbum(album.id)}}><h4 className={selectedAlbum==album.id?"text-green-700":""}>{album.name}</h4></div> 
           </div>
        )
        })
       }


        </div>
      


   </div>
 </>




      </div>
    );
    
}
  
  export default DetailSong;
  
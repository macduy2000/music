import { useEffect, useState } from "react";
import allActions from "../redux/actions";
import { useSelector ,useDispatch} from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LogInOut from "./logIn_logOut";
function Navbar() {
const [statusIcon, setStatusIcon]=useState(false)


const dispatch=useDispatch();
const page =useSelector(state=>state.page.status)
const enableMobileMenu=useSelector(state=>state.enableMobileMenu.status)
const [enableLogout,setEnableLogout]=useState(false)
const DataSongs = useSelector(state =>state.listSong.list)
const user=useSelector(state=>state.login.user)
const  [goToLogInOut,setGoToLogInOut]=useState(false)
const enableAlbum=useSelector(state=>state.album.state)
var setHomeStatus=()=> {
  
  setStatusIcon(!statusIcon)
if(page==0){dispatch(allActions.enablePageAction(1))

}

else if(page==1){dispatch(allActions.enablePageAction(0))}

}

var setEnableMobileMenu=()=>{
  setStatusIcon(!statusIcon)
  dispatch(allActions.enableMobileMenu(!enableMobileMenu))
}


var User=()=>{
  if(user.userName==undefined){
  setGoToLogInOut(true)
// localStorage.setItem("logIn",true)
}
if(user.userName!=undefined){
  setEnableLogout(!enableLogout)
}
}

// var songsPage=()=>{
  
//   setGoToLogInOut(false)
//   localStorage.setItem("logIn",false)
// }

// useEffect(()=>{
//   setGoToLogInOut(localStorage.getItem("logIn")==="true")
// })

function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
var LogOut=()=>{
  delete_cookie("user")
  window.location.reload();
}

    return (
   
      <div className="text-3xl pt-7 relative ">
     

        <i className={goToLogInOut==true && user.userName==undefined?"disable":(statusIcon?"fa fa-bars absolute lg:hidden left-12 bottom-0 hover:cursor-pointer hover:text-green-700 lg:hidden transform origin-center rotate-360 transiton duration-300":"fa fa-bars lg:hidden absolute left-12 bottom-0 hover:cursor-pointer hover:text-green-700 transform origin-center rotate-180 transiton duration-300" )} aria-hidden="true" onClick={()=>setHomeStatus()}></i>
         <i className={goToLogInOut==true && user.userName==undefined?"disable":(statusIcon?"fa fa-bars absolute laptop:hidden left-12 bottom-0 hover:cursor-pointer hover:text-green-700 transform origin-center rotate-360 transiton duration-300":"fa fa-bars laptop:hidden absolute left-12 bottom-0 hover:cursor-pointer hover:text-green-700 transform origin-center rotate-180 transiton duration-300" )} aria-hidden="true" onClick={()=>setEnableMobileMenu()}></i> 

        {/* <Link to='/'> <i className={goToLogInOut==false ?"disable":"fa fa-chevron-left absolute left-12 bottom-0 hover:cursor-pointer hover:text-green-700"} aria-hidden="true" onClick={()=>songsPage()}></i></Link> */}
     
       <i className='fa fa-spotify mr-5 lg:hidden'></i>Spotify
     {
      user.userName!=undefined?<i className="fa fa-user  absolute right-12 bottom-0 hover:cursor-pointer hover:text-green-700 login_logout" aria-hidden="true" onClick={()=>User()}><h3 className="text-lg ml-4 inline">{user.userName==undefined?"":`${user.userName}`}</h3></i>: <Link to='/user'><i class="fa fa-user  absolute right-12 bottom-0 hover:cursor-pointer hover:text-green-700 login_logout" aria-hidden="true" onClick={()=>User()}><h3 className="text-lg ml-4 inline">{user.userName==undefined?"":`xin chào, ${user.userName}`}</h3></i></Link>
     }
  
  {/* <Link to='/user'><i class="fa fa-user  absolute right-12 bottom-0 hover:cursor-pointer hover:text-green-700 login_logout" aria-hidden="true" onClick={()=>User()}><h3 className="text-lg ml-4 inline">{user.userName==undefined?"":`xin chào, ${user.userName}`}</h3></i></Link> */}
  <div className={enableLogout==true?'logout_enable':"logout"}>
 
<ul className='option '>
<li className='option_item  hover:text-green-700' > 
<button><p style={{ display: "inline", marginLeft: "0.5rem" , fontSize:'1rem', color:"red"}}  onClick ={()=>LogOut()}>Đăng xuất</p> </button>
</li>

</ul>
</div>
      </div>
    );
  }
  
  export default Navbar;
  
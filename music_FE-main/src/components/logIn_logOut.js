import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector ,useDispatch} from "react-redux";
import allActions from '../redux/actions';
function LogInOut() {
  const messenger = useSelector(state=> state.registerReduce.status)
  const [haveAcount, setHaveAcount]=useState(true)
  const navigate = useNavigate();
 const dispatch =useDispatch();
 const [isEmtyName,setIsEmtyName]=useState(false)
 const [isEmtyPass,setIsEmtyPass]=useState(false)
 const [isEmtyEmail,setIsEmtyEmail]=useState(false)
 const [informLogin,setInformLogin]=useState({
  email:"",
  pass:""
 })
const user=  useSelector(state=>state.login.user)
 useEffect(()=>{
  let userstring=JSON.stringify(user);
  document.cookie = "user=" + userstring  +'; Path=/;'
  if(user.id!=undefined){
  navigate('/')}
 },[user])
var getUser=async(informLogin)=>{
  await  dispatch (allActions.loginAction(informLogin))
}
const [informRegister,setInformRegister]=useState({
  username:"",
  email:"",
  pass:""
})

var submitLogin=()=>{
  if(informLogin.email==""||informLogin.pass==""){
    informLogin.email==""?setIsEmtyEmail(true):setIsEmtyEmail(false)
    informLogin.pass==""?setIsEmtyPass(true):setIsEmtyPass(false)
  alert("Bạn chưa điền đầy đủ thông tin !")
}
else{
  getUser(informLogin)
}

}

var submitRegister=()=>{
  if(informRegister.username==""||informRegister.email==""||informRegister.pass==""){
    informRegister.username==""?setIsEmtyName(true):setIsEmtyName(false)
    informRegister.email==""?setIsEmtyEmail(true):setIsEmtyEmail(false)
    informRegister.pass==""?setIsEmtyPass(true):setIsEmtyPass(false)
    alert("Bạn chưa điền đầy đủ thông tin !")
  }
  else {
    dispatch(allActions.postRegisterAction(informRegister))

  }
}





    return (
      <div className=' flex justify-center items-center bg-fixed bg-cover bg-no-repeat h-screen-navbar w-screen' style={{backgroundImage:`linear-gradient(rgba(15,23,42, 0.7), rgba(51, 65, 85, 0.7)), url("images/background_user.jpg")`}}>
   
   <div className={haveAcount==true?"w-full max-w-xs enable-login_logout":"disable"}>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input className={isEmtyEmail==false?"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline":"shadow border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} id="username" type="text" placeholder="Username" value={informLogin.email} onChange={(e)=>{setInformLogin({...informLogin,email:e.target.value})}}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Mật khẩu
      </label>
      <input className={isEmtyPass==true?"shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline":"shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"} id="password" type="password" placeholder="******************" value={informLogin.pass} onChange={(e)=>{setInformLogin({...informLogin,pass:e.target.value})}}/>
      
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=>submitLogin()}>
       Đăng nhập
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={()=>{setHaveAcount(false)}}>
       Đăng kí
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2022 Khanh Nguyen.
  </p>
</div>

<form className={haveAcount==false?" bg-white shadow-md rounded p-12 w-full max-w-lg enable-login_logout":"disable"}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
       UserName
      </label>
      <input className={isEmtyName==true?"appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white":"appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"} id="grid-first-name" type="text" placeholder="Jane" value={informRegister.username} onChange={(e)=>{setInformRegister({...informRegister,username:e.target.value})}}/>
  
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Email
      </label>
      <input className={isEmtyEmail==false?"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500":"border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"} id="grid-last-name" type="text" placeholder="Doe" value={informRegister.email} onChange={(e)=>{setInformRegister({...informRegister,email:e.target.value})}}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Mật khẩu
      </label>
      <input className={isEmtyPass==false?"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500":"border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"} id="grid-password" type="password" placeholder="******************" value={informRegister.pass} onChange={(e)=>{setInformRegister({...informRegister,pass:e.target.value})}}/>
     
    </div>
  </div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-16" type="button" onClick={()=>{submitRegister()}}>
       Đăng kí
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={()=>{setHaveAcount(true)}}>
       Đăng nhập
      </a>
</form>



      </div>
    );
  }
  
  export default LogInOut;
  
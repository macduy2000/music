import  express  from "express";
import userController from'../controllers/userController'
import testController from "../controllers/testController"
import listController from "../controllers/listController"
import songController from  "../controllers/songController"
let router=express.Router()
const initWebRoute=(app)=>{
    router.get("/",testController.hello)
    router.get('/get-alluser',userController.allUser)
    router.post('/add-user',userController.addUser)
    router.post("/get-user",userController.getOneUser)
    // route list
    router.post("/add-list",listController.addList)
    router.post("/update-list",listController.updateListMusic)
    router.post("/delete-list",listController.deleteList)
    router.post("/all-list",listController.getAllLists)
    //router song
    router.post("/add-song",songController.addSong)
    router.post("/get-songs",songController.getSongs)
    router.post ("/delete-song",songController.deleteSong)
    router.get("/get-all-song",songController.getAllSongs)
    router.get("/top-week",songController.top20week)
    router.get("/top-month",songController.top20month)
    return app.use("/",router)
   
}
export default initWebRoute;
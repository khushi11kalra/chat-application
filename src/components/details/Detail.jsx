import "./detail.css"
import { auth, db} from "../../library/firebase";
import {useUserStore} from "../../library/userStore";
import {useChatStore} from "../../library/chatStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
const Detail=()=>{

  const{chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock}=
    useChatStore();
    const {currentUser}= useUserStore();
  const handleBlock=async()=>{
    if(!user) return;
    const userDocRef=doc(db, "users", currentUser.id)
    try{
      await updateDoc(userDocRef,{
        blocked:isReceiverBlocked?arrayRemove(user.id): arrayUnion(user.id),
      })
      changeBlock()
    }catch(err){
      console.log(err);
    }
  };
    return(
      <div className='detail'>
        <div className="user">
          <img src={user?.avatar|| "./avatar.png"} alt="" />
          <h2>{user?.username}</h2>
          <p>Lorem ipsum dolor sit amet con.</p>
        </div>
        <div className="info">
          <div className="options">
            <div className="title">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="options">
            <div className="title">
              <span>Privacy & Help</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="options">
            <div className="title">
              <span>Shared photos</span>
              <img src="./arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="" />
              <span>photo1.png</span>
              </div>
              <img src="./download.png" alt=""  className="icon"/>
              </div>
            </div>
          </div>
          <div className="options">
            <div className="title">
              <span>Shared Files</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <button onClick={handleBlock}>{isCurrentUserBlocked? "You are Blocked": isReceiverBlocked? "User blocked":"Block User" }</button>
          <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
        </div>
      </div>
    );
};

export default Detail
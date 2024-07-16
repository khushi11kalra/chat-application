import ChatList from "./chatList/ChatList";  // Check casing and path
import "./list.css";  // Check if this file exists and its casing
import Userinfo from "./userInfo/Userinfo";  // Check casing and path

const List = () => {
  return (
    <div className='list'>
      <Userinfo/>
      <ChatList/>
    </div>
  );
};

export default List;
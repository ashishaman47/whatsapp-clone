import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState('');
  const [messages, setMessages] = useState('');

  useEffect(() => {
    // generate the random no b/w 0 to 5000 and set seed to it --> which generates random Avatar for each room
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt('Please enter name for the chat room');

    if (roomName) {
      // do database stuff
      db.collection('rooms').add({
        name: roomName,
      });
    }
  };

  useEffect(()=>{ 
    if(id) {
    db.collection('rooms')
    .doc(id)
    .collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot((snapshot)=> setMessages(snapshot.docs.map((doc)=>doc.data())));
}
  },[id]);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className='sidebarChat'>
        {/* adding random image to avatar by adding some random string.svg in the end */}

        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className='sidebarChat__info'>
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className='sidebarChat'>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;

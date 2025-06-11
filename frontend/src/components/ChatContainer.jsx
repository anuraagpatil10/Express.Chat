import React from 'react'
import { useChatStore } from "../store/useChatStore";
import { useEffect } from 'react';
import MessageSkeleton from './skeletons/MessageSkeleton';
import ChatHeader from './ChatHeader.jsx';
import MessageInput from './MessageInput.jsx';

const ChatContainer = () => {

  const { selectedUser, getMessages, isMessagesLoading } = useChatStore(); 

  useEffect(() => { getMessages(selectedUser._id) }, [selectedUser._id, getMessages]);

  if(isMessagesLoading) return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader/>
      <MessageSkeleton/>
      <MessageInput/>
    </div>)
  return (
    <div className="flex-1 flex flex-col overflow-auto">

      <ChatHeader/>

      <p></p>

      <MessageInput/>


    </div>
  )
}

export default ChatContainer
import { create } from'zustand' ;
import toast from 'react-hot-toast';
import { axiosInstance } from '../lib/axios.js';


export const useChatStore = create((set, get) => ({
    messages : [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true });
        try{
            const res = await axiosInstance.get("/message/users");
            set({users: res.data});
        }
        catch (error){
            console.log("Error in getUsers (useChatStore)", error.message);
            toast.error(error.response.data.message);
        }
        finally{
            set({ isUsersLoading: false });
        }
    },


    getMessages: async (userId) =>{
        set({ isMessagesLoading: true });
        try{
            const res = await axiosInstance.get(`/message/${userId}`);
            set({ messages: res.data });
        }
        catch (error){
            console.log("Error in getMessages (useChatStore)", error.message);
            toast.error(error.response.data.message);
        }
        finally{
            set({ isMessagesLoading: false });
        }
    },


    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        try{
            const res = await axiosInstance.post(`/message/send/${selectedUser._id}`, messageData);
            set({messages:[...messages, res.data]});
        }
        catch(error){
            // toast.error(error.response.data.message);
            console.log("Error in sendMessage (useChatStore)", error.message);
        }
    },

    setSelectedUser: selectedUser => set({ selectedUser }),

}))
import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem('chat-theme') || 'light',
    setTheme: (theme) => {
        localStorage.setItem('chat-theme', theme);
        set({theme});
    },

}));


export const THEMES = [ "light", "dark", "retro", "valentine", "garden", "forest", "caramellatte", "wireframe", "black", "business", "nord", "halloween" ];
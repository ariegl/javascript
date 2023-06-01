import {create} from "zustand";

export const useCounterStore = create((set) => 
({
    count: 10,
    title: "some title",
    posts: [],
    increment: (value) => set(state => ({
        count: state.count + value,
    })),
    getPost: async () => {
       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
       const posts = await res.json();

       set(state => ({
        ...state,
        posts
       }))
    }
}))
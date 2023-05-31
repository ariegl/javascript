import {create} from "zustand";

export const useCounterStore = create((set) => 
({
    count: 10,
    title: "some title",
    increment: (value) => set(state => ({
        count: state.count + value,
    }))
}))
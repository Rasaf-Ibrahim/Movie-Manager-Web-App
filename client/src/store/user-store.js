/* 🧨 importing 'create' and middlewares  🧨 */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


//🧨 checking for already available store data in the local storage 🧨
const persisted_store = JSON.parse(localStorage.getItem("user_store"))


/*  🧨 initial state of the store   🧨*/
let initial_state
if(persisted_store) {
    initial_state = persisted_store.state 
}
else {
    initial_state = {}
}


/* 🧨 create the store  🧨*/
export const user_store = create(persist(devtools(() => {

        // store object
        const store_obj = {
            ...initial_state
        }

        // return the store object
        return store_obj
    }),

    // local storage
    {
        name: "user_store", // name for the persisted state
    }

))



// log the state on change
user_store.subscribe(
    (state) => console.log(state)  
)



// 🧨 importing 'create' and middlewares  
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


//🧨 checking for already available store data in the local storage 
const persisted_store = JSON.parse(localStorage.getItem("server_health_store"))


//  🧨 initial state of the store  
let initial_state
if(persisted_store) {
    initial_state = persisted_store.state 
}
else {
    initial_state = {
        server_is_running: true,
        server_is_sleeping: false,
        server_is_down: false
    }
}


/* 🧨 create the store  🧨*/
export const server_health_store = create(persist(devtools(() => {

        // store object
        const store_obj = {
            ...initial_state
        }

        // return the store object
        return store_obj
    }),

    // local storage
    {
        name: "server_health_store", // name for the persisted state
    }

))



// log the state on change
server_health_store.subscribe(
    (state) => console.log(state)  
)



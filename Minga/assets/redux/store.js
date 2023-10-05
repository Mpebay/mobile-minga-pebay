
import { configureStore } from '@reduxjs/toolkit'
import me_authorsReducer from "./reducer/me_authorsReducer.js"


const store = configureStore({
    reducer: {
        me_authorsReducer,

    }
})

export default store

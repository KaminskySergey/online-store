import { configureStore } from "@reduxjs/toolkit"
import { authInitState } from "./auth/auth.init-state"
import { authReducer } from "./auth/auth.slice"

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'auth',
    storage,
  whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const initState = {
    auth: authInitState,
}

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
    middleware: [thunk],
    devTools: true,
    preloadedState: initState,
})

export const persistor = persistStore(store)

// import persistStore from "redux-persist/es/persistStore";
// import { 
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER, } from 'redux-persist'
// import { configureStore } from "@reduxjs/toolkit";




//     export const store = configureStore({
//         // preloadedState: ,
//         devTools: true,
//         reducer: {
            
//         },
        
//         middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//           serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//         }),
        
//     })


//     export const persistor = persistStore(store)
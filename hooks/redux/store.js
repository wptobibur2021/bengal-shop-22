import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
const persistConfig = {
    key: 'cartItem',
    version: 1,
    storage
};

const reducers = combineReducers({ carts: cartReducer });
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// export const store = configureStore({
//     reducer: {
//         carts: cartReducer,
//     },
// })
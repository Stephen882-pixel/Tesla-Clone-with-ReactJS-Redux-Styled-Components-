import { configureStore} from '@reduxjs/toolkit';
import carReducer from '../features/car/CarSlice.jsx';


export const Store =  configureStore({
    reducer:{
        car: carReducer
    },
});

export default Store;


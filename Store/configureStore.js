import { createStore } from 'redux';
import surveyReducer from './Reducers/surveyReducer'
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from 'react-native';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, surveyReducer);

export default createStore(persistedReducer);
/*
export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}
*/

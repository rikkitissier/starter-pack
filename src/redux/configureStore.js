import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducers';

let store = null;

export default function configureStore(preloadState) {
	if( !store ){
		store = createStore(
			rootReducer,
			preloadState,
			applyMiddleware(thunkMiddleware)
		)
	}

	return store;
}
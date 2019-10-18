import { createStore } from './store-util/store';
import { callableRootReducer } from './reducers/root.reducer';

// Move this to the place where git init
export const store = createStore(callableRootReducer);

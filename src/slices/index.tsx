import { combineReducers } from 'redux';

import ScreenReducer from './screen/reducer';

const rootReducer = combineReducers({
  Screen: ScreenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

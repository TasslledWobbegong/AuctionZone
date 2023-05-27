import { combineReducers } from 'redux';

import marketplaceReducer from './marketplaceReducer';

const reducers = combineReducers({
    marketplace: marketplaceReducer
});

export default reducers;
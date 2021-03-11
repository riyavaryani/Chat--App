import { applyMiddleware, createStore } from 'redux';
import rootreducer from '../reducer';
import thunk from 'redux-thunk';

export default createStore(rootreducer, applyMiddleware(thunk));
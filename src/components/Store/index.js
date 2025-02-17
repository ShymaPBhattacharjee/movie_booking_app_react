import { createStore , applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import { logger } from "redux-logger"
import rootSaga from "../Sagas"
import reducers from "../Reducers"



const sagaMiddleware = createSagaMiddleware()

//let store = createStore(reducers, applyMiddleware())

let store = createStore(reducers, applyMiddleware(sagaMiddleware,logger))
sagaMiddleware.run(rootSaga)

export default store 
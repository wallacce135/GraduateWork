import { combineReducers, createStore } from "redux";
import { ArticleReducer } from "../Components/Article/ArticleReducer";


const rootReducer = combineReducers({
    Articles: ArticleReducer
})


export const store = createStore(rootReducer);
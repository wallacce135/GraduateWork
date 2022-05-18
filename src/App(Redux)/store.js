import { combineReducers, createStore } from "redux";
import { ArticleReducer } from "../Components/Article/ArticleReducer";
import { UsersReducer } from "../Components/Registration/UsersReducer";


const rootReducer = combineReducers({
    Articles: ArticleReducer,
    Users: UsersReducer
})


export const store = createStore(rootReducer);
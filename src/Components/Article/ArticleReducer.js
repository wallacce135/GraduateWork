import { actionTypes } from '../../App(Redux)/actionTypes';

const init = {
    currentComments: [],
    currentArticle: [],
    articles: [],
    tip: {
        tip_id: null
    },
}

export function ArticleReducer(state = init, action){
    switch (action.type) {
        case actionTypes.SET_ARTICLES:
            return { ...state, articles: action.record}
        case actionTypes.GET_TIP:
            return {...state, tip: {...action.tip}}
        case actionTypes.NEW_ARTICLE:
            return {...state, ...state.articles.push(action.payload)}
        case actionTypes.SET_CURRENT_ARTICLE:
            return {...state, currentArticle: action.record}
        case actionTypes.GET_COMMENTS:
            return {...state, currentComments: [...action.comments]}
        default:
            return state
    }
}

export const setArticleActionCreator = record => ({type: actionTypes.SET_ARTICLES, record});
export const getTipActionCreator = tip => ({type: actionTypes.GET_TIP, tip});
export const setNewArticleActionCreator = payload => ({type: actionTypes.NEW_ARTICLE, payload});
export const setCurrentArtcileActionCreator = record => ({type: actionTypes.SET_CURRENT_ARTICLE, record});
export const getCurrentCommentsActionCreator = comments =>({type: actionTypes.GET_COMMENTS, comments});
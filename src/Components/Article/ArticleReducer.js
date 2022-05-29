import { actionTypes } from '../../App(Redux)/actionTypes';


const init = {
    page: 0,
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
        case actionTypes.NEW_COMMENT:
            return {...state, ...state.currentComments.push(action.payload)}
        case actionTypes.ADD_ARTICLES:
            return {...state, articles: [...state.articles.concat(action.record)]}
        case actionTypes.CHANGE_PAGE:
            return {...state, page: action.value}
        default:
            return state
    }
}

export const setArticleActionCreator = record => ({type: actionTypes.SET_ARTICLES, record});
export const getTipActionCreator = tip => ({type: actionTypes.GET_TIP, tip});
export const setNewArticleActionCreator = payload => ({type: actionTypes.NEW_ARTICLE, payload});
export const setCurrentArtcileActionCreator = record => ({type: actionTypes.SET_CURRENT_ARTICLE, record});
export const getCurrentCommentsActionCreator = comments =>({type: actionTypes.GET_COMMENTS, comments});
export const setNewCommentActionCreator = payload =>({type: actionTypes.NEW_COMMENT, payload});
export const changePageActionCreator = value => ({type: actionTypes.CHANGE_PAGE, value});
export const addArticlesActionCreator = record => ({type: actionTypes.ADD_ARTICLES, record});
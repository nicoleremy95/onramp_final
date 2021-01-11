//axios allows for an https request from the frontend to the backend server
import axios from 'axios';
const urlPrefix = 'http://localhost:8080';

//TODO: 
const API = {
    //NEWS COLLECTION
    getAllNews: function() {
        return axios.get(`${urlPrefix}/news`)
    },
    postNews: function(news: object){
        return axios.post(`${urlPrefix}/news`, news, { withCredentials: true })
    },
    postComment: function(comment: string, newsId: string){
        return axios.post(`${urlPrefix}/comment/${newsId}`, comment, { withCredentials: true })
    },
    postReaction: function(reaction: string, newsId: string){
        return axios.post(`${urlPrefix}/reaction/${newsId}`, reaction, { withCredentials: true })
    },
    updateNews: function(news: object, newsId: string){
        return axios.put(`${urlPrefix}/news/${newsId}`, news, { withCredentials: true })
    },
    deleteNews: function(news: object, newsId: string){
        return axios.delete(`${urlPrefix}/news/${newsId}`, news)
    }, 
    signup: function(user: object){
        return axios.post(`${urlPrefix}/signup`, user, { withCredentials: true })
    },
    login: function(user: object){
        return axios.post(`${urlPrefix}/login`, user, { withCredentials: true })
    },
    logout: function(){
        return axios.get(`${urlPrefix}/logout`, { withCredentials: true })
    },
    getCurrentUser: function (){
        return axios.get(`${urlPrefix}/readsession`, { withCredentials: true })
    }
}

export default API;
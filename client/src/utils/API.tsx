//axios allows for an https request from the frontend to the backend server
import axios from 'axios';
const urlPrefix = 'http://localhost:8080';

const apiObj = {
    //NEWS COLLECTION
    getAllNews: function() {
        return axios.get(`${urlPrefix}/news`)
    },
    postNews: function(news: object){
        return axios.post(`${urlPrefix}/news`, news)
    },
    postComment: function(comment: string, newsId: string){
        return axios.post(`${urlPrefix}/comment/${newsId}`, comment)
    },
    postReaction: function(reaction: string, newsId: string){
        return axios.post(`${urlPrefix}/reaction/${newsId}`, reaction)
    },
    updateNews: function(news: object, newsId: string){
        return axios.put(`${urlPrefix}/news/${newsId}`, news)
    },
    deleteNews: function(news: object, newsId: string){
        return axios.delete(`${urlPrefix}/news/${newsId}`, news)
    }
}

export default apiObj;
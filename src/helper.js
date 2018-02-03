import axios from 'axios';
import { resolve } from 'url';

class Http {

    constructor() {
        this.backUrl = 'http://antoinetesner.fr/wp-json/wp/v2'
    }

    getAllPosts() {

        return this.get('/posts')
    }

    getAllCategories() {
        return this.get('/categories')
    }

    getPostsByCategory(slug) {

        return this.getCategoryBySlug(slug).then(category => {
            //console.log('Category ID', category[0].id)
            return this.get('/posts?categories=' + category[0].id)
        })
    }

    getCategoryBySlug(slug){

        return this.get( '/categories?slug=' + slug)
    }

    getPost(postId) {
        return this.get('/posts/' + postId)
    }

    getComment(postId, offset, per_page, parent){
        return this.get('/comments?post='+ postId +'&offset='+ offset +'&per_page=' + per_page + '&parent=' + parent)
    }

    getAnswer(parentsId){
        return (parentsId.length > 0 ? 
            this.get('/comments?parent=' + parentsId.join(',') + '&order=asc')
            : 
            new Promise((resolve, reject) => { resolve([]) })
        )
    }

    postComment(comment){
        return this.post('/comments', comment)
    }
    
    sendMessage(object) {
        return new Promise((resolve, reject) => {
            axios.post('http://antoinetesner.fr/wp-json/custom-endpoint/v1/contact', object)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                console.log('CATCH POST sendMessage:', url, '\nError:', error)
                reject(error)
            })
        })
    }

    get(url){
        return new Promise((resolve, reject) => {
            axios.get(this.backUrl + url)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                console.log('CATCH GET:', url, '\nError:', error)
                reject(error)
            })
        })
    }

    post(url, object){
        return new Promise((resolve, reject) => {
            axios.post(this.backUrl + url, object)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                console.log('CATCH GET:', url, '\nError:', error)
                reject(error)
            })
        })
    }
}
const http = new Http();
export default http;

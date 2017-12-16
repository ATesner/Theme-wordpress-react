import axios from 'axios'
import alt from './alt'

class DataActions {

    constructor() {
        const backUrl = 'http://antoinetesner.fr'
        this.pagesEndPoint = `${backUrl}/wp-json/wp/v2/pages`
        this.postsEndPoint = `${backUrl}/wp-json/wp/v2/posts`
    }

    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    getPosts(cb) {
        this.api(this.postsEndPoint).then((response) => {

            this.getSuccess(response)
            cb(response)
        })
        return true;
    }

    getSuccess(payload) {
        return payload;
    }
}
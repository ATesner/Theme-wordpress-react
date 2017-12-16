import alt from './alt'
import DataActions from './dataActions'

class DataStore {

    constructor() {

        this.data = {}

        this.bindListeners({
            handleSuccess: DataActions.GET_SUCCESS
        })

        this.exportPublicMethods({
            getAllPosts: this.getAllPosts
        })
    }

    handleSuccess(data) {
        this.setState({ data })
    }

    getAllPosts() { 
        return this.getState().data.posts; 
    }
}

export default alt.createStore(DataStore, 'DataStore');
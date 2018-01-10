import React, { Component } from 'react';

class MyModal extends Component {

    componentDidMount() {
        jQuery('#myModal').on('hidden.bs.modal', () => {
            this.props.showHideModal(0)
        })
    }

    render() {

        return (
            <div className="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"> {this.props.title} </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        { this.props.children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyModal;
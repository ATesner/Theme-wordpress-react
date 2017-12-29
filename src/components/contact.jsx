import React, { Component } from 'react';

class Contact extends Component {

    componentDidMount(){
        jQuery(".nav li").removeClass("active"); 
        jQuery('#contactLink').addClass('active');
    }

    render() {
        return (
            <div>
                Contact
            </div>
        );
    }
}

export default Contact;
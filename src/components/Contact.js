import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/About')
    }, 2000);
    return(
        <div className="container">
        <h4 className="center">Contact</h4>
        <p>lorem ipsum </p>
        </div>
    )
}
export default Contact;
import React, { useEffect, useState } from "react";
import Message from "../Message/Message";
import './Messages.scss'

class Messages extends React.Component {
    constructor() {
        super()
        this.mesRef = React.createRef()
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        this.mesRef.current.scrollTop = this.mesRef.current.scrollHeight
    }

    render () { return (
        <div ref={this.mesRef} className="messages">
            {this.props.messages.map((message) => 
                <Message message={message} own={this.props.user.id === message.sender ? true : false} />
            )}
        </div>
    );}
}

export default Messages;
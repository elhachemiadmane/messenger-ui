import React, { Component } from 'react'
import MessageInput from '../components/messageInput'
import MessageList from '../components/messageList'


export default class Messenger extends Component {
    render() {
        return (
            <div style={{
                width: '600px',
                margin: 'auto'
              }}>
                <MessageList/>
                <MessageInput/>
              </div>
        )
    }
}

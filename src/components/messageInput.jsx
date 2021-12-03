import React, { Component } from 'react'
import { Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons'


export default class MessageInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            mon_message: ""
        };
    }

    sendMessage = async (message) => {
        
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "Nasro",
                content: message
            })
        };
        await fetch("http://localhost:777/envoyerMonMessage", options);
        this.setState({mon_message: ""})
    }
    render() {
        return (
            <Input.Group compact style={{
                position: 'fixed',
                bottom: 0,
                marginBottom: 20,
                marginTop: 20,
            }}>
                <Input style={{ width: '500px' }} 
                        defaultValue=""  
                        placeholder="What in my mind" 
                        size="large"
                        onChange={e => this.setState({mon_message: e.target.value})}
                        value={this.state.mon_message}
                        />
                <Button 
                    type="primary" 
                    size="large"
                    onClick={e => this.sendMessage(this.state.mon_message)}
                    > <SendOutlined /> </Button>
            </Input.Group>
        )
    }
}

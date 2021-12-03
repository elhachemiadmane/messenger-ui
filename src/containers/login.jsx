import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { UserOutlined, EyeInvisibleOutlined } from '@ant-design/icons'


export default class Login extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{
                width: '400px',
                margin: 'auto',
                display: "flex",
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100vh',
            }}>
                <Input size="large" placeholder="User name" prefix={<UserOutlined />} />
                <br/>
                <br/>
                <Input type="password" size="large" placeholder="Password" prefix={<EyeInvisibleOutlined />} />
                <br/>
                <br/>
                <br/>
                <Button type="primary" size="large" style={{
                    width: "100%"
                }}
                onClick={e => {
                    this.props.navigation.push("/", {})
                }}
                >Login</Button>

            </div>
        )
    }
}

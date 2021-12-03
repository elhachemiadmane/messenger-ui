import React, { Component } from 'react'
import SingleMessage from './singleMessage'
import { connect } from 'react-redux';

class MessageList extends Component {

    refrechMessages = async () => {
        try{
            var resp = await fetch("http://localhost:777/listezMesMessages");
            var data = await resp.json();
            let dispatch = this.props.dispatch;
            dispatch({
                type: 'setMessages',
                messages: data
            })
            window.scrollTo(0,document.body.scrollHeight);
            // this.props.dispatch({
            //     type: 'setMessageList',

            // })
            console.log(data);
        }catch (e) {
            console.log(e);
        }
    }
    componentDidMount = async () => {
        setInterval(() => this.refrechMessages(), 3000);
    }

    render() {
        console.log(this.props.messages);
        return (
            <div style={{
                paddingBottom: "70px"
            }}>
                {this.props.messages.map(el => <SingleMessage name={el.user_name} content={el.message}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    messages: state
})

export default connect(mapStateToProps, null)(MessageList)




import React, { Component } from 'react';
import { Comment, Avatar } from 'antd';

export default class SingleMessage extends Component {
    render() {
        return (
            <div>
                <Comment
                author={<a>{this.props.name}</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt={this.props.name} />}
                content={
                    <p>
                    {this.props.content}
                    </p>
                }
                />
            </div>
        )
    }
}

// datetime={
//     <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
//     <span>{moment().fromNow()}</span>
//     </Tooltip>
// }
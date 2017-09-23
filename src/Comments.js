import React, {Component} from 'react'

import Comment from './Comment'

class Comments extends Component {
		render() {
				return (
					<ul className="commentList">
					{JSON.stringify(this.props.comments)}
						<Comment/>
					</ul>
				)
		}
}

export default Comments
import React, {Component} from 'react'

class Comment extends Component {
		render() {
				return (
						<li>
								<div className="commenterImage">
										<img src={this.props.comment.user.photoURL}/>
								</div>
								<div className="commentText">
										<p className=""><b>{this.props.comment.user.name}</b> escreveu:</p>
										<span className="date sub-text">{this.props.comment.comment}</span>

								</div>
						</li>
				)
		}
}

export default Comment
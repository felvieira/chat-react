import React, {Component} from 'react'

class Comment extends Component {
		render() {
				return (
								<li>
										<div className="commenterImage">
												<img src="http://lorempixel.com/50/50/people/9"/>
										</div>
										<div className="commentText">
												<p className="">Titulo</p>
												<span className="date sub-text">em 23 de Setembro de 2017</span>

										</div>
								</li>
				)
		}
}

export default Comment
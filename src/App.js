import React, {Component} from 'react';
import 'bootstrap-css-only'
import './style.css'

import NewComment from './NewComment'
import Comments from './Comments'

import base from './base'

class App extends Component {

	constructor(props) {
		super(props)

		this.postNewComment = this.postNewComment.bind(this)

		
		this.state = {
			comments: {
				
			}
		}	
			this.refComments = base.syncState('comments', {
				context: this,
				state: 'comments'
			})
	}

	// metodo de postar novo comentario
	postNewComment(comment) {
		const comments = { ...this.state.comments }
		//pegar segundos como id
		const timestamp = Date.now()
		comments[ `comm-${timestamp}` ] = comment
		
		this.setState({
			comments: comments
		})
	}
		render() {
				return (
						<div className="container">
								<div className="detailBox">
										<div className="titleBox">
												<label><h3>Titulo da noticia</h3></label>
												<button type="button" className="close" aria-hidden="true">&times;</button>
										</div>
										<div className="commentBox">

												<p className="taskDescription">Noticia qualquer</p>
										</div>
										<div className="actionBox">

											<Comments comments={this.state.comments}/>

											<NewComment postNewComment={this.postNewComment} />

										</div>
								</div>
						</div>
				);
		}
}

export default App;

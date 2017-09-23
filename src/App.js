import React, {Component} from 'react';
import 'bootstrap-css-only'
import './style.css'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {

	constructor(props) {
		super(props)

		this.postNewComment = this.postNewComment.bind(this)

		this.state = {
			comments: {
				'1': {
					// title: 'Primeiro Titulo',
					comment: 'Primeiro comentário'
				},
				'2': {
					// title: 'Segundo Titulo',
					comment: 'Segundo comentário'
				}
			}
		}
	}
	
	// metodo de postar novo comentario
	postNewComment(comment){
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

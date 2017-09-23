import React, {Component} from 'react'

class NewComment extends Component {
		constructor(props) {
				super(props)
				
				this.handleEnter = this.handleEnter.bind(this)
				this.handleClick = this.handleClick.bind(this)
		}

		handleEnter(event) {
				// se clicar o enter
				if (event.keyCode === 13) {
						this.props.postNewComment({comment: this.refs.comment.value})
						// esvaziar campo
						this.refs.comment.value = ''
						event.preventDefault();
				}

		}
		handleClick(event) {
				this.props.postNewComment({comment: this.refs.comment.value})
				this.refs.comment.value = ''
				event.preventDefault();
		}

		render() {
				return (
						<div className="new-comment">
								<form className="form-inline" role="form">
										<div className="form-group">
												<input
														ref="comment"
														className="form-control"
														type="text"
														placeholder="Insira seu comentário"
														onKeyDown={this.handleEnter}/>
										</div>
										<div className="form-group">
												<button className="btn btn-primary" onClick={this.handleClick}>Enviar</button>
										</div>
								</form>
						</div>
				)
		}
}

export default NewComment
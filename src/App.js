import React, {Component} from 'react';
import 'bootstrap-css-only'
import './style.css'

import NewComment from './NewComment'
import Comments from './Comments'

import base from './base'

class App extends Component {

		constructor(props) {
				super(props)

				this.postNewComment = this
						.postNewComment
						.bind(this)

				this.state = {
						comments: {},
						isLoggedIn: false,
						user: {}
				}
				this.refComments = base.syncState('comments', {
						context: this,
						state: 'comments'
				})

				this
						.props
						.auth
						.onAuthStateChanged((user) => {
								if (user) {
										this.setState({isLoggedIn: true, user})
								} else {
										this.setState({isLoggedIn: false, user: {}})
								}
						})
		}

		// metodo de postar novo comentario
		postNewComment(comment) {
				comment.user = {
						uid: this.state.user.uid,
						name: this.state.user.displayName,
						photoURL: this.state.user.photoURL,
						email: this.state.user.email
				}
				const comments = {
						...this.state.comments
				}
				//pegar segundos como id
				const timestamp = Date.now()
				comments[`comm-${timestamp}`] = comment

				this.setState({comments: comments})
		}

		auth(provider) {
				console.log(provider);
				this
						.props
						.auth
						.signInWithPopup(this.props.providers[provider])
		}

		//<button type="button" className="close" aria-hidden="true">&times;</button>

		render() {
				return (
						<div className="container">
								<div className="detailBox">
										<div className="titleBox">
												<label>
														<h3>Titulo da noticia</h3>
												</label>
												{this.state.isLoggedIn && <div className="user">
														<div className="user-img"><img alt={this.state.user.displayName} src={this.state.user.photoURL}/></div>
														<div className="user-name">{this.state.user.displayName}</div>
														<div className="user-deslogar">
																<button onClick={() => this.props.auth.signOut()} className="btn btn-danger btn-xs ">Deslogar</button>
														</div>
												</div>
												}
												
										</div>
										<div className="commentBox">

												<p className="taskDescription">Noticia qualquer</p>
										</div>
										<div className="actionBox">

												<Comments comments={this.state.comments}/> {this.state.isLoggedIn && <NewComment postNewComment={this.postNewComment}/>
												}
												{!this.state.isLoggedIn && <div className='alert alert-danger'>
														<button
																onClick={() => this.auth('facebook')}
																className="loginBtn loginBtn--facebook">Entre com o Facebook para comentar</button>
												</div>
												}

										</div>
								</div>
								{this.state.isLoggedIn && <div className="hide">{JSON.stringify(this.state.user)}</div>
												}
						</div>
				);
		}
}

export default App;

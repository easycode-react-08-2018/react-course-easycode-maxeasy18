import React from 'react';
import logo from './../logo.svg';

export class Index extends React.Component {
	render(){
		return (
			<div className="container">
				<header className="container"> 
						<div className="user-login">
							<div>User Login</div>
						</div>		
						<div className="sign-out">
							<button>Sign Out</button>
						</div>										
						<div className="sign-in">
							<button>Sign In</button>
						</div>
						<div className="logo">
							<img src={logo} className="App-logo" alt="logo" />
						</div>
				</header>
				<main>
					<div className="form well">
						<form className="form-horizontal">
						  <div className="form-group">
						    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Username</label>
						    <div className="col-sm-10">
						      <input type="email" className="form-control" id="inputEmail3" placeholder="Username" />
						    </div>
						  </div>
						  <div className="form-group">
						    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
						    <div className="col-sm-10">
						      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
						    </div>
						  </div>
						  <div className="form-group">
						    <div className="col-sm-offset-2 col-sm-10">
						      <div className="checkbox">
						        <label>
						          <input type="checkbox" /> Remember me
						        </label>
						      </div>
						    </div>
						  </div>
						  <div className="form-group">
						    <div className="col-sm-offset-2 col-sm-10">
						      <button type="submit" className="btn btn-default">Sign in</button>
						    </div>
						  </div>
						</form>

					</div>
					<div className="recipes-search">
						<form className="form-inline">
						  <div className="form-group">
						    <label htmlFor="exampleInputName2">Search</label>
						    <input type="text" className="form-control" id="exampleInputName2" placeholder="Enter title or ingridients" />
						  </div>
						 
						  <button type="submit" className="btn btn-default">find</button>
						</form>			
						<button>Add recipe</button>		
					</div>
					<div className="recipes-list">
						<div className="recipe well">
							<div className="recipe-logo">
								<img src="" alt="logo" />
							</div>
							<div className="recipe-descr">
								<div className="recipe-title">
								recep 1
								</div>
								<div className="recipe-ingredients">
									<ul className="recipe-ingredient">
										<li>ingr 1</li>
										<li>ingr 2</li>
										<li>ingr 3</li>
										<li>ingr 4</li>
									</ul>
								</div>
							</div>
							<div className="recipe-actions">
								<button>Edit</button>
								<br />
								<button>remove</button>
							</div>
						</div>

					</div>
					<div className="recipes-edit">
						<div className="recipes-edit-child recipe-image">
							<img src="" alt="image" />
							<br />
							<button>Upload Image</button>
							<button>Delete Image</button>
						</div>	
						<div className="recipes-edit-child  recipe-detailes well">
							<div className="recipe-detailes-child recipe-title">
							</div>
							<form className="recipe-detailes-child form-horizontal">
							  <div className="form-group">
							    <label htmlFor="inputEmail3" className="col-sm-2 control-label">TItle</label>
							    <div className="col-sm-10">
							      <input type="email" className="form-control" id="inputEmail3" placeholder="Title" />
							    </div>
							  </div>
							  <div className="form-group">
							    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Ingredients</label>
							    <div className="ingredients-moves col-sm-10">
							      <ul className="ingredients-moves-child list-group">
										<li className="ingridient list-group-item">ingr 1</li>
										<li className="ingridient list-group-item  active">ingr 2</li>
										<li className="ingridient list-group-item">ingr 3</li>
										<li className="ingridient list-group-item">ingr 4</li>							      
							      </ul>
							      <div className="ingredients-moves-child arrows">
									<button><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>
									<br />
									<button><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>							      	
							      </div>
							      <ul className=" ingredients-moves-child list-group">
										<li className="ingridient list-group-item">ingr 5</li>
										<li className="ingridient list-group-item active">ingr 6</li>
										<li className="ingridient list-group-item">ingr 7</li>
										<li className="ingridient list-group-item">ingr 8</li>							      
							      </ul>							      
							    </div>
							  </div>
							  
							</form>							
						</div>				
					</div>

				</main>
				<footer>
				</footer>
			</div>

		)
	}
}
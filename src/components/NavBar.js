import React from 'react'
import {
  BrowserRouter as Router,
  //Switch,
  //Route,
	Link
} from "react-router-dom";
 const NavBar = (props) => {
	 const { onChangeState } = props
	
	 const handleClick = (value) => {
		onChangeState(value)
	 }
	 return(
		<Router>
			<div style={{"borderBottom": ".5px solid grey"}} className="w-full text-center flex justify-center flex-col bg-green-200 pl-1 py-2">
				<ul className="flex space-x-4 content-around text-center items-center text-blue-800">
					<li className="cursor-pointer">
						<Link to="/criteria">
							<a href="/criteria" onClick={(e) => {e.preventDefault(); handleClick(1)}}>criteria</a>
						</Link>
					</li>
					<li className="cursor-pointer">
						<Link to="/patients">
							<a href="/patients" onClick={(e) => {e.preventDefault(); handleClick(2)}}>patients</a>
						</Link>
					</li>
				</ul>
			</div>
		</Router>
	 )
 }
export default NavBar 

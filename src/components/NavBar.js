import React from 'react'
 const NavBar = (props) => {
	 const { onChangeState } = props
	
	 const handleClick = (value) => {
		onChangeState(value)
		console.log(value)
	 }
	 return(
		<div className="w-full text-center flex justify-center flex-col bg-green-200 py-2">
			<ul className="flex space-x-4 text-center items-center text-blue-800">
				<li className="cursor-pointer"><a href="/criteria" onClick={(e) => {e.preventDefault(); handleClick(1)}}>criteria</a></li>
				<li className="cursor-pointer"><a href="/patients" onClick={(e) => {e.preventDefault(); handleClick(2)}}>patients</a></li>
			</ul>
		</div>
	 )
 }
export default NavBar 

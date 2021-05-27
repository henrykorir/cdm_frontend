import React from 'react'
 const NavBar = (props) => {
	 const { onChangeReport } = props
	 console.log(props)
	 //const handleClick = (value) => {
	//	onChangeReport(value)
	 //}
	 return(
		<div className="w-full text-center flex justify-center flex-col bg-green-200 py-2">
			<ul className="flex space-x-4 text-center items-center text-blue-800">
				<li><a href="/criteria" onClick={(e) => {e.preventDefault(); onChangeReport(1)}}>criteria</a></li>
				<li><a href="/patients" onClick={(e) => {e.preventDefault(); onChangeReport(2)}}>patients</a></li>
			</ul>
		</div>
	 )
 }
export default NavBar 

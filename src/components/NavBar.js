import React, { useState } from 'react'
 const NavBar = () => {
	 const [title, setTitle] = useState("Cronic Disease Criteria Summary")
	 return(
		<div className="flex justify-center bg-green-200 py-2">
			<h1 className="w-full text-center">{title}</h1>
		</div>
	 )
 }
export default NavBar 

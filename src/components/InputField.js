import React from 'react'

const InputField = ({ keyword, setKeyword }) => {
	return(
		<input 
			className="border-2 focus:border-blue-500 hover:border-blue-500 w-6/12 h-8 text-center" 
			key={ "random1" }
			type={"text"} 
			value={ keyword } 
			onChange={ e => setKeyword(e.target.value) } 
			placeholder="Enter patient name to search ..."
		/>
	)
}
export default InputField

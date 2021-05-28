import React from 'react'
import InputField from './InputField'

const SearchBar = ({ text, onChange }) => {
	console.log("text:",text, "funt:",onChange)
	return(
		<div className="flex justify-center bg-green-200 py-4">
			<InputField 
				keyword={ text }
				setKeyword = { onChange }
			/>
		</div>
	)
}
export default SearchBar
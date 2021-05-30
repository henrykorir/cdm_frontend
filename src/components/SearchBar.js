import React from 'react'
import InputField from './InputField'

const SearchBar = ({ text, onChange }) => {
	return(
		<div className="flex justify-center bg-gray-800 py-4">
			<InputField 
				keyword={ text }
				setKeyword ={ onChange }
			/>
		</div>
	)
}
export default SearchBar
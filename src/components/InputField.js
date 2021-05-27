import { useState } from 'react'

const InputField = ({ onGetPatientName }) => {
	const [value, setValue] = useState("")
	
	const handleOnChange = ( event ) => {
		setValue(event.target.value)
		onGetPatientName(event.target.value)
	}
	
	return(
		<input className="w-6/12 h-8 text-center" type="text" value={ value } onChange={ handleOnChange } placeholder="Enter patient name..."/>
	)
}
export default InputField

import { useState } from 'react'

const InputField = ({ onGetPatientName }) => {
	const [value, setValue] = useState("")
	const handleOnChange = ( event ) => {
		setValue(event.target.value)
		onGetPatientName(event.target.value)
	}
	return(
		<input type="text" value={ value } onChange={ handleOnChange } />
	)
}
export default InputField

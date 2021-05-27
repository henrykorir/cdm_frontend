import React, { useState, useEffect } from 'react'
import InputField from './InputField'

const SearchBar = ( props ) => {
	//const [ onShowPatient ] = props
	const [ patientName, setPatientName ] = useState("")
	const [ patientData, setPatientData ] = useState(null)
	
	const getPatientName = ( name ) => {
		setPatientName(name)
	}
	
	
	useEffect(() => {
		fetch('https://ampath.herokuapp.com/patients')
		.then( result => result.json())
		.then( data => setPatientData(data))
		.catch(error => console.error(error))
	})
	
	useEffect(() => {
		const searchPatientByName = ( name ) => {
			if(patientData){
				const { rows } = patientData
				console.log( rows.filter( row => row['PatientName'] === patientName))
			}
		}
		searchPatientByName(patientName)
	},[ patientName ])
	
	return(
		<div className="flex items-center justify-center">
			<InputField onGetPatientName = { getPatientName }/>
		</div>
	)
}
export default SearchBar
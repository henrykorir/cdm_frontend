import React, { useState, useEffect } from 'react'
import InputField from './InputField'

const SearchBar = ({ getPatient, setAllPatients }) => {
	const [ patientsData, setPatientsData ] = useState(null)
	const [ patientName, setPatientName ] = useState("")
	
	const getPatientName = ( name ) => {
		setPatientName(name)
	}
	useEffect(() => {
		fetch('https://ampath.herokuapp.com/patients')
		.then( result => result.json())
		.then( data => {console.log(data);setPatientsData(data); setAllPatients(data)})
		.catch(error => console.error(error))
	})
	// eslint-disable-next-line
	useEffect(() => {
		const searchPatientByName = ( name ) => {
			// eslint-disable-next-line
			if( patientsData ){
				// eslint-disable-next-line
				const { rows } = patientsData
				const patientRecord = rows.filter( row => row['PatientName'] === patientName)
				console.log(patientRecord)
				// eslint-disable-next-line
				getPatient(patientRecord)
			}
		}
		// eslint-disable-next-line
		searchPatientByName(patientName)
	},[ patientName])
	
	return(
		<div className="flex justify-center bg-green-200 py-4">
			<InputField onGetPatientName = { getPatientName }/>
		</div>
	)
}
export default SearchBar
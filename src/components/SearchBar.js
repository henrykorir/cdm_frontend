import React, { useState, useEffect } from 'react'
import InputField from './InputField'
/*
const initialState = null
const reducer = (state, action) =>{
	switch(action.type){
		case 'SEARCH_PATIENT_BY_NAME':
			return {
				...state, rows:[...state.rows, action.payload]
			}
		default:
			return state;
	}
}
*/
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
	
	useEffect(() => {
		const searchPatientByName = ( name ) => {
			if( patientsData ){
				const { rows } = patientsData
				const patientRecord = rows.filter( row => row['PatientName'] === patientName)
				console.log(patientRecord)
				getPatient(patientRecord)
			}
		}
		searchPatientByName(patientName)
	},[ patientName, patientsData, getPatient])
	
	return(
		<div className="flex justify-center bg-green-200 py-4">
			<InputField onGetPatientName = { getPatientName }/>
		</div>
	)
}
export default SearchBar
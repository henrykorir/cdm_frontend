import React, { useState, useEffect, useCallback, useMemo } from 'react'
import InputField from './InputField'

const SearchBar = ({ getPatient, setAllPatients }) => {
	const [ patientsData, setPatientsData ] = useState(null)
	const [ patientName, setPatientName ] = useState("")
	
	const getPatientName = ( name ) => {
		setPatientName(name)
	}
	
	const searchPatientByName = ( name, data ) => {
		// eslint-disable-next-line
		if( data ){
			// eslint-disable-next-line
			const { rows } = data
			const patientRecord = rows.filter( row => row['PatientName'] === patientName)
			// eslint-disable-next-line
			getPatient(patientRecord)
		}
	}
	
	const patients = useMemo(() =>{
		return   patientsData
	},[patientsData])
	
	const memoizedFindPatient = useCallback(() =>{
		searchPatientByName(patientName, patients)
	},[searchPatientByName, patientName,  patients])
	
	console.log(patients)
	useEffect(() => {
		fetch('https://ampath.herokuapp.com/patients')
		.then( result => result.json())
		.then( data => {setPatientsData(data); setAllPatients(data)})
		.catch(error => console.error(error))
	})

	useEffect(() => {
		memoizedFindPatient()
	},[ memoizedFindPatient])
	
	return(
		<div className="flex justify-center bg-green-200 py-4">
			<InputField onGetPatientName = { getPatientName }/>
		</div>
	)
}
export default SearchBar
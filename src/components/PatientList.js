import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ReportTable from './ReportTable'

const PatientList = () => {
	const [ patientsData, setPatientsData ] = useState({status:200,rows:[],message:"User lists retrieved successfully"})
	const [ patientRecord, setPatientRecord ] = useState([])
	const [ patientName, setPatientName ] = useState("")
	
	
	const fetchPatients = async () => {
		return await fetch('https://ampath.herokuapp.com/patients')
			.then( result => result.json())
			.then( data => {
				setPatientsData(data); 
				setPatientRecord(data.rows)
			})
			.catch(error => console.error(error))
	}
	
	const updateInput = async (patientName) => {
		const { rows } = patientsData
		const filteredRecord = rows.filter( row => row['PatientName'] === patientName)
		setPatientName(patientName);
		setPatientRecord(filteredRecord);
	}
	useEffect( () => { 
		fetchPatients()
	},[] )
	
	return(
		<>
			<SearchBar 
				text={ patientName } 
				onChange={ updateInput} 
			/> 
			{
				patientRecord.length > 0 ?
					<ReportTable 
						title={"Patients Record"} 
						data = { patientName !== "" > 0 ? patientRecord : patientsData.rows} 
						isCriteria={ false } 
						onClickLink={ null } 
					/>
				:
					<div>{"Loading ..."}</div>
				}
		</>
	)
}
export default PatientList
import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ReportTable from './ReportTable'

const PatientList = () => {
	const [ patientRecord, setPatientRecord ] = useState([])
	const [ state, setState ] = useState([])
	const [ allPatients, setAllPatients ] = useState(null)
	
	const getPatient =  record  => {
		setPatientRecord(record)
	}
	
	useEffect(() => {
		if( patientRecord.length > 0 ) 
			setState(patientRecord) 
		else
			if(allPatients !== null)
				setState(allPatients.rows)
	},[patientRecord, allPatients])

	return(
		<>
			<SearchBar getPatient={ getPatient } setAllPatients={ setAllPatients} /> 
			{
			
				state.length > 0 ? 
					<ReportTable title={"Patients Record"} data = { state } isCriteria={ false } onClickLink={ null } />
				:
				null
			}
		</>
	)
}
export default PatientList
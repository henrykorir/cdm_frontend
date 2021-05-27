import React from 'react' 
import PatientList from './PatientList'
import CriteriaList from './CriteriaList'

const Main = ({ state }) => {
	const component = state === 1 ? <CriteriaList /> : <PatientList />
	return(
	<>
	{ component }
	</>
	)
}
export default Main
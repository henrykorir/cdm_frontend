import React, { useState, useEffect } from 'react'
import ReportTable from './ReportTable'

const CriteriaList = () => {
	const [ criteriaData, setCriteriaData] = useState(null)
	const [ summary, setSummary] = useState([])
	const handleLinkClick = (data) => {
		console.log(data)
		setSummary(data.rows)
	}
	// eslint-disable-next-line
	useEffect(() =>{
		fetch('https://ampath.herokuapp.com')
		.then( result => result.json())
		.then( data => setCriteriaData(data))
		.catch( error => console.error(error))
	})
	return(
		<>
		{
			summary.length === 0 ?
			(
				criteriaData !== null ? 
				(
					<ReportTable 
						title={"Cronic Disease Criteria Summary"}
						data={ criteriaData.rows } 
						isCriteria={ true } 
						onClickLink={ handleLinkClick } 
					/> 
				)
				:
				null
			)
			:
			(
				<ReportTable 
					title={"Category Report"}
					data={ summary } 
					isCriteria={ false } 
					onClickLink={ null } 
				/>
			)
		}
		</>
	)
}
export default CriteriaList	

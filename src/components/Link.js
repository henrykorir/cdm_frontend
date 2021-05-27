import React from 'react' 

const Link = ({ text, location, criteria, onClickLink }) => {
	const handleClick = ( locationName, criteriaType ) => {
		let url = 'https://ampath.herokuapp.com/patients'
		if(criteriaType === 'New Hypertensive')
			url = url + '/hypertensive/new/'
		else if(criteriaType === 'Known Hypertensive')
			url = url + '/hypertensive/known/'
		else if(criteriaType === 'New Diabetic')
			url = url + '/diabetic/new/'
		else if(criteriaType === 'Known Diabetic')
			url = url + '/diabetic/known/'
		else
			url = url + '/both/'
		url = url + '?location=' + locationName
		console.log(url)
		fetch(url)
		.then( result => result.json())
		.then( data => onClickLink(data))
		.catch(error => console.error(error))
	}
	return(
		<>
			<a 
				href="/" 
				onClick = {(e) => { e.preventDefault();handleClick(location, criteria) }} 
			>
			{ text }
			</a>
		</>
	)
}
export default Link
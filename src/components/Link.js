import React from 'react' 

const Link = ({ text, location, criteria, onClickLink }) => {
	let url = 'https://ampath.herokuapp.com/patients'
	if(criteria === 'New Hypertensive')
		url = url + '/hypertensive/new/'
	else if(criteria === 'Known Hypertensive')
		url = url + '/hypertensive/known/'
	else if(criteria === 'New Diabetic')
		url = url + '/diabetic/new/'
	else if(criteria === 'Known Diabetic')
		url = url + '/diabetic/known/'
	else
		url = url + '/both/'
	url = url + '?location=' + location
	const handleClick = ( link ) => {
		fetch(link)
		.then( result => result.json())
		.then( data => onClickLink(data))
		.catch(error => console.error(error))
	}
	return(
		<>
			<a 
				className="w-full h-full text-blue-600 inline-block"
				href={ url.substring(28) } 
				onClick = { e => {e.preventDefault(); handleClick(url)} }
			>
			{ text }
			</a>
		</>
	)
}
export default Link
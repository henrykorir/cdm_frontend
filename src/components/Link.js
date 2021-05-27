import React from 'react' 

const Link = ({ text, onClickLink }) => {
	const handleClick = ( event ) => {
		event.preventDefault()
	}
	return(
		<>
			<a href="/" onClick = { handleClick } >{ text }</a>
		</>
	)
}
export default Link
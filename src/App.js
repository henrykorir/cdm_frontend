import { useState } from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'

const App = () => {
	const [ state, setState ] = useState(1)
	const changeState = ( value ) => {
		setState(value)
	}
	return (
		<div className="min-w-11/12 min-h-screen items-center justify-center top-0">
			<NavBar onChangeState = { changeState }/>
			<Main state ={ state }/>
		</div>
	)
}

export default App;

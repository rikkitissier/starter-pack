import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { doPlaceholder } from './redux/actions/placeholder';

const App = () => {
	const placeholder = useSelector(state => state.placeholder )
	const dispatch = useDispatch();

	return (
		<main className='p-10'>
			<h1 className='text-2xl font-bold'>Starter Kit</h1>
			<p data-testid='placeholder'>{placeholder.text}</p>

			<button onClick={() => {
				dispatch(doPlaceholder("Updated placeholder"))
			}}>Update placeholder</button>
		</main>
	);
}

export default App;

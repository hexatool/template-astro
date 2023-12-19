import type { JSX } from 'preact';
import useCountState from '../state/count';

const MaxCounter = (): JSX.Element => {
	const {max} = useCountState();

	return (
		<span>Max {max}</span>
	);
};

export default MaxCounter;

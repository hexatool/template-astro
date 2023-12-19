import { useStore } from '@nanostores/preact';
import { type JSX } from 'preact';
import useCountState from '../state/count';
import { i18n } from '../state/locale';


const messages = i18n('counter', {
	decrement: 'Decrement',
	counter: `Counter`,
	increment: `Increment`,
});

const Counter = (): JSX.Element => {
	const {value, decrement, increment} = useCountState();
	const t = useStore(messages);

	return (
		<div>
			<button
				onClick={() => decrement()}
				type='button'
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
				{t.decrement}
			</button>
			<span>{t.counter} {value}</span>
			<button
				onClick={() => increment()}
				type='button'
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
				{t.increment}
			</button>
		</div>
	);
};

export default Counter;

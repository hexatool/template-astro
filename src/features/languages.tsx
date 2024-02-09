import { useStore } from '@nanostores/preact';
import type { JSX } from 'preact';

import useLocaleState, { i18n } from '../state/locale';

const messages = i18n('lang', {
	spanish: 'Spanish',
	english: `English`,
	system: `System`,
});

const Languages = (): JSX.Element => {
	const { setLocale } = useLocaleState();
	const t = useStore(messages);

	return (
		<div>
			<button
				onClick={() => setLocale('es-ES')}
				type='button'
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
				{t.spanish}
			</button>
			<button
				onClick={() => setLocale('system')}
				type='button'
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
				{t.system}
			</button>
			<button
				onClick={() => setLocale('en-EN')}
				type='button'
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
				{t.english}
			</button>
		</div>
	);
};

export default Languages;

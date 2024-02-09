import { useStore } from '@nanostores/preact';
import type { JSX } from 'preact';

import { i18n } from '../state/locale';

const messages = i18n('hello', {
	hello: 'Hello world',
});

const Title = (): JSX.Element => {
	const t = useStore(messages);

	return <h1 className='text-2xl text-center'>{t.hello} 👋🏼</h1>;
};

export default Title;

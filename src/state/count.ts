import { persistentAtom } from '@nanostores/persistent';
import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';

const $count = atom<number>(0);
const $maxCount = persistentAtom<string>('max', '0', {
	encode: JSON.stringify,
		decode: JSON.parse,
});

export interface CountState {
	max: number;
	value: number;
	decrement: () => void;
	increment: () => void;
}

export default function useCountState(): CountState {
	const count = useStore($count);
	const maxCount = Number(useStore($maxCount));

	return {
		max: maxCount,
		value: count,
		increment() {
			$count.set($count.get() + 1);
			const actualMax = Number($maxCount.get())
			const max = $count.get() > actualMax ? $count.get() : actualMax;
			$maxCount.set(max.toFixed());
		},
		decrement() {
			$count.set($count.get() - 1);
		},
	};
}

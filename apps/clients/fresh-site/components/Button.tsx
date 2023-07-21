import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { Product } from '../../../../libs/shared/models/src/index.ts';

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const product: Product = {
    name: 'Playstation',
    price: 349,
  };

  console.log(`Product`, product);

  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
    />
  );
}

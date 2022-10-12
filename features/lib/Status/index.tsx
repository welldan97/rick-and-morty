import { memo } from 'react';

interface Props {
  isError: boolean;
  error?: string;
}

export default memo(({ isError, error }: Props) => {
  if (isError)
    return (
      <h2 className="text-xl block mx-auto text-center text-base-100">
        {error ?? 'Oops, something went wrong'}
      </h2>
    );
  return (
    <h2 className="text-xl block mx-auto text-center text-base-100">
      Loading...
    </h2>
  );
});

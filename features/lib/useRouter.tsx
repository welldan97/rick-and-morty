import Router, { useRouter as baseUseRouter } from 'next/router';

// Mocking router for testing
declare global {
  // eslint-disable-next-line
  var router: typeof Router;
}

const useRouter = () => {
  if (typeof global.router !== 'undefined') return global.router;
  return baseUseRouter();
};
export default useRouter;

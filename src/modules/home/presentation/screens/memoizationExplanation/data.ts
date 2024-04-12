import {memoizationRoutes} from './navigation/memoization_routes';

export const memoizationData = {
  explanations: [
    {
      title: 'React Use Callback',
      description:
        'useCallback is a React Hook that lets you cache a function definition between re-renders.',
      route: memoizationRoutes.withUseCallbackScreen,
    },
    {
      title: 'Without React Use Callback',
      description:
        'useCallback is a React Hook that lets you cache a function definition between re-renders.',
      route: memoizationRoutes.withoutUseCallbackScreen,
    },
    {
      title: 'Large Lists Do',
      description:
        'A higher-order component is a function that takes a component and returns a new component.',
      route: memoizationRoutes.largeListsDo,
    },
    {
      title: 'Large Lists do not',
      description:
        'A higher-order component is a function that takes a component and returns a new component.',
      route: memoizationRoutes.largeListsDoNot,
    },
  ],
};

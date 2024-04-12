import {homeRoutes} from '../../navigation/home_routes';

export const homeData = {
  explanations: [
    {
      title: 'React Context',
      description:
        'Context provides a way to pass data through the component tree without having to pass props down manually at every level.',
      route: homeRoutes.contextStack,
    },
    {
      title: 'React HOC',
      description:
        'A higher-order component is a function that takes a component and returns a new component.',
      route: homeRoutes.hocStack,
    },
    {
      title: 'React Memoization',
      description:
        'Is a performance optimization technique used in React to prevent unnecessary re-renders of functional components.',
      route: homeRoutes.memoizationStack,
    },
    {
      title: 'React FordwardRef',
      description:
        'Ref forwarding is a technique for automatically passing a ref through a component to one of its children. ',
      route: homeRoutes.forwardRefStack,
    },
    {
      title: 'Redux Toolkit',
      description:
        'Redux is a predictable state container for JavaScript apps.',
      route: homeRoutes.reduxStack,
    },
  ],
};

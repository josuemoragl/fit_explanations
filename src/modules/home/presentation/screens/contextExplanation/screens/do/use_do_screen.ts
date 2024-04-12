import {useScreenContext} from './do_screen';

interface UseDoScreenReturn {
  updateValues: ({name, lastName}: {name: string; lastName: string}) => void;
}

export default function useDoScreen(): UseDoScreenReturn {
  const {setUser} = useScreenContext();
  const updateValues = ({name, lastName}: {name: string; lastName: string}) => {
    setUser({name, lastName});
  };

  return {
    updateValues,
  };
}

import {useDispatch} from 'react-redux';
import {userDataReceived} from '../../../../../common/infrastructure/redux/reducers/user_reducer';

interface UseDoScreenReturn {
  updateValues: ({name, lastName}: {name: string; lastName: string}) => void;
}

export default function useReduxExampleScreen(): UseDoScreenReturn {
  const dispatch = useDispatch();

  const updateValues = ({name, lastName}: {name: string; lastName: string}) => {
    dispatch(userDataReceived({user: {name, lastName}}));
  };

  return {
    updateValues,
  };
}

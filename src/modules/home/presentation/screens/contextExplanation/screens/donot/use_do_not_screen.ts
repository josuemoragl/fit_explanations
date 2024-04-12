import {useState} from 'react';

interface UseDoNotScreenReturn {
  name: string;
  lastName: string;
  updateValues: ({name, lastName}: {name: string; lastName: string}) => void;
}

export default function useDoNotScreen(): UseDoNotScreenReturn {
  const [userName, setName] = useState<string>('');
  const [userLastName, setLastName] = useState<string>('');

  const updateValues = ({name, lastName}: {name: string; lastName: string}) => {
    setName(name);
    setLastName(lastName);
  };

  return {
    name: userName,
    lastName: userLastName,
    updateValues,
  };
}

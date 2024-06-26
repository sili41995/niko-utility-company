import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
  const location = useLocation();
  console.log(location);
};

export default usePageTitle;

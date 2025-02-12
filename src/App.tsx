import { useDispatch } from 'react-redux';
import LandingPage from './pages/LandingPage';
import { useEffect } from 'react';
import { updateScreenSize } from './slices/screen/reducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        updateScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return <LandingPage />;
}

export default App;

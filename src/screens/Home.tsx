import Navbar from 'components/Navbar';
import ScreenBody from 'components/ScreenBody';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import '../renderer/App.css';

export default function () {
  const { uri } = useSelector((state: any) => state.defaultReducer);

  useEffect(() => {
    let socket = new WebSocket(uri);
    socket.onopen = () => {
      console.log('connected');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
    };

    return () => {
      socket.close();
    };
  }, [uri]);

  return (
    <div>
      <Navbar path="/" />
      <ScreenBody name="Dashboard" children={<div>Dashboard</div>} />
    </div>
  );
}

import Navbar from 'components/Navbar';
import ScreenBody from 'components/ScreenBody';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUri } from '../../redux/actions';

export default function () {
  const dispatch: any = useDispatch();
  const { uri } = useSelector((state: any) => state.defaultReducer);
  const [wsUri, setWsUri] = useState<string>(uri);

  return (
    <div>
      <Navbar path="/debug" />
      <ScreenBody
        name="Debug"
        children={
          <div className="w-full">
            <div className="flex items-center">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10"
                type="text"
                value={wsUri}
                onChange={(e) => setWsUri(e.target.value)}
                placeholder="WebSocket Uri"
              />
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={() => dispatch(setUri(wsUri))}
              >
                Confirm
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
}

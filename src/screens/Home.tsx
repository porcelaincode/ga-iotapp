import { useMemo } from 'react';
import DataCard from 'components/DataCard';
import Navbar from 'components/Navbar';
import ScreenBody from 'components/ScreenBody';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import '../renderer/App.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Data Chart',
    },
  },
};

export default function () {
  const [noDefect, setNoDefect] = useState<boolean>(true);
  const [connected, setConnected] = useState<boolean>(false);

  const { uri } = useSelector((state: any) => state.defaultReducer);

  const labels = [
    '11:23:45',
    '11:23:95',
    '11:24:45',
    '11:24:95',
    '11:25:45',
    '11:25:95',
    '11:26:45',
    '11:26:95',
    '11:27:45',
    '11:27:95',
    '11:28:45',
    '11:28:95',
    '11:29:45',
    '11:29:95',
    '11:30:45',
    '11:30:95',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Current',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 90 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Voltage',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 90 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },

      {
        label: 'Flow',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
        borderColor: 'rgb(225, 211, 92)',
        backgroundColor: 'rgba(225, 211, 92, 0.5)',
      },

      {
        label: 'Humidity',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 70 })),
        borderColor: 'rgb(19, 75, 67)',
        backgroundColor: 'rgba(19, 75, 67, 0.5)',
      },
    ],
  };

  useEffect(() => {
    let socket = new WebSocket(uri);
    socket.onopen = () => {
      console.log('connected');
      setConnected(true);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
    };

    return () => {
      socket.close();
      setConnected(false);
    };
  }, [uri]);

  return (
    <div>
      <Navbar path="/" />
      <ScreenBody
        name="Dashboard"
        plain={true}
        children={
          <div>
            <div
              className={`flex items-center bg-${
                noDefect ? 'red' : 'red'
              }-500 text-white text-sm px-4 py-3 mb-5`}
              role="alert"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
              </svg>
              <p className="flex flex-wrap font-normal">
                System detected there might be a possibility of defect:{' '}
                <div className="ml-2 font-extrabold">Porosity</div>
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-10">
              <DataCard
                title={'Current'}
                limit={40}
                current={30}
                unit={'Amps'}
              />
              <DataCard
                title={'Voltage'}
                limit={40}
                current={30}
                unit={'Amps'}
              />
              <DataCard title={'Flow'} limit={15} current={9} unit={'Lpm'} />
              <DataCard
                title={'Temprature'}
                limit={70}
                current={65}
                unit={'%'}
              />
            </div>
            <Line options={options} data={data} height={'100%'} />
          </div>
        }
      />
    </div>
  );
}

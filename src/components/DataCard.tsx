interface iDataCard {
  title: string;
  limit: number;
  current: number;
  unit: string;
}

export default function (props: iDataCard) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <div className="flex flex-wrap text-gray-700 text-base">
          <p className="font-bold text-3xl text-gray-800">{props.current}</p>
          <p className="ml-2 text-xl">
            /{props.limit} {props.unit}
          </p>
        </div>
      </div>
    </div>
  );
}

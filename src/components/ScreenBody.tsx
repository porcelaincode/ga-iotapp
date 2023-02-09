interface IScreenBody {
  name: string;
  children: any;
}

export default function (props: IScreenBody) {
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-9xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {props.name}
          </h1>
        </div>
      </header>
      {/* shambolic, IMPROVE!! */}
      <main className="mx-auto max-w-9xl py-6 px-4 sm:px-6 lg:px-8">
        {props.children}
      </main>
    </div>
  );
}

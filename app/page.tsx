

const App: FC = () => {

      </div>
  return (
    <div
      className={clsx("h-screen w-screen", {
        "bg-neutral-200": darkMode,
        "bg-neutral-700": !darkMode,
      })}
    >
    </div>
  );
};

export default App;



const App: FC = () => {

      </div>
  return (
    <div
      className={clsx("h-screen w-screen", {
        "bg-neutral-200": darkMode,
        "bg-neutral-700": !darkMode,
      })}
    >
      {!session ? (
        <Auth {...{ darkMode }} />
      ) : (
        <>
          <main
            className={`main h-screen ${
              darkMode ? "bg-neutral-200" : "bg-neutral-700"
            }`}
          >
          </main>
        </>
      )}
    </div>
  );
};

export default App;

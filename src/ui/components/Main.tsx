const Main = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="flex flex-1 max-w-full w-full bg-background justify-center h-full">
      <div className="w-[1366px] max-w-screen flex flex-col flex-1 min-h-full">
        {children}
      </div>
    </main>
  );
};

export default Main;

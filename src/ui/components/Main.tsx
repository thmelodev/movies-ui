
const Main = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="w-screen min-h-screen bg-background flex justify-center items-start">
      {children}
    </main>
  );
};

export default Main;

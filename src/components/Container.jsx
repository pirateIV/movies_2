const Container = ({ children }) => {
  return (
      <div className="relative w-full flex flex-col lg:flex-row items-start justify-end overflow-hidden">
        {children}
      </div>
  );
};

export const MainContent = ({ children }) => {
  return (
    <div className="min-h-screen w-full order-1 lg:order-2 lg:w-[calc(100%-70px)]">
      {children}
    </div>
  );
};
export default Container;

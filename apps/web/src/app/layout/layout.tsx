import { Navbar } from './navbar/navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:flex items-start justify-between bg-[aliceblue]">
      <Navbar />
      <div className="flex flex-col lg:ml-60 w-full pl-0   select-none md:space-y-4 text-center bg-[aliceblue] h-[100vh] m-auto text-[#003552]">
        {children}
      </div>
    </div>
  );
};

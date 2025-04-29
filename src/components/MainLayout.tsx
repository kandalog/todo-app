import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="border grow">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;

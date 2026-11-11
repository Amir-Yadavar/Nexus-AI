import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { BsLayoutSidebar } from "react-icons/bs";

type SidebarProps = {
  isAsideOpen: boolean;
  setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ isAsideOpen, setIsAsideOpen }: SidebarProps) {
  return (
    <aside
      className={`hidden lg:block shrink-0 overflow-hidden transition-all duration-300 ease-in-out border-r border-(--mid-gray)
              ${isAsideOpen ? "w-70" : "w-10"}
              `}
    >
      <div className="flex items-center justify-between">
        <div
          className={`flex items-center overflow-hidden whitespace-nowrap transition-all duration-300
                   ${isAsideOpen ? "w-auto opacity-100" : "w-0 opacity-0 pointer-events-none"}`}
        >
          <h1 className="font-bold mr-2 px-2">Nexus Ai</h1>
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsAsideOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl  transition hover:bg-(--surface-secondary)"
        >
          <BsLayoutSidebar
            size={20}
            className="text-(--light-gray) cursor-pointer"
          />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;

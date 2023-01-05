import SideBarLayout from "@layouts/sidebar-layout";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-100 h-100">
      <SideBarLayout user={{}}>
        <Outlet />
      </SideBarLayout>
    </div>
  );
}

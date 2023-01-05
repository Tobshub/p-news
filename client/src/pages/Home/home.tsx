import SideBarLayout from "@layouts/sidebar-layout";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <SideBarLayout user={{}}>
        <Outlet />
      </SideBarLayout>
    </div>
  );
}

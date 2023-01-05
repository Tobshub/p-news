import Sidebar from "@UIcomponents/sidebar";

interface SideBarLayoutProps extends React.PropsWithChildren {
  user: {};
}

export default function SideBarLayout(props: SideBarLayoutProps) {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-between">
      <Sidebar user={props.user} />
      {props.children}
    </div>
  );
}

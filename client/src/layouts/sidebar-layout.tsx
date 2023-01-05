import Sidebar from "@UIcomponents/sidebar";

interface SideBarLayoutProps extends React.PropsWithChildren {
  user: {};
}

export default function SideBarLayout(props: SideBarLayoutProps) {
  return (
    <div className="d-flex align-items-center">
      <Sidebar user={props.user} />
      {props.children}
    </div>
  );
}

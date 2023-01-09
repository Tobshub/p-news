import Sidebar from "@UIcomponents/sidebar";

interface SideBarLayoutProps extends React.PropsWithChildren {
  user: {};
}

export default function SideBarLayout(props: SideBarLayoutProps) {
  return (
    <div className="w-100 h-100 d-flex justify-content-start">
      <Sidebar user={props.user} />
      {props.children}
    </div>
  );
}

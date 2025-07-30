import { useParams, Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { id } = useParams();
  const location = useLocation();

  const categoryOptions = [
    {
      value: "sidewalk_shed",
      label: "Sidewalk Shed",
      to: `/dashboard/sidewalk-shed/1`,
    },
    { value: "scaffold", label: "Scaffold", to: `/dashboard/scaffold/2` },
    {
      value: "shoring",
      label: "Shoring",
      to: `/dashboard/shoring/scaffold/${id}`,
    },
  ];

  return (
    <aside className="hidden fixed top-0 left-0 min-h-1/2 w-64 m-2 rounded-md shadow-[0_0_8px_rgba(0,0,0,0.3)] lg:block">
      <p className="font-bold rounded text-primary-black bg-primary-gray p-2 w-full">
        1658 E 23rd St, Brooklyn, NY 11229, USA
      </p>
      <nav className="p-2">
        <ul className="space-y-2">
          {categoryOptions.map((option, index) => {
            const isActive = location.pathname === option.to;

            let bgClass = "bg-primary-gray";
            if (isActive) {
              if (index === 0) bgClass = "bg-primary-green text-white";
              if (index === 1) bgClass = "bg-primary-yellow text-white";
              if (index === 2) bgClass = "bg-primary-purple text-white";
            }

            return (
              <li key={option.value}>
                <Link to={option.to}>
                  <button
                    className={`${bgClass} w-full text-left p-2 hover:bg-primary-dark-gray rounded transition-colors cursor-pointer`}
                  >
                    {option.label}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

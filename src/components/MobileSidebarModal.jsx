import { FaTimes } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";

const MobileSidebarModal = ({ onClose }) => {
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
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#5f5c5c70] backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-1 right-1 text-gray-500 hover:text-black text-2xl font-bold cursor-pointer"
          >
            <FaTimes />
          </button>

          <aside className="top-0 left-0 min-h-1/2 m-2 rounded-md shadow-[0_0_8px_rgba(0,0,0,0.3)] overflow-y-scroll w-full">
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
                      <Link to={option.to} onClick={onClose}>
                        <button
                          className={`${bgClass} w-full text-left p-2 hover:bg-primary-dark-gray rounded transition-colors`}
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
        </div>
      </div>
    </div>
  );
};

export default MobileSidebarModal;

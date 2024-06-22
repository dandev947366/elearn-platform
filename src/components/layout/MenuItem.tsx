import React from "react";

const MenuItem = ({ url = "/", title = "", icon }: { url: string; title: string; icon?:React.ReactNode }) => {
  return (
    <li className="mb-2">
      <a href={url} className="text-white p-3 rounded-md flex items-center gap-2">
      {icon}
        {title}
      </a>
    </li>
  );
};

export default MenuItem;

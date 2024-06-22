import React from "react";
import Link from "next/link";
const MenuItem = ({ url = "/", title = "", icon }: { url: string; title: string; icon?:React.ReactNode }) => {
  return (
    <li className="mb-2">
      <Link href={url} className="text-white p-3 rounded-md flex items-center gap-2 hover:bg-blue-500 hover:text-blue-200 hover:bg-opacity-70">
      {icon}
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;

import React from "react";

const MenuItem = ({ url = "/", title = "" }: { url: string; title: string }) => {
  return (
    <li className="mb-2">
      <a href={url} className="text-white p-3 rounded-md flex items-center">
        {title}
      </a>
    </li>
  );
};

export default MenuItem;

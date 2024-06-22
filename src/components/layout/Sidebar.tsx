import React from "react";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl p-2 text-blue-200"><a href="/">Elearn Platform</a></h2>
      <ul>
        <MenuItem url="/learn" title="Learning Zone" />
        <MenuItem url="/explore-courses" title="Explore Courses" />
        <MenuItem url="/contact" title="Contact Us" />
        <MenuItem url="/about" title="About Us" />
        
      </ul>
    </div>
  );
};


export default Sidebar;

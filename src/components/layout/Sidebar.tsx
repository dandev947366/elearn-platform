import React from "react";
import MenuItem from "./MenuItem";
import { GraduationCap, CirclePlay } from "lucide-react";
const Sidebar : React.FC = () => {
  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl p-2 text-blue-200"><a href="/">Elearn Platform</a></h2>
      
      <ul className="flex flex-col gap-2">
      
        <MenuItem url="/" title="Learning Courses" icon={<CirclePlay  />}/>
        <MenuItem url="/explore" title="Explore" icon={<GraduationCap  />}/>
        

      
        
      </ul>
    </div>
  );
};


export default Sidebar;

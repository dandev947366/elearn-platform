import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { GraduationCap, CirclePlay, BookOpenText, User, ShoppingBag, MessageCircleHeart } from "lucide-react";
const Sidebar : React.FC = () => {
  return (
    <div className="p-5">
      <h2 className="font-bold text-4xl p-2 text-blue-200"><Link href="/"><span className="text-blue-500">E</span>LEARN</Link></h2>
      
      <ul className="flex flex-col gap-2">
        <MenuItem url="/" title="Explore" icon={<GraduationCap  />}/>
        <MenuItem url="/study" title="Learning Courses" icon={<CirclePlay  />}/>
        <MenuItem url="/manage/course" title="Manage Courses" icon={<BookOpenText  />}/>
        <MenuItem url="/manage/member" title="Manage Members" icon={<User  />}/>
        <MenuItem url="/manage/order" title="Manage Orders" icon={<ShoppingBag  />}/>
        <MenuItem url="/manage/comment" title="Manage Comments" icon={<MessageCircleHeart  />}/>
        

      
        
      </ul>
    </div>
  );
};


export default Sidebar;

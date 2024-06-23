import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Eye, Book, Clock } from "lucide-react";
const courseInfo = [
  {
   
    title:  "3000",
    icon: (className?:string)=> <Eye className={className} />
  },
  {
   
    title: "5.0",
    icon: (className?:string)=> <Star className={className}/>
  },
  {
    
    title: "Front End",
    icon: (className?:string)=> <Book className={className}/>
  },
  {
  
    title: "30hrs",
    icon: (className?:string)=> <Clock className={className} />
  }
];
const CourseItem = () => {
  return (
  <div>
   
  
    <div className="shadow-slate-200 border border-x-white border-y-white p-5 rounded-lg w-96 bg-base-100 shadow-xl">
  
      <Link href="#" className="block h-[180px] relative">
        <Image
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="api course"
          width={300}
          height={200}
          className="w-full h-full object-cover rounded"
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
        />
      </Link>
     
      <div className="pt-4">
      
    
        <h3 className="font-bold text-lg mb-3">Course 1 - Elearn Platform</h3>
        <div className="flex items-center gap-3 mb-5 text-xs">
          {courseInfo.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              {item.title} {item.icon("size-4")}
            </div>
          ))}

          
        </div>
        
        <p className="flex items-center justify-between mb-5">
          Elearning course description
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-red-500 px-3 py-1 rounded-full bg-opacity-10 bg-red-300">
            {" "}
            ReactJS
          </span>
          <span className=" text-gray-300 px-3 py-1 rounded-full bg-opacity-20 bg-red-100">
            Language:{" "}
            <span className=" text-blue-500 font-bold px-3 py-1 ">English</span>
          </span>
        </div>
      
        <Link
          href="#"
          className="flex items-center justify-center mt-7 text-white font-semibold width-full p-2 rounded bg-blue-400 shadow-slate-900 border border-blue-300"
        >
          See details
        </Link>
      </div>
     </div>
    </div>
   
  );
};

export default CourseItem;

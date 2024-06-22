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
    <div className="border border-slate-400 p-5 rounded-lg">
      <Link href="#" className="block">
        <Image
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="api course"
          width={350}
          height={300}
          className="width-full height-full object-cover rounded"
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
        />
      </Link>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-7">Course 1 - Elearn Platform</h3>
        <div className="flex items-center gap-5 mb-5">
          {courseInfo.map((item, index) => (
            <div className="flex items-center gap-1" key={index}>
              {item.title} {item.icon("size-4")}
            </div>
          ))}

          
        </div>
        <p className="flex items-center justify-between mb-5">
          Elearning course description
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-red-200 px-3 py-1 rounded-full bg-opacity-10 bg-red-300">
            {" "}
            ReactJS
          </span>
          <span className=" text-gray-300 px-3 py-1 rounded-full bg-opacity-10 bg-red-100">
            Language:{" "}
            <span className=" text-blue-300 font-bold px-3 py-1 ">English</span>
          </span>
        </div>
        <Link
          href="#"
          className="flex items-center justify-center mt-7 text-white font-semibold width-full p-2 rounded bg-blue-500"
        >
          See details
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;

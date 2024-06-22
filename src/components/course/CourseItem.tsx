import React from "react";
import Link from "next/link";
import Image from "next/image";
const CourseItem = () => {
  return (
    <div className="border border-blue-100 p-5 rounded-lg">
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
    </div>
  );
};

export default CourseItem;

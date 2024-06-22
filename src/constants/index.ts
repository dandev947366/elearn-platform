import { GraduationCap, CirclePlay } from "lucide-react";
type MenuItem = {
  url: string;
  title: string;
  icon: React.ReactNode;
};

export const menuItems: MenuItem[] = [
  {
    url: "/",
    title: "Learning Zone",
    icon: <CirclePlay  />
  },
  {
    url: "/",
    title: "Explore Courses",
    icon: <GraduationCap  />
  }
];

import React from 'react';
import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const users = [
  {
    name: "Hart Hagerty",
    username: "hart_hagerty",
    password: "********",
    status: "Active",
    email: "hart@example.com",
  },
  {
    name: "Brice Swyre",
    username: "brice_swyre",
    password: "********",
    status: "Inactive",
    email: "brice@example.com",
  },
  {
    name: "Marjy Ferencz",
    username: "marjy_ferencz",
    password: "********",
    status: "Active",
    email: "marjy@example.com",
  },
  {
    name: "Yancy Tear",
    username: "yancy_tear",
    password: "********",
    status: "Active",
    email: "yancy@example.com",
  },
];

export function page() {
  return (
    <div className="overflow-x-auto min-h-full">
      <Table className="w-full">
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Password</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default page;

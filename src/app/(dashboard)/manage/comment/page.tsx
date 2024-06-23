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

const courseComments = [
  {
    id: 1,
    courseName: "JavaScript Fundamentals",
    userName: "Alice Smith",
    comment: "Great course! Really enjoyed the content.",
    rating: 5,
    datePosted: "2023-06-15",
  },
  {
    id: 2,
    courseName: "React Advanced Techniques",
    userName: "Bob Johnson",
    comment: "Could use more exercises, but overall good.",
    rating: 4,
    datePosted: "2023-06-16",
  },
  {
    id: 3,
    courseName: "Python for Data Science",
    userName: "Eve Brown",
    comment: "Very informative, would recommend to others.",
    rating: 5,
    datePosted: "2023-06-17",
  },
  {
    id: 4,
    courseName: "HTML & CSS Basics",
    userName: "Charlie Davis",
    comment: "Loved the instructor's explanations!",
    rating: 5,
    datePosted: "2023-06-18",
  },
];

export function CourseCommentsTable() {
  return (
    <div className="overflow-x-auto min-h-full">
      <Table className="w-full">
        <TableCaption>Comments from users about course products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Course Name</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Comment</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Date Posted</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courseComments.map((comment) => (
            <TableRow key={comment.id}>
              <TableCell className="font-medium">{comment.courseName}</TableCell>
              <TableCell>{comment.userName}</TableCell>
              <TableCell>{comment.comment}</TableCell>
              <TableCell>{comment.rating}</TableCell>
              <TableCell>{comment.datePosted}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CourseCommentsTable;

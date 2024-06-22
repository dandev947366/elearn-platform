import { connectToDatabase } from "@/lib/mongoose";
import Image from "next/image";

export default async function Home() {
const connect = connectToDatabase()
console.log("Connect to DB: ", connect)
  return (
    <main>
      Home page
    </main>
    
  );
}

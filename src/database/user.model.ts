import { Document, Schema, model, models } from "mongoose";
import {
    EUserStatus,
    EUserRole
} from '@/types/enums'
export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email_address: string;
    avatar: string;
    courses: Schema.Types.ObjectId[];
    status: EUserStatus;
    role: EUserRole;
    createdAt: Date;
  }
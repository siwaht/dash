import { db } from "./db.js";
import { users, demoRequests, consultationRequests } from "../shared/schema.js";
import type { InsertDemoRequest, DemoRequest, InsertConsultationRequest, ConsultationRequest, User, InsertUser } from "../shared/schema.js";
import { eq } from "drizzle-orm";

export interface IStorage {
  createDemoRequest(data: InsertDemoRequest): Promise<DemoRequest>;
  createConsultationRequest(data: InsertConsultationRequest): Promise<ConsultationRequest>;
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class DrizzleStorage implements IStorage {
  async createDemoRequest(data: InsertDemoRequest): Promise<DemoRequest> {
    const [result] = await db
      .insert(demoRequests)
      .values(data)
      .returning();

    if (!result) {
      throw new Error("Failed to create demo request");
    }

    return result;
  }

  async createConsultationRequest(data: InsertConsultationRequest): Promise<ConsultationRequest> {
    const [result] = await db
      .insert(consultationRequests)
      .values(data)
      .returning();

    if (!result) {
      throw new Error("Failed to create consultation request");
    }

    return result;
  }

  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(user: InsertUser): Promise<User> {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  }
}

export const storage = new DrizzleStorage();

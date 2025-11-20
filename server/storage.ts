import { db } from "./db.js";
import { demoRequests, consultationRequests } from "../shared/schema.js";
import type { InsertDemoRequest, DemoRequest, InsertConsultationRequest, ConsultationRequest } from "../shared/schema.js";

export interface IStorage {
  createDemoRequest(data: InsertDemoRequest): Promise<DemoRequest>;
  createConsultationRequest(data: InsertConsultationRequest): Promise<ConsultationRequest>;
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
}

export const storage = new DrizzleStorage();

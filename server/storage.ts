import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { InsertDemoRequest, DemoRequest, InsertConsultationRequest, ConsultationRequest } from "../shared/schema.js";

export interface IStorage {
  createDemoRequest(data: InsertDemoRequest): Promise<DemoRequest>;
  createConsultationRequest(data: InsertConsultationRequest): Promise<ConsultationRequest>;
}

export class SupabaseStorage implements IStorage {
  private supabase!: SupabaseClient;
  private initialized = false;

  private initialize() {
    if (this.initialized) return;

    const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase credentials not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.");
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
    this.initialized = true;
  }

  async createDemoRequest(data: InsertDemoRequest): Promise<DemoRequest> {
    this.initialize();

    const { data: result, error } = await this.supabase
      .from("demo_requests")
      .insert([{
        name: data.name,
        email: data.email,
        company: data.company,
        job_title: data.jobTitle,
      }])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create demo request: ${error.message}`);
    }

    return {
      id: result.id,
      name: result.name,
      email: result.email,
      company: result.company,
      jobTitle: result.job_title,
      status: result.status,
      createdAt: new Date(result.created_at),
      updatedAt: new Date(result.updated_at),
    };
  }

  async createConsultationRequest(data: InsertConsultationRequest): Promise<ConsultationRequest> {
    this.initialize();

    const { data: result, error } = await this.supabase
      .from("consultation_requests")
      .insert([{
        name: data.name,
        email: data.email,
        company: data.company,
        job_title: data.jobTitle,
        service_interest: data.serviceInterest,
      }])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create consultation request: ${error.message}`);
    }

    return {
      id: result.id,
      name: result.name,
      email: result.email,
      company: result.company,
      jobTitle: result.job_title,
      serviceInterest: result.service_interest,
      status: result.status,
      createdAt: new Date(result.created_at),
      updatedAt: new Date(result.updated_at),
    };
  }
}

export const storage = new SupabaseStorage();

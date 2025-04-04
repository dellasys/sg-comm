export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      comments: {
        Row: {
          created_at: string;
          id: number;
          post_id: number;
          rating: number | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          post_id: number;
          rating?: number | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          post_id?: number;
          rating?: number | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      merchants: {
        Row: {
          address: string | null;
          category: string | null;
          created_at: string;
          description: string | null;
          email: string | null;
          id: number;
          location: string | null;
          name: string | null;
          operating_hours: string | null;
          phone: string | null;
          rating: number | null;
          thumbnail: string | null;
          website: string | null;
          whatsapp: string | null;
        };
        Insert: {
          address?: string | null;
          category?: string | null;
          created_at?: string;
          description?: string | null;
          email?: string | null;
          id?: number;
          location?: string | null;
          name?: string | null;
          operating_hours?: string | null;
          phone?: string | null;
          rating?: number | null;
          thumbnail?: string | null;
          website?: string | null;
          whatsapp?: string | null;
        };
        Update: {
          address?: string | null;
          category?: string | null;
          created_at?: string;
          description?: string | null;
          email?: string | null;
          id?: number;
          location?: string | null;
          name?: string | null;
          operating_hours?: string | null;
          phone?: string | null;
          rating?: number | null;
          thumbnail?: string | null;
          website?: string | null;
          whatsapp?: string | null;
        };
        Relationships: [];
      };
      service_categories: {
        Row: {
          created_at: string;
          icon: string;
          id: number;
          label: string;
          search_key: string | null;
          status: number;
        };
        Insert: {
          created_at?: string;
          icon: string;
          id?: number;
          label: string;
          search_key?: string | null;
          status?: number;
        };
        Update: {
          created_at?: string;
          icon?: string;
          id?: number;
          label?: string;
          search_key?: string | null;
          status?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

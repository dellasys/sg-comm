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
      posts: {
        Row: {
          address: string | null;
          category: string | null;
          content: string | null;
          created_at: string;
          email: string | null;
          id: number;
          location: string | null;
          operating_hours: string | null;
          phone: number | null;
          rating: number | null;
          thumbnail: string | null;
          title: string | null;
          website: string | null;
          whatsapp: number | null;
        };
        Insert: {
          address?: string | null;
          category?: string | null;
          content?: string | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          location?: string | null;
          operating_hours?: string | null;
          phone?: number | null;
          rating?: number | null;
          thumbnail?: string | null;
          title?: string | null;
          website?: string | null;
          whatsapp?: number | null;
        };
        Update: {
          address?: string | null;
          category?: string | null;
          content?: string | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          location?: string | null;
          operating_hours?: string | null;
          phone?: number | null;
          rating?: number | null;
          thumbnail?: string | null;
          title?: string | null;
          website?: string | null;
          whatsapp?: number | null;
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

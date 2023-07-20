export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      recipes: {
        Row: {
          cleaned_ingredients: string
          id: string
          image_name: string
          instructions: string
          title: string
        }
        Insert: {
          cleaned_ingredients: string
          id?: string
          image_name: string
          instructions: string
          title: string
        }
        Update: {
          cleaned_ingredients?: string
          id?: string
          image_name?: string
          instructions?: string
          title?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          account_number: string
          mpin: string
          username: string
          status: 'ACTIVE' | 'INACTIVE' | 'BLOCKED'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          account_number: string
          mpin: string
          username: string
          status?: 'ACTIVE' | 'INACTIVE' | 'BLOCKED'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          account_number?: string
          mpin?: string
          username?: string
          status?: 'ACTIVE' | 'INACTIVE' | 'BLOCKED'
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_details: {
        Row: {
          id: string
          user_id: string
          account_holder_name: string
          account_type: 'SAVINGS' | 'CURRENT'
          balance: number
          customer_id: string
          email: string
          mobile_number: string
          address: string | null
          location: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          account_holder_name: string
          account_type: 'SAVINGS' | 'CURRENT'
          balance?: number
          customer_id: string
          email: string
          mobile_number: string
          address?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          account_holder_name?: string
          account_type?: 'SAVINGS' | 'CURRENT'
          balance?: number
          customer_id?: string
          email?: string
          mobile_number?: string
          address?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_details_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_transactions: {
        Row: {
          id: string
          user_id: string
          transaction_id: string
          transaction_date: string
          transaction_time: string
          transaction_type: 'DEBIT' | 'CREDIT' | 'TRANSFER_OUT' | 'TRANSFER_IN' | 'ATM_WITHDRAWAL' | 'DEPOSIT' | 'UTILITY_PAYMENT' | 'UPI_TRANSFER' | 'CHEQUE_DEPOSIT' | 'CHEQUE_WITHDRAWAL'
          description: string
          beneficiary_name: string | null
          beneficiary_account_number: string | null
          beneficiary_ifsc: string | null
          beneficiary_bank_name: string | null
          beneficiary_bank_code: string | null
          amount: number
          debit: number | null
          credit: number | null
          balance_after: number
          remarks: string | null
          reference_number: string | null
          narration: string | null
          status: 'success' | 'pending' | 'failed' | 'reversed'
          category: string | null
          is_within_bank: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          transaction_id: string
          transaction_date?: string
          transaction_time?: string
          transaction_type: 'DEBIT' | 'CREDIT' | 'TRANSFER_OUT' | 'TRANSFER_IN' | 'ATM_WITHDRAWAL' | 'DEPOSIT' | 'UTILITY_PAYMENT' | 'UPI_TRANSFER' | 'CHEQUE_DEPOSIT' | 'CHEQUE_WITHDRAWAL'
          description?: string
          beneficiary_name?: string | null
          beneficiary_account_number?: string | null
          beneficiary_ifsc?: string | null
          beneficiary_bank_name?: string | null
          beneficiary_bank_code?: string | null
          amount: number
          debit?: number | null
          credit?: number | null
          balance_after?: number
          remarks?: string | null
          reference_number?: string | null
          narration?: string | null
          status?: 'success' | 'pending' | 'failed' | 'reversed'
          category?: string | null
          is_within_bank?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          transaction_id?: string
          transaction_date?: string
          transaction_time?: string
          transaction_type?: 'DEBIT' | 'CREDIT' | 'TRANSFER_OUT' | 'TRANSFER_IN' | 'ATM_WITHDRAWAL' | 'DEPOSIT' | 'UTILITY_PAYMENT' | 'UPI_TRANSFER' | 'CHEQUE_DEPOSIT' | 'CHEQUE_WITHDRAWAL'
          description?: string
          beneficiary_name?: string | null
          beneficiary_account_number?: string | null
          beneficiary_ifsc?: string | null
          beneficiary_bank_name?: string | null
          beneficiary_bank_code?: string | null
          amount?: number
          debit?: number | null
          credit?: number | null
          balance_after?: number
          remarks?: string | null
          reference_number?: string | null
          narration?: string | null
          status?: 'success' | 'pending' | 'failed' | 'reversed'
          category?: string | null
          is_within_bank?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_transactions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_beneficiaries: {
        Row: {
          id: string
          user_id: string
          beneficiary_id: string
          beneficiary_name: string
          account_number: string
          ifsc_code: string
          bank_name: string
          nickname: string | null
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          beneficiary_id: string
          beneficiary_name: string
          account_number: string
          ifsc_code: string
          bank_name: string
          nickname?: string | null
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          beneficiary_id?: string
          beneficiary_name?: string
          account_number?: string
          ifsc_code?: string
          bank_name?: string
          nickname?: string | null
          is_active?: boolean
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_beneficiaries_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
  | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
    DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
    DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
  | keyof DefaultSchema["Enums"]
  | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof DefaultSchema["CompositeTypes"]
  | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
  : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

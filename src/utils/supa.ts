import { Injectable } from '@nestjs/common'
import { createClient } from '@supabase/supabase-js'
@Injectable()
export class SupabaseUtils{
constructor(
    supabaseUrl: string = process.env.SUPABASE_URL,
    supabaseKey: string = process.env.SUPABASE_KEY
){

    
}

}


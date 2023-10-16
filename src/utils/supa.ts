import { Injectable } from '@nestjs/common'
import { createClient } from '@supabase/supabase-js'
@Injectable()
export class SupabaseUtils {
    supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
    constructor() {}

    select() {
        this.supabase.from('massage').select().eq('id', 3)
        return 'Estou buscando dados!!'
    }
    insert() {
        this.supabase.from('massage').insert({ massage: 'Olá Mundo' })
        return 'Estou inserindo dados!!'
    }
    update() {
        this.supabase.from('massage').update({massage: "Primeira mensagem que foi atualizada"}).eq('id', 1)
        return 'Estou atualizando dados!!'
    }
    deleteAll() {
        this.supabase.from('massage').delete()
        return 'Estou deletando todos dados!!'
    }
}

import { HttpCode, Injectable } from '@nestjs/common'
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
import { STATUS_CODES } from 'http'

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)

@Injectable()
export class PostService {
    async PostMessenger() {
        await supabase
            .from('message')
            .insert({ message: 'Minha namorada é Gata e Inteligente DEMAIS' })
        return 'Mensagem enviada com sucesso!!!'
    }
}

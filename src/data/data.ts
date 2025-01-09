'use server'

import 'dotenv/config';
import { createClient } from './supabaseserver';

export async function fetchProblems() {
    const supabase = await createClient()
    const { data: problems } = await supabase.from("problems").select();

    return problems;
}

export async function fetchProblemsFiltered(query: string) {

    const supabase = await createClient()
    const { data: problems } = await supabase.from("problems").select().ilike("problem", "%" + query + "%");

    return problems;
}
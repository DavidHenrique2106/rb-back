import supabase from '../config/supabaseClient';

async function testConnection() {
  const { data, error } = await supabase.from('pg_tables').select('*');
  
  if (error) {
    console.error('Erro ao conectar ao Supabase:', error.message);
  } else {
    console.log('Tabelas encontradas:', data);
  }
}

testConnection();

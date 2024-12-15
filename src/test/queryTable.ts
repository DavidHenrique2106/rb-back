import supabase from '../config/supabaseClient';

async function queryTable() {
  const { data, error } = await supabase
    .from('users')
    .select('*');

  if (error) {
    console.error('Erro ao consultar a tabela:', error.message);
  } else {
    console.log('Dados da tabela users:', data);
  }
}

queryTable();

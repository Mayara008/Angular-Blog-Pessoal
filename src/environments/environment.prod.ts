//são objetos que Ajudam a trabalhar com variaveis globais e outras funções. e com o final prod é para produção. 

export const environment = { //aqui é uma constante de um objeto environment  que vai exportar (production:) e como é um abjeto eu posso colocar mais coisas e separar por virgula. 
  production: true,
  token: '', // é aspas pq estou dentro de um objeto
  nome: '',
  id: 0, //O id é number por isso coloca zero
  foto: '', // Foto é string e o último ão precisa de virgula. 
  //Agora para chamar o (environment) no entrar eu vou no entrar html. 
  //Sempre que a pagina for atualizada esse enrivonment é esvaziado, pq uma singoupage de aplication, ela não pode ser atualiazada. 
  tipo: ''
};



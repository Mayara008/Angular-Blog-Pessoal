import { Postagem } from "./Postagem";

export class User{

    public id: number /* Para inicializar minha propridade (id), é necessário configurar no arquivo (tsconfig.json) e lá vou colocar:  ("strictPropertyInitialization": false,) ele não vai solicitar que todas as propriedades que eu adicionar em classes seja inicializada, ou seja esse (id) fica sem erro */
    public nome: string ;
    /*Essas variaveis precisam ser public se não elas não conseguem ser acessadas por outros componentes */
    public usuario: string ;
    public senha: string ;
    public tipoUsuario: string ;
    public foto: string ;
	public postagem: Postagem[] /* Tenho um arrey de postagens para cada user  */
    public tipo: string;
    public dataNascimento: Date;
    /* todos os (public) são atributos que estão no meu STS (back-end) */
    /*Os atributos tem que ser o mesmo nome que está no back para não dar erro */
}

/*Primeiro passo p/ o consumo da API já ocorreu */
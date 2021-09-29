import { Postagem } from "./Postagem";

export class User{

    public id: number
    public nome: String ;
    public usuario: String ;
    public senha: String ;
    public tipoUsuario: String ;
    public foto: String ;
	public postagem: Postagem[]
}
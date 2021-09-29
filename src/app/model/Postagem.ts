import { tema } from "./Tema";
import { User } from "./User";

export class Postagem {

    public data: Date;
    public id: number;
    public texto: string;
    public titulo: string;
    public usuario: User;
    public tema: tema;

    }


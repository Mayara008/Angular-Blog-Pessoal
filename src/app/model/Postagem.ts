import { tema } from "./Tema";
import { User } from "./User"; /* Estou me rederindo a esse import*/
/* as tabelas postagem e essa de User estão relacionadas devido a esse import de 'User' aqui no postagem e o import de Postagem no User */

export class Postagem {

    public data: Date;
    public id: number;
    public texto: string;
    public titulo: string;
    public usuario: User;/* Realizou o import de User e seria a mesma coisa de falar que  essa postagem (public usuario) tem um tipo (User), tem um usuario atribuido a ela*/
    public tema: tema;
    /* Tinha dado erro pq na video aula o professor falava que não precisava de ';' no final de cada tributo, mas depois o erro só corrigiu qnd acrescentou o ponto e virgula */
    }
/* Um tema para cada postagem */

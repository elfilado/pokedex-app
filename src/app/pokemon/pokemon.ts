export class Pokemon{

    id: number;
    hp: number;
    attack: string;
    name: string;
    picture: string;
    types: string[];
    created: Date;

    constructor( 
       // id: number = 0,
        hp: number = 100,
        attack: string = "Charge",
        name: string = "Mon nom",
        picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
        types: string[] = ['Normal'],
        created: Date = new Date()
    ){
        //this.id = id;
        this.hp = hp;
        this.attack = attack;
        this.name =  name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}
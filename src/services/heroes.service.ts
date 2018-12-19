import { Hero } from "../models/Hero";

//src/services/heroes.service.ts

export class HeroesService {

    heroesList: Hero[] = [
        {
            name: 'Superman',
            description: [
                'Ne supporte la kryptonite',
                'Est copain avec moi'
            ],

            isInCombat: true,

        },
        {
            name: 'The Joker',
            description: [
                'a un joli sourire',
                'est en couple avec Catwoman'
            ],

            isInCombat: true,
        },
        {
            name: 'Felix le chat',
            description: [
                'A cette vie',
                'Revient à la maison que pour manger'
            ],

            isInCombat: false,
        },

    ]


}
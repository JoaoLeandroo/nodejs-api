const express = require("express");

const serve = express();


// Acesso localhost:3000/planets
serve.listen('3000')


serve.get('/planets', (req, res) => {
    return res.json({
        'planets': [
            {
                id: 1,
                name: 'Mercúrio',
                type: 'Rochoso',
                description: 'Mercúrio é o menor e mais próximo planeta do Sol. Não tem atmosfera e sua superfície é muito quente.'
            },
            {
                id: 2,
                name: 'Vênus',
                type: 'Rochoso',
                description: 'Vênus é o segundo planeta do Sistema Solar. É o mais quente dos planetas terrestres e tem uma atmosfera densa de dióxido de carbono.'
            }
            ,
            {
                id: 3,
                name: 'Terra',
                type: 'Rochoso',
                description: 'Terra é o terceiro planeta do Sistema Solar. É o único planeta conhecido por abrigar vida. Tem uma atmosfera rica em oxigênio e uma superfície com água líquida.'
            }
            ,
            {
                id: 4,
                name: 'Marte',
                type: 'Rochoso',
                description: 'Marte é o quarto planeta do Sistema Solar. É conhecido como o Planeta Vermelho e tem uma atmosfera muito fina.'
            }
            ,
            {
                id: 5,
                name: 'Júpiter',
                type: 'Gasoso'
,                description: 'Júpiter é o maior planeta do Sistema Solar. É um planeta gasoso e tem uma atmosfera muito densa.'
            }
            ,
            {
                id: 6,
                name: 'Saturno',
                type: 'Gasoso'
,                description: 'Saturno é o segundo maior planeta do Sistema Solar. É também um planeta gasoso e tem uma grande quantidade de anéis.'
            }
            ,
            {
                id: 7,
                name: 'Urano',
                type: 'Gasoso'
,                description: 'Urano é o terceiro maior planeta do Sistema Solar. É um planeta gasoso e tem uma inclinação muito grande.'
            }
            ,
            {
                id: 8,
                name: 'Netuno',
                type: 'Gasoso'
,                description: 'Netuno é o quarto maior planeta do Sistema Solar. É também um planeta gasoso e tem uma atmosfera muito densa.'

            }
        ]
    })
})
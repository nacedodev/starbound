import {Personaje} from './personaje.js'
import {Item} from './item.js'
import {clases , razas} from './clase_raza.js'
import {Enano} from './enano.js'
import {Escena} from './escena.js'

//NARRADOR
let narrador = new Personaje('Narrador')

// CREACION DE BILBO 
let bilbo = new Personaje('Bilbo Bolsón',razas.hobbit)

// CREACION DE GANDALF
let gandalf = new Personaje('Gandalf el Gris',razas.humano,clases.mago)

//CREACION DE ITEMS

let lampara = new Item('Lámpara')
let reloj = new Item('Reloj del abuelo')

//CREACION DE ENANOS
let thorin = new Enano('Thorin Escudo de Roble',clases.guerrero)
let kili = new Enano('Kili')
let fili = new Enano('Fili')
let dwalin = new Enano('Dwalin')


//ESCENA 1

const escena1 = new Escena('escena 1')

escena1.addCharacter(narrador)
escena1.addCharacter(bilbo)
escena1.addCharacter(gandalf)
escena1.addCharacter(thorin)
escena1.addCharacter(kili)
escena1.addCharacter(fili)
escena1.addCharacter(dwalin)
escena1.addItem(lampara)
escena1.addItem(reloj)
escena1.personajes.get(gandalf.getName()).hablar('Buenos dias mi viejo amigo')
escena1.personajes.get(bilbo.getName()).hablar('Gandalf, me alegro de verte')
escena1.personajes.get(narrador.getName()).hablar(`De pronto aparecieron ${Enano.numEnanos} Enanos`)
escena1.personajes.get(gandalf.getName()).hablar('Ya estan aqui! Bienvenidos a la casa de Bilbo')
escena1.personajes.get(kili.getName()).coger(escena1.items.get(lampara.getName()))
escena1.personajes.get(bilbo.getName()).hablar('Deja eso en su sitio!')
escena1.personajes.get(kili.getName()).hablar('Cógelo Fili')
escena1.personajes.get(kili.getName()).pasar(escena1.items.get(lampara.getName()),escena1.personajes.get(fili.getName()))
escena1.personajes.get(dwalin.getName()).hablar(`Viva nuestro rey ${Enano.rey}`)
escena1.personajes.get(fili.getName()).hablar(Enano.alabarRey())
// TODO : access to an object in the inventory
escena1.personajes.get(fili.getName()).hablar(`Tengo la ${fili.getInventario()}`)





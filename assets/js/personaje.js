import { Item } from './item.js'
import { Escena } from './escena.js';

/**
 * Representa un personaje de la historia
 */
export class Personaje {
  #nombre = null;
  #especialidad = null;
  #origen = null;
  #inventario = null;
  static timeout = 0; // Contador global de tiempo de espera

/**
 * Constructor de la clase.
 * Inicializa los atributos y crea un set de inventario vacío.
 * @param {String} nombre Nombre del personaje
 * @param {String} especialidad Especialidad del personaje
 * @param {String} origen Origen del personaje
 */

  constructor(nombre, especialidad = null, origen = null) {
    this.#nombre = nombre;
    this.#especialidad = especialidad;
    this.#origen = origen;
    this.#inventario = new Set();
  }
  
/**
 * Metodo que permite hablar a los personajes
 * @param {String} text Dialogo del personaje
 */

  hablar(text) {
    const palabrasEnTexto = text.split(' ').length
    let $historia = document.getElementById('historia')
    setTimeout(() => {
      let textoMejorado = `<br/><br/> <span class ='bocado'>${this.#nombre}:</span> "${text}"`;
      const lineElement = document.createElement('p');
      lineElement.innerHTML = textoMejorado;
      lineElement.classList.add('fadein'); // Aplicar la clase para el efecto de fadeIn
      $historia.appendChild(lineElement);
      lineElement.scrollIntoView({ behavior: "smooth" });
      
    }, Personaje.timeout);

    Escena.duracionEscena += Personaje.timeout
    Personaje.timeout += palabrasEnTexto * 250;
  }
  
  coger(item) {
    this.#inventario.add(item);
  }

  pasar(item, personaje) {
    if (!(item instanceof Item)) throw 'Objeto inválido';
    if (!(personaje instanceof Personaje)) throw 'Personaje inválido';

    this.#inventario.delete(item);
    personaje.coger(item);
  }

  /**
   * Metodo que devuelve el nombre del personaje
   * @returns nombre
   */

  getName() {
    return this.#nombre;
  }

  getInventario() {
    return this.#inventario
  }
}

// Índice 1: Importación del array de héroes desde un archivo externo
import { heroes } from "../data/heroes";

/**
 * Índice 2: Definición de la función findHero
 * 
 * @param {String} id - El ID del héroe que se desea encontrar
 * @param {(error: String|Null, hero: Object)=> void} callback - La función de devolución de llamada que se ejecutará después de la búsqueda del héroe
 */
const findHero = (id, callback) => {
    // Índice 3: Utiliza el método find() para buscar un héroe por su ID en el array de héroes
    const hero = heroes.find(hero => hero.id === id);

    // Índice 4: Verifica si se encontró un héroe con el ID especificado
    if (!hero) {
        // Índice 5: Si no se encontró un héroe, llama a la función de devolución de llamada con un mensaje de error
        callback(`Hero with id ${id} not found.`);
        return;
    }
    
    // Índice 6: Si se encontró un héroe, llama a la función de devolución de llamada con el héroe encontrado como argumento
    callback(null, hero);
}

/**
 * Índice 7: Definición de la función callbacksComponent
 * 
 * @param {HTMLDivElement} element - El elemento HTML en el que se mostrará el nombre del héroe
 */
export const callbacksComponent = (element) => {
    // Índice 8: ID del héroe que se desea encontrar
    const id = '5d86371f233c9f2425f16916';

    // Índice 9: Llamada a la función findHero con el ID del héroe y una función de devolución de llamada
    findHero(id, (error, elHeroe) => {
        // Índice 10: Manejo del posible error
        if (error) {
            // Índice 11: Si hay un error, se muestra en el elemento HTML
            element.innerHTML = error;
            return;
        }
        
        // Índice 12: Si no hay error, se muestra el nombre del héroe en el elemento HTML
        element.innerHTML = elHeroe.name;
    })
}

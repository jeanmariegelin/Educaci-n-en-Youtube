// Las queues o las colas funcionan de este modo. Imaginate ir a un banco y tenes que hacer fila para que te atienden. Bueno, cuando llegas te colas a la persona que estaba de ultimo en la cola. Y la primera persona que estaba en la cola, lo atienden primero a el. Este metodo se llama FIFO: First in, first out. 

// https://medium.com/laboratoria-developers/queues-in-javascript-2602677c9c3b
// Este es un ejemplo de queue sacado de google. Tambien dieron ejemplos de arguments. 

class Queue {
    constructor () {
        this.items = {};                    // vamos a guardar todos nuestras infos en este obj vacío.
        this.front = 0;                    // reprensentar el primer valor inicializando en 0
        this.end = 0;                     // creamos otra variable inicializando en 0
    };
    enqueue (data) {                    // se encarga de reibir valores e introducirlos en nuestro obj de items.
    this.items[this.end] = data        // data es un valor que vamos a introducir en la fila
    this.end++; 
    };
    dequeue () {                      // se encarga de retirar el primer elemento de la cola
    if (this.front === this.end) {   // Ahi we ask if no hay elementos en nuestra fila, then no hay nada que return
        return null; 
    };      
    const data = this.items[this.front]; // porque es el primer valor que debería salir
    this.front++;                       // para que vaya apuntando al next cada que vez que sale uno
    return data;
    };
    getSize () { 
        return this.end - this.front; 
    };
    isEmpty () {                      // indica si la cola esta vacía
    if (this.getSize() === 0) {
        return "No more people in the queue";
    } else {
        return false;
    };                    
    };
    peek () {                        // obtener el primer valor de la fila sin sacarlo
    if (this.getSize() === 0) {
        return null;
    };
    return this.items[this.front];
    };
    print () { 
        let result = "";
        for (let i = 0; i < this.end; i++) {
            result += this.items[i] + ", "
        }
    return result;
    }

}
const queue = new Queue(); // para llamar nuestra funcion
queue.enqueue('Love'); 
queue.enqueue('Jean');
queue.enqueue('Agus');
queue.enqueue('Solin');
console.log(queue.dequeue());
console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.print());



//console.log(queue); 
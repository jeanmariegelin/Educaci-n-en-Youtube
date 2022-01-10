// Una lista enlazada es una coleccion **linear** construiida por una secuencia de *nodos* en donde se guardan campos de datos arbitrarios y una referencia al siguiente nodo. 
// Una lista enlazada es como un tren que conecta vagones, en cada vagon se almacena datos. Y lo que conecta un vago realmente con otro es una propriedad llama next. 
// se puede recorrer de un solo sentido de principio a fin, no puede regresar. Se puede usar un do while para eso. 

class Node {
    constructor (data, next) {
    this.data = data;
    this.next = next;
    };
}
class LinkedList {
    constructor () {
    this.head = null;
    this.size = 0;
    }
    
    add(data) {
        const newNode = new Node(data, null);
        if (this.head === null){
            this.head = newNode;
        } else {
        let current = this.head;
        while (current.next){
            current = current.next;
        };
        current.next = newNode;
        };
        this.size++;
    };
    insertAt(data, index) {   // este el indice donde queremos ingresar info en la lista, donde queremos.
        if (index < 0 || index > this.size){  // aca revisando si el indice es valido. 
            return null;
        };
        const newNode = new Node(data);   // Enviando e nuestro construct, en el caso contrario podemos ingresar  info en la lista.                    
        let current = this.head;     // igualando la variable actual con la cabeza      
        let previous;               // mantener registro en la variable anterior

        if (index === 0){           
            newNode.next = current; 
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            newNode.next = current;
            previous.next = newNode;
        };
        this.size++;
    };
    print() {
        if (!this.size) return null;
        let current = this.head;
        let result = "";
      while (current) {
          result += current.data + ' --> ';
          current = current.next;
      }
      result += null;
      return result;
    }
    removeData (data) {                    // aca sacamos elem basado en la información || valor del nodo
    let current = this.head;
    let previous = null;

    while (current !== null) {
        if (current.data === data) {
            if (!previous){
            this.head = current.next;
            } else {
                previous.next = current.next;
            }
            this.else--;
            return current.data;
        }
        previous = current;
        current = current.next;
    }
    return null;
}
   removeIndex(index) {                        // sacar elem basado en el indice
if (index < 0 || index > this.size) {
    return null;
}
let current = this.head;
let previous = null;

if (index === 0) {
    this.head = current.next;
  }else {
  for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
  }
  previous.next = current.next;
  }
  this.size--;
  return current.data;
}
isEmpty = function () {
 return this.size === 0;
// if (this.size === 0) {
//     return true;
// }else {
//     return false
// }
}
getSize = function () {
return this.size;
}

};
//const testNode = new Node('Love', null);
//console.log(testNode);
const linkedList = new LinkedList();
//console.log(linkedList);
linkedList.add('Jean');
linkedList.add('Agus');
//linkedList.removeData('Jean');
console.log(linkedList.removeIndex(1));
//console.log(linkedList.print());
console.log(linkedList.removeData('Solin'));
//linkedList.insertAt('Solin', 0);
//console.log(linkedList);
console.log(linkedList.isEmpty());
//console.log(linkedList.getSize());

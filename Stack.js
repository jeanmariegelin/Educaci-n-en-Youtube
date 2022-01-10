// Las stacks o pilas funcionan de este modo:
// Imaginamos que tenemos unos platos para lavar. Nosotros ponemos x ej. 6 platos uno arriba del otro para lavar. El ultimo plato(6) que pusimos va ser el primer plato en ser lavado. Este metodo se llama LIFO: Last in, First out. 

class Stack {

    constructor () {
        this.items = {};
        this.ultima = 0;

    };
    push (element) {
    this.items[this.ultima] = element;
    this.ultima++;
    };
    pop () {
        let deletedElement;
        if (this.ultima !== 0){
            deletedElement = this.items[this.ultima];
            delete this.items[this.ultima];
            this.ultima--;
            return deletedElement;
        };
    };
    getSize () {
        return this.ultima;
    }
    isEmpty () {
        if (this.getSize() === 0){
            return null;
        } else {
            return false;
        }
    }
    peek () {
        if (this.isEmpty() === 0) {
            return null;
        }
        return this.items[this.ultima];
    }
    print () {
        let loQueMeQueda = "";
        for (let i = this.ultima; i > 0; i--) {
            loQueMeQueda += this.items[i] + ", ";
        }
        return loQueMeQueda;
    }
};
    const stack = new Stack;
    stack.push('Los vasos');
    stack.push('Los platos');
    stack.push('Los cubiertos');
    console.log(stack.print());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.getSize());
    console.log(stack.isEmpty());
    console.log(stack.peek());
    
    console.log(stack);
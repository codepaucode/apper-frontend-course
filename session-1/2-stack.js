
class Stack {
    constructor() {
        this.stack = []
    }

    push(items) {
        if(Array.isArray(items)){
            const stringsOnly = items
                .filter(item => typeof item === 'string')
                this.stack.push(...stringsOnly) // used spread operator to avoid creating a loop to add each element of stringsOnly
        } else if (typeof items === 'string'){
            this.stack.push(items)
        }    
    }

    check() {
        console.log(this.stack) //output a copy of the stack
    }

    pop() {
        if (this.stack.length == 0) { //validation if the queue is empty
            console.log('Stack is currently empty')
        } else {
            return this.stack.pop()
        }
    }
}


const stack = new Stack()
stack.push('Milk')
stack.push('Eggs')
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Cellphone”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”
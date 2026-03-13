
class MyStack{
    constructor() {
        this.q1 = []
        this.q2 = []
    }
    push(x) {
        this.q1.push(x)
    }
    pop() {
        while(this.q1.length >1) {
            this.q2.push(this.q1.shift())
        }
        let popped = this.q1.shift();
        [this.q1,this.q2] = [this.q2,this.q1]
        return popped
    }
    top() {
        return this.q1[this.q1.length-1]
    }
    empty() {
        return this.q1.length === 0
    }
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
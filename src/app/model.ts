export class Model{  //ES6 Module
user;
items;
constructor(){
    this.user="Adam",
    this.items=[
        new TodoItems("Buy Flowers",false),
        new TodoItems("Get Shoes",false),
        new TodoItems("Collect Ticket",false),
        new TodoItems("Buy Milk",false)
    ]
};
}

export class TodoItems{  //ES6 Module
action;
done;
constructor(action:string,done:boolean)
{
    this.action=action;
    this.done=done;
};
}
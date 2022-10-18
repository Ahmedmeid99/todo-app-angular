/*****************************/
/********** new way **********/
/*****************************/
export default class Todo {
  constructor(
    public id: Number,
    public text: String,
    public completed: boolean
  ) {}
}

/*****************************/
/********** old way **********/
/*****************************/

// export default class Todo{
//     id:Number;
//     text:String
//     completed:boolean
//     constructor(id:Number,text:String,completed:boolean){
//         this.id=id
//         this.text=text
//         this.completed=completed
//     }
// }

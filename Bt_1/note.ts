class Note{
    titles: string;
    content: string;
   
    addNote(title:string, content:string){
        
        this.titles = title
        this.content = content
    }
}
class NoteLists{
    name:string;
    
    Notes:Array<Note>=[];

constructor(name:string){

    this.name = name;}
    addNotetoList(note:Note){
   
        this.Notes.push(note)}

   

}
let a=new Note()
 a.addNote("Các việc cần làm "," Code")
 let noteList1=new NoteLists("TodoList");
console.log( `Tạo note`);
console.log(`Title: ${ a.titles}\n Content: ${a.content}`);


console.log( `add note to list:`)

noteList1.addNotetoList(a)
console.log(`Name NoteList ${ noteList1.name}`);
console.log( noteList1.Notes[0]);




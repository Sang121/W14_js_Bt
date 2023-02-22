var Note = /** @class */ (function () {
    function Note() {
    }
    Note.prototype.addNote = function (title, content) {
        this.titles = title;
        this.content = content;
    };
    return Note;
}());
var NoteLists = /** @class */ (function () {
    function NoteLists(name) {
        this.Notes = [];
        this.name = name;
    }
    NoteLists.prototype.addNotetoList = function (note) {
        this.Notes.push(note);
    };
    return NoteLists;
}());
var a = new Note();
a.addNote("Các việc cần làm ", " Code");
var noteList1 = new NoteLists("TodoList");
console.log("T\u1EA1o note");
console.log("Title: ".concat(a.titles, "\n Content: ").concat(a.content));
console.log("add note to list:");
noteList1.addNotetoList(a);
console.log("Name NoteList ".concat(noteList1.name));
console.log(noteList1.Notes[0]);

/* 
Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
- testo
- "completed", un booleano settato inizialmente a false.
Stampare in pagina un item per ogni elemento della to-do list.
Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.
Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).
*/ 

var app = new Vue (
    {
        el: "#root",
        data: {
            toDoList: [
                {
                    testo: "Elemento 1",
                    completed: false
                },
                {
                    testo: "Elemento 2",
                    completed: false
                },
                {
                    testo: "Elemento 3",
                    completed: false
                },
                {
                    testo: "Elemento 4",
                    completed: false
                },
                {
                    testo: "Elemento 5",
                    completed: false
                },
                {
                    testo: "Elemento 6",
                    completed: false
                },
                {
                    testo: "Elemento 7",
                    completed: false
                },
                {
                    testo: "Elemento 8",
                    completed: false
                },
                {
                    testo: "Elemento 9",
                    completed: false
                },
                {
                    testo: "Elemento 10",
                    completed: false
                }

            ],
            writeNewElement: "",
            newElement: {
                testo: "",
                completed: false
            },
            enterKeyCode: ""
        },
        methods: {
            // funzione per la cancellazione di un elemento
            deleteToDo(indexDelete) {
                this.toDoList.splice(indexDelete, 1);
                console.log("E' stato rimosso l'index di posizione", indexDelete);
            },             // /funzione per la cancellazione di un elemento

            writeElement: function(event) {
                console.log("questo è l'event key", event.key, "questo è il keycode", event.keyCode);
                this.newElement.testo = this.writeNewElement;
                this.enterKeyCode = event.keyCode;
                console.log(this.enterKeyCode);
                if(this.enterKeyCode == 13){this.addElement()};
                
                console.log("questo è il newelement.testo ", this.newElement.testo);

            },
            addElement() {
                    this.toDoList.push(this.newElement);
                    console.log("questo è il contenuto di newElement è:", this.newElement);
                    this.writeNewElement = "";
                
            }
        }
    }
);
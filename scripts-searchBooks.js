const booksByCategory =[
    {
        category : "Riqueza",
        books:[
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai Rico, Pai Pobre",
                author: "Robert T. Kiyosaki",
                author: "Sharon L. Lechter",
            }
        ],

    },
    {
        category : "Inteligencia Emocional",
        books:[
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ],
    }
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for (let category of booksByCategory) {
    console.log ('Total de Livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

for (let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)

            }
        }

    }

    console.log("Total de Autores: ",authors.length)
}

countAuthors();



function booksOfAuthor(author){
    let books = [];

for (let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author ){
                books.push(book.title)
            }
        }

    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('George S. Clason');











class BookModel{
    public bookId:number
    public genreId:number
    public bookName:string
    public Summary:string
    public price:number
    public stock:number

    public constructor(books:BookModel){
        this.bookId = books.bookId
        this.genreId = books.genreId
        this.bookName = books.bookName
        this.Summary = books.Summary
        this.price = books.price
        this.stock = books.stock
    }
}

export default BookModel
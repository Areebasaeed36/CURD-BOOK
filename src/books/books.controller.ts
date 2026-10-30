import { Request, Response } from "express";

interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
}

let books: Book[] = [];
export const createBook = (req: Request, res: Response) => {

    const { title, author, price } = req.body;

    const newBook: Book = {
        id: books.length + 1,
        title,
        author,
        price
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book created successfully",
        book: newBook
    });

};
export const getBooks = (req: Request, res: Response) => {

    res.status(200).json({
        message: "All books fetched successfully",
        books: books
    });

};
export const getBookById = (req: Request, res: Response) => {

    const id = Number(req.params.id);

    const book = books.find((b) => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.status(200).json({
        message: "Book found successfully",
        book: book
    });

};
export const updateBook = (req: Request, res: Response) => {

    const id = Number(req.params.id);

    const book = books.find((b) => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const { title, author, price } = req.body;

    book.title = title ?? book.title;
    book.author = author ?? book.author;
    book.price = price ?? book.price;

    res.status(200).json({
        message: "Book updated successfully",
        book: book
    });

};
export const deleteBook = (req: Request, res: Response) => {

    const id = Number(req.params.id);

    const index = books.findIndex((b) => b.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books.splice(index, 1);

    res.status(200).json({
        message: "Book deleted successfully"
    });

};
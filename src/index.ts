import express from "express";
import bookRoutes from "./books/books.routers.js";

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


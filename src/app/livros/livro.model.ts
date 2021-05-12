import { Autor } from "../autores/autor.model";

export class Livro {
    id?: number;
    titulo: string;
    isbn: string;
    paginas: number;
    preco: number;
    autor: Autor;
}

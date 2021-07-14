export interface Libros {
    nombre: string;
    imagen: string;
    paginas: number;
    autor: string;
}

export const ListaLibros:Array<Libros>=[
    {
        nombre: "Fahrenheit 451",
        imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/bd/92/bd920ce8ea72090a6277dc9ee4c87ea5.jpg",
        paginas: 81,
        autor: "Ray Bradbury"
    },

    {
        nombre: "El Principito",
        imagen: "https://www.planetadelibros.cl/usuaris/libros/fotos/213/m_libros/portada_el-principito_antoine-de-saint-exupery_201802201635.jpg",
        paginas: 256,
        autor: "Antoine de Saint-Exupéry"
    },

    {
        nombre: "La metamorfosis",
        imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/7c/f8/7cf84202b1f8676cee2ea47dc152ba1b.jpg",
        paginas: 60,
        autor: "Franz Kafka"
    },

    {
        nombre: "La niebla",
        imagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/c4/68/c4680b8a08823d6a9a4f49d714badebc.jpg",
        paginas: 300,
        autor: "Stephen King"
    },

    {
        nombre: "El señor de los anillos",
        imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg",
        paginas: 1579,
        autor: "J. R. R. Tolkien"
    },

    {
        nombre: "El Código da Vinci",
        imagen: "https://www.planetadelibros.cl/usuaris/libros/fotos/128/m_libros/127730_portada_el-codigo-da-vinci_dan-brown_201505260959.jpg",
        paginas: 66,
        autor: "Dan Brown"
    },

    {
        nombre: "Lo que el viento se llevó ",
        imagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/0d/51/0d513cf67ac3461fd0da21c25efb1a5a.jpg",
        paginas: 1594,
        autor: "Margaret Mitchell"
    },

    {
        nombre: "El alquimista ",
        imagen: "https://images-na.ssl-images-amazon.com/images/I/71oSkOWsD7L.jpg",
        paginas: 172,
        autor: "Paulo Coelho"
    },

    {
        nombre: "El hobbit",
        imagen: "https://static.wikia.nocookie.net/eldragonverde/images/0/06/Hobbitportada.jpg/revision/latest?cb=20120203190220&path-prefix=es",
        paginas: 335,
        autor: "J. R. R. Tolkien"
    },

    {
        nombre: "Las aventuras de Alicia en el país de las maravillas",
        imagen: "https://covers.alibrate.com/b/5f0b37ae51b2b2572a8c6cbd/e8e6ae02-abdf-4b27-b493-71615717bd92/medium",
        paginas: 144,
        autor: "Ray BradburyLewis Carroll"
    }
]

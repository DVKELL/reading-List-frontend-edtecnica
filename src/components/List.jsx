import React from "react";
import {useState, useEffect} from "react"
import {ButtonList} from './Button';
import '../list.css'

function ListBooks() {
    // fetch(url).then(res => res.json()).then(data => console.log(data))
    
    const [books, setBooks] = useState([])
    // const [loading, setLoading] = useState('Cargando...')
    
    useEffect(()=> {
        const url = 'http://localhost:3000/api/books'

        async function getList(urr) {
            const res = await fetch(urr)
            const data = await res.json()

            setBooks(data)
        }

        getList(url)
    }, [])

    console.log(books);
    return (
        <main>
            <h2>Listado de libros disponibles</h2>
            <div className="listContainer">
                {books.length===0 ? 'Cargando Libros...' : (
                <ul>
                    {books.items.map((i)=> (
                        <li key={i._id}>
                             {i.title}
                             <ButtonList name={"Editar"} id={i._id}/>
                             <ButtonList name={"Eliminar"} id={i._id}/>
                        </li>
                    ) )}
                </ul>
                )}

                {console.log(books)}
            </div>
        </main>
    )

}

export default ListBooks
import React from 'react';
import {useNavigate} from 'react-router-dom';

export function ButtonList({name, id}) {
    const url = 'http://localhost:3000/api/books/'

    const navigate = useNavigate()

    function buttonFunction(){
        const comparation = name === "Editar" 

        comparation ? navigate("/form") : fetch(`http://localhost:3000/api/books/${id}`,{
            method: 'DELETE'
        })
    }
    return (
    <>
    <button onClick={buttonFunction}>{name}</button>
    </>
    )
}


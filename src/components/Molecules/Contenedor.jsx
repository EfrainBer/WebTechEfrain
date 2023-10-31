import React from 'react';
import Personajes from '../Pages/Personajes';
import Imagenes from './Imagenes';

const Personaje = [
    {
        "id":1,
        "nombre": "Licht Bach",
        "edad": 300,
        "count" : "10,000,000",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Licht,
        "Arma" : "Longs Sword"
    },
    {
        "id":2,
        "nombre": "Hina",
        "edad": 23,
        "count" : "763",
        "especie" : "Humano",
        "img" : Imagenes.Hina,
        "Arma" : "None"
    },
    {
        "id":3,
        "nombre": "Nana Bassler",
        "edad": 300,
        "count" : "1",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Nana,
        "Arma" : "Longs Sword"
    },
    {
        "id":4,
        "nombre": "Sakai Tokikaze",
        "edad": 300,
        "count" : "5,246,639",
        "especie" : "763",
        "img" : Imagenes.Saika,
        "Arma" : "Longs Sword"
    },
    {
        "id":5,
        "nombre": "Sonohara Mizuka",
        "edad": 300,
        "count" : "32000",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Sonohara,
        "Arma" : "Longs Sword"
    },
    {
        "id":6,
        "nombre": "Pele Poporo",
        "edad": 300,
        "count" : "120",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Gespen,
        "Arma" : "Glock 17"
    },
    {
        "id":7,
        "nombre": "Schmelman Bach",
        "edad": "300+",
        "count" : "Ilimited",
        "especie" : "Humano",
        "img" : Imagenes.Schmelman,
        "Arma" : "No need for a weapon"
    }
]

const ContenedorA = () => (
    <>
        {
            Personaje.map(S => <Personajes nombre= {S.nombre} edad ={S.edad} count={S.count} especie={S.especie} img={S.img} id={S.id}/>)
        }
        
    </>
);

export default ContenedorA;
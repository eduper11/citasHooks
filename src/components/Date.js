import React from 'react';

function Date({ date, index, deleteDate }) {
    return (
        <div className='cita'>
            <p>
                Mascota: <span>{date.pet}</span>
            </p>
            <p>
                Dueño: <span>{date.owner}</span>
            </p>
            <p>
                Fecha: <span>{date.date}</span>
            </p>
            <p>
                Hora: <span>{date.hour}</span>
            </p>
            <p>
                Síntomas: <span>{date.symptoms}</span>
            </p>
            <button
                onClick={() => deleteDate(index)}
                type='button'
                className='button eliminar u-full-width'
            >
                Eliminar X
            </button>
        </div>
    );
}

export default Date;

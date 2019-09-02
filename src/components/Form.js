import React, { Fragment, useState } from 'react';

function Form({ createDate }) {
    const initialState = {
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    };

    const [date, setDate] = useState(initialState);

    const setState = event => {
        setDate({
            ...date,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        //enviamos la data al componente App
        createDate(date);
        //Reiniciar el state (por lo tanto reiniciar el form)
        setDate(initialState);

        //
    };

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            <form onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='pet'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={setState}
                    value={date.pet}
                />

                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='owner'
                    className='u-full-width'
                    placeholder='Nombre Dueño de la Mascota'
                    onChange={setState}
                    value={date.owner}
                />

                <label>Fecha</label>
                <input
                    type='date'
                    className='u-full-width'
                    name='date'
                    onChange={setState}
                    value={date.date}
                />

                <label>Hora</label>
                <input
                    type='time'
                    className='u-full-width'
                    name='hour'
                    onChange={setState}
                    value={date.hour}
                />

                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='symptoms'
                    placeholder='Describe los síntomas que sufre la mascota'
                    onChange={setState}
                    value={date.symptoms}
                ></textarea>

                <button type='submit' className='button-primary u-full-width'>
                    Agregar
                </button>
            </form>
        </Fragment>
    );
}

export default Form;

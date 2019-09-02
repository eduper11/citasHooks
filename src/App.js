import React, { useState, Fragment, useEffect } from 'react';
import Form from './components/Form';
import Date from './components/Date';

function App() {
    //para cargar las citas iniciales del localstorage en caso de haberlas

    let initialDates = JSON.parse(localStorage.getItem('dates'));

    //useState retorna 2 funciones
    const [dates, setDate] = useState(initialDates);

    const createDate = date => {
        //copiamos el state, y además le añadimos la nueva cita enviada desde form
        const newDates = [...dates, date];

        //agregamos al state global
        setDate(newDates);
    };

    const deleteDate = index => {
        const newDates = [...dates];
        newDates.splice(index, 1);
        setDate(newDates);
    };

    useEffect(() => {
        let initialDates = JSON.parse(localStorage.getItem('dates'));

        if (initialDates) {
            localStorage.setItem('dates', JSON.stringify(dates));
        } else {
            localStorage.setItem('dates', JSON.stringify([]));
        }
    }, [dates]);

    const titulo =
        Object.keys(dates).length === 0
            ? 'No hay citas'
            : 'Administrar las citas aquí';

    return (
        <Fragment>
            <h1>Administrador de pacientes</h1>
            <div className='container'>
                <div className='row'>
                    <div className='one-half column'>
                        <Form createDate={createDate} />
                    </div>
                    <div className='one-half column'>
                        <h2>{titulo}</h2>
                        {dates.map((date, index) => (
                            <Date
                                key={index}
                                index={index}
                                date={date}
                                deleteDate={deleteDate}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;

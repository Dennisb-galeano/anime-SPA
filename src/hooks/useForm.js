
// este hook esta siendo reutilizado, y se copio del repositorio de github


import { useState } from 'react';


export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}

// recibe un estado inicial, y basado en ese estadi inicial me regresa los campos para resetear uy manejar el firmulario

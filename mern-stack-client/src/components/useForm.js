import React, {useEffect, useState, Fragment} from 'react';

const useForm = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({}); // Returning empty object
    
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    };
}

export default useForm;
import React, {useEffect, useState, Fragment} from 'react';

const useForm = (initialFieldValues, setCurrentId) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({}); // Returning empty object
    
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const resetForm = () => {
        setValues(initialFieldValues)
        setErrors({})
        setCurrentId(0)
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange
    };
}

export default useForm;
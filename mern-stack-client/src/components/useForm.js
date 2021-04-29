import React, {useEffect, useState, Fragment} from 'react';

const useForm = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues);
    
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            // ...value,
            [name]: value
        });
    }

    return {
        values,
        setValues,
        handleInputChange
    };
}

export default useForm;
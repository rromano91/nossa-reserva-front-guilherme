import React from 'react';

const types = {
    url: {
        regex: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i
        ,
        message: 'Preencha a url da imagem',

    },
}

const CondominioForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {
        if(type === false) return true;
        if(value.length === 0) {
            setError('Este campo não pode ser vazio.')
            return false
        }
        else if(types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false
        }
        else {
            setError(null);
            return true;
        }

    }


    function onChange({target}) {
        if(error) validate(target.value)
        setValue(target.value)
    }

        return {
            value,
            setValue,
            onChange,
            error,
            validate: () => validate(value),
            onBlur: () => validate(value),
        };
    };


export default CondominioForm;
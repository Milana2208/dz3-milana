import React from 'react'

const ButtonDelete = ({onClick, id}) => {
    return (
        <button onClick={()=>onClick(id)}>delete</button>
    );
};

export default ButtonDelete;
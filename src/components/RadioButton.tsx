import React from 'react';

interface RadioButtonProps {
    id: string;
    name: string;
    checked?: boolean;
    onChange: () => void;
}

const RadioButton = ({checked = false, id, name, onChange}: RadioButtonProps) => {
    return (
        <div className="flex">
            <div className="checkbox-wrapper-5">
                <div className="check">
                    <input id={id} type="checkbox" checked={checked} onChange={onChange}/>
                    <label htmlFor={id}></label>
                </div>
            </div>
            <p className="ml-4 self-center font-sans font-semibold text-lg">{name}</p>
        </div>
    );
};

export default RadioButton;
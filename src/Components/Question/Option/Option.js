import React from 'react';

const Option = ({ option, correctAnshandler }) => {

    return (
        <div className="col">
            <div className="card ml-2 p-2">
                <div className="form-check ml-2">
                    <input onChange={() => correctAnshandler(option)} className="form-check-input" type="radio" name="flexRadioDefault" />
                    <label className="form-check-label text-secondary" >
                        {option}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Option;

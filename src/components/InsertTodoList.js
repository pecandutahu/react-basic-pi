import React, {useState} from 'react';

function Insert({addList}){
    const [inputText, setInputText] = useState('');
    const changeInput = (event) => {
        setInputText(event.target.value);
    };
    const changeSubmit = (event) => {
        event.preventDefault();
        addList(inputText);
        setInputText('');
    };
    return(
        <div>
            <div className="container">
                <center>
                    <form onSubmit={changeSubmit}>
                        <div className="col-md-12">
                            <input type="text" className="form-control" id="nama" value = {inputText} onChange={changeInput} /> 
                            <button className="btn btn-primary" type="submit"> Submit</button>
                        </div>
                        <h2 >{inputText} </h2>
                    </form>
                </center>
            </div>
        </div>
    )
}

export default Insert;
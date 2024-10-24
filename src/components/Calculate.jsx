import React, { useState } from 'react';

export const Calculate = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [ans, setAns] = useState(null);

    const add = (e) => {
        e.preventDefault(); // Prevent form submission
        setAns(Number(num1) + Number(num2));
    };

    const sub = (e) => {
        e.preventDefault(); // Prevent form submission
        setAns(Number(num1) - Number(num2));
    };

    const multi = (e) => {
        e.preventDefault(); // Prevent form submission
        setAns(Number(num1) * Number(num2));
    };

    const divide = (e) => {
        e.preventDefault(); // Prevent form submission
        if (num2 === '0') {
            setAns('Cannot divide by zero');
        } else {
            setAns(Number(num1) / Number(num2));
        }
    };

    return (
        <>
            <div className="container">
                <h2 className='text-center p-3'>Calculation</h2>
                <form className='p-2 m-3 '>
                    <div className=''>
                    <div className="">
                        <label class="form-label p-2 font-weight-bold">Num 2: </label>
                        <input
                            className='form-control p-2 m-2'
                            type='number'
                            placeholder='Enter a value'
                            value={num1}
                            onChange={(e) => setNum1(e.target.value)}
                        />
                    </div>
                    <div className="">
                        <label class="form-label p-2">Num 1: </label>
                        <input
                            className='form-control p-2 m-2'
                            type='number'
                            placeholder='Enter a value'
                            value={num2}
                            onChange={(e) => setNum2(e.target.value)}
                        />
                    </div>

                    </div >
                    <div className='d-flex justify-content-center align-items-center gap-4 p-3 mt-5'>
                    <button className="btn btn-info mb-3 border border-black" type='submit' onClick={add}>Addition</button>
                    <button className="btn btn-info mb-3 text-center border border-black" type='submit' onClick={sub}>Subtraction</button>
                    <button className="btn btn-info mb-3 border border-black" type='submit' onClick={multi}>Multiplication</button>
                    <button className="btn btn-info mb-3 border border-black" type='submit' onClick={divide}>Division</button>
                    

                    </div>
                    
                    <h1>Result: </h1><h3>{ans !== null ? ans : 'Enter values to see result'}</h3> 
                </form>
            </div>
        </>
    );
};

import React from 'react';
import './App.css';
import { useContext } from 'react';
import { globalContext } from './context/Context';

const Text = () => {

    const { mode, setMode, data } = useContext(globalContext)

    const change = (e) => {
        setMode(!mode)
        if (e.currentTarget.innerText == 'Light Mode') {
            e.currentTarget.innerText = 'Dark Mode'
        } else {
            e.currentTarget.innerText = 'Light Mode'
        }
    }

    return (
        <div className='text'>
            <ul>
                <button onClick={change}> Light Mode </button>
                {
                    data.map((item) => (
                        <li key={item.id}>
                            {item.body}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Text;

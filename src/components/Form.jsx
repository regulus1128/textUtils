import React, {useState} from 'react'
import './Form.css'

function Form(props) {
    const [text, setText] = useState('Enter text here');

    

    const toUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const toLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const reverseText = () => {
        let l = text.length;
        let newtext = "";
        for(let i = l-1; i >= 0; i--){
            newtext += text[i];
        }
        setText(newtext);
    }

    const copyText = () => {
        console.log('btn clicked');
        let txt = document.querySelector('#message');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        document.getSelection().removeAllRanges();
        const copyBtn = document.querySelector('#copy');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy text';
        }, 3000);
    }

    const clearText = () => {
        let txt = document.querySelector('#message');
        const cleanedText = text.replace(/\s+/g, ' ');
        txt.value = cleanedText;
        const clearBtn = document.getElementById('clear');
        clearBtn.textContent = 'Removed extra spaces!';
        setTimeout(() => {
            clearBtn.textContent = 'Remove extra spaces'
        }, 2000)

    }

    const handleChange = (e) =>{
        setText(e.target.value)
    }
  return (
    <>
    
    <textarea id="message" rows="5" cols="4" class="block p-2.5 w-9/12 ml-48 my-6 text-sm text-black-500 bg-transparent rounded-lg border border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-teal-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-800 dark:focus:border-teal-800 transparent-textarea" value={text} onChange={handleChange} placeholder="Enter text here..."></textarea>
    
    <div id='btns'>
    <button disabled={text.length === 0} class="text-white bg-teal-800 mx-2 ml-48  hover:bg-blue-700 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 my-5 dark:bg-teal-800 dark:hover:bg-teal-700 dark:hover:opacity-100 focus:outline-none dark:focus:ring-blue-800 btn" onClick={toUpper}>Convert to uppercase</button>

    <button disabled={text.length === 0} class="text-white bg-teal-800 mx-2 hover:bg-blue-700 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 my-5 dark:bg-teal-800 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-blue-800 btn" onClick={toLower}>Convert to lowercase</button>

    <button disabled={text.length === 0} class="text-white bg-teal-800 mx-2 hover:bg-blue-700 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 my-5 dark:bg-teal-800 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-blue-800 btn" onClick={reverseText}>Reverse text</button>

    <button disabled={text.length === 0} id='copy' class="text-white bg-teal-800 mx-2 hover:bg-blue-700 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 my-5 dark:bg-teal-800 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-blue-800 btn" onClick={copyText}>Copy text</button>

    <button disabled={text.length === 0} id='clear' class="text-white bg-teal-800 mx-2 hover:bg-blue-700 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 my-5 dark:bg-teal-800 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-blue-800 btn" onClick={clearText}>Remove extra spaces</button>
    </div>
    
    
    <div className="summary">
    <p>Text summary : {text.split(" ").filter((e) => {return e.length !== 0}).length} words and {text.length} characters</p>
    </div>    
    </>


  )
}

export default Form
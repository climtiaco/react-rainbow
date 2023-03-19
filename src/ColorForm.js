import React, { useState } from 'react'


function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // Eliminates the default behavior of our form submittal
        e.preventDefault()
        // addColor, the function we just built, should be available within the props
        props.addColor(input)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='choose ya color'
                    onChange={(e) => setInput(e.target.value)} 
                />
                    <button 
                        type="submit">
                            Submit!
                    </button>
            </form>
        </div>
    )
}


export default ColorForm;
import { useState } from 'react';

function Foo() {
    const [bar, setBar] = useState(0);

    console.log(bar);

    return (
        <button 
            onClick={() => setBar(bar + 1)}
            style={{ 
                display: 'block',
                margin: '10px 0', 
                padding: '10px 20px', 
                fontSize: '16px', 
                cursor: 'pointer',
                borderRadius: '4px',
                border: '1px solid #ccc',
                backgroundColor: '#f9f9f9'
            }}
        >
            Count: {bar}
        </button>
    );
}

export default Foo;
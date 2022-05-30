import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    outline: none;
    
}

body {
    width: 100vw;
    height: auto;
}

section {
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: -webkit-fill-available;
    height: 100%;
}

.title {
    width:inherit;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #26038A;
    font-size: 40px;
}

.legend {
    font-size: 30px;
    font-weight: 700;
    color:#26038A;
    border-bottom: 2px solid #26038A;
    width: 95vw;
}

label {
    font-size: 20px;
    font-weight: 400;
    color: #26038A;
}

.input {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.4);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }
.react-modal-content {
        width: 100%;
        max-width: 75%;
        height: auto;
        background-color: #fff;
        padding: 2rem 1.5rem;
        position: relative;
        border-radius: 10px;
        overflow: hidden;

    }

`;

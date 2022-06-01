import styled from "styled-components";


export const TaskSection = styled.div`
    width: 400px;
    margin: 28px;

    flex-grow: 1;

    .sectionTitle {
        border-radius: 5px 5px 0px 0px;
        text-align: center;
        color: white;
        background-color: ${(props) => props.color};

        align-self: center;
        display: flex;
        justify-content: space-evenly;
    }

    
`

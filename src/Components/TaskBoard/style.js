import styled from "styled-components";

export const TaskBoard = styled.div`
    display: flex;
    flex-direction:column;
    width: inherit;

    .legend {
        align-self: center;
    }

    .board {
        display: flex;
        justify-content: space-around;
    }
`
import styled from "styled-components";

export const TaskBoard = styled.div`
    display: flex;
    flex-direction:column;
    width: inherit;

    .board {
        display: flex;
        justify-content: space-around;
    }

    #addTaskIcon {
        width: 3rem;
        height: 3rem;
        margin-right: 3rem;
    }
`
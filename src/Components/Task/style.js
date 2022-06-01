import styled from "styled-components"

export const Task = styled.div`
    line-height: 1.75rem;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 2px solid ${(props) => props.color};
    background-color: ${(props) => {
        let bgcolor = `${props.color}40`
        return bgcolor
    }};

    h3 {
        color: #1B42A5;
    }

    .icons {
        display: flex;
        align-self: flex-end;
        gap: 12px;
        width: 60px;
        height: 20px;
    }
`;
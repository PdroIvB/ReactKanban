import * as S from "./style"

export const Button = (props) => {
    return <S.Button type={props.type} onClick={props.onClick} >
        {props.children}
    </S.Button>
}
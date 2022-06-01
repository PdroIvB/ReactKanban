import { useContext } from "react"
import { TaskContext } from "../../Providers/TaskContext"
import * as S from "./style"

export const Input = (props) => {

    const{status, sectionsArray} = useContext(TaskContext)

    if (props.type !== "select"){
    return(
        <div className="input">
        <label>{props.legend}</label>
        <S.Input placeholder={props.placeholder} type={props.type} value={props.value} onInput={props.onInput}/>
        </div>
    )
    }

    return (
        <div className="input">
            <label>{props.legend}</label>
            <S.SelectInput onChange={props.onChange} value={status} >
            <option value="-1">{props.placeholder}</option>
                {
                    sectionsArray.map((section,index)=>{
                        return <option value={section.status} key={index}>{section.title}</option>
                    })
                }
            </S.SelectInput>
        </div>
    )
}
import { Text } from "../../styles/GlobalStyles"
import { Photo } from "./style"

export default function Quotes(props){

    const img = props.img
    return(
        <div>
        <Photo src={img}>{props.name}</Photo>
        <Text>"{props.children}"</Text>
        </div>
    )
}
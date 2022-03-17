import {Text} from "../../styles/GlobalStyles"

export default function History(props){
    return(
        <div>
            <h1>Histórico PmenosLab</h1>
            <Text>{props.children}</Text>
        </div>
    )
}
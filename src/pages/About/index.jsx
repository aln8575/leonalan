import { AboutBody } from "./style"
import History from "../../components/History"
import Quotes from "../../components/Quotes"
import Fundador from '../../img/Fundadores/Fundador.jpg'


export default function About(){
    return(
    <AboutBody>
        <h1>Sobre</h1>
        <History>Transformação 360 graus – O novo espaço é mais um passo da jornada de transformação, inovação e conexão da Pague Menos com as startups e numa área de TI fortalecida para proporcionar experiências cada vez melhores aos seus clientes. Outras iniciativas como o NINNA - hub de inovação e empreendedorismo, e o Fast Dating - programa de conexão com startups reforçam essa ambição.</History>
        <Quotes img={Fundador}>Frase do fundador</Quotes>
    </AboutBody>
    )
}
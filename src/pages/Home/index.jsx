import Banner from "../../components/Banner";
import { HomeBody } from "./style";
import banner from '../../img/banner.jpg'


export default function Home(){
    return(
        <HomeBody>
            <h1>alo</h1>
            <Banner banner={banner}>Aqui já começou o futuro</Banner>
        </HomeBody>
    )
}
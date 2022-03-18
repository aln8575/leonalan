import Banner from "../../components/Banner";
import { HomeBody,Wrapper } from "./style";
import banner from '../../img/banner.jpg'


export default function Home(){
    return(
        <HomeBody>
            <Banner banner={banner}>Aqui ja começou o futuro</Banner>
        </HomeBody>
    )
}
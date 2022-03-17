import Banner from "../../components/Banner";
import { HomeBody } from "./style";
import banner from '../../img/banner.jpg'


export default function Home(){
    return(
        <HomeBody>
            <h1>Home</h1>
            <Banner src={banner}></Banner>
        </HomeBody>
    )
}
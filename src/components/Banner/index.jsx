import {BannerBody,BannerPhoto} from './style'
import { Text } from '../../styles/GlobalStyles'

export default function Banner(props){
    const BannerImg = props.banner
    return(
        <BannerBody>
            <BannerPhoto src={BannerImg}/>
            <Text>{props.children}</Text>
        </BannerBody>
    )
}
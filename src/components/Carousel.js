import { CAROUSEL_URL } from "../utils/constants";

        
const Carousel = ({imgData})=>{
    const {imageId} = imgData;
    return(
        <div className="">
            <img src={CAROUSEL_URL+imageId} alt="img" />
        </div>
    )
}
export default Carousel;
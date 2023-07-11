import HeroSection from '../HeroSection/HeroSection';
import '../../App.css';
import Footer from '../Footer/Footer';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionThree from '../SectionThree/SectionThree';
import SectionFour from '../SectionFour/SectionFour';
import SectionFive from '../SectionFive/SectionFive';
import SectionSix from '../SectionSix/SectionSix';
import FormSection from '../FormSection/FormSection';
import HeaderBannerSlider from '../headerBannerSlider/HeaderBannerSlider';
import "./styles.css"
import PhotoSection from '../PhotoSection/PhotoSection';


function Home (){
    return(
        <>
        <HeaderBannerSlider></HeaderBannerSlider>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <SectionFour></SectionFour>
        <SectionThree></SectionThree>
        <PhotoSection></PhotoSection>
        <SectionFive></SectionFive>
        <SectionSix></SectionSix>
        <FormSection></FormSection>
        {/* <SectionSeven></SectionSeven> */}
        <Footer></Footer>

        </>
    );
}
export default Home;
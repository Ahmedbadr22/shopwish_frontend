import MainSection from "../../main-section/MainSection";
import MainProductSlider from "../../../sliders/main-product-slider/MainProductSlider";

const DealsOfTheWeek = () => {
    return (
        <MainSection
            sectionTitle="Most Buy This Week"
            slider={<MainProductSlider />}
        />
    );
};

export default DealsOfTheWeek;
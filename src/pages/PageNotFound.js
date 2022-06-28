import PageHeader from "../components/navigations/page-header/PageHeader";
import PageNotFoundSection from "../components/sections/page-not-found/PageNotFoundSection";
import SubscribeSection from "../components/sections/subscribe-section/SubscribeSection";


const PageNotFound = () => {
    return (
        <>
            <PageHeader sectionTitle={"Page Not Found"} />
            <PageNotFoundSection />
            <SubscribeSection />
        </>
    );
};

export default PageNotFound;
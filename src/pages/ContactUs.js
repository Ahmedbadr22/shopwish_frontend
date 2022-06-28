import PageHeader from "../components/navigations/page-header/PageHeader";
import SubscribeSection from "../components/sections/subscribe-section/SubscribeSection";
import ContactUsSection from "../components/sections/conatact-us-section/ContactUsSection";

const ContactUs = () => {
    return (
        <>
            <PageHeader sectionTitle="Contact Us"/>
            <ContactUsSection />
            <SubscribeSection />
        </>
    );
};

export default ContactUs;
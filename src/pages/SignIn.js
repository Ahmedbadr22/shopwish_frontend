import PageHeader from "../components/navigations/page-header/PageHeader";
import LoginForm from "../components/forms/login-form/LoginForm";
import SubscribeSection from "../components/sections/subscribe-section/SubscribeSection";

const SignIn = () => {

    return (
        <>
            <PageHeader sectionTitle={"Sign In"}/>
            <LoginForm />
            <SubscribeSection />
        </>
    );
};

export default SignIn;
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import CookiePolicyModal from './components/CookiePolicyModal/CookiePolicyModal.jsx';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
			<CookiePolicyModal />
		</>
	);
};

export const withLayout = (Component) => {
	return function withLayoutComponent(props) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};

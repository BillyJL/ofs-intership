import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/index.jsx';
import CookiePolicyModal from './components/CookiePolicyModal/index.jsx';

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
			<CookiePolicyModal />
		</>
	);
};

export const createLayoutHoc = (Layout) => {
	return function withLayout(Component) {
		return function withLayoutComponent(props) {
			return (
				<Layout>
					<Component {...props} />
				</Layout>
			);
		};
	};
};

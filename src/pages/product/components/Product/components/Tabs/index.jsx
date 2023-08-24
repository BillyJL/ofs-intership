import { useState } from 'react';
import './Tabs.scss';
import { clientConfig } from 'config/client';

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(0);
	const {product: {tabs: {tabContents, tabTitles}}} = clientConfig;
	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	return (
		<div className="tabs-container">
			<div className="tab-titles">
				{tabTitles.map((title, index) => (
					<div
						key={index}
						className={`tab-title ${
							activeTab === index ? 'active' : ''
						}`}
						onClick={() => handleTabClick(index)}
					>
						{title}
					</div>
				))}
			</div>
			<div className="tab-content">
				<div className="tab-text">
					{tabContents[activeTab].split('\n').map((line, index) => (
						<p key={index}>{line}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tabs;

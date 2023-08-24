import './Dropdowns.scss';

const Dropdowns = () => {
	return (
		<ul className="dropdowns">
			<li>
				<select>
					<option value="en" selected>en</option>
					<option value="ua">ua</option>
				</select>
			</li>
			<li>
				<select>
					<option value="value1" selected>$ us</option>
					<option value="value2">₴ ua</option>
				</select>
			</li>
		</ul>
	);
};

export default Dropdowns;

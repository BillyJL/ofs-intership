import ColorPickerPanel from "./components/ColorPickerPanel";
import Dropdown from "./components/Dropdown";

export function selectFilter(type, options) {
	switch(type) {
		case 'dropdown':
			return <Dropdown options={options} />
		case 'color':
			return <ColorPickerPanel options={options} />
		default: 
			return <Dropdown options={options} />
	}
}
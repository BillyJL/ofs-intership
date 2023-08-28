import { useState } from 'react';
import './PhotoGallery.scss';
import expendIcon from '@images/Expand_icon.svg';
import ThumbnailCarousel from './components/ThumbnailCarousel';

const OPTIONS = { loop: true }

const PhotoGallery = ({images}) => {
	const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
	const [fullscreenMode, setFullscreenMode] = useState(false);

	const handleClickPhoto = (index) => {
		setSelectedPhotoIndex(index);
	};

	const handleToggleFullscreen = () => {
		setFullscreenMode(!fullscreenMode);
	};

	return (
		<div className={`photo-gallery ${fullscreenMode ? 'fullscreen' : ''}`}>
			<div className={`gallery-preview ${fullscreenMode ? 'fullscreen-photo' : ''}`}>
				<img
					src={images[selectedPhotoIndex]}
					alt={`Photo ${selectedPhotoIndex}`}
					className={`main-photo`}
				/>
				<button
					className="fullscreen-button"
					onClick={handleToggleFullscreen}
				>
					<img src={expendIcon} alt='Expend' />
				</button>
			</div>
			<div className="thumbnail-list">
				{images.map((photo, index) => (
					<img
						key={index}
						src={photo}
						alt={`Photo ${index}`}
						className={`thumbnail ${
							index === selectedPhotoIndex ? 'selected' : ''
						}`}
						onClick={() => handleClickPhoto(index)}
					/>
				))}
			</div>
			<ThumbnailCarousel slides={images} options={OPTIONS} />
		</div>
	);
};

export default PhotoGallery;

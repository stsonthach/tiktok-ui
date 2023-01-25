import { useState, forwardRef } from 'react';
import images from '~/assets/images';

function Image({ src, alt, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(images.noImage);
    };

    return <img src={fallBack || src} alt={alt} ref={ref} {...props} onError={handleError} />;
}

export default forwardRef(Image);

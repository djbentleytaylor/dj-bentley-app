/* eslint-disable react/prop-types */
const Photo = ({ url, className, handleClick }) => {
    return (
        <img
            className={className}
            src={url}
            onClick={handleClick}
            loading="lazy"    // add this
        />
    );
};

export default Photo;
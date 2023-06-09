import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
// import animationData from '../assets/lottie.json';

export default function CardAdministration({ lottieImage, title, description, url }) {
  const [lottieOptions, setLottieOptions] = useState({
    animationData: null,
    loop: true,
    autoplay: true,
  });

  useEffect(() => {
    setLottieOptions((prevOptions) => ({
      ...prevOptions,
      animationData: lottieImage,
    }));
  }, [lottieImage]);

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-900">
        <Lottie options={lottieOptions} height={"250px"} />
        <div className="p-5">
          <a href={url}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <a
            href={url}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Entrar
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

CardAdministration.propTypes = {
  lottieImage: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

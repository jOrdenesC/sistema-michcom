import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import lottieImage from '../assets/not-found.json';


export default function NotFound() {

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
        <div style={{
            width: "40%",
            display: "flex",
            margin: 'auto',
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
        }}>
            <Lottie options={lottieOptions} />
            <p className="text-4xl font-black text-blue-700 dark:text-white">Oops... No hay nada aquí</p>
        </div>
    )
}

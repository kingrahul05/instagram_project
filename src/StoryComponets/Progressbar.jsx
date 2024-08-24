// import React, { useEffect, useState } from 'react';
// import "./Progressbar.css"; 

// const Progressbar = ({ index, activeIndex, duration }) => {
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setProgress((prevProgress) => {
//                 if (prevProgress < 100) {
//                     return prevProgress + 1;
//                 }
//                 clearInterval(interval);
//                 return prevProgress;
//             });
//         }, duration / 100);

//         return () => {
//             clearInterval(interval);
//         };
//     }, [duration, activeIndex]);

//     useEffect(() => {
//         setProgress(0); 
//     }, [activeIndex]);

//     const isActive = index === activeIndex;

//     return (
//         <div className={`progress-bar-container ${isActive ? "active" : ""}`}>
           
//             <div className={isActive ? "progress-bar" : ""} style={{ width: `${progress}%` }}></div>
//         </div>
//     );
// };

// export default Progressbar;



import React, { useEffect, useState } from 'react';
import "./Progressbar.css";

const Progressbar = ({ index, activeIndex, duration }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (index !== activeIndex) {
            return; // Do not start the interval if not active
        }

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + 1;
                }
                clearInterval(interval); // Clear interval when progress reaches 100
                return prevProgress;
            });
        }, duration / 100);

        return () => {
            clearInterval(interval); // Cleanup on component unmount or when dependencies change
        };
    }, [index, activeIndex, duration]);

    useEffect(() => {
        if (index === activeIndex) {
            setProgress(0); // Reset progress if activeIndex changes
        }
    }, [activeIndex, index]);

    const isActive = index === activeIndex;

    return (
        <div className={`progress-bar-container ${isActive ? "active" : ""}`}>
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default Progressbar;
 
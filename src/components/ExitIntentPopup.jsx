import React, { useEffect, useState } from 'react';

const ExitIntentPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {

        const handleMouseLeave = (event) => {
            if (event.clientY <= 0) {
                setShowPopup(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className="fixed z-20 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-lg text-center">
                        <h2 className="text-xl font-bold mb-4">Wait! Don't leave yet!</h2>
                        <p className="mb-4">We have an exclusive offer for you.</p>
                        <button
                            onClick={closePopup}
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExitIntentPopup;

import React from 'react';


const Skeleton = ({ skeletonStyling }: {skeletonStyling: string} ) => {

    return (
        <div className={`animate-pulse bg-[#81818a] ${skeletonStyling}`}>
        </div>
    );
};


export default Skeleton;
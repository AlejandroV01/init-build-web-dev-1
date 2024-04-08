import React from 'react';


const Skeleton = ({ skeletonStyling }: {skeletonStyling: string} ) => {

    return (
        <div className={`animate-pulse bg-[#46464d] ${skeletonStyling}`}>
        </div>
    );
};


export default Skeleton;
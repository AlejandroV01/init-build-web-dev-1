import Skeleton from "./skeleton";

const ProfileSkeleton = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='flex gap-4 mb-4'>
                <Skeleton skeletonStyling='h-16 w-16 rounded-full'/>
                <div className="flex flex-col justify-between my-2">
                    <div className="flex flex-col gap-1">
                    <Skeleton skeletonStyling="w-[100px] h-[8px] rounded-lg"/>
                    
                    <Skeleton skeletonStyling="w-[100px] h-[8px] rounded-lg"/>
                    </div>
                    <Skeleton skeletonStyling="w-[100px] h-[8px] rounded-lg"/>

                </div>
            </div>
            <div className='flex flex-col h-full gap-2'>
                <Skeleton skeletonStyling='h-[8px] w-full rounded-lg'/>
                <Skeleton skeletonStyling='h-[8px] w-full rounded-lg'/>
                <Skeleton skeletonStyling='h-[8px] w-full rounded-lg'/>
                <Skeleton skeletonStyling='h-[8px] w-full rounded-lg'/>
            </div>
        </div>
    );
};

export default ProfileSkeleton;

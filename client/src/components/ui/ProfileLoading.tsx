import ExperienceSkeleton from "./ProfileLoadingSkeleton";
import ProfileLoadingSkeleton from "./ProfileLoadingSkeleton";
import Skeleton from "./skeleton";

const loadingComponent = (header: string) => {
    return (
        <div className='w-[850px] py-5 px-5 pt-4 flex flex-col gap-7 rounded-[8px] drop-shad bg-[#E8E8E8] shadow-md border-l border-b border-[#b2b2b2]'>
            <span className="font-extrabold text-2xl text-black">{header}</span>
            <ExperienceSkeleton />
        </div>
    );
};


const topBanner = () => {
    return (
        <div className="flex items-center space-x-8">
            <Skeleton skeletonStyling="w-[150px] h-[150px] rounded-full" />
            <div className='flex flex-col sm:flex-row gap-6 justify-between w-fit bg-primary p-5 rounded-lg text-white'>
                <div className='flex-col'>
                    <div>
                        <Skeleton skeletonStyling="w-[150px] h-3 rounded-lg" />
                    </div>
                    <div>
                        <div className='flex items-center gap-1 py-3'>
                            <Skeleton skeletonStyling="w-[270px] h-2 rounded-lg" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <Skeleton skeletonStyling="w-[100px] h-2 rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className='w-[3px] bg-white/40' />
                <div className='flex-col'>
                    <div><Skeleton skeletonStyling="w-[80px] h-3 rounded-lg" /></div>
                    <div className='py-3'>
                        <Skeleton skeletonStyling="w-[150px] h-2 rounded-lg" /> <br />
                        <Skeleton skeletonStyling="w-[70px] h-2 rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const skeletons = () => {
    return (
        <div className='bg-[#ededed] rounded-3xl border-1'>
            <div className='w-full px-14 py-7 ml-4'>
                {topBanner()}
                <div className='py-5 mr-10'>
                    <div className='py-5'>
                        {loadingComponent("Work Experience")}
                    </div>
                    <div className='py-5'>
                        {loadingComponent("Education")}
                    </div>
                    <div className='py-5'>
                        {loadingComponent("Projects")}
                    </div>
                    <div className='py-5'>
                        {loadingComponent("Portfolio")}
                    </div>
                </div>
            </div>
        </div>

    );
};



const ProfileLoading = () => {
    return (
        <div>
            {skeletons()}
        </div>
    );
};


export default ProfileLoading;
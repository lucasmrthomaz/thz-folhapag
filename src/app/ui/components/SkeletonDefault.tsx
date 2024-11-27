import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonDefault() {
    return (

        <div className='mt-5 flex'>
            <Skeleton
                sx={{ bgcolor: 'grey.400' }}
                variant="rectangular"
                width={300}
                height={150}
                className='mr-5'
            />
            <Skeleton
                sx={{ bgcolor: 'grey.400' }}
                variant="rectangular"
                width={300}
                height={150}
                className='mr-5'
            />
             <Skeleton
                sx={{ bgcolor: 'grey.400' }}
                variant="rectangular"
                width={300}
                height={150}
                className='mr-5'
            />
        </div>

    );
}

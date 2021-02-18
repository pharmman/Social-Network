import React from 'react';
import {Preloader} from '../components/common/Preloader/Preloader';


export function withSuspense(WrappedComponent: any) {

    return (props:any) => {
        return <React.Suspense fallback={<Preloader/>}><WrappedComponent {...props}/></React.Suspense>
    }
}


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '.';
import { hideToaster } from '../../slices/toaster.slice';

function AlertVariants({ alertConfigs }: any) {
    const dispatch = useDispatch();

    return (
        <div className="App">
            {alertConfigs.map((alertConfig: any, index: number) => <Alert {...alertConfig} key={`${alertConfig.type}-${index}`} clearAlert={() => dispatch(hideToaster())}></Alert>)}
        </div>
    );
}

export default AlertVariants;
import React from 'react';
import { Breadcrumb } from './styles';

interface IBreadcrumb {
    title: string;
    slug: string;
}

type Breadcrumbs = {
    breadcrumbs: Array<IBreadcrumb>;
    className?: string
}

const Breadcrumbs = (props: Breadcrumbs) => {
    return <Breadcrumb className={`breadcrumb-wrapper font-bold text-[0.9rem] xl:text-[1.1rem] md:rounded-md w-full pt-8 ${props?.className}`}>
        <ol className="list-reset flex">
            {props.breadcrumbs.map((breadcrumb, index) => {
                return <React.Fragment key={`bc-${breadcrumb.slug}`} >
                    {index !== (props.breadcrumbs.length - 1) &&
                        <><li key={`bc-${breadcrumb.slug}-li`} className="breadcrumb-wrap">
                            <a href={breadcrumb.slug} className='animated-menu'>
                                <span className="text-orange-dark hover:text-primary truncate breadcrumb">{breadcrumb.title}</span>
                            </a>
                        </li>
                            <span className="text-orange-dark mx-[1.2rem] sep">/</span>
                            <li>
                            </li></>
                    }
                    {index === (props.breadcrumbs.length - 1) && <li className="text-black truncate breadcrumb-wrap">{breadcrumb.title}</li>}
                </React.Fragment>
            })}
        </ol>
    </Breadcrumb>
}

export default Breadcrumbs;
import React, {useEffect} from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'
import PreLoader from './index'

const PreLoaderWindow = ({active}) => {
    useEffect(() => {
        if (active) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
    }, [active])

    return active ? (
        <div className={cn('d-flex fd-col ai-center jc-center', styles.PreLoader__Window)}>
            <PreLoader/>
            <div className={cn('fz-4 mt-8 fw-bold', styles.PreLoader__WindowTitle)}>Loading</div>
            <div className={cn('fz-3 fw-bold mb-4', styles.PreLoader__WindowSubTitle)}>
                by. MoonSolution
            </div>
        </div>
    ) : null
}

export default PreLoaderWindow
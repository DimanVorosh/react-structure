import React, {useEffect, useRef, useState} from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'
import SvgSprite from '../SvgSprite'

const Modal = ({active, children, close}) => {
    const innerRef = useRef()

    useEffect(() => {
        if (!active) return
        const innerRefCurrent = innerRef.current
        innerRefCurrent.style.marginLeft = `-${innerRefCurrent.offsetWidth / 2}px`
        innerRefCurrent.style.marginTop = `-${innerRefCurrent.offsetHeight / 2}px`
    }, [])

    function closure(e) {
        if (typeof close === 'function') {
            close(e)
        }
    }

    return (<>
        {active && (<>
            <div className={cn(styles.Modal__Wrapper)} onClick={closure}/>
            <div className={cn('p-6 br-default', styles.Modal__Inner)} ref={innerRef}>
                <p className={cn('br-circle d-flex ai-center jc-center', styles.Modal__Closure)} onClick={close}>
                    <SvgSprite spriteID={'cross'}/>
                </p>
                {children}
            </div>
        </>)}
    </>)
}

export default Modal
import React, {useEffect, useRef, useState} from 'react'
import cn from 'classnames'
import uniqid from 'uniqid'

// styles
import styles from './index.module.scss'

// ui-kit
import SvgSprite from '../SvgSprite'

const MoreTooltip = props => {
    const [toggle, setToggle] = useState(false)
    const [styleValues, setStyleValues] = useState()

    const tooltipRef = useRef()

    function handleTriggerFocus () {
        const tooltipCurrent = tooltipRef.current
        const values = {
            top: tooltipCurrent.getBoundingClientRect().top,
            left: tooltipCurrent.getBoundingClientRect().left,
            right: tooltipCurrent.getBoundingClientRect().right,
            bottom: tooltipCurrent.getBoundingClientRect().bottom,
            height: tooltipCurrent.offsetHeight,
            width: tooltipCurrent.offsetWidth,
        }

        setStyleValues({
            top: (values.bottom - 10) + 'px',
            right: (document.body.offsetWidth - values.right) + 'px'
        })

        setToggle(true)
    }

    function handleTriggerUnFocus() {
        setToggle(false)
    }

    useEffect(() => {
        setStyleValues({...styleValues, display: toggle ? 'block' : 'none'})
    }, [toggle])

    return (<>
        <div
            onMouseEnter={handleTriggerFocus}
            onMouseLeave={handleTriggerUnFocus}
            className={cn(styles.Open__Wrapper)}
        >
            <div
                ref={tooltipRef}
                className={cn('br-circle d-flex ai-center jc-center', styles.Open, {[styles.Open_active]: toggle})}
            >
                <SvgSprite {...props} className={cn(styles.Icon_main, 'tooltip-open')} spriteID={props.icon}/>
            </div>
        </div>
        <ul
            className={cn('px-4', styles.Content)}
            style={styleValues}
            onMouseEnter={handleTriggerFocus}
            onMouseLeave={handleTriggerUnFocus}
        >
            {props.children}
        </ul>
    </>)
}

export const MoreTooltipItem = props => {
    return (
        <li {...props} className={cn('d-flex ai-center jc-start py-3', styles.Content__Item)}>
            <SvgSprite spriteID={props.icon}/>
            <p className={'ml-3'}>{props.children}</p>
        </li>
    )
}

export default MoreTooltip
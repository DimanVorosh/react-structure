import React, {useEffect, useRef, useState} from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'
import SvgSprite from '../SvgSprite'

const Input = props => {
    const {label, className, theme, type: _type, light, value, disabled, search} = props
    const labelRef = useRef()
    const themeMap = {danger: 'danger', success: 'success'}
    const [toggle, setToggle] = useState(value || theme)
    const [type, setType] = useState(_type ? _type : 'text')

    useEffect(() => {
        const labelRefCurrent = labelRef.current

        if (toggle) {
            if (search) {
                labelRefCurrent.style.display = 'none'
            }

            // active
            labelRefCurrent.style.zIndex = 99
            labelRefCurrent.style.top = 0
            labelRefCurrent.style.marginTop = `-${(labelRefCurrent.offsetHeight / 2) - 1}px`
            labelRefCurrent.style.left = '12px'
            labelRefCurrent.style.fontSize = '12px'
        } else {
            if (value || theme) return
            if (search) labelRefCurrent.style.display = 'initial'
            labelRefCurrent.style.zIndex = 97
            labelRefCurrent.style.left = '12px'
            labelRefCurrent.style.top = '50%'
            labelRefCurrent.style.marginTop = `-${labelRefCurrent.offsetHeight / 2}px`
            labelRefCurrent.style.fontSize = '14px'
        }
    }, [toggle])

    function handleFocus(e) {
        setToggle(true)
    }

    function handleBlur() {
        setToggle(false)
    }

    function handleIconClick() {
        if (disabled) return
        setType(type === 'password' ? 'text' : 'password')
    }

    return (
        <div className={cn(
            {
                [styles.Wrapper_active]: toggle && (theme !== themeMap.danger && theme !== themeMap.success),
                [styles.Wrapper_danger]: theme === themeMap.danger,
                [styles.Wrapper_success]: theme === themeMap.success,
                [styles.Wrapper_disabled]: disabled,
                [styles.Wrapper_search]: search,
                [styles.Wrapper_light]: light,
                [styles.Wrapper_middle]: light,
                [className]: className
            },
            styles.Input__Wrapper,
            'd-flex fd-col ai-start jc-start'
        )}
        >
            <div>
                {label && <p
                    onClick={handleFocus}
                    ref={labelRef}
                    className={cn(styles.Input__Label, 'fw-bold')}
                >
                    {label}
                </p>
                }
                <input
                    {...props}
                    className={cn(
                        {
                            [styles.Input_danger]: theme === themeMap.danger,
                            [styles.Input_success]: theme === themeMap.success,
                        },
                        styles.Input__Field, ''
                    )}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    type={type}
                    disabled={disabled}
                />
                {(_type === 'password') && (
                    <div
                        className={cn(styles.Input__Icon, {[styles.Input__Icon_active]: type === 'text'})}
                        onClick={handleIconClick}
                    >
                        <SvgSprite spriteID={'eye'}/>
                    </div>
                )}
                {search && (
                    <div className={cn(styles.Input__Icon)}>
                        <SvgSprite spriteID={'search'}/>
                    </div>
                )}
            </div>
            {/*{message && (*/}
            {/*    <div*/}
            {/*        className={cn(*/}
            {/*            styles.Input__Message,*/}
            {/*            {*/}
            {/*                [styles.Input__Message_danger]: theme === 'danger',*/}
            {/*                [styles.Input__Message_success]: theme === 'success',*/}
            {/*            },*/}
            {/*            'mt-1'*/}
            {/*        )}*/}
            {/*    >*/}
            {/*        {message}*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    )
}

export default Input
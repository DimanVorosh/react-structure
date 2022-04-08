import React, {useState} from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'

const Switcher = props => {
    const {className, defaultValue, onChange, text} = props
    const [value, setValue] = useState(defaultValue)

    function changeHandler (e) {
        setValue(!value)
        if (typeof onChange === 'function') {
            onChange(e)
        }
    }

    return (
        <label {...props} className={'d-flex ai-center jc-start'}>
            <div
                className={cn(
                    'd-flex ai-center jc-start',
                    {
                        [className]: className,
                        [styles.Switcher__Wrapper_active]: value
                    },
                    styles.Switcher__Wrapper
                )}
            >
                <input value={value} onChange={changeHandler} type="checkbox" style={{display: 'none'}}/>
                <span className={cn('br-circle', styles.Switcher__Inner, {[styles.Switcher__Inner_active]: value})}/>
            </div>
            <p className={'ml-2 fz-2'}>{text}</p>
        </label>
    )
}

export default Switcher
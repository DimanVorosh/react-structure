import React from 'react'
import Select from 'react-select'

const ExportSelect = props => {
    const {light} = props
    return (
        <Select {...props}
            styles={{
                valueContainer: (provided, state) => ({
                    ...provided,
                    padding: ' 10px 12px',
                    fontSize: '14px'
                }),
                control: (provided, state) => ({
                    ...provided,
                    height: '100%',
                    border: 0,
                    boxShadow: 'none'
                }),
                container: (provided, state) => ({
                    ...provided,
                    width: light && '250px',
                    borderRadius: '2px',
                    border: '0.5px solid #0F0F0F',
                    borderBottom: '2px solid #012869',
                    height: '48px',
                    marginBottom: '25px',
                    marginLeft: '20px'
                }),
                input: (provided, state) => ({
                    ...provided
                }),
                singleValue: (provided, state) => ({
                    ...provided,
                    color: '#012869',
                    fontWeight: 600,
                    fontSize: '15px'
                }),
                indicatorSeparator: (provider, state) => ({
                    ...provider,
                    display: 'none'
                })
            }}
        />
    )
}

export default ExportSelect
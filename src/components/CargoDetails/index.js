import styles from './CargoDetails.module.css'
import { useState } from "react";
import Switch from '../elements/Switch'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const CargoDetails = () => {
    const [tag, setTag] = useState('dimensions')
    const [values, setValues] = useState({
        weight: '',
        volume: ''
    })
    const handleTag = (tag) => {
        setTag(tag)
    }
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <section className={styles.container}>
            <div className='flex justify-between mb-6 flex-col md:flex-row'>
                <h6 className={styles.title}>Cargo Details</h6>
                <div className='flex items-center'>
                    <div className='min-w-max' >
                        <Switch />
                    </div>
                    <p className='ml-2 text-sm xs:text-base'>
                        <span className=' font-semibold'>
                            Dangerous Cargo
                        </span>{" "}
                        (ex. Chemicals, Battery)
                    </p>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.tags}>
                    <div
                        onClick={() => handleTag('dimensions')}
                        className={`${styles.tag} ${tag === 'dimensions' ? 'text-blue-dark bg-white' : 'text-white-dark'}`}
                    >
                        total dimensions
                    </div>
                    <div
                        className={`${styles.tag} ${tag === 'details' ? 'text-blue-dark bg-white' : 'text-white-dark'}`}
                        onClick={() => handleTag('details')}
                    >
                        package details
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className={styles.input__group}>
                        <TextField
                            label="Total Volume"
                            id="total__volume"
                            value={values.volume}
                            onChange={handleChange}
                            type='number'
                            name='volume'
                            sx={{ m: 1, width: '100%' }}
                            min='1'
                            InputProps={{
                                endAdornment: <InputAdornment position="end">cbm</InputAdornment>,
                                'aria-label': 'total volume',
                                'step': '5',
                            }}
                        />
                    </div>
                    <div className={styles.input__group}>
                        <TextField
                            label="Total Weight"
                            id="total__weight"
                            value={values.weight}
                            onChange={handleChange}
                            type='number'
                            name='weight'
                            min='1'
                            sx={{ m: 1, width: '100%' }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                                'aria-label': 'total weight',
                                'step': '5'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CargoDetails

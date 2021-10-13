import styles from './LocationSelection.module.css'
import { useState } from "react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import LocationInputAdornment from '../elements/LocationInputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';



const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        height: '48px',
        fontWeight: '500',
        fontFamily: 'Gilroy-SemiBold',
        '&.Mui-disabled': {
            border: 0,
        },
        '&.Mui-selected': {
            backgroundColor: '#0747a6',
            color: '#FFFFFF',
            '&:hover': {
                backgroundColor: '#0747a6',
                color: '#FFFFFF',
                opacity: 0.9
            }
        },
    },
}));

const LocationSelection = () => {
    const [type, setType] = useState('import');
    const handleType = (event, type) => {
        setType(type);
    };
    const [values, setValues] = useState({
        from: '',
        to: '',
        value: '',
        date: new Date(),
        terms: 'Incoterms',
    })
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleDateChange = (value) => {
        setValues({ ...values, date: value })
    }
    return (
        <section className={styles.container}>
            <div className='mb-1 cursor-pointer' title='Freight Type'>
                <InfoOutlinedIcon />
            </div>
            <div className='flex xl:items-center justify-between mb-10 flex-col xl:flex-row'>
                <div className={styles.types}>
                    <StyledToggleButtonGroup
                        value={type}
                        exclusive
                        onChange={handleType}
                        aria-label="select freight type"
                        sx={{
                            textTransform: 'capitalize'
                        }}
                    >
                        <ToggleButton value="import" aria-label="import">
                            Import
                        </ToggleButton>
                        <ToggleButton value="export" aria-label="export">
                            Export
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                </div>
                <div className={`${styles.grid__container} flex-1`}>
                    <div className={`${styles.input__group}`}>
                        <TextField
                            id="total__volume"
                            value={values.from}
                            onChange={handleChange}
                            type='text'
                            name='from'
                            sx={{
                                width: '100%',
                            }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><LocationInputAdornment text='from' /></InputAdornment>,
                                'aria-label': 'Pick-up location',
                                'placeholder': 'City or Port',
                            }}
                        />
                    </div>
                    <div className={styles.input__group}>
                        <TextField
                            id="total__volume"
                            value={values.to}
                            onChange={handleChange}
                            type='text'
                            name='to'
                            sx={{
                                width: '100%',
                            }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><LocationInputAdornment text='to' /></InputAdornment>,
                                'aria-label': 'delivery location',
                                'placeholder': 'City or Port',
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.grid__container}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                        inputFormat="dd/MM/yyyy"
                        value={values.date}
                        onChange={handleDateChange}
                        name='date'
                        renderInput={(params) => <TextField {...params} />}
                        sx={{
                            width: '100%',
                            backgroundColor: 'red'
                        }}
                        error={false}
                        helperText={null}
                        minDateMessage=' '
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><CalendarTodayOutlinedIcon /></InputAdornment>,
                            'aria-label': 'delivery location',
                            'placeholder': 'Ready Date',
                        }}
                    />
                </LocalizationProvider>
                <div className={styles.select__input__group}>
                    <Select
                        id="total__volume"
                        value={values.terms}
                        onChange={handleChange}
                        type='text'
                        name='terms'
                        sx={{
                            width: '100%',
                        }}
                        renderValue={(selected) => {
                            if (!selected) {
                                return <span className='text-white-dark'>Incoterms</span>;
                            }
                            return selected;
                        }}
                        InputProps={{
                            'aria-label': 'Incoterms',
                            'placeholder': 'Incoterms',
                        }}
                    >
                        <MenuItem value={'Option 1'}>Option 1</MenuItem>
                        <MenuItem value={'Option 2'}>Option 2</MenuItem>
                        <MenuItem value={'Option 3'}>Option 3</MenuItem>
                    </Select>
                </div>
                <div className={styles.select__input__group}>
                    <TextField
                        id="cargo__value"
                        value={values.value}
                        onChange={handleChange}
                        type='number'
                        name='value'
                        sx={{
                            width: '100%',
                        }}
                        InputProps={{
                            'aria-label': 'Total Cargo Value',
                            'placeholder': 'Total Cargo Value',
                        }}
                    />
                </div>
            </div>
        </section >
    )
}

export default LocationSelection

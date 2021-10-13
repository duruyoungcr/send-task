import RoomIcon from '@mui/icons-material/Room';

const LocationInputAdornment = ({ text }) => {
    return (
        <div className="flex items-center">
            <RoomIcon className='mb-1' />
            <span className="capitalize ml-1">{text}</span>
        </div>
    )
}

export default LocationInputAdornment

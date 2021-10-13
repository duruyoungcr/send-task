import Logo from "../elements/Logo"
import styles from './Header.module.css'
import Button from '@mui/material/Button';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from "react";


const Header = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <nav className={styles.header}>
            <div>
                <Logo />
            </div>
            <div className={styles.actions}>
                <Button
                    variant="outlined"
                    color='inherit'
                    size="large"
                    disableElevation
                    className='mr-4'
                >
                    request quote
                </Button>
                <Button
                    variant="contained"
                    color='success'
                    size="large"
                >
                    book shipment
                </Button>
            </div>
            <div className={styles.nav__toggle} onClick={handleToggle}>
                {!toggle ?
                    <BarChartOutlinedIcon fontSize='large' />
                    :
                    <CloseOutlinedIcon fontSize='large' />
                }
            </div>
            {toggle && (
                <div className={styles.mobile__menu}>
                    <Button
                        variant="outlined"
                        color='inherit'
                        size="large"
                        disableElevation
                        className='mr-4'
                    >
                        request quote
                    </Button>
                    <Button
                        variant="contained"
                        color='success'
                        size="large"
                    >
                        book shipment
                    </Button>
                </div>
            )}
        </nav>
    )
}

export default Header

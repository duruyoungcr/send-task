import styles from './PageHeaderText.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PageHeaderText = ({ title, subtitle }) => {
    return (
        <div className={styles.container}>
            <ArrowBackIcon className='mt-2 mr-2 xs:mr-8 lg:mr-14 cursor-pointer' title='Go back' />
            <div className={styles.texts}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}

export default PageHeaderText

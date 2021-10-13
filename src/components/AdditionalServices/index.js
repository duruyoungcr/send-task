import styles from './AdditionalServices.module.css'
import Switch from '../elements/Switch'

const services = [
    {
        name: 'export forwarding',
        desc: 'We handle customs clearance and documentation.',
        id: 1
    },
    {
        name: 'imports custom clearance',
        desc: 'We handle import customs and regulatory requirements.',
        id: 2
    },
    {
        name: 'cargo insurance',
        desc: 'Protect your cargo from logistics risks up to its full value.',
        id: 3
    },
    {
        name: 'transport / delivery',
        desc: 'We deliver cargo to your door steps from the ports.',
        id: 4,
    }

]


const AdditionalServices = () => {
    return (
        <section className={styles.container}>
            <h5 className={styles.title}>Additional Services</h5>
            <div className={styles.services}>
                {services?.map((service) => (
                    <div
                        className={styles.service}
                        key={service.id}
                    >
                        <div className='min-w-max' >
                            <Switch />
                        </div>
                        <div className={styles.texts}>
                            <h5 className={styles.name}>{service.name}</h5>
                            <h6 className={styles.desc}>
                                {service.desc}
                            </h6>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AdditionalServices

import styles from './SelectService.module.css'
import { useState } from "react";
import Airplane from '../elements/Airplane'
import Truck from '../elements/Truck'
import Person from '../elements/Person'
import Ship from '../elements/Ship'


const services = [
    {
        name: 'air freight',
        icon: <Airplane />,
        id: 1
    },
    {
        name: 'ocean freight',
        icon: <Ship />,
        id: 2
    },
    {
        name: 'inland (truck & barge)',
        icon: <Truck />,
        id: 3
    },
    {
        name: 'customs clearance',
        icon: <Person />,
        id: 4,
    }

]

const SelectService = () => {
    const [selectedId, setSelectedId] = useState('')
    const handleServiceSelection = (id) => {
        setSelectedId(id)
    }
    return (
        <section className={styles.container}>
            <h5 className={styles.title}>Select a service</h5>
            <div className={styles.services}>
                {services?.map((service) => (
                    <div
                        className={`${styles.service} ${service.id === selectedId ? styles.selected : 'text-white-dark'}`}
                        role='button'
                        key={service.id}
                        onClick={() => handleServiceSelection(service.id)}
                    >
                        <p className={styles.name}>{service.name}</p>
                        <div className={styles.icon}>
                            {service.icon}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SelectService

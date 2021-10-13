import PageHeaderText from "../PageHeaderText"
import SelectService from "../SelectService"
import AdditionalServices from "../AdditionalServices"
import CargoDetails from "../CargoDetails"
import LocationSelection from "../LocationSelection"


const Main = () => {
    return (
        <main className="bg-gray-light pb-40">
            <PageHeaderText
                title="new booking"
                subtitle='Fill in the information below get a quote or create a new booking.'
            />
            <SelectService />
            <LocationSelection />
            <CargoDetails />
            <AdditionalServices />
        </main>
    )
}

export default Main

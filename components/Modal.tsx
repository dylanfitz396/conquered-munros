import { Fruit } from "../app/types"

interface ModalProps {
    fruit: Fruit;
    setShowModal: Function;
}

const FruitInfoParagraph = ({text, value}: { text: string, value: string }) => {
    return <p className="text-sm text-gray-500">{text}: {value}</p>
}

const ModalContents = ({fruit}: {fruit: Fruit}) => {
    const { name, family, order, genus, nutritions } = fruit;
    const { calories, fat, sugar, carbohydrates, protein } = nutritions;
    
    return (
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">{name}</h3>
            <div className="mt-2">
                <FruitInfoParagraph text={'Family'} value={family} />
                <FruitInfoParagraph text={'Order'} value={order} />
                <FruitInfoParagraph text={'Genus'} value={genus} />
                <br/>
                <p className="text-lg text-gray-500">Nutritional Information:</p>
                <FruitInfoParagraph text={'Calories'} value={calories + 'kcal'} />
                <FruitInfoParagraph text={'Fat'} value={fat + 'g'} />
                <FruitInfoParagraph text={'Sugar'} value={sugar + 'g'} />
                <FruitInfoParagraph text={'Carbohydrates'} value={carbohydrates + 'g'} />
                <FruitInfoParagraph text={'Protein'} value={protein + 'g'} />
            </div>
        </div>
    )
}

const Modal = ({ fruit, setShowModal }: ModalProps) => {
    return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <ModalContents fruit={fruit} />
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button onClick={() => setShowModal(false)} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );  
}

export default Modal
import { PropTypes } from 'prop-types'
import image from '../assets/calendario.png'

export default function CardMonthlyPayers({ openModal }) {
    return (
        <>
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Próximos pagos del mes</h5>
                    <a href="#" onClick={openModal} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        Ver todos
                    </a>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src={image} alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Empresa 1
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $320
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src={image} alt="Bonnie image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Empresa 2
                                    </p>

                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $3467
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src={image} alt="Michael image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Empresa 3
                                    </p>

                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $67
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src={image} alt="Lana image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Empresa 4
                                    </p>

                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $367
                                </div>
                            </div>
                        </li>
                        <li className="pt-3 pb-0 sm:pt-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src={
                                        image
                                    } alt="Thomas image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Empresa 5
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $2367
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

CardMonthlyPayers.propTypes = {
    openModal: PropTypes.func.isRequired
}
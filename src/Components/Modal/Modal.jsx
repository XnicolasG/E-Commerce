import ReactDOM from "react-dom";

export const Modal = ({ isOpen, title, close, onConfirm, onCancel, children }) => {
    
    
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <dialog open className="fixed inset-0 bg-black/40 w-full h-full flex justify-center items-center z-50">
            <article className="bg-white rounded-md shadow-lg p-6 w-[90%] max-w-md text-center">
                <header>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">{title}</h2>
                </header>

                <section>
                    {children}
                </section>
                {
                    close ?
                    <button
                    className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition-all duration-150"
                    onClick={close}
                    >
                        close
                    </button>
                    :
                    <footer className="mt-6 flex justify-center gap-6">

                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                        >
                            Confirm
                        </button>
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                        >
                            Cancel
                        </button>
                    </footer>
                }
            </article>
        </dialog>,
        document.body
    )
}

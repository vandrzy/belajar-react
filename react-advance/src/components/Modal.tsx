import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    isOpen: boolean;
    closeModal: () => void;
}

const Modal = ({children, isOpen, closeModal}:Props) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center gap-2">
                {children}
                <button className="bg-sky-500 text-xl font-bold text-white" onClick={closeModal}>OK</button>
            </div>
        </div>
    )
}

export default Modal;
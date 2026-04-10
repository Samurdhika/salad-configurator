import React from "react";
import type {ReactNode} from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        onClick = {onClose}
        >
            <div className="bg-white rounded-x1 shadow-lg p-6 relative w-full"
            onClick={(e) => e.stopPropagation()}
            >
                <button className="bg-white text-red" onClick={onClose}>
                X
                </button>
                {children}
            </div>
        </div>
    )
}
import React from "react";
import type {ReactNode} from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;
}
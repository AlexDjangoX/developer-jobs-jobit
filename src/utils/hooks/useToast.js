import { ToastContext } from '@/context/toastContext';
import { useContext } from 'react';


export const useToast = () => {
    const context = useContext(ToastContext);
    if(!context) {
        throw new Error ('useAlert must be used within a ToastProvider');
        }
        return context
        }



import { toast, Id, ToastPosition, Bounce } from 'react-toastify';

const createToast = (id: Id, pos?: string, closeTtl?: number): void => {
    toast.update(id, {
        position: pos as ToastPosition || 'top-center',
        autoClose: closeTtl || 3000,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
        draggable: false,
        transition: Bounce,
        pauseOnFocusLoss: false,
    })
};

const toastError = (error: string, pos?: string, closeTtl?: number): void => 
    createToast(toast.error(error), pos, closeTtl);

const toastSuccess = (message: string, pos?: string, closeTtl?: number): void => 
    createToast(toast.success(message), pos, closeTtl);

const toastInfo = (info: string, pos?: string, closeTtl?: number): void => 
    createToast(toast.info(info), pos, closeTtl);

const toastWarn = (warning: string, pos?: string, closeTtl?: number): void => 
    createToast(toast.warn(warning), pos, closeTtl);

export { toastError, toastSuccess, toastInfo, toastWarn };
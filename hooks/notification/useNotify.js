import toast from 'react-hot-toast';
const useNotify = () => {
    const successMessage = (message) => {
        toast.success(message);
    }
    const errorMessage = (message) => {
        toast.error(message);
    }
    return { successMessage, errorMessage }
}
export default useNotify;
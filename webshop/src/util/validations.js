import { toast } from "react-toastify";

export const invalidField = (title, price) => { 
    let invalid = false;

    if (title === '') {
        invalid = true;
        toast.error("Title is missing");
    }

    if (price === '') {
        invalid = true;
        toast.error("Price is missing");
    }

    if (price <= 0) {
        invalid = true;
        toast.error("Price must be greater than 0");
    }

    return invalid;
}

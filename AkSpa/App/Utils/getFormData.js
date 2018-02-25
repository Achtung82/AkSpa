export default function getFormData(form) {
    const elems = form.elements;
    const payload = {};
    for (let i = 0; i < elems.length; i += 1) {
        const element = elems[i];
        const type = element.type;
        const name = element.name;
        const value = element.value;
        switch (type) {
        case 'text':
        case 'radio':
        case 'checkbox':
        case 'textarea':
        case 'password':
        case 'select-one':
            payload[name] = value;
            break;
        default:
            break;
        }
    }
    return JSON.stringify(payload);
}
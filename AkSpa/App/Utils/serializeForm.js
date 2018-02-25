export default function serializeForm(form) {
    const elems = form.elements;
    let serialized = [], i, len = elems.length, str = '';
    for (i = 0; i < len; i += 1) {
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
            str = name + '=' + value;
            serialized.push(str);
            break;
        default:
            break;
        }
    }
    return serialized.join('&');
}
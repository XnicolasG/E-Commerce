export const formatCreditCardNumber = (value) => {
    // Limpia el valor eliminando cualquier carácter que no sea un dígito
    const cleaned = value.replace(/\D+/g, '');
    // Formatea el número agrupando los dígitos en grupos de 4
    const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
    // Asegúrate de que no exceda los 16 dígitos
    return formatted.slice(0, 16);
};
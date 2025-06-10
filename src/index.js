// Regex patterns for each bandeira
const regexBandeiras = {
    'Visa': /^4\d{15}$/, // 16 dígitos
    'MasterCard': /^(5[1-5]\d{14}|222[1-9]\d{12}|22[3-9]\d{13}|2[3-6]\d{14}|27[01]\d{13}|2720\d{12})$/,
    'American Express': /^3[47]\d{13}$/, // 15 dígitos
    'Diners Club': /^3(?:0[0-5]|[68]\d)\d{11}$/, // 14 dígitos
    'Discover': /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/,
    'Enroute': /^2(014|149)\d{11}$/, // 15 dígitos
    'JCB': /^(?:2131|1800|35\d{3})\d{11}$/, // 15 ou 16 dígitos
    'Voyage': /^50\d{14}$/, // 16 dígitos (exemplo comum no Brasil)
    'Hipercard': /^(606282\d{10}(\d{3})?|3841\d{15})$/, // 13, 16 ou 19 dígitos
    'Aura': /^50(50|36|38|45|47|48)\d{10,13}$/ // 16 a 19 dígitos
};

function getCardBandeira(cardNumber) {
    const num = cardNumber.replace(/\D/g, '');

    for (const [bandeira, regex] of Object.entries(regexBandeiras)) {
        if (regex.test(num)) {
            return bandeira;
        }
    }
    return 'Bandeira desconhecida';
}

// Função para validar o número do cartão de crédito (Luhn)
function validateCreditCard(cardNumber) {
    const num = cardNumber.replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;

    if (!/^\d{13,19}$/.test(num)) {
        return 'Número de cartão inválido';
    }

    for (let i = num.length - 1; i >= 0; i--) {
        let digit = parseInt(num[i], 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0 ? 'Cartão válido' : 'Cartão inválido';
}

// Exemplos de uso:
const cards = [
    '4111111111111111', // Visa
    '5500000000000004', // MasterCard
    '371449635398431',  // American Express
    '30569309025904',   // Diners Club
    '6011111111111117', // Discover
    '201400000000009',  // Enroute
    '3530111333300000', // JCB
    '5066991111111118', // Voyage (exemplo)
    '6062825624254001', // Hipercard
    '5078601870000127980' // Aura (exemplo)
];

cards.forEach(card => {
    console.log(`Número: ${card}`);
    console.log(`Bandeira: ${getCardBandeira(card)}`);
    console.log(`Validação: ${validateCreditCard(card)}`);
    console.log('--------------------------');
});
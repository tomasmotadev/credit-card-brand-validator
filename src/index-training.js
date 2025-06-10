function getCardBandeira(cardNumber) {
    const num = cardNumber.replace(/\D/g, '');

    // Visa: começa com 4
    if (/^4/.test(num)) return 'Visa';

    // MasterCard: 51-55 ou 2221-2720
    if (/^(5[1-5])/.test(num) || /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/.test(num)) {
        return 'MasterCard';
    }

    // Elo: 4011, 4312, 4389, etc.
    if (/^(4011|4312|4389)/.test(num)) return 'Elo';

    // American Express: 34 ou 37
    if (/^(34|37)/.test(num)) return 'American Express';

    // Discover: 6011, 65, 644-649
    if (/^(6011|65|64[4-9])/.test(num)) return 'Discover';

    // Hipercard: 6062
    if (/^6062/.test(num)) return 'Hipercard';

    return 'Bandeira desconhecida';
}

const cardNumbers = "5277959558870483";
const result = validateCreditCard(cardNumbers);
// Função para validar o número do cartão de crédito
console.log(result); // Exibe o resultado da validação
function validateCreditCard(cardNumber) {
    const num = cardNumber.replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;

    // Verifica se o número do cartão é válido
    if (!/^\d{13,19}$/.test(num)) {
        return 'Número de cartão inválido';
    }

    // Lógica de validação de Luhn
    for (let i = num.length - 1; i >= 0; i--) {
        let digit = parseInt(num[i], 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9; // Subtrai 9 se o dígito for maior que 9
        }

        sum += digit;
        shouldDouble = !shouldDouble; // Alterna entre dobrar e não dobrar
    }

    return sum % 10 === 0 ? 'Cartão válido' : 'Cartão inválido';
}

// Exemplos de uso:
// console.log(getCardBandeira('4111111111111111')); // Visa
// console.log(getCardBandeira('5500000000000004')); // MasterCard
// console.log(getCardBandeira('4011780000000000')); // Elo
// console.log(getCardBandeira('371449635398431'));  // American Express
// console.log(getCardBandeira('6011111111111117')); // Discover
// console.log(getCardBandeira('6062825624254001')); // Hipercard
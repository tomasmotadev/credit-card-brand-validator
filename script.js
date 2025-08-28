// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

//
// Mobile Menu
//
// Menu mobile toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Dropdown Photography
const mobilePhotoBtn = document.getElementById('mobile-photography-btn');
const mobilePhotoMenu = document.getElementById('mobile-photography-menu');

mobilePhotoMenu.style.display = 'none';
mobilePhotoBtn.classList.remove('active');

mobilePhotoBtn.addEventListener('click', () => {
  const isOpen = mobilePhotoMenu.style.display === 'block';
  mobilePhotoMenu.style.display = isOpen ? 'none' : 'block';
  mobilePhotoBtn.classList.toggle('active', !isOpen);
});

// Dropdown Contact
const mobileContactBtn = document.getElementById('mobile-contact-btn');
const mobileContactMenu = document.getElementById('mobile-contact-menu');

mobileContactMenu.style.display = 'none';
mobileContactBtn.classList.remove('active');

mobileContactBtn.addEventListener('click', () => {
  const isOpen = mobileContactMenu.style.display === 'block';
  mobileContactMenu.style.display = isOpen ? 'none' : 'block';
  mobileContactBtn.classList.toggle('active', !isOpen);
});

// **Credit Card Validator Logic (JavaScript)**

// Regex patterns for each card brand
const regexBandeiras = {
    'Visa': /^4\d{15}$/,
    'MasterCard': /^(5[1-5]\d{14}|222[1-9]\d{12}|22[3-9]\d{13}|2[3-6]\d{14}|27[01]\d{13}|2720\d{12})$/,
    'American Express': /^3[47]\d{13}$/,
    'Diners Club': /^3(?:0[0-5]|[68]\d)\d{11}$/,
    'Discover': /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/,
    'Enroute': /^2(014|149)\d{11}$/,
    'JCB': /^(?:2131|1800|35\d{3})\d{11}$/,
    'Voyage': /^50\d{14}$/,
    'Hipercard': /^(606282\d{10}(\d{3})?|3841\d{15})$/,
    'Aura': /^50(50|36|38|45|47|48)\d{10,13}$/
};

// Function to get the card brand
function getCardBandeira(cardNumber) {
    const num = cardNumber.replace(/\D/g, '');

    for (const [bandeira, regex] of Object.entries(regexBandeiras)) {
        if (regex.test(num)) {
            return bandeira;
        }
    }
    return 'Unknown Brand';
}

// Function to validate the credit card number (Luhn)
function validateCreditCard(cardNumber) {
    const num = cardNumber.replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;

    if (!/^\d{13,19}$/.test(num)) {
        return 'Invalid card number';
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

    return sum % 10 === 0 ? 'Valid Card' : 'Invalid Card';
}

// Function to get the results and display them on the page
function validateAndDisplay() {
    const cardNumberInput = document.getElementById('cardNumber');
    const cardNumber = cardNumberInput.value;
    const resultBox = document.getElementById('result');
    const bandeiraSpan = document.getElementById('bandeiraResult');
    const validationSpan = document.getElementById('validationResult');
    
    // Clear the input field
    cardNumberInput.value = '';

    // Get the results
    const bandeira = getCardBandeira(cardNumber);
    const validacao = validateCreditCard(cardNumber);

    // Display the results
    bandeiraSpan.textContent = bandeira;
    validationSpan.textContent = validacao;

    // Style the validation result
    if (validacao === 'Valid Card') {
        validationSpan.style.color = 'green';
    } else {
        validationSpan.style.color = 'var(--c-red)';
    }

    // Make the result box visible
    resultBox.classList.remove('hidden');
}

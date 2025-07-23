# 💳 Credit Card Brand Validator

This project provides an efficient way to **identify the brand (network)** of credit cards and **validate their numbers** using the **Luhn Algorithm**, which is widely used in payment systems.

---

## 🧩 Features

- 🔍 Automatically detects the card brand based on the number.
- ✅ Validates card numbers using the Luhn Algorithm.
- 🔄 Supports multiple brands (Visa, MasterCard, Amex, etc).
- 🧱 Modular and easy-to-maintain structure.
- 📦 Simple to extend with additional card brands.

---

## 🛠️ Technologies Used

- **JavaScript**
- Regular Expressions (Regex)
- Luhn Algorithm (for card validation)

---

## 🚀 How It Works

### 🔹 Brand Detection

The `getCardBandeira(cardNumber)` function:

1. Removes all non-numeric characters.
2. Compares the cleaned number against specific regular expressions for each card brand.
3. Returns the first matching brand or `"Unknown Brand"` if no match is found.

Example of the `regexBandeiras` object:

```js
const regexBandeiras = {
  Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  MasterCard: /^5[1-5][0-9]{14}$/,
  Amex: /^3[47][0-9]{13}$/,
  Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  // Additional brands can be added here
};

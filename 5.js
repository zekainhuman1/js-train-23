// Адаптер (Adapter) — це патерн програмування, який дозволяє об'єктам з інтерфейсом несумісним з іншими об'єктами працювати разом,
// перетворюючи інтерфейс одного об'єкта на інтерфейс, очікуваний іншим об'єктом.

// Клас BankTransfer представляє собою систему для здійснення банківських переказів
class BankTransfer {
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount)
    console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`)
  }

  calculateFee(amount) {
    return amount * 1.02
  }
  // Зробіть метод initiateTransfer, який приймає amount та відповідає за ініціювання банківського переказу
  // Він приймає суму переказу як параметр
  // Для ініціювання банківського переказу спершу обчислюється сума з урахуванням комісії calculatedAmount = this.calculateFee(amount)
  // Виводимо інформацію про ініціювання банківського переказу Ініціюємо банківський переказ: $${calculatedAmount}
  // Зробіть метод calculateFee, який відповідає за розрахунок комісії за переказ
  // Він приймає amount переказу як параметр та повертає число після розрахування комісії
  // Логіка розрахунку комісії за переказ amount * 1.02
  // Припустимо, комісія становить 2% від суми переказу
}

// Клас WalletTransfer представляє собою систему для здійснення переказів з гаманця
class WalletTransfer {
  processTransfer(amount) {
    console.log(`Здійснюємо переказ з гаманця: $${amount}`)
  }
  // Створіть метод processTransfer, який відповідає за здійснення переказу з гаманця
  // Він приймає суму переказу як параметр
  // Виводимо інформацію про здійснення переказу з гаманця Здійснюємо переказ з гаманця: $${amount}
}

// Клас TransferAdapter виступає адаптером, який дозволяє нам користуватися
// методами WalletTransfer так, ніби це BankTransfer.
class TransferAdapter {
  constructor(transferSystem) {
    this.transferSystem = transferSystem
  }

  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount)
    this.transferSystem.processTransfer(amount)
  }

  calculateFee(amount) {
    return amount * 1.2
  }
  // Робимо конструктор, що приймає об'єкт transferSystem типу WalletTransfer
  // Зберігаємо посилання на об'єкт WalletTransfer у властивості transferSystem
  // Робимо метод initiateTransfer, який адаптує API WalletTransfer до API BankTransfer.
  // Він приймає amount як аргумент та повертає результат виконання переказу.
  // Викликаємо допоміжний метод calculateFee для обчислення комісії за переказ та результат записуєм в константу calculatedAmount
  // Викликаємо метод processTransfer об'єкту WalletTransfer з calculatedAmount.
  // В результаті повертаємо результат виконання переказу.
  // Створюємо метод calculateFee, що приймає amount та обчислює суму комісії за переказ amount * 1.2, засновуючись на вхідній сумі.
  // Повертаємо amount * 1.2
}

class Transfer {
  constructor(amount) {
    this.amount = amount

    if (amount < 100) {
      this.transferSystem = new TransferAdapter(new WalletTransfer)
    } else {
      this.transferSystem = new BankTransfer
    }
  }

  makeTransfer() {
    return this.transferSystem.initiateTransfer(this.amount)
  }
}
console.log("Завдання 5 ====================================");
// Після виконання розкоментуйте код нижче

// Створимо екземпляри BankTransfer
const purchase1 = new Transfer();
purchase1.initiateTransfer(1000);

const purchase2 = new Transfer();
purchase2.initiateTransfer(10);


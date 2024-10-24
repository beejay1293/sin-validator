export default class SINValidator {
  private sin: string;

  // Constructor to initialize the SIN number
  constructor(sin: string) {
      this.sin = sin;
  }

  // Public method to check if the SIN is valid by verifying its length and Luhn algorithm
  public isValidSIN(): boolean {
      if (!this.hasValidLength()) return false;
      return this.validateLuhnAlgorithm();
  }

  // Private method to check if the SIN has exactly 9 digits
  private hasValidLength(): boolean {
      return this.sin.length === 9 && /^\d+$/.test(this.sin);  // SIN should be 9 digits long
  }

  // Private method to validate SIN using the Luhn Algorithm
  private validateLuhnAlgorithm(): boolean {
      let sum = 0;

      // Iterate over each digit in the SIN string
      for (let i = 0; i < this.sin.length; i++) {
          let num = parseInt(this.sin[i]);

          // Double every second digit and subtract 9 if it's over 9
          if (i % 2 === 1) {
              num *= 2;
              if (num > 9) num -= 9; // Sum digits for numbers greater than 9
          }

          // Add the number to the total sum
          sum += num;
      }

      // Check if the total sum is divisible by 10
      return sum % 10 === 0;
  }
}

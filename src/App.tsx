import React, { useEffect, useState } from 'react';
import SINValidator from './utils/Validator';
import './App.css'; 

const App: React.FC = () => {
  const [sin, setSin] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    // Reset validation state to null whenever the user changes the SIN input.
    // This ensures no validation message is shown until the user submits the form.  
    setIsValid(null)
  }, [sin])

  const handleValidate = (e: React.FormEvent) => {
    // Prevents the default form submission behavior, such as refreshing the page
    e.preventDefault();
  
    // Creates an instance of the SINValidator class with the current SIN input value
    const validator = new SINValidator(sin.replace(/\s/g, ''));
  
    // Validates the SIN and updates the 'isValid' state with true (if valid) or false (if invalid)
    setIsValid(validator.isValidSIN());
  };

    // Format SIN as the user types
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
      const formattedValue = formatSIN(value);
      setSin(formattedValue);
    };
  
    // Format the SIN into 'XXX XXX XXX' format
    const formatSIN = (value: string) => {
      const match = value.match(/^(\d{0,3})(\d{0,3})(\d{0,3})$/);
      if (!match) return value;
      return [match[1], match[2], match[3]].filter(Boolean).join(' ').trim();
    };

  return (
    <div className="app-container">
      <div className="form-wrapper">
        <h1 className="title">SIN Validator</h1>
        <form onSubmit={handleValidate} className="sin-form">
          <label htmlFor="sin" className="label">Enter SIN:</label>
          <input
            type="text"
            id="sin"
            className="input-field"
            placeholder="123 456 789"
            value={sin}
            onChange={handleChange}
            maxLength={11}
          />
          <button type="submit" className="submit-btn">Validate</button>
        </form>
        {isValid !== null && (
          <div className={`result ${isValid ? 'valid' : 'invalid'}`}>
            Social insurance number <strong>{sin} </strong> is {isValid ? <p>Valid ✅</p> : <p>Invalid ❌</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

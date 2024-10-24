# SIN Validator

This project is a web-based Social Insurance Number (SIN) validator built using TypeScript and React. It validates a SIN based on two main criteria: the correct number of digits (9) and the Luhn algorithm check. 

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/beejay1293/sin-validator
   cd sin-validator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Building the Application

To build the application for production:

```bash
npm run build
```

This will create a production-ready build in the `build/` folder.

### Running Tests

To run the tests for the SIN Validator:
```bash
npm test
```

Ensure that you have set up Jest and Testing Library properly.

## How It Works

- **SINValidator Class:** The `SINValidator` class checks whether the SIN is valid using two main steps:
  - **Length Validation:** Ensures that the input is exactly 9 digits long.
  - **Luhn Algorithm Validation:** Uses the Luhn algorithm, a checksum formula, to verify the validity of the SIN.

- **React App:** The front-end provides a form for the user to input their SIN, which is then validated using the `SINValidator`. A message is displayed to indicate whether the SIN is valid or invalid.

## Assumptions

- The user will input exactly 9 numeric digits as the SIN.
- No special characters, spaces, or non-numeric input will be allowed for SIN validation.
- The validation relies entirely on the Luhn algorithm for determining the validity of the SIN after checking its length.

## Approach

The application was built following these steps:

- **Problem Breakdown:**
  - The task was split into two components:
    1. Ensuring that the SIN has the correct length and is composed of numeric characters.
    2. Validating the SIN using the Luhn algorithm.

- **Design Choices:**
  - We implemented the validation logic in a utility class called `SINValidator` to separate concerns and allow easy testing.
  - A React component (`App`) was used to create an interactive user interface that collects input from the user and displays the validation result.

### Object-Oriented Programming (OOP) Approach

We chose to use the OOP approach for the following reasons:

1. **Encapsulation:** The validation logic is encapsulated within the `SINValidator` class, which allows us to keep the validation logic separate from the UI and makes it easier to maintain and extend.
2. **Reusability:** By using a class, we can reuse the validation logic across different components or even projects without duplicating code.
3. **Testability:** The OOP approach makes it easy to test the individual methods within the `SINValidator` class independently of the rest of the application, leading to better test coverage.
4. **Modularity:** Using OOP helps us create modular and clean code where responsibilities are separated, making the code more organized and scalable.

## Explanation of How the Code Works

1. **Validator Class:**
   - The `SINValidator` class contains the logic for SIN validation. It has the following methods:
     - `hasValidLength()`: Checks if the SIN is exactly 9 digits long.
     - `validateLuhnAlgorithm()`: Applies the Luhn algorithm to ensure the SIN is valid based on the checksum.
   - The `isValidSIN()` method combines these two methods to return whether the SIN is valid or not.

2. **App Component:**
   - The `App` component contains the form where the user enters the SIN.
   - On form submission, the `handleValidate()` method calls the validator and updates the state to reflect whether the SIN is valid or not.
   - The UI displays a success or error message based on the validation result.

## Project Structure

The project follows a standard React structure with TypeScript, using the `src/` directory to store components and utility classes.

```bash
sin-validator/
│
├── public/                     # Static files
├── src/                        # Source files
│   ├── __tests__/              # Unit tests
│   ├── utils/                  # Utility classes like the 
│   ├── App.tsx                 # Main app component
│   └── index.tsx               # Entry point
│
├── package.json                # Project metadata and dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Technologies Used

- **React** (with hooks)
- **TypeScript**
- **Jest** (for unit testing)
- **React Testing Library**


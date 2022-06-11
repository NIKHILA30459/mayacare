import logo from './logo.svg';
import './index.css'
function App() {
  return (
    
   <Donate/>
  );
}
function Donate(){
  return(
  <div class="form-container">
    <form class="register-form">
      {/* Uncomment the next line to show the success message */}
      {/* <div class="success-message">Success! Thank you for registering</div> */}
      <input
        id="first-name"
        class="form-field"
        type="text"
        placeholder="Full Name"
        name="firstName"
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id="first-name-error">Please enter a first name</span> */}
      <input
        id="last-name"
        class="form-field"
        type="text"
        placeholder="Email"
        name="lastName"
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id="last-name-error">Please enter a last name</span> */}
      <input
        id="email"
        class="form-field"
        type="text"
        placeholder="amount"
        name="email"
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id="email-error">Please enter an email address</span> */}
      <button class="form-field" type="submit">
        Donate
      </button>
      
   
    <div><h3 class='or'>or</h3></div>
    <button class="form-field">
        Log In
      </button>
    </form>
  </div>
  );
}
export default App;
import React from 'react';
import Background from '../Background/Background';




// BulletContent Component
const BulletContent = ({ items }) => {
  return (
    <div className="bullet-content">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{'▸'}</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Content Component
const Content = () => {
    return (
        <div className="sign-up-content banner-bg">
            <Background>
              
            </Background>
            
          
          <div className="bullet-list">
            <h1>Create Your Trading Bot Account</h1><br />
            <h5>Join the Trading Community and revolutionize the way you work.</h5>
            <br />
            <BulletContent
              items={[
                "Join the Trading Community today for Free",
                "Discover more, Connect Deeper with online Trading experts",
                "Trade smarter, not harder",
                "Market never sleeps, neither should your opportunities.",
                "Register Now!",
              ]}
            />
          </div>
          <div className='sign-up-container'>
            <div className='sign-up-form-side'>
                <div className="sign-up">
                    <h2>Create Account</h2>
                    <SignUpForm />
                </div>
            </div>
         

          </div>
        </div>
      );
  };

// Input Field Component
const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

// Checkbox Component
const Checkbox = ({ checked, onChange, label }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={label}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

// Sign Up Form Component
const SignUpForm = () => {
  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [workplace, setWorkplace] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [acceptPromotions, setAcceptPromotions] = React.useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <InputField
        label="Email Address"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Yourname@email.com"
      />
      <div className='name-row'>
        <InputField
            label="First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
            label="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />

      </div>
      <InputField
        label="Where do you work?"
        type="text"
        name="workplace"
        value={workplace}
        onChange={(e) => setWorkplace(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Checkbox
        checked={acceptTerms}
        onChange={() => setAcceptTerms(!acceptTerms)}
        label="I accept Privacy Policy and Term and Condition"
      />
      <Checkbox
        checked={acceptPromotions}
        onChange={() => setAcceptPromotions(!acceptPromotions)}
        label="I would like to see promotional emails."
      />
      <button type="submit" disabled={!acceptTerms}>
        Sign Up
      </button>
    </form>
  );
};

// App Component
const SignUp = () => {
  return (
    <div className="App">
      <Content />
    </div>
  );
};

export default SignUp;
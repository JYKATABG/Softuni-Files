import './App.css';
import { useState } from 'react'

function App() {

  const [inputs, setInputs] = useState({});
  const [validateErrors, setValidateErrors] = useState({});

  function handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setInputs(values => ({ ...values, [name]: value }));
  }

  function validateForm(e) {
    const value = e.target.value;
    const name = e.target.name;
    let errors = {}

    if (name === 'username' && (value.length < 3 || value.length > 20)) {
      errors.username = 'Username should be between 3 and 20 characters'
    }
    if (name === 'age' && (value < 1 || value > 100)) {
      errors.age = 'Age should be between 1 and 100';
    }
    setValidateErrors(errors)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name='username'
              value={inputs.username || ""}
              onChange={handleChange}
              onBlur={validateForm}
              required
            />
          </div>
          {validateErrors.username &&
            <p className='errors'>
              {validateErrors.username}
            </p>
          }
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name='age'
              value={inputs.age || ""}
              onChange={handleChange}
              onBlur={validateForm}
              required
            />
          </div>
          {validateErrors.age &&
            <p className='errors'>
              {validateErrors.age}
            </p>
          }
          <div>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              name='country'
              value={inputs.country || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            {inputs.country === 'Bulgaria' && (
              <>
                <label htmlFor="city">City: </label>
                <select name="city" value={inputs.city || ""} onChange={handleChange}>
                  <option value="Stara Zagora">Stara Zagora</option>
                  <option value="Varna">Varna</option>
                  <option value="Plovdiv">Plodvid</option>
                  <option value="Sofia">Sofia</option>
                </select>
              </>
            )}
          </div>



          {inputs.age >= 18 && (
            <div>
              <label htmlFor="creditCard">Credit Card:</label>
              <input
                type="number"
                name='creditCard'
                value={inputs.creditCard || ""}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <label htmlFor="bio">Bio:</label>
            <textarea name="bio" id="bio" value={inputs.bio || ""} onChange={handleChange} required></textarea>
          </div>

          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;

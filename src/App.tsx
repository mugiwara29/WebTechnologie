import { useState } from 'react'


// Hauptkomponente der App
const App: React.FC = () => {
  // State-Hooks für die Eingabewerte der Admin- und Kundenformulare
  const [adminEmail, setAdminEmail] = useState<string>('');
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPassword, setCustomerPassword] = useState<string>('');

  // Funktionen zur Verarbeitung der Formularübermittlung
  const handleAdminSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Admin Login:', adminEmail, adminPassword);
    // Füge hier die Logik für die Admin-Überprüfung hinzu
  };

  const handleCustomerSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Kunden Login:', customerEmail, customerPassword);
    // Füge hier die Logik für die Kunden-Überprüfung hinzu
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Ihr Besen Shop</h1>

      {/* Admin Login Formular */}
      <form onSubmit={handleAdminSubmit} style={{ marginBottom: '20px' }}>
        <h2>Admin Login</h2>
        <p>
          <input 
            type="email" 
            value={adminEmail} 
            onChange={(e) => setAdminEmail(e.target.value)} 
            placeholder="E-Mail" 
            required 
            style={{ padding: '8px', width: '250px' }}
          /> 
        </p>
        <p>
          <input 
            type="password" 
            value={adminPassword} 
            onChange={(e) => setAdminPassword(e.target.value)} 
            placeholder="Passwort" 
            required 
            style={{ padding: '8px', width: '250px' }}
          /> 
        </p>
        <p>
          <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>Einloggen</button>
        </p>
      </form>

      {/* Kunden Login Formular */}
      <form onSubmit={handleCustomerSubmit}>
        <h2>Kunden Login</h2>
        <p>
          <input 
            type="email" 
            value={customerEmail} 
            onChange={(e) => setCustomerEmail(e.target.value)} 
            placeholder="E-Mail" 
            required 
            style={{ padding: '8px', width: '250px' }}
          /> 
        </p>
        <p>
          <input 
            type="password" 
            value={customerPassword} 
            onChange={(e) => setCustomerPassword(e.target.value)} 
            placeholder="Passwort" 
            required 
            style={{ padding: '8px', width: '250px' }}
          /> 
        </p>
        <p>
          <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>Einloggen</button>
        </p>
        <p>
          <a href="Register.php">Hier Registrieren</a>
        </p>
      </form>
    </div>
  );
};

export default App;

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* Corpo da página */
body {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* Container principal */
.container {
  background-color: white;
  max-width: 500px;
  width: 100%;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Cabeçalho */
header {
  text-align: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 26px;
  color: #333;
}

header p {
  font-size: 16px;
  color: #666;
}

/* Campos do formulário */
form .campo {
  margin-bottom: 15px;
}

form label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #444;
}

form input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

form input:focus {
  border-color: #4facfe;
  outline: none;
}

/* Botão */
form button {
  width: 100%;
  padding: 12px;
  background-color: #4facfe;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

form button:hover {
  background-color: #3289e4;
}

/* Resultado */
#resultado {
  margin-top: 20px;
  font-size: 18px;
  color: #222;
  background: #f1faff;
  padding: 15px;
  border-left: 5px solid #4facfe;
  border-radius: 8px;
  display: none;
  }

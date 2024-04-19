import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.js';

test('exibe mensagem de sucesso ao fazer login com credenciais corretas', () => {
  render(<App />);
  
  // Insere o e-mail e a senha corretos
  fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: 'maria.gabriele@pucpr.br' } });
  fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: '246810' } });

  // Clica no botão de login
  fireEvent.click(screen.getByText('Acessar'));

  // Verifica se a mensagem de sucesso é exibida
  expect(screen.getByText('Acessado com Sucesso!')).toBeInTheDocument();
});


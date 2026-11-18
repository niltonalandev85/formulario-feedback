import { useState } from "react";

function FeedbackForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  function enviarFeedback(event) {
    event.preventDefault();

    alert(`Nome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`);
  }

  return (
    <form onSubmit={enviarFeedback}>
      <h1>Formulário de Feedback</h1>

      <label htmlFor="nome">Nome:</label>
      <input
        id="nome"
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="comentario">Comentário:</label>
      <textarea
        id="comentario"
        value={comentario}
        onChange={(event) => setComentario(event.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FeedbackForm;

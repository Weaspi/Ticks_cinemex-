import { useState } from 'react'
import '../css/ComposeModal.css'

function ComposeModal({ onClose, onSend }) {
  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = () => {
    if (!to || !subject) return
    onSend(to, subject, body)
  }

  return (
    <div className="compose-modal active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="compose-window">
        <div className="compose-header">
          <h3>Nuevo mensaje</h3>
          <button className="compose-close" onClick={onClose}>✕</button>
        </div>
        <div className="compose-body">
          <div className="compose-field">
            <label>Para</label>
            <input
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="destinatario@example.com"
            />
          </div>
          <div className="compose-field">
            <label>Asunto</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Asunto del correo"
            />
          </div>
          <textarea
            className="compose-textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Escribe tu mensaje..."
          />
        </div>
        <div className="compose-footer">
          <button className="btn-cancel" onClick={onClose}>Cancelar</button>
          <button className="btn-send" onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default ComposeModal

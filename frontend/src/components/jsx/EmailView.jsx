import '../css/EmailView.css'

function EmailView({ email, onBack, fullScreen }) {
  if (!email) {
    return (
      <div className="email-view empty-view">
        <div className="empty-content">
          <div className="logo">📧</div>
          <h2>Tickets</h2>
          <p>Selecciona un correo para leerlo</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`email-view ${fullScreen ? 'full-screen' : ''}`}>
      <div className="email-toolbar">
        {fullScreen && (
          <button title="Volver" onClick={onBack}>← Volver</button>
        )}
        <button title="Responder">↩️</button>
        <button title="Reenviar">↪️</button>
        <button title="Eliminar">🗑️</button>
        <button title="Archivar">📁</button>
        <button title="Destacar">⭐</button>
      </div>

      <div className="email-details">
        <h1 className="email-title">{email.subject}</h1>
        <div className="email-meta">
          <div className="sender-info">
            <div className="avatar">
              {/* TODO: reemplazar por ./img/avatar-sender-{email.id}.png */}
              {email.from_.charAt(0).toUpperCase()}
            </div>
            <div className="sender-details">
              <div className="sender-name">{email.from_}</div>
              <div className="sender-to">para {email.to_}</div>
            </div>
          </div>
          <div className="email-date">
            {new Date(email.date).toLocaleString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
      </div>

      <div className="email-body" dangerouslySetInnerHTML={{ __html: email.body }} />
    </div>
  )
}

export default EmailView

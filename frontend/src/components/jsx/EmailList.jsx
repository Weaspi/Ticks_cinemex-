import '../css/EmailList.css'

function EmailList({ emails, selectedEmail, onSelectEmail, loading, onToggleStar }) {
  if (loading) {
    return (
      <div className="email-list">
        <div className="loading">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="email-list">
      <div className="email-list-header">
        <div className="header-left">
          <label className="checkbox-wrap">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="list-actions">
          <button title="Actualizar">🔄</button>
          <button title="Eliminar">🗑️</button>
          <button title="Marcar como leído">📧</button>
        </div>
      </div>

      {emails.length === 0 && (
        <div className="empty">No hay correos en esta carpeta</div>
      )}

      {emails.map(email => (
        <div
          key={email.id}
          className={`email-row ${selectedEmail?.id === email.id ? 'selected' : ''} ${!email.read ? 'unread' : ''}`}
          onClick={() => onSelectEmail(email)}
        >
          <div className="email-checkbox">
            <label className="checkbox-wrap" onClick={(e) => e.stopPropagation()}>
              <input type="checkbox" readOnly />
              <span className="checkmark"></span>
            </label>
          </div>

          <div
            className="email-star"
            onClick={(e) => { e.stopPropagation(); onToggleStar(email.id); }}
          >
            {email.starred ? '⭐' : ''}
          </div>

          <div className="email-sender">
            <div className="avatar">
              {/* TODO: reemplazar por ./img/avatar-sender-{email.id}.png si aplica */}
              {email.from_.charAt(0).toUpperCase()}
            </div>
            <span className="sender-text">{email.from_}</span>
          </div>

          <div className="email-subject">{email.subject}</div>

          <div className="email-body-preview">{email.body}</div>

          <div className="email-date">
            {formatDate(new Date(email.date))}
          </div>
        </div>
      ))}
    </div>
  )
}

function formatDate(date) {
  const now = new Date()
  const diff = now - date
  const days = Math.floor(diff / (24 * 60 * 60 * 1000))

  if (days === 0) {
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
  } else if (days === 1) {
    return "Ayer"
  } else if (days < 7) {
    return date.toLocaleDateString('es-ES', { weekday: 'long' })
  } else {
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
  }
}

export default EmailList

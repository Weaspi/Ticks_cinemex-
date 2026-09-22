import '../css/Sidebar.css'

function Sidebar({ currentFolder, onSelectFolder, onCompose }) {
  const folders = [
    { id: 'inbox', label: 'Recibidos', icon: 'inbox', showBadge: true },
    { id: 'starred', label: 'Destacados', icon: 'star_border', showBadge: true },
    { id: 'sent', label: 'Enviados', icon: 'send', showBadge: false },
    { id: 'drafts', label: 'Borradores', icon: 'insert_drive_file', showBadge: false },
    { id: 'trash', label: 'Papelera', icon: 'delete', showBadge: false },
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        {/* TODO: reemplazar por ./img/logo-tickets.png si tienes logo */}
        <div className="brand-mark">Tickets</div>
      </div>

      <div className="compose-btn">
        <button onClick={onCompose}>
          <span className="material-icons">edit</span>
          <span>Nuevo</span>
        </button>
      </div>

      <nav>
        {folders.map(folder => (
          <div
            key={folder.id}
            className={`sidebar-item ${currentFolder === folder.id ? 'active' : ''}`}
            onClick={() => onSelectFolder(folder.id)}
          >
            <span className="icon material-icons">{folder.icon}</span>
            <span className="label">{folder.label}</span>
            {folder.showBadge && (
              <span className="badge" id={`${folder.id}-badge`}>0</span>
            )}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        {/* TODO: reemplazar avatar por ./img/avatar-user.png */}
        <div className="user-chip">
          <div className="user-avatar">U</div>
          <div className="user-meta">
            <div className="user-name">Usuario</div>
            <div className="user-email">usuario@tickets.app</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

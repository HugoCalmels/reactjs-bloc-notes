const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <button id="add-button" type="button" class="btn btn-danger btn-lg" onClick={onAddNote}>Ajouter une note</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button  class="btn btn-warning btn-sm" onClick={(e) => onDeleteNote(id)}>Supprimer</button>
            </div>

            <p>{body && body.substr(0, 100) + "..."}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
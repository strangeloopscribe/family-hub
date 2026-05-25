type Props = { familyId: string; displayName: string }

export function ListsPage({ familyId: _familyId, displayName }: Props) {
  return (
    <div className="app">
      <div className="topbar">
        <div>
          <h1>Family Hub</h1>
          <div className="sub">Hi, {displayName} 👋</div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: 32 }}>
        <span style={{ fontSize: 56 }}>📝</span>
        <h2 style={{ fontSize: 20, fontWeight: 700 }}>Lists</h2>
        <p style={{ color: 'var(--text-soft)', textAlign: 'center' }}>
          Shopping lists, to-dos, and shared checklists — coming soon!
        </p>
      </div>
    </div>
  )
}

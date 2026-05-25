import { useState } from 'react'
import { useAuth } from './lib/useAuth'
import { Login } from './pages/Login'
import { CalendarPage } from './pages/CalendarPage'
import { ListsPage } from './pages/ListsPage'
import { JournalPage } from './pages/JournalPage'

type Tab = 'calendar' | 'lists' | 'journal'

const NAV_TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'calendar', label: 'Calendar', icon: '📅' },
  { id: 'lists',    label: 'Lists',    icon: '📝' },
  { id: 'journal',  label: 'Journal',  icon: '📖' },
]

export default function App() {
  const auth = useAuth()
  const [tab, setTab] = useState<Tab>('calendar')

  if (auth.loading) {
    return (
      <div className="app">
        <div className="loader">Loading…</div>
      </div>
    )
  }

  if (!auth.session) {
    return <Login />
  }

  if (auth.error || !auth.familyId) {
    return (
      <div className="app">
        <div className="loader" style={{ flexDirection: 'column', gap: 12, padding: 24, textAlign: 'center' }}>
          <p>Couldn't finish setting up your family.</p>
          {auth.error && <p style={{ fontSize: 13, color: '#c0392b' }}>{auth.error}</p>}
          <button className="link-btn" onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      </div>
    )
  }

  const props = { familyId: auth.familyId, displayName: auth.displayName ?? 'Me' }

  return (
    <>
      {tab === 'calendar' && <CalendarPage {...props} />}
      {tab === 'lists'    && <ListsPage    {...props} />}
      {tab === 'journal'  && <JournalPage  {...props} />}

      <nav className="bottom-nav">
        {NAV_TABS.map(({ id, label, icon }) => (
          <button
            key={id}
            className={tab === id ? 'active' : ''}
            onClick={() => setTab(id)}
          >
            <span className="nav-icon">{icon}</span>
            {label}
          </button>
        ))}
      </nav>
    </>
  )
}

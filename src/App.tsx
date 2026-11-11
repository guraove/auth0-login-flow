import { useAuth0 } from '@auth0/auth0-react'
import './App.css'

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.25 19 6v5.2c0 4.6-2.9 8.15-7 9.55-4.1-1.4-7-4.95-7-9.55V6l7-2.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 11.6 11.2 13.4l3.55-3.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M4.75 12h14.5m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function App() {
  const {
    error,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    user,
  } = useAuth0()

  const displayName = user?.name || user?.email || 'Signed-in user'
  const initial = displayName.trim().charAt(0).toUpperCase() || 'U'

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="AuthFlow home">
          <span className="brand-mark">
            <ShieldIcon />
          </span>
          <span>AuthFlow</span>
        </a>
        <div className="powered-by">
          <span className="powered-dot" />
          Secured by Auth0
        </div>
      </header>

      <main className="main-content">
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">A SIMPLE, SECURE SIGN-IN</p>
          <h1 id="page-title">
            Your app,
            <br />
            <span>ready to welcome.</span>
          </h1>
          <p className="intro-copy">
            A first login flow built with the Auth0 React SDK. Sign in securely,
            see your profile, then sign out when you’re done.
          </p>

          <ul className="benefits" aria-label="What this demo includes">
            <li>
              <span className="benefit-check">✓</span>
              Hosted sign-in with Auth0
            </li>
            <li>
              <span className="benefit-check">✓</span>
              Profile shown after login
            </li>
            <li>
              <span className="benefit-check">✓</span>
              One-click sign-out
            </li>
          </ul>
        </section>

        <section className="auth-card" aria-live="polite">
          <div className="card-icon">
            <ShieldIcon />
          </div>

          {isLoading ? (
            <div className="state-block" role="status">
              <span className="spinner" aria-hidden="true" />
              <h2>Checking your session</h2>
              <p>Connecting to Auth0 securely…</p>
            </div>
          ) : error ? (
            <div className="state-block error-block" role="alert">
              <span className="state-label">SIGN-IN ERROR</span>
              <h2>We couldn’t finish signing in.</h2>
              <p>{error.message}</p>
              <button
                className="button button-primary"
                onClick={() => void loginWithRedirect()}
                type="button"
              >
                Try again <ArrowIcon />
              </button>
            </div>
          ) : isAuthenticated ? (
            <div className="state-block">
              <span className="state-label success-label">SIGNED IN</span>
              <h2>Welcome back.</h2>
              <p>Your Auth0 profile is connected to this app.</p>

              <div className="profile-card">
                <div className="avatar" aria-hidden="true">
                  {initial}
                </div>
                <div className="profile-copy">
                  <span className="profile-name">{displayName}</span>
                  <span className="profile-email">
                    {user?.email || 'Profile details returned by Auth0'}
                  </span>
                </div>
              </div>

              <button
                className="button button-secondary"
                onClick={() =>
                  void logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
                type="button"
              >
                Sign out <ArrowIcon />
              </button>
            </div>
          ) : (
            <div className="state-block">
              <span className="state-label">YOUR ACCOUNT</span>
              <h2>Sign in to continue.</h2>
              <p>
                Continue on Auth0’s secure sign-in page. Your password stays
                with Auth0.
              </p>

              <button
                className="button button-primary"
                onClick={() => void loginWithRedirect()}
                type="button"
              >
                Continue with Auth0 <ArrowIcon />
              </button>

              <div className="security-note">
                <ShieldIcon />
                <span>Protected sign-in · No password stored in this app</span>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <span>AuthFlow demo</span>
        <span>Built with the Auth0 React SDK</span>
      </footer>
    </div>
  )
}

export default App


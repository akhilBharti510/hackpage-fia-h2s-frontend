import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const RegistrationModalContext = createContext(null);

const modalCopy = {
  signin: {
    eyebrow: "Welcome Back",
    title: "Sign in to your hackathon dashboard",
    body: "Continue your application, manage your team, and track challenge updates.",
  },
  apply: {
    eyebrow: "Application",
    title: "Apply for the FIA Hackathon",
    body: "Share your details and we will reserve your application slot for review.",
  },
  register: {
    eyebrow: "Registration",
    title: "Register for Code The Future",
    body: "Secure your spot, receive challenge updates, and get the onboarding brief.",
  },
};

export function RegistrationModalProvider({ children }) {
  const [modalType, setModalType] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const isOpen = Boolean(modalType);

  const openModal = useCallback((type = "register") => {
    setSubmitted(false);
    setModalType(type);
  }, []);

  const closeModal = useCallback(() => {
    setModalType(null);
    setSubmitted(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal, isOpen]);

  const value = useMemo(
    () => ({ openModal, closeModal }),
    [openModal, closeModal],
  );
  const copy = modalCopy[modalType] || modalCopy.register;

  return (
    <RegistrationModalContext.Provider value={value}>
      {children}
      {isOpen ? (
        <div
          className="modal-shell"
          role="dialog"
          aria-modal="true"
          aria-labelledby="registration-modal-title"
        >
          <button
            type="button"
            className="modal-backdrop"
            aria-label="Close registration modal"
            onClick={closeModal}
          />
          <div className="modal-panel">
            <button
              type="button"
              className="modal-close focus-ring"
              aria-label="Close modal"
              onClick={closeModal}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            <div className="modal-glow" aria-hidden="true" />
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fia-purpleLight">
                {copy.eyebrow}
              </p>
              <h2
                id="registration-modal-title"
                className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl"
              >
                {copy.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                {copy.body}
              </p>

              {submitted ? (
                <div className="modal-success" role="status">
                  <strong>Request received.</strong>
                  <span>
                    We have saved your interest locally for this demo flow.
                  </span>
                </div>
              ) : (
                <form
                  className="mt-7 grid gap-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <label className="modal-field">
                    <span>Full name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Aarav Sharma"
                    />
                  </label>
                  <label className="modal-field">
                    <span>Email address</span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="modal-field">
                    <span>Team / Institution</span>
                    <input
                      type="text"
                      name="team"
                      placeholder="Team name or college"
                    />
                  </label>
                  <button type="submit" className="modal-submit focus-ring">
                    {modalType === "signin" ? "Continue" : "Reserve My Spot"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </RegistrationModalContext.Provider>
  );
}

export function useRegistrationModal() {
  const context = useContext(RegistrationModalContext);
  if (!context) {
    throw new Error(
      "useRegistrationModal must be used inside RegistrationModalProvider",
    );
  }

  return context;
}

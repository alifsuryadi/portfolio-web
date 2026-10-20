import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NEW_PORTFOLIO_URL } from "../../../helpers/links";
import preview from "../../../assets/new-portfolio-preview.webp";
import "./PromoModal.css";

/* Shown on every page load, shortly after the page appears. */
export const PromoModal = () => {
  const [open, setOpen] = useState(false);
  const ctaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const lastFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ctaRef.current?.focus();

    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      lastFocus?.focus?.();
    };
  }, [open]);

  const close = () => setOpen(false);

  if (!open) return null;

  return (
    <div className="promo-backdrop" onClick={close}>
      <div
        className="promo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        aria-describedby="promo-desc"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="promo-close"
          onClick={close}
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <a
          className="promo-preview"
          href={NEW_PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          tabIndex={-1}
        >
          <img
            src={preview}
            alt="Preview of Alif Suryadi's new anime-themed portfolio"
            width="960"
            height="540"
          />
          <span className="promo-badge">New</span>
        </a>

        <div className="promo-body">
          <h2 id="promo-title">My new portfolio is live</h2>
          <p id="promo-desc">
            A brand-new interactive 3D portfolio with my latest projects,
            experience and achievements. Come take a look!
          </p>
          <div className="promo-actions">
            <a
              ref={ctaRef}
              className="promo-cta"
              href={NEW_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              View new portfolio <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <button type="button" className="promo-later" onClick={close}>
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

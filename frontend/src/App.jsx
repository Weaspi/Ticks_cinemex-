import React, { useState } from 'react';
import './App.css';

/* ============================================================
   BARRA DE NAVEGACIÓN
   ============================================================ */
const GmailNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className="gmail-navbar">
        <div className="gb_Td">
          <div className="gb_2d gb_Ad gb_Bd">
            <div className="gb_ad" aria-label="Menú principal" role="button">
              <svg focusable="false" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            </div>
            <div className="gb_3c">
              <a className="gb_me" aria-label="Gmail" href="#inbox">
                <img
                  className="gb_9c"
                  src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r7.png"
                  alt=""
                  role="presentation"
                />
              </a>
            </div>
          </div>

          <div className="gb_2d gb_ae gb_Ue gb_8e gb_af">
            <div className="gb_Te">
              <form className="gb_Pd" method="get" role="search">
                <div className="gb_Le">
                  <input
                    className="searchboxInputFontClass"
                    aria-label="Buscar en el correo electrónico"
                    autoComplete="off"
                    placeholder="Buscar en el correo electrónico"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                  />
                </div>
                <button className="gb_4e" type="button" aria-label="Opciones de búsqueda avanzada"></button>
                {searchQuery && (
                  <button className="gb_1e" aria-label="Borrar búsqueda" type="button" onClick={() => setSearchQuery('')}>
                    <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                  </button>
                )}
                <button className="gb_0e" aria-label="Buscar en el correo electrónico" role="button">
                  <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                    <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="gb_be">
            <div className="gb_Md">
              <div className="gb_L">
                <a className="gb_C" aria-label="Apps de Google" href="#">
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                  </svg>
                </a>
              </div>
              <div className="gb_z">
                <a className="gb_9a" href="#">
                  <span className="gb_ke">
                    <img
                      className="gbii"
                      src="https://lh3.googleusercontent.com/ogw/AF2bZyh7kHTdySkmBZ9lNR1WXfHlwQVDYnGJaQ-OTk6aSvXnghk=s32-c-mo"
                      alt=""
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gmail-navbar { background: #1c1f24; border-bottom: 1px solid #2a2d33; }
        .gb_Td { display: flex; align-items: center; height: 56px; padding: 0 12px; background: #0f1115; }
        .gb_2d { display: flex; align-items: center; }
        .gb_Ad { flex: 0 0 auto; }
        .gb_Bd { min-width: 50px; }
        .gb_ad { padding: 0 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; }
        .gb_ad:hover { background: #2a2d33; }
        .gb_ad svg { fill: #e8eaed; width: 24px; height: 24px; }
        .gb_3c { margin-left: 4px; }
        .gb_me { display: inline-block; text-decoration: none; }
        .gb_9c { display: block; height: 40px; width: 109px; }
        .gb_ae { flex: 1; justify-content: center; min-width: 0; }
        .gb_Ue { max-width: 720px; width: 100%; }
        .gb_8e { padding: 0 8px; }
        .gb_af { position: relative; }
        .gb_Te { flex: 1; min-width: 0; }
        .gb_Pd { display: flex; align-items: center; background: #242830; border-radius: 24px; padding: 0 8px; height: 44px; }
        .gb_Pd:focus-within { background: #1c1f24; box-shadow: 0 1px 3px rgba(0,0,0,0.5); }
        .gb_Le { flex: 1; min-width: 0; padding: 0 4px; }
        .searchboxInputFontClass { border: none; padding: 0; margin: 0; width: 100%; background: transparent; outline: none; font-size: 14px; color: #e8eaed; font-family: 'Lato', Helvetica, Arial, sans-serif; }
        .searchboxInputFontClass::placeholder { color: #80868b; }
        .gb_4e, .gb_1e, .gb_0e { background: none; border: none; cursor: pointer; padding: 4px 8px; display: flex; align-items: center; justify-content: center; border-radius: 50%; }
        .gb_4e:hover, .gb_1e:hover, .gb_0e:hover { background: #2a2d33; }
        .gb_4e svg, .gb_1e svg { fill: #a0a4a8; width: 20px; height: 20px; }
        .gb_0e svg { fill: #8ab4f8; width: 20px; height: 20px; }
        .gb_be { flex: 0 0 auto; margin-left: 8px; }
        .gb_Md { display: flex; align-items: center; gap: 4px; }
        .gb_L { cursor: pointer; padding: 4px; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; }
        .gb_L:hover { background: #2a2d33; }
        .gb_C svg { fill: #a0a4a8; width: 24px; height: 24px; }
        .gb_z { cursor: pointer; padding: 2px; border-radius: 50%; }
        .gb_z:hover { background: #2a2d33; }
        .gb_9a { display: flex; align-items: center; text-decoration: none; padding: 2px; }
        .gb_ke { display: flex; align-items: center; }
        .gbii { border-radius: 50%; width: 32px; height: 32px; }

        @media (max-width: 768px) {
          .gb_Bd { min-width: auto; }
          .gb_9c { width: 80px; height: 32px; }
          .gb_Ue { max-width: 100%; }
          .gb_Pd { height: 36px; }
          .gb_Te { max-width: 120px; }
          .gb_0e svg, .gb_4e svg, .gb_1e svg { width: 18px; height: 18px; }
        }
      `}</style>
    </>
  );
};

/* ============================================================
   EVENTO RESUMEN
   ============================================================ */
const EventSummary = () => {
  return (
    <>
      <div className="event-summary">
        <div className="event-header-mobile">
          <div className="event-date-info">
            <span className="day">lun, 21 de sep, 3:30 p. m.</span>
            <span className="event-title">Resident Evil: Noche Cero</span>
          </div>
          <div className="date-icon">
            <img src="https://www.gstatic.com/ui/v1/icons/mail/images/calendar/daynumberillustrations/day_number_illustration_31.png" alt="31" />
          </div>
        </div>

        <div className="event-details-list">
          <div className="event-detail-row">
            <div className="detail-icon">
              <svg viewBox="0 -960 960 960" height="20" width="20">
                <path d="M480.45-444q44.55,0 76.05-31.5T588-552.45q0-44.55-31.5-76.05T480-660t-76.5,31.5T372-552t31.5,76.5T480.45-444ZM480-95q-10.79,0-20.11-5t-13.24-15l-6.87-14Q429-149 416.14-167.16T389-203q-42.38-45.01-89.19-84.5T220-378q-26-38-39-82.19T168-551q0-129.69 90.05-221.34T478.55-864T700.5-772.5T792-550.68q0,46.68-13.74,90.63T739-378q-34,51-79.96,90.66T572-203q-16,17-29.5,35.5T519-129l-7,14q-5,9-13.68,14.5T480-95Z"/>
              </svg>
            </div>
            <span className="detail-text">Vía San Juan,</span>
          </div>

          <div className="event-detail-row">
            <div className="detail-icon">
              <svg viewBox="0 -960 960 960" height="20" width="20">
                <path d="M192-144V-384H768v240H696V-312H264v168H192Zm0-288q-20,0-34-14t-14-34t14-34t34-14t34,14t14,34t-14,34t-34,14Zm96,0V-744q0-29.7 21.15-50.85T360-816H600q29.7,0 50.85,21.15T672-744v312H288Zm446-14q-14-14-14-34t14-34t34-14t34,14t14,34t-14,34t-34,14t-34-14ZM360-504H600V-744H360v240Z"/>
              </svg>
            </div>
            <div className="seat-grid">
              <div className="seat-column"><span className="seat-label">Fila</span><span className="seat-value">E</span></div>
              <div className="seat-column"><span className="seat-label">Asiento</span><span className="seat-value">6</span></div>
            </div>
          </div>

          <div className="event-detail-row">
            <div className="detail-icon">
              <svg viewBox="0 -960 960 960" height="20" width="20">
                <path d="M192-144V-384H768v240H696V-312H264v168H192Zm0-288q-20,0-34-14t-14-34t14-34t34-14t34,14t14,34t-14,34t-34,14Zm96,0V-744q0-29.7 21.15-50.85T360-816H600q29.7,0 50.85,21.15T672-744v312H288Zm446-14q-14-14-14-34t14-34t34-14t34,14t14,34t-14,34t-34,14t-34-14ZM360-504H600V-744H360v240Z"/>
              </svg>
            </div>
            <div className="seat-grid">
              <div className="seat-column"><span className="seat-label">Fila</span><span className="seat-value">E</span></div>
              <div className="seat-column"><span className="seat-label">Asiento</span><span className="seat-value">7</span></div>
            </div>
          </div>

          <div className="event-detail-row">
            <div className="detail-icon">
              <svg viewBox="0 -960 960 960" height="24" width="24">
                <path d="M96-192v-92q0-25.78 12.5-47.39T143-366q54-32 114.5-49T384-432t126.5,17T625-366q22,13 34.5,34.61T672-284v92H96Zm648,0v-92q0-42-19.5-78T672-421q39,8 75.5,21.5T817-366q22,13 34.5,34.67T864-284v92H744ZM282-522q-42-42-42-102t42-102t102-42t102,42t42,102T486-522T384-480T282-522Zm396,0q-42,42-102,42q-8,0-15-0.5T546-483q25-29 39.5-64.5T600-624t-14.5-76.5T546-765q8-2 15-2.5t15-0.5q60,0 102,42t42,102T678-522ZM168-264H600v-20q0-6.47-3.03-11.76T589-304q-47-27-99-41.5T384-360T278-346t-99,42q-4.95,2.83-7.98,7.91T168-284.09V-264ZM435-573.21q21-21.21 21-51T434.79-675t-51-21T333-674.79t-21,51T333.21-573t51,21T435-573.21ZM384-264Zm0-360Z"/>
              </svg>
            </div>
            <span className="detail-text">Reservado para 2</span>
          </div>

          <div className="event-detail-row">
            <div className="detail-icon">
              <svg width="20" height="20" viewBox="0 0 192 192" fill="none">
                <g><path d="M32 36.8C32 20.8942 44.8942 8 60.8 8H131.2C147.106 8 160 20.8942 160 36.8V67.2C160 83.1058 147.106 96 131.2 96H60.8C44.8942 96 32 83.1058 32 67.2V36.8Z" fill="#1f3a5f"/></g>
                <g><path d="M19.8673 49.3918C17.8184 33.8196 29.9386 20 45.6452 20H146.355C162.061 20 174.182 33.8195 172.133 49.3918L166 96L172.133 142.608C174.182 158.18 162.061 172 146.355 172H45.6452C29.9386 172 17.8184 158.18 19.8673 142.608L26 96L19.8673 49.3918Z" fill="#8ab4f8"/></g>
              </svg>
            </div>
            <span className="detail-text error-text">No se pudo cargar el evento</span>
          </div>
        </div>

        <div className="event-actions">
          <a href="#" className="directions-btn"><span>Cómo llegar</span></a>
          <a href="#" className="tickets-btn"><span>Ver las entradas</span></a>
        </div>
      </div>

      <style jsx>{`
        .event-summary { background: #1c1f24; border-radius: 16px; padding: 20px; margin: 8px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.4); }
        .event-header-mobile { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
        .event-date-info { display: flex; flex-direction: column; gap: 4px; }
        .event-date-info .day { font-size: 14px; font-weight: 600; color: #a0a4a8; }
        .event-date-info .event-title { font-size: 20px; font-weight: 300; color: #e8eaed; }
        .date-icon img { width: 56px; height: 56px; border-radius: 12px; }
        .event-details-list { display: flex; flex-direction: column; gap: 20px; margin-bottom: 24px; }
        .event-detail-row { display: flex; align-items: center; gap: 16px; }
        .detail-icon { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .detail-icon svg { fill: #a0a4a8; }
        .detail-text { font-size: 13px; color: #e8eaed; }
        .seat-grid { display: flex; gap: 12px; flex: 1; }
        .seat-column { display: flex; flex-direction: column; gap: 2px; min-width: 70px; }
        .seat-label { font-size: 13px; font-weight: 600; color: #e8eaed; }
        .seat-value { font-size: 14px; color: #a0a4a8; }
        .error-text { color: #e8eaed; }
        .event-actions { display: flex; flex-direction: row; gap: 12px; align-items: center; }
        .directions-btn, .tickets-btn { display: inline-block; padding: 12px 24px; border-radius: 999px; font-size: 15px; text-decoration: none; font-weight: 600; text-align: center; flex: 1; min-width: 0; white-space: nowrap; }
        .directions-btn { background: #2c3e50; color: #ffffff; }
        .tickets-btn { background: #2a3f5f; color: #d3e3fd; }

        @media (max-width: 768px) {
          .event-summary { padding: 16px; margin: 8px 0; border-radius: 0; }
          .event-header-mobile { margin-bottom: 16px; }
          .event-details-list { gap: 16px; margin-bottom: 20px; }
          .directions-btn, .tickets-btn { padding: 10px 16px; font-size: 11px; }
        }
      `}</style>
    </>
  );
};

/* ============================================================
   FEEDBACK
   ============================================================ */
const FeedbackSection = () => {
  return (
    <>
      <div className="feedback-section">
        <span className="feedback-text">Según este correo electrónico</span>
        <div className="feedback-buttons">
          <span className="feedback-label">¿Es correcta?</span>
          <button className="feedback-btn yes" title="Sí">
            <svg viewBox="0 -960 960 960" height="20" width="20">
              <path d="M720-144H264V-624L552-912l32,22q18,13 26.5,33t3.5,41L576-624H840q30,0 51,21t21,51v57q0,8-1.5,14.5T906-467L787-188q-9,20-27,32t-40,12Z"/>
            </svg>
          </button>
          <button className="feedback-btn no" title="No">
            <svg viewBox="0 -960 960 960" height="20" width="20">
              <path d="M240-816H696v480L408-48L376-70q-18-13-26.5-33T346-144l38-192H120q-30,0-51-21T48-408v-57q0-8 1.5-14.5T54-493L173-772q8-20 26.5-32T240-816Z"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .feedback-section { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: nowrap; }
        .feedback-text { font-size: 12px; color: #a0a4a8; }
        .feedback-label { font-size: 12px; color: #a0a4a8; margin-right: 1px; }
        .feedback-buttons { display: flex; align-items: center; gap: 4px; }
        .feedback-btn { background: none; border: none; cursor: pointer; padding: 4px 6px; border-radius: 4px; }
        .feedback-btn svg { fill: #a0a4a8; }
        .feedback-btn:hover { background: #2a2d33; }
      `}</style>
    </>
  );
};

/* ============================================================
   CABECERA DEL CORREO
   ============================================================ */
const EmailHeader = () => {
  return (
    <>
      <div className="email-header">
        <div className="email-subject">
          <h2>Tu compra en Cinemex</h2>
          <span className="badge-recibidos">Recibidos</span>
          <button className="star-header-btn">
            <svg viewBox="0 -960 960 960" height="24" width="24">
              <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
            </svg>
          </button>
        </div>

        <EventSummary />
        <FeedbackSection />
      </div>

      <style jsx>{`
        .email-header { padding: 16px 0; background: #0f1115; }
        .email-subject { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
        .email-subject h2 { font-size: 17px; font-weight: 400; color: #e8eaed; margin: 0; flex: 1; }
        .badge-recibidos { background: #1f3a5f; color: #d3e3fd; font-size: 11px; font-weight: 400; padding: 4px 10px; border-radius: 6px; }
        .star-header-btn { background: none; border: none; cursor: pointer; padding: 4px; }
        .star-header-btn svg { fill: none; stroke: #a0a4a8; stroke-width: 40; }

        @media (max-width: 768px) {
          .email-header { padding: 12px 0; }
        }
      `}</style>
    </>
  );
};

/* ============================================================
   ENCABEZADO DEL MENSAJE
   ============================================================ */
const MessageHeader = () => {
  return (
    <>
      <div className="message-header">
        <div className="sender-info">
          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png" alt="Cinemex" className="sender-avatar" />
          <div className="sender-details">
            <div className="sender-line">
              <span className="sender-name">Cinemex</span>
              <span className="sender-date">21 sep</span>
            </div>
            <button className="recipient-btn">
              <span>para mí</span>
              <svg viewBox="0 -960 960 960" height="16" width="16">
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="message-actions">
          <a href="#" className="unsubscribe">Anular suscripción</a>
          <button className="msg-action" title="Más">
            <svg viewBox="0 -960 960 960" height="20" width="20">
              <path d="M479.79-192Q450-192 429-213.21t-21-51T429.21-315t51-21T531-314.79t21,51T530.79-213t-51,21Zm0-216Q450-408 429-429.21t-21-51T429.21-531t51-21T531-530.79t21,51T530.79-429t-51,21Zm0-216Q450-624 429-645.21t-21-51T429.21-747t51-21T531-746.79t21,51T530.79-645t-51,21Z"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .message-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: #1c1f24;
          border-radius: 16px 16px 0 0;
          margin-top: 8px;
          gap: 12px;
        }

        .sender-info {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
          flex: 1;
        }

        .sender-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          flex-shrink: 0;
          background: #242830;
        }

        .sender-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .sender-line {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .sender-name {
          font-weight: 700;
          color: #e8eaed;
          font-size: 16px;
          white-space: nowrap;
        }

        .sender-date {
          font-size: 13px;
          color: #a0a4a8;
          white-space: nowrap;
        }

        .recipient-btn {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          background: none;
          border: none;
          padding: 0;
          color: #a0a4a8;
          font-size: 14px;
          cursor: pointer;
          font-family: 'Lato', Helvetica, Arial, sans-serif;
          white-space: nowrap;
          width: fit-content;
        }

        .recipient-btn svg {
          fill: #a0a4a8;
        }

        .message-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .unsubscribe {
          font-size: 14px;
          color: #8ab4f8;
          text-decoration: none;
          font-weight: 500;
          white-space: nowrap;
        }

        .unsubscribe:hover {
          text-decoration: underline;
        }

        .msg-action {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .msg-action:hover {
          background: #2a2d33;
        }

        .msg-action svg {
          fill: #a0a4a8;
        }

        @media (max-width: 480px) {
          .message-header {
            padding: 12px;
            gap: 8px;
          }
          .sender-avatar {
            width: 40px;
            height: 40px;
          }
          .sender-name {
            font-size: 15px;
          }
          .sender-date {
            font-size: 12px;
          }
          .recipient-btn {
            font-size: 13px;
          }
          .unsubscribe {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

/* ============================================================
   CORREO DE CINEMEX
   ============================================================ */
const CinemexEmail = () => {
  return (
    <>
      <div className="cinemex-content">
        <div style={{background:'#1c1f24'}}>
          <table cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:'100%', margin:'0 auto'}}>
            <tbody>
              <tr>
                <td style={{background:'#fe142f', padding:'6px 16px'}}>
                  <img src="https://statics.cinemex.com/assets/dist/img/mails/logo.png" alt="Cinemex" style={{height:'28px'}} />
                </td>
              </tr>
              <tr>
                <td style={{background:'#1c1f24', padding:'40px 24px'}}>
                  <h1 style={{textAlign:'center', fontSize:'20px', margin:'0 0 28px', color:'#e8eaed'}}>¡Ya tienes tus boletos!</h1>
                  <img src="https://statics.cinemex.com/assets/dist/img/mails/icon-hands-raise.png" alt="" style={{display:'block', margin:'0 auto 28px'}} />
                  <p style={{fontSize:'18px', textAlign:'center', margin:'0 0 33px', color:'#e8eaed'}}>Esta es tu confirmación de compra.</p>
                  <p style={{fontSize:'14px', textAlign:'center', margin:'0 0 33px', color:'#e8eaed'}}>
                    Pasa directo al acceso de tu sala <strong>mostrando el código QR</strong> en cualquier dispositivo móvil, tablet o impresión.
                  </p>
                  <p style={{textAlign:'center', fontSize:'15px', margin:'0 0 18px', color:'#e8eaed'}}><strong>Código de compra</strong></p>
                  <p style={{borderRadius:'34px', border:'1px solid #2a2d33', width:'200px', padding:'12px', fontSize:'24px', color:'#fe142f', letterSpacing:'3px', textAlign:'center', margin:'0 auto 28px'}}>
                    B354 XTYAUUG
                  </p>
                  <img src="https://api.cinemex.com/bookingQr/34383013/d02674785a210f514138b145fa89e1bb.png" alt="Código QR" style={{display:'block', margin:'0 auto 30px'}} />
                  <p style={{fontSize:'11px', textAlign:'center', margin:'0 0 10px', color:'#a0a4a8'}}>
                    Si no puedes ver el código QR, <a href="#" style={{color:'#fe142f'}}>haz click aquí</a>.
                  </p>
                  <p style={{fontSize:'11px', textAlign:'center', margin:'0 auto 60px', maxWidth:'300px', color:'#a0a4a8'}}>
                    También <strong>puedes presentar el código de compra</strong> al momento de ingresar a la sala, ya que cuenta con la misma validez.
                  </p>
                  <h2 style={{fontSize:'16px', letterSpacing:'5px', textAlign:'center', margin:'0 0 30px', color:'#e8eaed'}}>DATOS DE LA COMPRA</h2>
                  <div style={{borderRadius:'10px', border:'1px solid #2a2d33', maxWidth:'370px', margin:'0 auto 44px', padding:'30px'}}>
                    <img src="https://www.sonypictures.com.mx/sites/mexico/files/2026-07/RE_1400x2100.jpg" alt="Poster" style={{display:'block', margin:'0 auto', width:'92px'}} />
                    <h3 style={{textAlign:'center', fontSize:'18px', margin:'8px 0', fontWeight:'400', color:'#e8eaed'}}>Resident Evil: Noche Cero</h3>
                    <p style={{textAlign:'center', fontSize:'12px', color:'#a0a4a8', margin:'0 0 26px'}}><em>Español, Tradicional</em></p>
                    <div style={{borderTop:'1px solid #2a2d33', paddingTop:'28px'}}>
                      <div style={{marginBottom:'28px'}}>
                        <p style={{fontSize:'11px', textTransform:'uppercase', margin:'0 0 8px', color:'#a0a4a8'}}>Día</p>
                        <p style={{fontSize:'13px', margin:'0', color:'#e8eaed'}}>Lunes 21 de septiembre</p>
                      </div>
                      <div style={{marginBottom:'28px'}}>
                        <p style={{fontSize:'11px', textTransform:'uppercase', margin:'0 0 8px', color:'#a0a4a8'}}>Hora</p>
                        <p style={{fontSize:'13px', margin:'0', color:'#e8eaed'}}>03:30 PM</p>
                      </div>
                      <div style={{marginBottom:'28px'}}>
                        <p style={{fontSize:'11px', textTransform:'uppercase', margin:'0 0 8px', color:'#a0a4a8'}}>Cine</p>
                        <p style={{fontSize:'13px', margin:'0', color:'#e8eaed'}}>Vía San Juan</p>
                      </div>
                      <div style={{marginBottom:'28px'}}>
                        <p style={{fontSize:'11px', textTransform:'uppercase', margin:'0 0 8px', color:'#a0a4a8'}}>Sala</p>
                        <p style={{fontSize:'13px', margin:'0', color:'#e8eaed'}}>Sala 7</p>
                      </div>
                      <div style={{marginBottom:'28px'}}>
                        <p style={{fontSize:'11px', textTransform:'uppercase', margin:'0 0 8px', color:'#a0a4a8'}}>Tus boletos</p>
                        <p style={{fontSize:'13px', margin:'0', color:'#e8eaed'}}>1 2X1 VISA TRADICIONAL ST1</p>
                      </div>
                      <div>
                        <p style={{fontSize:'11px', textTransform:'uppercase', margin:'0 0 8px', color:'#a0a4a8'}}>Asientos</p>
                        <p style={{fontSize:'13px', margin:'0', color:'#e8eaed'}}>E6 / E7</p>
                      </div>
                    </div>
                    <div style={{borderTop:'1px solid #2a2d33', paddingTop:'28px', marginTop:'18px'}}>
                      <p style={{fontSize:'11px', textTransform:'uppercase', margin:'0 0 18px', color:'#a0a4a8'}}>Detalle del pago</p>
                      <p style={{fontSize:'12px', margin:'0', color:'#e8eaed'}}>Boletos: $77.00</p>
                      <p style={{fontSize:'12px', margin:'0', color:'#e8eaed'}}>Dulcería: $0.00</p>
                      <p style={{fontSize:'12px', margin:'0', color:'#e8eaed'}}>Costo por servicio: $16.00</p>
                      <p style={{fontSize:'12px', margin:'14px 0', color:'#e8eaed'}}><strong>Subtotal: $93.00</strong></p>
                      <p style={{fontSize:'14px', margin:'14px 0', color:'#e8eaed'}}><strong>Total pagado: $93.00</strong></p>
                    </div>
                  </div>
                  <div style={{textAlign:'center', margin:'0 0 26px'}}>
                    <a href="#" style={{margin:'0.25em 0.5em'}}>
                      <img src="https://statics.cinemex.com/assets/dist/img/mails/apple-wallet-button.png" alt="Agregar a Apple Wallet" />
                    </a>
                    <a href="#" style={{margin:'0.25em 0.5em'}}>
                      <img src="https://statics.cinemex.com/assets/dist/img/mails/google-wallet-button.png" alt="Agregar a Google Wallet" />
                    </a>
                  </div>
                  <p style={{fontSize:'11px', textAlign:'center', margin:'0 0 33px', color:'#a0a4a8'}}>
                    Ayúdanos a conocer tu experiencia de compra <a href="#" style={{color:'#fe142f'}}>aquí</a>.
                  </p>
                  <div style={{textAlign:'center', fontSize:'13px', margin:'0 0 28px'}}>
                    <p style={{fontWeight:'bold', fontSize:'14px', margin:'0 0 20px', color:'#e8eaed'}}>Datos para Comprobante Fiscal</p>
                    <table cellPadding="0" cellSpacing="0" style={{margin:'0 auto', borderCollapse:'collapse'}}>
                      <tbody>
                        <tr>
                          <td style={{padding:'4px 16px', textAlign:'right', color:'#a0a4a8'}}>Complejo</td>
                          <td style={{padding:'4px 16px', textAlign:'left', color:'#e8eaed'}}>VSJ</td>
                        </tr>
                        <tr>
                          <td style={{padding:'4px 16px', textAlign:'right', color:'#a0a4a8'}}>No. Ticket</td>
                          <td style={{padding:'4px 16px', textAlign:'left', color:'#e8eaed'}}>573203</td>
                        </tr>
                        <tr>
                          <td style={{padding:'4px 16px', textAlign:'right', color:'#a0a4a8'}}>Fecha de compra</td>
                          <td style={{padding:'4px 16px', textAlign:'left', color:'#e8eaed'}}>18/09/2026</td>
                        </tr>
                      </tbody>
                    </table>
                    <p style={{marginTop:'20px'}}>
                      <a href="#" style={{color:'#fe142f', textDecoration:'underline'}}>Solicita tu Factura</a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{background:'#1c1f24', padding:'15px 24px'}}>
                  <a href="#">
                    <img src="https://statics.cinemex.com/assets/dist/img/mails/banner-combos-20260218.jpg" alt="Combos" style={{width:'100%', display:'block'}} />
                  </a>
                  <p style={{fontSize:'11px', textAlign:'center', margin:'10px 0 0', color:'#a0a4a8'}}>
                    Regístrate ahora y disfruta el cine en grande. Da clic <a href="#" style={{color:'#fe142f'}}>aquí</a>.
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{background:'#1c1f24', padding:'20px 24px', textAlign:'center'}}>
                  <div style={{marginBottom:'16px'}}>
                    <a href="#" style={{margin:'0 6px'}}><img src="https://statics.cinemex.com/assets/dist/img/mails/icon-footer-instagram.png" alt="Instagram" style={{filter:'invert(1) brightness(2)'}} /></a>
                    <a href="#" style={{margin:'0 6px'}}><img src="https://statics.cinemex.com/assets/dist/img/mails/icon-footer-facebook.png" alt="Facebook" style={{filter:'invert(1) brightness(2)'}} /></a>
                    <a href="#" style={{margin:'0 6px'}}><img src="https://statics.cinemex.com/assets/dist/img/mails/icon-footer-twitter.png" alt="Twitter" style={{filter:'invert(1) brightness(2)'}} /></a>
                    <a href="#" style={{margin:'0 6px'}}><img src="https://statics.cinemex.com/assets/dist/img/mails/icon-footer-tiktok.png" alt="TikTok" style={{filter:'invert(1) brightness(2)'}} /></a>
                    <a href="#" style={{margin:'0 6px'}}><img src="https://statics.cinemex.com/assets/dist/img/mails/icon-footer-youtube.png" alt="YouTube" style={{filter:'invert(1) brightness(2)'}} /></a>
                    <a href="#" style={{margin:'0 6px'}}><img src="https://statics.cinemex.com/assets/dist/img/mails/icon-footer-web.png" alt="Web" style={{filter:'invert(1) brightness(2)'}} /></a>
                  </div>
                  <div style={{fontSize:'12px'}}>
                    <a href="#" style={{color:'#a0a4a8', fontSize:'11px', textDecoration:'none'}}>Aviso de Privacidad</a>
                    <a href="#" style={{color:'#a0a4a8', fontSize:'11px', marginLeft:'8px', textDecoration:'none'}}>Términos y Condiciones</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .cinemex-content { margin: 0 0 16px; background: #1c1f24; border-radius: 0 0 16px 16px; overflow: hidden; }

        @media (max-width: 768px) {
          .cinemex-content { border-radius: 0; margin: 0 0 12px; }
        }
      `}</style>
    </>
  );
};

/* ============================================================
   BARRA DE RESPUESTA
   ============================================================ */
const ReplyBar = () => {
  return (
    <>
      <div className="reply-bar">
        <button className="reply-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 14L4 9l5-5" />
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
          </svg>
          <span>Responder</span>
        </button>

        <button className="reply-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14l5-5-5-5" />
            <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13" />
          </svg>
          <span>Reenviar</span>
        </button>

        <button className="reply-emoji-btn" aria-label="Insertar emoji">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 10h.01" />
            <path d="M15 10h.01" />
            <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .reply-bar { position: sticky; bottom: 0; z-index: 20; padding: 16px; border-top: 1px solid #2a2d33; display: flex; align-items: center; gap: 12px; background: #0f1115; box-shadow: 0 -2px 8px rgba(0,0,0,0.4); }
        .reply-btn { display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 16px 24px; border: none; border-radius: 999px; background: #2c3e50; color: #ffffff; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.2s; font-family: 'Lato', Helvetica, Arial, sans-serif; flex: 1; }
        .reply-btn:hover { background: #3a4f66; }
        .reply-btn svg { flex-shrink: 0; color: #ffffff; }
        .reply-emoji-btn { display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; min-width: 52px; flex-shrink: 0; border: none; border-radius: 50%; background: #2a2d33; color: #a0a4a8; cursor: pointer; transition: background 0.2s; }
        .reply-emoji-btn:hover { background: #3a3f45; }

        @media (max-width: 768px) {
          .reply-bar { padding: 10px 12px; gap: 8px; }
          .reply-btn { padding: 14px 16px; font-size: 15px; gap: 8px; }
          .reply-emoji-btn { width: 46px; height: 46px; min-width: 46px; }
        }
      `}</style>
    </>
  );
};

/* ============================================================
   COMPONENTE PRINCIPAL
   ============================================================ */
const GmailCinemexView = () => {
  return (
    <div className="gmail-cinemex-container">
      <GmailNavbar />

      <div className="cinemex-email-body">
        <div className="email-content-area">
          <EmailHeader />

          <div className="message-body">
            <MessageHeader />
            <CinemexEmail />
          </div>

          <ReplyBar />
        </div>
      </div>

      <style jsx>{`
        .gmail-cinemex-container { max-width: 1360px; margin: 0 auto; background: #0f1115; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 100vh; overflow-y: auto; }
        .cinemex-email-body { display: flex; min-height: calc(100vh - 64px); }
        .email-content-area { flex: 1; min-width: 0; display: flex; flex-direction: column; }
        .message-body { padding: 0 16px 16px; flex: 1; overflow-y: auto; background: #0f1115; }

        @media (max-width: 768px) {
          .gmail-cinemex-container { max-width: 100%; }
          .cinemex-email-body { flex-direction: column; }
          .message-body { padding: 0 0 12px; }
        }
      `}</style>
    </div>
  );
};

export default GmailCinemexView;
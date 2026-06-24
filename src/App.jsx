/**
 * Better Bookings — Travel Portal v4
 * Style: matches better-bookings.com homepage
 * Font:  Poppins
 * CTA:   Orange #E8501A
 * BG:    White + peach tint rgb(252,227,223)
 */

import { useState, useEffect, useRef } from "react";
import { IconSprite, Ico } from "./icons.jsx";

/* ─── PALETTE ────────────────────────────────────────── */
const C = {
  orange:     "#E8501A",
  orangeHover:"#C94215",
  orangeLight:"#FFF0EB",
  peach:      "#FCE3DF",   // rgb(252,227,223)
  peachBorder:"#F5C8C0",
  teal:       "#1DBDB4",
  tealLight:  "#E6F9F8",
  dark:       "#1A1A1A",
  charcoal:   "#333333",
  mid:        "#666666",
  muted:      "#999999",
  border:     "#EBEBEB",
  white:      "#FFFFFF",
  bg:         "#FAFAFA",
  successBg:  "#E8F8EE",
  success:    "#1A7A45",
  warningBg:  "#FFF8E6",
  warning:    "#8A6200",
  dangerBg:   "#FEEEEE",
  danger:     "#C0392B",
};

/* ─── GLOBAL CSS ─────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
.fa-male{color:#2563eb}.fa-female{color:#db2777}.fa-child{color:#16a34a}.fa-baby{color:#ca8a04}
.bb-ico{--bb-ico-line:${C.orange};--bb-ico-fill:${C.orangeLight};display:inline-block;vertical-align:-.15em;flex:none}
.bb-ico--light{--bb-ico-line:#fff;--bb-ico-fill:rgba(255,255,255,.28)}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Poppins',sans-serif;background:${C.bg};color:${C.charcoal}}
input,select,textarea,button{font-family:'Poppins',sans-serif}
a{text-decoration:none}
.tab-bar{background:${C.white};border-bottom:1px solid ${C.border};position:sticky;top:68px;z-index:40}
@media(max-width:600px){.tab-bar{top:56px}}
.tab{padding:.9rem 1.5rem;border:none;background:none;cursor:pointer;font-family:'Poppins',sans-serif;
  font-size:.82rem;font-weight:500;color:${C.muted};border-bottom:3px solid transparent;
  transition:all .2s;white-space:nowrap}
.tab.on{color:${C.orange};border-bottom-color:${C.orange};font-weight:600}
.tab:hover:not(.on){color:${C.charcoal}}
.card{background:${C.white};border-radius:16px;border:1px solid ${C.border};overflow:hidden}
.irow{display:flex;justify-content:space-between;align-items:flex-start;
  padding:.6rem 0;border-bottom:1px solid #F5F5F5;gap:8px}
.irow:last-child{border-bottom:none}
.btn-orange{display:inline-flex;align-items:center;gap:6px;padding:10px 20px;border-radius:50px;
  background:${C.orange};color:#fff;font-family:'Poppins',sans-serif;font-size:.82rem;
  font-weight:600;border:none;cursor:pointer;text-decoration:none;transition:background .2s}
.btn-orange:hover{background:${C.orangeHover}}
.btn-outline{display:inline-flex;align-items:center;gap:6px;padding:10px 20px;border-radius:50px;
  background:#fff;color:${C.charcoal};font-family:'Poppins',sans-serif;font-size:.82rem;
  font-weight:500;border:1.5px solid ${C.border};cursor:pointer;text-decoration:none;transition:border-color .2s}
.btn-outline:hover{border-color:${C.orange};color:${C.orange}}
::-webkit-scrollbar{width:3px;height:3px}::-webkit-scrollbar-thumb{background:#DDD;border-radius:3px}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.fade-up{animation:fadeUp .3s ease both}



/* ── Services & Vouchers section ─────────────────────── */
.bb-timeline{position:relative;padding-left:44px}
.bb-timeline::before{content:'';position:absolute;left:14px;top:20px;bottom:20px;width:2px;
  background:linear-gradient(to bottom,#E8501A,rgba(232,80,26,.1))}
.bb-tl-day{margin-bottom:32px;position:relative}
.bb-tl-marker{position:absolute;left:-44px;top:2px;width:28px;height:28px;border-radius:50%;
  background:#E8501A;color:#fff;font-size:.75rem;font-weight:700;
  display:flex;align-items:center;justify-content:center}
.bb-tl-label{font-size:1rem;font-weight:700;color:#1e293b;margin-bottom:12px}
.bb-tl-item{background:#fff;border:1px solid #e5e7eb;border-radius:12px;
  padding:14px 16px;display:flex;align-items:flex-start;gap:12px;
  margin-bottom:8px;transition:border-color .15s}
.bb-tl-item:hover{border-color:#E8501A}
.bb-tl-icon{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;
  justify-content:center;font-size:.95rem;flex-shrink:0}
.bb-tl-icon.hotel{background:#fff3ee;color:#E8501A}
.bb-tl-icon.transfer{background:#f0fdf4;color:#16a34a}
.bb-tl-icon.experience{background:#eef6ff;color:#2563eb}
.bb-tl-icon.flight{background:#faf5ff;color:#7c3aed}
.bb-vcard{background:#fff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;
  transition:box-shadow .15s}
.bb-vcard:hover{box-shadow:0 4px 16px rgba(0,0,0,.08)}
.bb-vgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}
.bb-hotel-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}
.bb-hotel-card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden}
.bb-hotel-img{width:100%;height:160px;overflow:hidden;background:#f0f0f5;
  display:flex;align-items:center;justify-content:center;font-size:2.5rem}
.bb-hotel-img img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}
.bb-hotel-card:hover .bb-hotel-img img{transform:scale(1.04)}
@media(max-width:600px){
  .bb-timeline{padding-left:32px}
  .bb-tl-marker{left:-32px;width:22px;height:22px;font-size:.68rem}
  .bb-vgrid,.bb-hotel-grid{grid-template-columns:1fr}
}
/* ── Mobile responsive ── */
@media(max-width:600px){
  .tab{padding:.7rem .9rem;font-size:.75rem}
  .card{border-radius:12px}
  .btn-orange{padding:9px 16px;font-size:.8rem}
  .btn-outline{padding:9px 16px;font-size:.8rem}
  .irow{flex-direction:column;align-items:flex-start;gap:2px;padding:.55rem 0}
  .irow span:last-child{max-width:100%!important;text-align:left!important;font-weight:500}
}
@media(max-width:480px){
  .tab{padding:.6rem .75rem;font-size:.72rem}
}
`;

/* ─── CONFIG ─────────────────────────────────────────── */
const API_BASE    = "https://review.better-bookings.com/api/ext/offer";
const API_SERVICES = "https://review.better-bookings.com/api/ext/services";
const API_SVCREQ   = "https://review.better-bookings.com/api/ext/service-request";
const API_CARRENTAL = "https://review.better-bookings.com/api/ext/carrental";
const LANG_MAP    = { 1:"EN", 2:"IT", 3:"ES", 4:"EN", 5:"NL", 6:"FR", 7:"DE" };
const STATUS_CODE = {
  "1":"conf",   // CONFIRMED
  "2":"canc",   // CANCELLED
  "3":"over",   // OVERBOOKING
  "4":"noshow", // NO SHOW
  "5":"pend",   // WAITING FOR CONFIRM
  "6":"pend",   // OFFER NOT CONFIRMED
  "7":"import", // IMPORTED
};
const PET = {
  EN:{ "1":"Pets allowed","2":"Pets not allowed","3":"Small & medium pets allowed","4":"Allowed with supplement","5":"On request","0":"Contact hotel" },
  IT:{ "1":"Animali ammessi","2":"Animali non ammessi","3":"Ammessi piccola e media taglia","4":"Ammessi con supplemento","5":"Su richiesta","0":"Contatta l'hotel" },
  ES:{ "1":"Mascotas permitidas","2":"Mascotas no permitidas","3":"Permitidas razas pequeñas y medianas","4":"Permitidas con suplemento","5":"Bajo petición","0":"Consultar hotel" },
  FR:{ "1":"Animaux acceptés","2":"Animaux non acceptés","3":"Petits et moyens animaux acceptés","4":"Acceptés avec supplément","5":"Sur demande","0":"Contacter l'hôtel" },
  DE:{ "1":"Haustiere erlaubt","2":"Keine Haustiere","3":"Kleine und mittelgroße Tiere erlaubt","4":"Mit Aufpreis erlaubt","5":"Auf Anfrage","0":"Hotel kontaktieren" },
  NL:{ "1":"Huisdieren toegestaan","2":"Geen huisdieren","3":"Kleine en middelgrote dieren toegestaan","4":"Toegestaan met toeslag","5":"Op aanvraag","0":"Contact hotel" },
};

// Local taxes labels
const TAXES = {
  EN:{ "1":"Local taxes required","2":"Local taxes not applicable (note: this may change at the destination; please check with the property)" },
  IT:{ "1":"Tassa di soggiorno richiesta","2":"Tassa di soggiorno non richiesta (si precisa che potrebbe essere soggetta a variazioni; si consiglia di verificare direttamente con la struttura)" },
  ES:{ "1":"Tasas locales requeridas","2":"Tasas locales no requeridas (nota: esto podría cambiar; consulte directamente con el alojamiento)" },
  FR:{ "1":"Taxes de séjour requises","2":"Taxes de séjour non requises (remarque : cela peut changer ; veuillez vérifier auprès de l'établissement)" },
  DE:{ "1":"Lokale Steuern erforderlich","2":"Lokale Steuern nicht erforderlich (Hinweis: Dies kann sich ändern; bitte beim Hotel nachfragen)" },
  NL:{ "1":"Lokale belastingen vereist","2":"Lokale belastingen niet vereist (opmerking: dit kan veranderen; controleer dit bij het verblijf)" },
};

// Disabled access labels
const ACCESS = {
  EN:{ "1":"Accessible","2":"Not accessible","3":"On request" },
  IT:{ "1":"Accessibile","2":"Non accessibile","3":"Su richiesta" },
  ES:{ "1":"Accesible","2":"No accesible","3":"Bajo petición" },
  FR:{ "1":"Accessible","2":"Non accessible","3":"Sur demande" },
  DE:{ "1":"Barrierefrei","2":"Nicht barrierefrei","3":"Auf Anfrage" },
  NL:{ "1":"Toegankelijk","2":"Niet toegankelijk","3":"Op aanvraag" },
};

/* ─── TRANSLATIONS ───────────────────────────────────── */
const T = {
  EN:{
    overview:"Overview",flights:"Flights & Train",payments:"Payments",tours:"Services & Vouchers",
    checkin:"Check-in",checkout:"Check-out",nights:"nights",night:"night",
    room:"Room",board:"Included Services",ref:"Booking Ref.",hconf:"Hotel Confirmation",
    booked:"Booked on",status:"Status",conf:"Confirmed",pend:"Pending",canc:"Cancelled",over:"Overbooking",noshow:"No Show",importing:"Imported",
    days:"days to go",today:"Today!",done:"Trip completed",
    cancpol:"Cancellation Policy",taxes:"Local Taxes",deposit:"Deposit",pets:"Pets",access:"Accessibility",
    fout:"Outbound Flight",fret:"Return Flight",direct:"Direct",stop:"Stopover",
    pnr:"PNR",bag:"Baggage allowance",pbag:"Personal Item",cbag:"Cabin Bag",sbag:"Checked Bag",
    mflight:"Manage my flight",eticket:"Download E-Ticket",
    trainbk:"Train Booking",trainref:"Train Ref.",flightPending:"Your flight is being confirmed. You will receive an email when the tickets are available.",trainPending:"Your train booking is being confirmed. You will receive an email when the tickets are available.",trainStatus:"Train Status",trainManage:"Manage Train Reservation",trainDep:"Departure",trainArr:"Arrival",trainLine:"Train",trainReturn:"Return journey",cancDate:"Cancellation date",payNow:"Pay Now",
    psum:"Payment Summary",total:"Total Amount",split:"Instalment Plan",
    p1:"1st Payment",p2:"2nd Payment",p3:"3rd Payment",paid:"Paid",due:"Due",admFeeMsg:"We were unable to process the charge as per the booking conditions. Please pay the balance using the button below or by bank transfer to:\n\nAccount name: BETTER BOOKINGS LTD\nIBAN: GB67HBUK40127682816735\nSWIFT: HBUKGB4B\nAmount: {amount} (including admin fee)\nReference: {ref}\n\nPlease send proof of payment to invoices@better-bookings.com. If we do not receive confirmation within 48 hours, the booking will be automatically cancelled and cancellation fees will apply.",cancRefund:"We confirm that your booking has been cancelled. If a refund is due, it will be processed within 10 business days to the original payment method.",salesAuto:"The balance will be charged at the due date to the card used for the deposit payment. If you wish to use an alternative payment method, a 5% administrative fee applies (minimum €35.00).",salesManual:"Before the due date you will receive a reminder. You can pay at any time before the deadline by clicking the invoice link.",
    inv:"Invoices",dlpdf:"Download PDF",noInv:"Not yet available",invAfterCheckout:"Invoices will be available after your check-out.",
    tact:"Tours & Activities",xtra:"Additional Services",extserv:"External Services",
    shop:"Add Services",shopIntro:"Enhance your trip with these optional extras.",shopOpen:"View / Book",shopRequest:"Request",shopSending:"Sending…",shopSent:"Request sent ✓",shopErr:"Something went wrong. Please try again.",shopPreview:"Preview mode — not visible to customers.",
    guest:"Traveller Details",gname:"Name",gphone:"Phone",
    voucher:"View Hotel Voucher",dest:"About the Destination",stay:"Your Stay",hotelInfo:"Hotel Information",address:"Address",
    adults:"Adults",children:"Children",infants:"Infants",travellers:"All Travellers",
    vcc:"Payment Card",vccnum:"Card Number",vccexp:"Expires",vcccvc:"CVC",
    support:"Support & FAQ",
    helpTitle:"How can we help you?",
    helpLead:"Find answers to your questions or send us a request.",
    searchLabel:"Search FAQs",
    searchPh:"Type: date change, invoice, check-in…",
    searchBtn:"Search",
    faqTitle:"Top FAQs",
    catPayments:"Payments",
    catChanges:"Changes & cancellations",
    catDocs:"Documents & invoices",
    catFlights:"Flights",
    catHotels:"Hotels & services",
    catPrivacy:"Privacy & data",
    showAll:"Show all ({n})",
    showLess:"Show less",
    noResults:"No results. Try different words or contact us.",
    formTitle:"Send us a request",
    formName:"Full name",
    formEmail:"Email",
    formBooking:"Booking ID",
    formTopic:"Topic",
    formMsg:"Message",msgTitle:"Messages",msgUnread:"unread",msgNoMsg:"No messages yet.",
    formMsgPh:"Tell us briefly how we can help",
    formSend:"Send request",
    formOk:"Thank you! We will get back to you soon.",
    topicPayments:"Payments",
    topicChanges:"Change/cancellation",
    topicDocs:"Documents/Invoice",
    topicTravel:"Travel assistance",
    topicOther:"Other",
    channels:"Other channels",
    loading:"Loading your booking…",
    bookingPerson:"Booking contact",
    tcLabel:"Terms & Conditions",privacyLabel:"Privacy Policy",
notfound:"Booking not found.",
    errtitle:"Oops, something went wrong",errsub:"Please check the link in your confirmation email.",
    hi:"Hi",yourtrip:"Your Trip",
    voucherBtn:"View Hotel Voucher",docsBtn:"Travel Documents",
    docsNotReady:"Documents not yet available",
    docsInfoTitle:"When will you receive your documents?",
    docsInfo:`To offer you maximum transparency, here is a summary of our standard procedures:\n\n🏨 Hotel Voucher: sent approximately 7 days before departure.\n\n✈️ Flight tickets:\n• If you purchased flights through us, all information (schedules, booking codes, baggage allowance) is already available in the e-ticket in your personal area. Boarding passes must be requested directly from the airline within its indicated timeframes.\n• If you purchased flights independently, document management is handled directly with your chosen airline.\n\n🎟️ Event tickets (concerts, shows, etc.): released in digital format by the organiser, usually 3 days before the event, sometimes on the day itself. You will receive your tickets in time and can access them from your smartphone.\n\nAll communications and documents are sent by email to the address provided at booking.\n\n📌 These timelines are standard and apply to all our customers, regardless of destination or package type.`,
  },
  IT:{
    overview:"Panoramica",flights:"Voli & Treno",payments:"Pagamenti",tours:"Servizi & Voucher",
    checkin:"Check-in",checkout:"Check-out",nights:"notti",night:"notte",
    room:"Camera",board:"Servizi Inclusi",ref:"Rif. Prenotazione",hconf:"Conferma Hotel",
    booked:"Prenotato il",status:"Stato",conf:"Confermata",pend:"In attesa",canc:"Cancellata",over:"Overbooking",noshow:"No Show",importing:"Importata",
    days:"giorni al viaggio",today:"Oggi!",done:"Viaggio completato",
    cancpol:"Politica di Cancellazione",taxes:"Tasse Locali",deposit:"Deposito",pets:"Animali",access:"Accessibilità",
    fout:"Volo di Andata",fret:"Volo di Ritorno",direct:"Diretto",stop:"Scalo",
    pnr:"Codice PNR",bag:"Bagaglio incluso",pbag:"Oggetto Personale",cbag:"Bagaglio Cabina",sbag:"Bagaglio Stiva",
    mflight:"Gestisci il mio volo",eticket:"Scarica E-Ticket",
    trainbk:"Prenotazione Treno",trainref:"Riferimento Treno",flightPending:"Il tuo volo è in fase di conferma. Riceverai una email quando i biglietti saranno disponibili.",trainPending:"La tua prenotazione treno è in fase di conferma. Riceverai una email quando i biglietti saranno disponibili.",trainStatus:"Stato Treno",trainManage:"Gestisci Prenotazione Treno",trainDep:"Partenza",trainArr:"Arrivo",trainLine:"Treno",trainReturn:"Viaggio di ritorno",cancDate:"Data di cancellazione",payNow:"Paga Ora",
    psum:"Riepilogo Pagamenti",total:"Importo Totale",split:"Piano Rateale",
    p1:"1° Rata",p2:"2° Rata",p3:"3° Rata",paid:"Pagato",due:"Da pagare",admFeeMsg:"Non siamo riusciti ad effettuare l'addebito come previsto dalle condizioni di prenotazione. Per effettuare il saldo utilizza il pulsante qui sotto oppure il bonifico bancario alle seguenti coordinate:\n\nIntestatario: BETTER BOOKINGS LTD\nIBAN: GB67HBUK40127682816735\nSWIFT Code: HBUKGB4B\nImporto: {amount} (importo comprensivo di spese amministrative)\nCausale: Prenotazione {ref}\n\nLe ricordiamo che per confermare la prenotazione abbiamo bisogno di copia della contabile via email a invoices@better-bookings.com. Nel caso non ricevessimo riscontro entro 48 ore, la prenotazione sarà automaticamente cancellata e le saranno addebitate le spese di cancellazione.",cancRefund:"Ti confermiamo che la tua prenotazione è stata cancellata. Qualora sia previsto il rimborso, verrà elaborato entro i prossimi 10 giorni lavorativi direttamente sul metodo di pagamento utilizzato per la prenotazione.",salesAuto:"Il saldo si effettuerà alla scadenza indicata direttamente sulla carta utilizzata per il pagamento dell'acconto. Se desidera procedere con un metodo di pagamento alternativo, il cambio comporta un supplemento amministrativo del 5% dell'importo da saldare, con un minimo di 35,00 €.",salesManual:"In prossimità della scadenza riceverà una notifica di promemoria. La rata è comunque pagabile in qualsiasi momento prima della scadenza cliccando sul link della fattura.",
    inv:"Fatture",dlpdf:"Scarica PDF",noInv:"Non ancora disponibile",invAfterCheckout:"Le fatture saranno disponibili dopo il check-out.",
    tact:"Tour & Attività",xtra:"Servizi Aggiuntivi",extserv:"Servizi Esterni",
    shop:"Aggiungi Servizi",shopIntro:"Arricchisci il tuo viaggio con questi extra opzionali.",shopOpen:"Vedi / Prenota",shopRequest:"Richiedi",shopSending:"Invio…",shopSent:"Richiesta inviata ✓",shopErr:"Qualcosa è andato storto. Riprova.",shopPreview:"Modalità anteprima — non visibile ai clienti.",
    guest:"Dati Viaggiatore",gname:"Nome",gphone:"Telefono",
    voucher:"Visualizza Voucher Hotel",dest:"La Destinazione",stay:"Il tuo Soggiorno",hotelInfo:"Informazioni Hotel",address:"Indirizzo",
    adults:"Adulti",children:"Bambini",infants:"Neonati",travellers:"Tutti i Viaggiatori",
    vcc:"Carta di Pagamento",vccnum:"Numero Carta",vccexp:"Scadenza",vcccvc:"CVC",
    support:"Assistenza & FAQ",
    helpTitle:"Come possiamo aiutarti?",
    helpLead:"Trova risposte o inviaci una richiesta.",
    searchLabel:"Cerca nelle FAQ",
    searchPh:"Scrivi: cambio data, fattura, check-in…",
    searchBtn:"Cerca",
    faqTitle:"FAQ principali",
    catPayments:"Pagamenti",
    catChanges:"Modifiche & cancellazioni",
    catDocs:"Documenti & fatture",
    catFlights:"Voli",
    catHotels:"Hotel & servizi",
    catPrivacy:"Privacy & dati",
    showAll:"Mostra tutto ({n})",
    showLess:"Mostra meno",
    noResults:"Nessun risultato. Prova parole diverse o contattaci.",
    formTitle:"Invia una richiesta",
    formName:"Nome e cognome",
    formEmail:"Email",
    formBooking:"ID Prenotazione",
    formTopic:"Motivo",
    formMsg:"Messaggio",msgTitle:"Messaggi",msgUnread:"non letti",msgNoMsg:"Nessun messaggio.",
    formMsgPh:"Spiega in breve come possiamo aiutarti",
    formSend:"Invia richiesta",
    formOk:"Grazie! Ti risponderemo il prima possibile.",
    topicPayments:"Pagamenti",
    topicChanges:"Modifica/cancellazione",
    topicDocs:"Documenti/Fattura",
    topicTravel:"Assistenza in viaggio",
    topicOther:"Altro",
    channels:"Altri canali",
    loading:"Caricamento prenotazione…",
    bookingPerson:"Persona che effettua la prenotazione",
    tcLabel:"Termini e Condizioni",privacyLabel:"Privacy Policy",
notfound:"Prenotazione non trovata.",
    errtitle:"Ops, qualcosa è andato storto",errsub:"Controlla il link nella tua email di conferma.",
    hi:"Ciao",yourtrip:"Il tuo Viaggio",
    voucherBtn:"Visualizza Voucher Hotel",docsBtn:"Documenti di Viaggio",
    docsNotReady:"Documenti non ancora disponibili",
    docsInfoTitle:"Quando riceverai i tuoi documenti?",
    docsInfo:"Per offrirti la massima trasparenza, desideriamo riepilogare le procedure standard:\n\n🏨 Voucher Hotel: viene inviato circa 7 giorni prima della partenza.\n\n✈️ Biglietti aerei:\n• Per chi ha acquistato il volo tramite noi, le informazioni (orari, codici di prenotazione, franchigia bagaglio) sono già disponibili nell'eticket nella tua area riservata. La carta di imbarco deve essere richiesta direttamente alla compagnia aerea nei tempi da essa indicati.\n• Per chi ha acquistato il volo in autonomia, la gestione dei documenti avviene direttamente con la compagnia aerea scelta.\n\n🎟️ Biglietti per eventi (concerti, spettacoli, ecc.): vengono rilasciati in formato digitale direttamente dall'organizzatore, solitamente 3 giorni prima dell'evento, in alcuni casi anche il giorno stesso. Riceverai i tuoi biglietti in tempo utile e potrai accedervi dal tuo smartphone.\n\nTutte le comunicazioni e i documenti vengono trasmessi via email all'indirizzo indicato in fase di prenotazione.\n\n📌 Le tempistiche sopra riportate sono standard e valide per tutti i nostri clienti, indipendentemente dalla destinazione o dal tipo di pacchetto acquistato.",
  },
  ES:{
    overview:"Resumen",flights:"Vuelos y Tren",payments:"Pagos",tours:"Servicios & Vouchers",
    checkin:"Check-in",checkout:"Check-out",nights:"noches",night:"noche",
    room:"Habitación",board:"Servicios Incluidos",ref:"Ref. Reserva",hconf:"Confirmación Hotel",
    booked:"Reservado el",status:"Estado",conf:"Confirmada",pend:"Pendiente",canc:"Cancelada",over:"Overbooking",noshow:"No Show",importing:"Importada",
    days:"días para el viaje",today:"¡Hoy!",done:"Viaje completado",
    cancpol:"Política de Cancelación",taxes:"Tasas Locales",deposit:"Depósito",pets:"Mascotas",access:"Accesibilidad",
    fout:"Vuelo de Ida",fret:"Vuelo de Vuelta",direct:"Directo",stop:"Escala",
    pnr:"PNR",bag:"Equipaje incluido",pbag:"Artículo Personal",cbag:"Equipaje de Mano",sbag:"Equipaje Facturado",
    mflight:"Gestionar mi vuelo",eticket:"Descargar E-Ticket",
    trainbk:"Reserva de Tren",trainref:"Ref. Tren",flightPending:"Tu vuelo está en proceso de confirmación. Recibirás un email cuando los billetes estén disponibles.",trainPending:"Tu reserva de tren está en proceso de confirmación. Recibirás un email cuando los billetes estén disponibles.",trainStatus:"Estado Tren",trainManage:"Gestionar Reserva de Tren",trainDep:"Salida",trainArr:"Llegada",trainLine:"Tren",trainReturn:"Viaje de regreso",cancDate:"Fecha de cancelación",payNow:"Pagar Ahora",
    psum:"Resumen de Pagos",total:"Importe Total",split:"Plan de Pago",
    p1:"1er Pago",p2:"2º Pago",p3:"3er Pago",paid:"Pagado",due:"Pendiente",admFeeMsg:"No hemos podido realizar el cargo según las condiciones de reserva. Le rogamos efectúe el pago usando el botón o mediante transferencia bancaria:\n\nTitular: BETTER BOOKINGS LTD\nIBAN: GB67HBUK40127682816735\nSWIFT: HBUKGB4B\nImporte: {amount} (incluidos gastos administrativos)\nConcepto: Reserva {ref}\n\nEnvíe el justificante a invoices@better-bookings.com. Si no recibimos confirmación en 48 horas, la reserva se cancelará automáticamente con los gastos correspondientes.",cancRefund:"Te confirmamos que tu reserva ha sido cancelada. Si corresponde un reembolso, se procesará en los próximos 10 días hábiles al método de pago original.",salesAuto:"El saldo se realizará en la fecha indicada directamente con la tarjeta utilizada para el pago del depósito. Si desea utilizar otro método de pago, el cambio conlleva un recargo administrativo del 5% del importe a abonar, con un mínimo de 35,00 €.",salesManual:"Antes del vencimiento recibirá un recordatorio. Puede pagar en cualquier momento antes del vencimiento haciendo clic en el enlace de la factura.",
    inv:"Facturas",dlpdf:"Descargar PDF",noInv:"Aún no disponible",invAfterCheckout:"Las facturas estarán disponibles después del check-out.",
    tact:"Tours y Actividades",xtra:"Servicios Adicionales",extserv:"Servicios Externos",
    shop:"Añadir Servicios",shopIntro:"Mejora tu viaje con estos extras opcionales.",shopOpen:"Ver / Reservar",shopRequest:"Solicitar",shopSending:"Enviando…",shopSent:"Solicitud enviada ✓",shopErr:"Algo salió mal. Inténtalo de nuevo.",shopPreview:"Modo vista previa — no visible para clientes.",
    guest:"Datos del Viajero",gname:"Nombre",gphone:"Teléfono",
    voucher:"Ver Voucher Hotel",dest:"El Destino",stay:"Tu Estancia",hotelInfo:"Información Hotel",address:"Dirección",
    adults:"Adultos",children:"Niños",infants:"Bebés",travellers:"Todos los Viajeros",
    vcc:"Tarjeta de Pago",vccnum:"Número Tarjeta",vccexp:"Vence",vcccvc:"CVC",
    support:"Asistencia & FAQ",
    helpTitle:"¿Cómo podemos ayudarte?",
    helpLead:"Encuentra respuestas o envíanos una solicitud.",
    searchLabel:"Buscar en FAQ",
    searchPh:"Escribe: cambio fecha, factura, check-in…",
    searchBtn:"Buscar",
    faqTitle:"FAQs principales",
    catPayments:"Pagos",
    catChanges:"Cambios & cancelaciones",
    catDocs:"Documentos & facturas",
    catFlights:"Vuelos",
    catHotels:"Hoteles & servicios",
    catPrivacy:"Privacidad & datos",
    showAll:"Mostrar todo ({n})",
    showLess:"Mostrar menos",
    noResults:"Sin resultados. Prueba otras palabras o contáctanos.",
    formTitle:"Enviar una solicitud",
    formName:"Nombre y apellidos",
    formEmail:"Correo electrónico",
    formBooking:"ID de reserva",
    formTopic:"Motivo",
    formMsg:"Mensaje",msgTitle:"Mensajes",msgUnread:"sin leer",msgNoMsg:"Sin mensajes.",
    formMsgPh:"Cuéntanos brevemente cómo podemos ayudarte",
    formSend:"Enviar solicitud",
    formOk:"¡Gracias! Te responderemos lo antes posible.",
    topicPayments:"Pagos",
    topicChanges:"Modificación/cancelación",
    topicDocs:"Documentos/Factura",
    topicTravel:"Asistencia durante el viaje",
    topicOther:"Otro",
    channels:"Otros canales",
    loading:"Cargando reserva…",
    bookingPerson:"Persona que realiza la reserva",
    tcLabel:"Términos y Condiciones",privacyLabel:"Política de Privacidad",
notfound:"Reserva no encontrada.",
    errtitle:"Algo salió mal",errsub:"Verifica el enlace en tu email de confirmación.",
    hi:"Hola",yourtrip:"Tu Viaje",
    voucherBtn:"Ver Voucher Hotel",docsBtn:"Documentos de Viaje",
    docsNotReady:"Documentos aún no disponibles",
    docsInfoTitle:"¿Cuándo recibirás tus documentos?",
    docsInfo:"Para ofrecerte la máxima transparencia, queremos resumir los procedimientos estándar:\n\n🏨 Voucher de Hotel: se envía aproximadamente 7 días antes de la salida.\n\n✈️ Billetes de avión:\n• Si compraste el vuelo con nosotros, toda la información (horarios, códigos de reserva, franquicia de equipaje) ya está disponible en el e-ticket de tu área privada. La tarjeta de embarque debe solicitarse directamente a la aerolínea en los plazos que ella indique.\n• Si compraste el vuelo por tu cuenta, la gestión de documentos se realiza directamente con la aerolínea elegida.\n\n🎟️ Entradas para eventos (conciertos, espectáculos, etc.): se publican en formato digital directamente por el organizador, normalmente 3 días antes del evento, en algunos casos incluso el mismo día. Recibirás tus entradas a tiempo y podrás acceder a ellas desde tu smartphone.\n\nTodas las comunicaciones y documentos se envían por email a la dirección indicada en el momento de la reserva.\n\n📌 Los plazos indicados son estándar y válidos para todos nuestros clientes, independientemente del destino o tipo de paquete adquirido.",
  },
  FR:{
    overview:"Aperçu",flights:"Vols & Train",payments:"Paiements",tours:"Services & Vouchers",
    checkin:"Check-in",checkout:"Check-out",nights:"nuits",night:"nuit",
    room:"Chambre",board:"Services Inclus",ref:"Réf. Réservation",hconf:"Confirmation Hôtel",
    booked:"Réservé le",status:"Statut",conf:"Confirmée",pend:"En attente",canc:"Annulée",over:"Overbooking",noshow:"No Show",importing:"Importée",
    days:"jours avant le départ",today:"Aujourd'hui!",done:"Voyage terminé",
    cancpol:"Politique d'Annulation",taxes:"Taxes Locales",deposit:"Dépôt",pets:"Animaux",access:"Accessibilité",
    fout:"Vol Aller",fret:"Vol Retour",direct:"Direct",stop:"Escale",
    pnr:"Code PNR",bag:"Bagages inclus",pbag:"Bagage Personnel",cbag:"Bagage Cabine",sbag:"Bagage Enregistré",
    mflight:"Gérer mon vol",eticket:"Télécharger E-Ticket",
    trainbk:"Réservation Train",trainref:"Réf. Train",flightPending:"Votre vol est en cours de confirmation. Vous recevrez un email dès que les billets seront disponibles.",trainPending:"Votre réservation de train est en cours de confirmation. Vous recevrez un email dès que les billets seront disponibles.",trainStatus:"Statut Train",trainManage:"Gérer la Réservation Train",trainDep:"Départ",trainArr:"Arrivée",trainLine:"Train",trainReturn:"Voyage retour",cancDate:"Date d'annulation",payNow:"Payer Maintenant",
    psum:"Récapitulatif Paiements",total:"Montant Total",split:"Plan de Paiement",
    p1:"1er Paiement",p2:"2ème Paiement",p3:"3ème Paiement",paid:"Payé",due:"À payer",admFeeMsg:"Nous n'avons pas pu effectuer le prélèvement comme prévu dans les conditions de réservation. Veuillez régler le solde via le bouton ci-dessous ou par virement bancaire:\n\nBénéficiaire : BETTER BOOKINGS LTD\nIBAN : GB67HBUK40127682816735\nSWIFT : HBUKGB4B\nMontant : {amount} (frais administratifs inclus)\nRéférence : Réservation {ref}\n\nMerci d'envoyer la preuve de paiement à invoices@better-bookings.com. Sans confirmation sous 48h, la réservation sera annulée automatiquement avec les frais correspondants.",cancRefund:"Nous vous confirmons que votre réservation a été annulée. Si un remboursement est prévu, il sera traité dans les 10 jours ouvrables suivants sur le moyen de paiement utilisé.",salesAuto:"Le solde sera débité à l'échéance sur la carte utilisée pour le règlement de l'acompte. Si vous souhaitez utiliser un autre moyen de paiement, un supplément administratif de 5% du montant à régler sera appliqué (minimum 35,00 €).",salesManual:"Avant l'échéance, vous recevrez un rappel. Vous pouvez payer à tout moment avant l'échéance en cliquant sur le lien de la facture.",
    inv:"Factures",dlpdf:"Télécharger PDF",noInv:"Pas encore disponible",invAfterCheckout:"Les factures seront disponibles après le check-out.",
    tact:"Tours & Activités",xtra:"Services Additionnels",extserv:"Services Externes",
    shop:"Ajouter des Services",shopIntro:"Enrichissez votre voyage avec ces extras en option.",shopOpen:"Voir / Réserver",shopRequest:"Demander",shopSending:"Envoi…",shopSent:"Demande envoyée ✓",shopErr:"Une erreur est survenue. Veuillez réessayer.",shopPreview:"Mode aperçu — non visible par les clients.",
    guest:"Données Voyageur",gname:"Nom",gphone:"Téléphone",
    voucher:"Voir Voucher Hôtel",dest:"La Destination",stay:"Votre Séjour",hotelInfo:"Informations Hôtel",address:"Adresse",
    adults:"Adultes",children:"Enfants",infants:"Nourrissons",travellers:"Tous les Voyageurs",
    vcc:"Carte de Paiement",vccnum:"Numéro de Carte",vccexp:"Expire",vcccvc:"CVC",
    support:"Assistance & FAQ",
    helpTitle:"Comment pouvons-nous vous aider ?",
    helpLead:"Trouvez des réponses ou envoyez-nous une demande.",
    searchLabel:"Rechercher dans les FAQ",
    searchPh:"Tapez : changement de date, facture, check-in…",
    searchBtn:"Rechercher",
    faqTitle:"FAQs principales",
    catPayments:"Paiements",
    catChanges:"Modifications & annulations",
    catDocs:"Documents & factures",
    catFlights:"Vols",
    catHotels:"Hôtels & services",
    catPrivacy:"Confidentialité & données",
    showAll:"Tout afficher ({n})",
    showLess:"Afficher moins",
    noResults:"Aucun résultat. Essayez d'autres mots ou contactez-nous.",
    formTitle:"Envoyer une demande",
    formName:"Nom et prénom",
    formEmail:"E-mail",
    formBooking:"ID de réservation",
    formTopic:"Motif",
    formMsg:"Message",msgTitle:"Messages",msgUnread:"non lus",msgNoMsg:"Aucun message.",
    formMsgPh:"Expliquez brièvement comment nous pouvons vous aider",
    formSend:"Envoyer la demande",
    formOk:"Merci ! Nous vous répondrons au plus vite.",
    topicPayments:"Paiements",
    topicChanges:"Modification/annulation",
    topicDocs:"Documents/Facture",
    topicTravel:"Assistance en voyage",
    topicOther:"Autre",
    channels:"Autres canaux",
    loading:"Chargement de la réservation…",
    bookingPerson:"Personne effectuant la réservation",
    tcLabel:"Conditions Générales",privacyLabel:"Politique de Confidentialité",
notfound:"Réservation introuvable.",
    errtitle:"Quelque chose s'est mal passé",errsub:"Vérifiez le lien dans votre email de confirmation.",
    hi:"Bonjour",yourtrip:"Votre Voyage",
    voucherBtn:"Voir Voucher Hôtel",docsBtn:"Documents de Voyage",
    docsNotReady:"Documents pas encore disponibles",
    docsInfoTitle:"Quand recevrez-vous vos documents?",
    docsInfo:"Pour vous offrir la plus grande transparence, voici un résumé de nos procédures standard:\n\n🏨 Voucher Hôtel: envoyé environ 7 jours avant le départ.\n\n✈️ Billets d'avion:\n• Si vous avez acheté le vol avec nous, toutes les informations sont déjà disponibles dans votre espace personnel. La carte d'embarquement doit être demandée directement à la compagnie aérienne.\n• Si vous avez acheté le vol indépendamment, la gestion des documents se fait directement avec la compagnie choisie.\n\n🎟️ Billets d'événements: publiés en format numérique par l'organisateur, généralement 3 jours avant l'événement.\n\nToutes les communications sont envoyées par email à l'adresse indiquée lors de la réservation.\n\n📌 Ces délais sont standard et valables pour tous nos clients.",
  },
  DE:{
    overview:"Übersicht",flights:"Flüge & Zug",payments:"Zahlungen",tours:"Leistungen & Voucher",
    checkin:"Check-in",checkout:"Check-out",nights:"Nächte",night:"Nacht",
    room:"Zimmer",board:"Inkludierte Leistungen",ref:"Buchungsreferenz",hconf:"Hotelbestätigung",
    booked:"Gebucht am",status:"Status",conf:"Bestätigt",pend:"Ausstehend",canc:"Storniert",over:"Overbooking",noshow:"No Show",importing:"Importiert",
    days:"Tage bis zur Reise",today:"Heute!",done:"Reise abgeschlossen",
    cancpol:"Stornierungsbedingungen",taxes:"Lokale Steuern",deposit:"Kaution",pets:"Haustiere",access:"Barrierefreiheit",
    fout:"Hinflug",fret:"Rückflug",direct:"Direkt",stop:"Zwischenstopp",
    pnr:"PNR-Code",bag:"Inkludiertes Gepäck",pbag:"Persönlicher Artikel",cbag:"Handgepäck",sbag:"Aufgegebenes Gepäck",
    mflight:"Flug verwalten",eticket:"E-Ticket herunterladen",
    trainbk:"Zugreservierung",trainref:"Zugref.",flightPending:"Ihr Flug wird gerade bestätigt. Sie erhalten eine E-Mail, sobald die Tickets verfügbar sind.",trainPending:"Ihre Zugbuchung wird gerade bestätigt. Sie erhalten eine E-Mail, sobald die Tickets verfügbar sind.",trainStatus:"Zugstatus",trainManage:"Zugbuchung verwalten",trainDep:"Abfahrt",trainArr:"Ankunft",trainLine:"Zug",trainReturn:"Rückfahrt",cancDate:"Stornierungsdatum",payNow:"Jetzt Bezahlen",
    psum:"Zahlungsübersicht",total:"Gesamtbetrag",split:"Zahlungsplan",
    p1:"1. Zahlung",p2:"2. Zahlung",p3:"3. Zahlung",paid:"Bezahlt",due:"Ausstehend",admFeeMsg:"Wir konnten die Belastung gemäß den Buchungsbedingungen nicht vornehmen. Bitte begleichen Sie den Restbetrag über den Button unten oder per Überweisung:\n\nKontoinh.: BETTER BOOKINGS LTD\nIBAN: GB67HBUK40127682816735\nSWIFT: HBUKGB4B\nBetrag: {amount} (inkl. Verwaltungsgebühr)\nVerwendungszweck: Buchung {ref}\n\nBitte senden Sie den Zahlungsbeleg an invoices@better-bookings.com. Ohne Bestätigung innerhalb von 48 Stunden wird die Buchung storniert und Stornogebühren werden erhoben.",cancRefund:"Wir bestätigen, dass Ihre Buchung storniert wurde. Sofern eine Erstattung vorgesehen ist, wird diese innerhalb von 10 Werktagen auf die ursprüngliche Zahlungsmethode bearbeitet.",salesAuto:"Der Restbetrag wird zum angegebenen Datum automatisch von der für die Anzahlung verwendeten Karte abgebucht. Bei Wahl einer alternativen Zahlungsmethode fällt eine Verwaltungsgebühr von 5% des offenen Betrags an (mindestens 35,00 €).",salesManual:"Vor dem Fälligkeitsdatum erhalten Sie eine Erinnerung. Sie können jederzeit vor Ablauf der Frist bezahlen, indem Sie auf den Rechnungslink klicken.",
    inv:"Rechnungen",dlpdf:"PDF herunterladen",noInv:"Noch nicht verfügbar",invAfterCheckout:"Rechnungen sind nach dem Check-out verfügbar.",
    tact:"Touren & Aktivitäten",xtra:"Zusätzliche Leistungen",extserv:"Externe Dienste",
    shop:"Services Hinzufügen",shopIntro:"Werte deine Reise mit diesen optionalen Extras auf.",shopOpen:"Ansehen / Buchen",shopRequest:"Anfragen",shopSending:"Senden…",shopSent:"Anfrage gesendet ✓",shopErr:"Etwas ist schiefgelaufen. Bitte versuche es erneut.",shopPreview:"Vorschaumodus — für Kunden nicht sichtbar.",
    guest:"Reisendaten",gname:"Name",gphone:"Telefon",
    voucher:"Hotel-Voucher ansehen",dest:"Das Reiseziel",stay:"Ihr Aufenthalt",hotelInfo:"Hotelinformationen",address:"Adresse",
    adults:"Erwachsene",children:"Kinder",infants:"Kleinkinder",travellers:"Alle Reisenden",
    vcc:"Zahlungskarte",vccnum:"Kartennummer",vccexp:"Gültig bis",vcccvc:"CVC",
    support:"Hilfe & FAQ",
    helpTitle:"Wie können wir Ihnen helfen?",
    helpLead:"Finden Sie Antworten oder senden Sie uns eine Anfrage.",
    searchLabel:"In den FAQs suchen",
    searchPh:"Schreiben Sie: Datumsänderung, Rechnung, Check-in…",
    searchBtn:"Suchen",
    faqTitle:"Wichtigste FAQs",
    catPayments:"Zahlungen",
    catChanges:"Änderungen & Stornierungen",
    catDocs:"Dokumente & Rechnungen",
    catFlights:"Flüge",
    catHotels:"Hotels & Services",
    catPrivacy:"Datenschutz & Daten",
    showAll:"Alle anzeigen ({n})",
    showLess:"Weniger anzeigen",
    noResults:"Keine Ergebnisse. Andere Wörter versuchen oder kontaktieren Sie uns.",
    formTitle:"Anfrage senden",
    formName:"Vor- und Nachname",
    formEmail:"E-Mail",
    formBooking:"Buchungs-ID",
    formTopic:"Grund",
    formMsg:"Nachricht",msgTitle:"Nachrichten",msgUnread:"ungelesen",msgNoMsg:"Keine Nachrichten.",
    formMsgPh:"Beschreiben Sie kurz, wie wir helfen können",
    formSend:"Anfrage senden",
    formOk:"Danke! Wir melden uns so schnell wie möglich.",
    topicPayments:"Zahlungen",
    topicChanges:"Änderung/Stornierung",
    topicDocs:"Dokumente/Rechnung",
    topicTravel:"Hilfe während der Reise",
    topicOther:"Sonstiges",
    channels:"Weitere Kanäle",
    loading:"Buchung wird geladen…",
    bookingPerson:"Buchende Person",
    tcLabel:"AGB",privacyLabel:"Datenschutz",
notfound:"Buchung nicht gefunden.",
    errtitle:"Etwas ist schiefgelaufen",errsub:"Bitte prüfen Sie den Link in Ihrer Bestätigungs-E-Mail.",
    hi:"Hallo",yourtrip:"Ihre Reise",
    voucherBtn:"Hotel-Voucher ansehen",docsBtn:"Reisedokumente",
    docsNotReady:"Dokumente noch nicht verfügbar",
    docsInfoTitle:"Wann erhalten Sie Ihre Dokumente?",
    docsInfo:"Für maximale Transparenz hier eine Übersicht unserer Standardverfahren:\n\n🏨 Hotel-Voucher: wird ca. 7 Tage vor Abreise zugesandt.\n\n✈️ Flugtickets:\n• Wenn Sie den Flug über uns gebucht haben, sind alle Informationen bereits in Ihrem persönlichen Bereich verfügbar. Die Bordkarte muss direkt bei der Fluggesellschaft angefordert werden.\n• Wenn Sie den Flug selbst gebucht haben, verwalten Sie die Dokumente direkt mit Ihrer Fluggesellschaft.\n\n🎟️ Veranstaltungstickets: werden digital vom Veranstalter herausgegeben, in der Regel 3 Tage vor der Veranstaltung.\n\nAlle Mitteilungen werden per E-Mail an die bei der Buchung angegebene Adresse gesendet.\n\n📌 Diese Fristen sind Standard und gelten für alle unsere Kunden.",
  },
  NL:{
    overview:"Overzicht",flights:"Vluchten & Trein",payments:"Betalingen",tours:"Diensten & Vouchers",
    checkin:"Check-in",checkout:"Check-out",nights:"nachten",night:"nacht",
    room:"Kamer",board:"Inbegrepen Diensten",ref:"Boekingsreferentie",hconf:"Hotelbevestiging",
    booked:"Geboekt op",status:"Status",conf:"Bevestigd",pend:"In behandeling",canc:"Geannuleerd",over:"Overbooking",noshow:"No Show",importing:"Geïmporteerd",
    days:"dagen tot vertrek",today:"Vandaag!",done:"Reis voltooid",
    cancpol:"Annuleringsbeleid",taxes:"Lokale Belastingen",deposit:"Borg",pets:"Huisdieren",access:"Toegankelijkheid",
    fout:"Heenvlucht",fret:"Terugvlucht",direct:"Direct",stop:"Tussenstop",
    pnr:"PNR-code",bag:"Inbegrepen bagage",pbag:"Persoonlijk item",cbag:"Handbagage",sbag:"Ruimbagage",
    mflight:"Vlucht beheren",eticket:"E-Ticket downloaden",
    trainbk:"Treinreservering",trainref:"Treinref.",flightPending:"Uw vlucht wordt bevestigd. U ontvangt een e-mail zodra de tickets beschikbaar zijn.",trainPending:"Uw treinboeking wordt bevestigd. U ontvangt een e-mail zodra de tickets beschikbaar zijn.",trainStatus:"Treinstatus",trainManage:"Treinreservering beheren",trainDep:"Vertrek",trainArr:"Aankomst",trainLine:"Trein",trainReturn:"Terugreis",cancDate:"Annuleringsdatum",payNow:"Nu Betalen",
    psum:"Betalingsoverzicht",total:"Totaalbedrag",split:"Betalingsplan",
    p1:"1e Betaling",p2:"2e Betaling",p3:"3e Betaling",paid:"Betaald",due:"Te betalen",admFeeMsg:"Wij konden de afschrijving niet uitvoeren zoals bepaald in de boekingsvoorwaarden. Betaal het restbedrag via de knop hieronder of bankoverschrijving:\n\nBegunstigde: BETTER BOOKINGS LTD\nIBAN: GB67HBUK40127682816735\nSWIFT: HBUKGB4B\nBedrag: {amount} (inclusief administratiekosten)\nMededeling: Boeking {ref}\n\nStuur betalingsbewijs naar invoices@better-bookings.com. Bij geen bevestiging binnen 48 uur wordt de boeking automatisch geannuleerd met bijbehorende kosten.",cancRefund:"Wij bevestigen dat uw boeking is geannuleerd. Als er recht op terugbetaling is, wordt dit binnen 10 werkdagen verwerkt op de oorspronkelijke betaalmethode.",salesAuto:"Het saldo wordt op de vervaldatum automatisch afgeschreven van de kaart die voor de aanbetaling is gebruikt. Als u een alternatieve betaalmethode wilt gebruiken, wordt een administratieve toeslag van 5% van het te betalen bedrag in rekening gebracht (minimaal € 35,00).",salesManual:"Voor de vervaldatum ontvangt u een herinnering. U kunt op elk moment vóór de vervaldatum betalen door op de factuurlink te klikken.",
    inv:"Facturen",dlpdf:"PDF downloaden",noInv:"Nog niet beschikbaar",invAfterCheckout:"Facturen zijn beschikbaar na uw check-out.",
    tact:"Tours & Activiteiten",xtra:"Extra Diensten",extserv:"Externe Diensten",
    shop:"Diensten Toevoegen",shopIntro:"Verrijk je reis met deze optionele extra's.",shopOpen:"Bekijk / Boek",shopRequest:"Aanvragen",shopSending:"Versturen…",shopSent:"Aanvraag verzonden ✓",shopErr:"Er ging iets mis. Probeer het opnieuw.",shopPreview:"Voorbeeldmodus — niet zichtbaar voor klanten.",
    guest:"Reizigersgegevens",gname:"Naam",gphone:"Telefoon",
    voucher:"Hotelvoucher bekijken",dest:"De Bestemming",stay:"Uw Verblijf",hotelInfo:"Hotelinformatie",address:"Adres",
    adults:"Volwassenen",children:"Kinderen",infants:"Baby's",travellers:"Alle Reizigers",
    vcc:"Betaalkaart",vccnum:"Kaartnummer",vccexp:"Vervalt",vcccvc:"CVC",
    support:"Hulp & FAQ",
    helpTitle:"Hoe kunnen we u helpen?",
    helpLead:"Vind antwoorden of stuur ons een verzoek.",
    searchLabel:"Zoek in de FAQ's",
    searchPh:"Typ: datumwijziging, factuur, check-in…",
    searchBtn:"Zoeken",
    faqTitle:"Belangrijkste FAQ's",
    catPayments:"Betalingen",
    catChanges:"Wijzigingen & annuleringen",
    catDocs:"Documenten & facturen",
    catFlights:"Vluchten",
    catHotels:"Hotels & services",
    catPrivacy:"Privacy & data",
    showAll:"Alles tonen ({n})",
    showLess:"Minder tonen",
    noResults:"Geen resultaten. Andere woorden proberen of neem contact op.",
    formTitle:"Verzoek indienen",
    formName:"Voor- en achternaam",
    formEmail:"E-mail",
    formBooking:"Boekings-ID",
    formTopic:"Reden",
    formMsg:"Bericht",msgTitle:"Berichten",msgUnread:"ongelezen",msgNoMsg:"Geen berichten.",
    formMsgPh:"Leg kort uit hoe we kunnen helpen",
    formSend:"Verzoek verzenden",
    formOk:"Bedankt! We nemen zo snel mogelijk contact op.",
    topicPayments:"Betalingen",
    topicChanges:"Wijziging/annulering",
    topicDocs:"Documenten/Factuur",
    topicTravel:"Hulp tijdens de reis",
    topicOther:"Overig",
    channels:"Andere kanalen",
    loading:"Boeking wordt geladen…",
    bookingPerson:"Persoon die de boeking doet",
    tcLabel:"Algemene Voorwaarden",privacyLabel:"Privacybeleid",
notfound:"Boeking niet gevonden.",
    errtitle:"Er is iets misgegaan",errsub:"Controleer de link in uw bevestigingsmail.",
    hi:"Hallo",yourtrip:"Uw Reis",
    voucherBtn:"Hotelvoucher bekijken",docsBtn:"Reisdocumenten",
    docsNotReady:"Documenten nog niet beschikbaar",
    docsInfoTitle:"Wanneer ontvangt u uw documenten?",
    docsInfo:"Voor maximale transparantie een overzicht van onze standaardprocedures:\n\n🏨 Hotelvoucher: wordt ca. 7 dagen voor vertrek verstuurd.\n\n✈️ Vliegtickets:\n• Als u de vlucht via ons heeft geboekt, zijn alle informatie al beschikbaar in uw persoonlijke omgeving. De instapkaart moet rechtstreeks bij de luchtvaartmaatschappij worden aangevraagd.\n• Als u zelf de vlucht heeft geboekt, regelt u de documenten rechtstreeks met uw luchtvaartmaatschappij.\n\n🎟️ Evenementtickets: worden digitaal uitgegeven door de organisator, doorgaans 3 dagen voor het evenement.\n\nAlle communicatie wordt per e-mail verstuurd naar het adres dat bij de boeking is opgegeven.\n\n📌 Deze termijnen zijn standaard en gelden voor al onze klanten.",
  },
};

/* ─── HELPERS ────────────────────────────────────────── */
const msToDate = v => { if(v==null)return null; const n=typeof v==="string"?parseInt(v,10):Number(v); return isNaN(n)?new Date(v):new Date(n); };
const fmtD  = (v,l) => { const d=msToDate(v); if(!d||isNaN(d))return"–"; const loc={IT:"it-IT",ES:"es-ES",FR:"fr-FR",DE:"de-DE",NL:"nl-NL"}; return d.toLocaleDateString(loc[l]||"en-GB",{day:"2-digit",month:"long",year:"numeric"}); };
const fmtDs = (v,l) => { const d=msToDate(v); if(!d||isNaN(d))return"–"; const loc={IT:"it-IT",ES:"es-ES",FR:"fr-FR",DE:"de-DE",NL:"nl-NL"}; return d.toLocaleDateString(loc[l]||"en-GB",{day:"2-digit",month:"short",year:"numeric"}); };
const fmtT  = v => { if(!v)return"–"; const d=msToDate(v); if(!d||isNaN(d))return String(v).slice(0,5); return d.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}); };
const fmtM  = v => { if(v==null||v===""||isNaN(Number(v))) return "–"; const n=Math.round(Number(v)*100)/100; return "€ "+n.toLocaleString("it-IT",{minimumFractionDigits:2,maximumFractionDigits:2}); };
const daysTo = v => { const d=msToDate(v); if(!d)return null; const t=new Date();t.setHours(0,0,0,0);d.setHours(0,0,0,0); return Math.ceil((d-t)/864e5); };
const arr1  = v => Array.isArray(v)?v[0]||"":v||"";
const toArr = v => Array.isArray(v)?v:(v&&String(v).trim()?[v]:[]);

const getCancPolicy = (b,l) => { const m={EN:"cancPolicyEN",IT:"cancPolicyIT",ES:"cancPolicyES",FR:"cancPolicyFR",DE:"cancPolicyDE",NL:"cancPolicyNL"}; return b[m[l]]||b.cancPolicyEN||b.cancPolicyIT||b.cancPolicy||""; };
const cleanAddress = (addr) => {
  if(!addr) return "";
  // Remove GPS coordinate parts like <25.0835884,55.1421146>
  let s = addr;
  while(s.indexOf("<")>=0 && s.indexOf(">")>s.indexOf("<")){
    s = s.slice(0,s.indexOf("<")) + s.slice(s.indexOf(">")+1);
  }
  // Collapse multiple spaces and trim trailing comma
  while(s.indexOf("  ")>=0) s=s.split("  ").join(" ");
  if(s.endsWith(",")) s=s.slice(0,-1);
  return s.trim();
};


const getHotelName  = (b,l) => { const m={EN:"hotelName",IT:"hotelnameIT",ES:"hotelnameES",FR:"hotelnameFR",DE:"hotelnameDE",NL:"hotelnameNL"}; return b[m[l]]||b.hotelName||""; };
const getOfferDesc  = (b,l) => {
  const m={EN:"offerDescription",IT:"offerDescription",ES:"OfferDescriptionES",FR:"OfferDescriptionFR",DE:"OfferDescriptionDE",NL:"OfferDescriptionNL"};
  // Try lang-specific → IT → ES → FR → DE → NL (first non-empty)
  return b[m[l]]||b.offerDescription
    ||b.OfferDescriptionES||b.OfferDescriptionFR
    ||b.OfferDescriptionDE||b.OfferDescriptionNL||"";
};
const getRoomType   = (b,l) => {
  const m={EN:"roomTypeENG",IT:"roomType",ES:"roomTypeES",FR:"roomTypeFR",DE:"roomTypeDE",NL:"roomTypeNL"};
  return b[m[l]]||b.roomTypeENG||b.roomType||"";
};
const getRoomType2  = (b,l) => {
  // API: roomType2=ITA, roomType2ENG=EN, roomType2ES/FR/DE/NL
  const m={EN:"roomType2ENG",IT:"roomType2",ES:"roomType2ES",FR:"roomType2FR",DE:"roomType2DE",NL:"roomType2NL"};
  return b[m[l]]||b.roomType2ENG||b.roomType2||"";
};
// Build room label: "N x RoomType"
const fmtRoom = (qty,type) => (qty&&qty>0&&type) ? `${qty} x ${type}` : type||"";
const getExtraList  = (b,l) => {
  if(!b.extra && b.extra!==undefined) return [];
  const m={EN:"extraenlist",IT:"extraitList",ES:"extraeslist",FR:"extrafrlist",DE:"extradelist",NL:"extranllist"};
  const langRaw = (b[m[l]]||"").trim();
  const mainRaw = (b.extramainlist||"").trim();
  // Use lang-specific only if it has real content (>8 chars), otherwise use extramainlist
  const raw = (langRaw.length > 8 ? langRaw : mainRaw||langRaw)
    || (b.extraenlist||"").trim()
    || (b.extraitList||"").trim();
  if(!raw) return [];
  return raw.split("\n").map(s=>s.trim()).filter(Boolean);
};
const getExtSupplierList = (b,l) => {
  if(!b.extraOtherSupplier && b.extraOtherSupplier!==undefined) return [];
  const m={EN:"extraOtherSupplierListENG",IT:"extraOtherSupplierList",ES:"extraOtherSupplierListES",FR:"extraOtherSupplierListFR",DE:"extraOtherSupplierListDE",NL:"extraOtherSupplierListNL"};
  const langRaw = (b[m[l]]||"").trim();
  const mainRaw = (b.extraotherSuppliermain||"").trim();
  // Use lang-specific only if it has real content (>8 chars), otherwise use extraotherSuppliermain
  const raw = (langRaw.length > 8 ? langRaw : mainRaw||langRaw)
    || (b.extraOtherSupplierListENG||"").trim()
    || (b.extraOtherSupplierList||"").trim();
  if(!raw) return [];
  return raw.split("\n").map(s=>s.trim()).filter(Boolean);
};
const HOTEL_FALLBACK_IMG = "https://better-bookings.com/offersonline/Images/flight_landscape.jpg";
const getHeroImage  = b => {
  if(b.hotelImage&&b.hotelImage.startsWith("http")) return b.hotelImage;
  if(b.locationimage&&b.locationimage.startsWith("http")) return b.locationimage;
  if(b.city) return `https://source.unsplash.com/featured/1400x600/?${encodeURIComponent(b.city+",travel")}`;
  return HOTEL_FALLBACK_IMG;
};
// Location description — picks language-specific field, falls back to IT
const getLocationDesc = (b,l) => {
  // API only provides locationdescriptionita — use for all languages
  return b.locationdescriptionita || "";
};

// Destination image: API field → Unsplash city fallback
const getDestImage = b => {
  if(b.locationimage && b.locationimage.startsWith("http")) return b.locationimage;
  const query = encodeURIComponent((b.city||"travel") + " " + (b.country||""));
  return `https://source.unsplash.com/featured/800x420/?${query}`;
};

// ── Traveller parser ─────────────────────────────────
// Handles all formats across IT / ES / FR / DE / NL / EN:
//  "Sig. Michele RIZZARDINI (Nato (a) il 29/12/1958)"
//  "Sig.ra Rossella DANGELO (Nato (a) il 06 luglio 1993)"
//  "Adulto 1\nSig.ra Rossella DANGELO (Nato (a) il 06/07/1993)"
//  "Sra. Natalia GARCIA (con fecha de nacimiento 24 enero 2008)"
//  "Barbara Polverini 08/09/1970"

// Title → gender map
const MALE_TITLES   = ["sig.","sr.","mr.","mr","m.","hr.","herr","monsieur","dhr.","de heer"];
const FEMALE_TITLES = ["sig.ra","sra.","mrs.","mrs","ms.","mme.","mme","frau","fr.","miss","madame","mevr.","mw."];

// Month names → number (all 6 languages, lower-cased)
const MONTH_MAP = {
  // IT
  "gennaio":1,"febbraio":2,"marzo":3,"aprile":4,"maggio":5,"giugno":6,
  "luglio":7,"agosto":8,"settembre":9,"ottobre":10,"novembre":11,"dicembre":12,
  // ES
  "enero":1,"febrero":2,"marzo":3,"abril":4,"mayo":5,"junio":6,
  "julio":7,"agosto":8,"septiembre":9,"octubre":10,"noviembre":11,"diciembre":12,
  // FR
  "janvier":1,"fevrier":2,"février":2,"mars":3,"avril":4,"mai":5,"juin":6,
  "juillet":7,"aout":8,"août":8,"septembre":9,"octobre":10,"novembre":11,"decembre":12,"décembre":12,
  // DE
  "januar":1,"februar":2,"marz":3,"märz":3,"april":4,"mai":5,"juni":6,
  "juli":7,"august":8,"september":9,"oktober":10,"november":11,"dezember":12,
  // NL
  "januari":1,"februari":2,"maart":3,"april":4,"mei":5,"juni":6,
  "juli":7,"augustus":8,"september":9,"oktober":10,"november":11,"december":12,
  // EN
  "january":1,"february":2,"march":3,"may":5,"june":6,
  "july":7,"september":9,"october":10,"november":11,"december":12,
};

// Type-label lines to skip (standalone line = just the label, no name after it)
const TYPE_LINE = /^(adulto|bambino|neonato|adult|child|infant|ni[^a-z]|beb[eé]|enfant|nourrisson|erwachsener|kind|volwassene|baby|passeggero|passenger|viaggiatore|neonato)[ \t]*\d*$/i;

// Inline type prefix on same line as name
const TYPE_PREFIX_INLINE = /^(adulto|bambino|neonato|adult|child|infant|ni[^a-z]|beb[eé]|enfant|nourrisson|erwachsener|kind|volwassene|baby)[ \t]*\d+[ \t]+/i;

function parseDOBString(s){
  // Try numeric: DD/MM/YYYY or DD.MM.YYYY or DD-MM-YYYY
  const numM = s.match(/(\d{2})[\/.\-](\d{2})[\/.\-](\d{4})/);
  if(numM) return { d:parseInt(numM[1],10), m:parseInt(numM[2],10), y:parseInt(numM[3],10) };
  // Try text month: DD MONTHNAME YYYY (case insensitive, with optional accents)
  const txtM = s.match(/(\d{1,2})[ \t]+([a-záéíóúàèìòùâêîôûäëïöüñç]+)[ \t]+(\d{4})/i);
  if(txtM){
    const mon = MONTH_MAP[txtM[2].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")];
    if(mon) return { d:parseInt(txtM[1],10), m:mon, y:parseInt(txtM[3],10) };
    // Try with accents kept
    const mon2 = MONTH_MAP[txtM[2].toLowerCase()];
    if(mon2) return { d:parseInt(txtM[1],10), m:mon2, y:parseInt(txtM[3],10) };
  }
  return null;
}

function extractDOB(line){
  // Try inside parentheses first (most common)
  const parenM = line.match(/\(([^)]+)\)/);
  if(parenM){
    const dob = parseDOBString(parenM[1]);
    if(dob) return dob;
  }
  // Try anywhere in line
  return parseDOBString(line);
}

function fmtDOB(dob, lang){
  if(!dob) return "";
  const months = {
    EN:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    IT:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],
    ES:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],
    FR:["jan","fév","mar","avr","mai","juin","juil","août","sep","oct","nov","déc"],
    DE:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],
    NL:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],
  }[lang]||["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return String(dob.d).padStart(2,"0")+" "+months[dob.m-1]+" "+dob.y;
}

const parseTravellers = (raw, checkIn, counts) => {
  if(!raw) return [];
  const checkinDate = checkIn ? new Date(Number(checkIn)) : null;

  // Normalise: replace tabs with space, split on newline
  const lines = raw.split("\n").map(l=>l.replace(/\t/g," ").trim()).filter(Boolean);

  const result = [];

  for(const line of lines){
    // Skip standalone type-label lines ("Adulto 1", "Bambino 2", etc.)
    if(TYPE_LINE.test(line.trim())) continue;

    // Strip inline type prefix ("Adulto 1 Sig.ra ...")
    let clean = line.replace(TYPE_PREFIX_INLINE,"").trim();

    // Extract DOB
    const dob = extractDOB(clean);

    // Remove the parenthetical DOB section from the name area
    let nameArea = clean;
    const parenIdx = nameArea.indexOf("(");
    if(parenIdx >= 0) nameArea = nameArea.slice(0, parenIdx).trim();
    // Also remove any trailing numeric date
    nameArea = nameArea.replace(/\d{1,2}[\/.\-]\d{1,2}[\/.\-]\d{4}/,"").trim();

    // Split into tokens
    const tokens = nameArea.split(" ").map(t=>t.trim()).filter(Boolean);
    if(!tokens.length) continue;

    // Detect title (first token)
    const firstLower = tokens[0].toLowerCase();
    const isMale   = MALE_TITLES.includes(firstLower);
    const isFemale = FEMALE_TITLES.includes(firstLower);
    const hasTitle = isMale || isFemale;
    const nameTokens = hasTitle ? tokens.slice(1) : tokens;

    if(!nameTokens.length) continue;

    // Split name into firstName (mixed case) and lastName (ALL CAPS)
    // ALL CAPS tokens → last name; others → first name
    const firstParts = [], lastParts = [];
    for(const tok of nameTokens){
      // A token is "surname" if it's all uppercase letters (≥2 chars) or contains only uppercase
      if(tok.length >= 2 && tok === tok.toUpperCase() && /^[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÑÇ' -]+$/i.test(tok)){
        lastParts.push(tok);
      } else {
        firstParts.push(tok);
      }
    }

    // Fallback: if everything ended up in one group, use position split
    let firstName, lastName;
    if(lastParts.length && firstParts.length){
      firstName = firstParts.join(" ");
      lastName  = lastParts.map(t=>t.charAt(0)+t.slice(1).toLowerCase()).join(" ");
    } else {
      // No clear split: first half = first name, second half = last name
      const mid = Math.ceil(nameTokens.length/2);
      firstName = nameTokens.slice(0,mid).join(" ");
      const rawLast = nameTokens.slice(mid).join(" ");
      lastName = rawLast.charAt(0).toUpperCase()+rawLast.slice(1).toLowerCase();
    }

    // Gender
    let gender = "unknown";
    if(isMale)   gender = "male";
    if(isFemale) gender = "female";

    // Age type from DOB at check-in
    let ageType = "adult";
    if(dob && checkinDate){
      const birth = new Date(dob.y, dob.m-1, dob.d);
      const ageYears = (checkinDate - birth) / (365.25*24*3600*1000);
      if(ageYears < 2)       ageType = "infant";
      else if(ageYears < 12) ageType = "child";
    }

    if(gender === "unknown" && ageType !== "adult") gender = "child";

    result.push({ firstName, lastName, dob, gender, ageType });
  }

  // Realloca ageType in base ai conteggi autoritativi Ninox (Adults/Child/Infant)
  // quando passati e quando il totale combacia col numero di righe parsate.
  // Why: la soglia hardcoded <12 e' arbitraria — la policy "chi e' child" cambia
  // per hotel/contratto. Ninox e' la fonte di verita'. Ordiniamo per eta'
  // crescente (DOB sconosciuta in fondo) e assegniamo prima gli infant, poi i
  // child, poi gli adult fino a coprire i counts.
  if(counts && result.length){
    const ad = Math.max(0, parseInt(counts.adults,10)||0);
    const ch = Math.max(0, parseInt(counts.child,10)||0);
    const ba = Math.max(0, parseInt(counts.baby,10)||0);
    if(ad+ch+ba === result.length){
      const ageAt = (dob) => {
        if(!dob || !checkinDate) return null;
        const birth = new Date(dob.y, dob.m-1, dob.d);
        return (checkinDate - birth) / (365.25*24*3600*1000);
      };
      const indices = result.map((_,i)=>i).sort((a,b)=>{
        const aA = ageAt(result[a].dob), bA = ageAt(result[b].dob);
        if(aA == null && bA == null) return 0;
        if(aA == null) return 1;
        if(bA == null) return -1;
        return aA - bA;
      });
      indices.forEach((idx, pos) => {
        const r = result[idx];
        if(pos < ba)            r.ageType = "infant";
        else if(pos < ba+ch)    r.ageType = "child";
        else                    r.ageType = "adult";
        if(r.gender === "unknown" && r.ageType !== "adult") r.gender = "child";
      });
    }
  }

  return result;
};

const AGE_LABEL = {
  EN:{ adult:"Adult", child:"Child", infant:"Infant" },
  IT:{ adult:"Adulto", child:"Bambino", infant:"Neonato" },
  ES:{ adult:"Adulto", child:"Niño/a", infant:"Bebé" },
  FR:{ adult:"Adulte", child:"Enfant", infant:"Nourrisson" },
  DE:{ adult:"Erwachsener", child:"Kind", infant:"Kleinkind" },
  NL:{ adult:"Volwassene", child:"Kind", infant:"Baby" },
};

const TRAV_ICON = {
  "male-adult":   {cls:"fas fa-male",   color:"#2563eb", bg:"#eff6ff"},
  "female-adult": {cls:"fas fa-female", color:"#db2777", bg:"#fdf2f8"},
  "male-child":   {cls:"fas fa-child",  color:"#16a34a", bg:"#f0fdf4"},
  "female-child": {cls:"fas fa-child",  color:"#16a34a", bg:"#f0fdf4"},
  "male-infant":  {cls:"fas fa-baby",   color:"#ca8a04", bg:"#fefce8"},
  "female-infant":{cls:"fas fa-baby",   color:"#ca8a04", bg:"#fefce8"},
};
const travIconConf = (gender, ageType) => TRAV_ICON[`${gender}-${ageType}`]||TRAV_ICON["male-adult"];


const getSlug = () => {
  const path = window.location.pathname;
  // supports /manage/booking/SLUG or /booking/SLUG or /b/SLUG
  const m = path.match(/\/(manage\/booking|booking|portal|b)\/([^/?#]+)/);
  if(m) return m[2];
  const p = new URLSearchParams(window.location.search);
  if(p.get("slug")) return p.get("slug");
  const seg = path.split("/").filter(Boolean).pop();
  return seg && seg.length > 10 ? seg : null;
};

/* ─── UI ATOMS ───────────────────────────────────────── */
const BB_LOGO = "https://better-bookings.com/onewebmedia/Group%20292.png";

function Logo({h=30}){
  return <img src={BB_LOGO} alt="Better Bookings" style={{height:h,objectFit:"contain"}}
    onError={e=>{e.target.outerHTML=`<span style="color:${C.orange};font-size:1rem;font-weight:700;font-family:'Poppins',sans-serif">Better Bookings</span>`;}} />;
}

// Flag images from flagcdn.com
const FLAGS = {
  EN:"https://flagcdn.com/h20/gb.png",
  IT:"https://flagcdn.com/h20/it.png",
  ES:"https://flagcdn.com/h20/es.png",
  FR:"https://flagcdn.com/h20/fr.png",
  DE:"https://flagcdn.com/h20/de.png",
  NL:"https://flagcdn.com/h20/nl.png",
};

// All available portal languages (EN hidden in portal, shown in login only)
const PORTAL_LANGS = ["EN","IT","ES","FR","DE","NL"];

function LangBtn({lang,setLang,showEN=false}){
  const [open,setOpen] = useState(false);
  const langs = PORTAL_LANGS; // EN always included
  return(
    <div style={{position:"relative"}}>
      {/* Current language pill — like BB website */}
      <button onClick={()=>setOpen(o=>!o)} style={{
        display:"flex",alignItems:"center",gap:6,
        padding:"5px 12px",borderRadius:50,
        border:`1.5px solid ${C.border}`,background:C.white,
        cursor:"pointer",fontFamily:"'Poppins',sans-serif",
        fontWeight:600,fontSize:12,color:C.charcoal,
        transition:"border-color .2s",
      }}>
        <img src={FLAGS[lang]} alt={lang}
          style={{height:14,borderRadius:2,objectFit:"cover"}}
          onError={e=>{e.target.src=HOTEL_FALLBACK_IMG;}}/>
        {lang}
        <span style={{fontSize:9,color:C.muted,marginLeft:1}}>{open?"▲":"▼"}</span>
      </button>
      {/* Dropdown */}
      {open&&<div style={{
        position:"absolute",right:0,top:"calc(100% + 6px)",
        background:C.white,border:`1px solid ${C.border}`,
        borderRadius:10,overflow:"hidden",zIndex:100,
        boxShadow:"0 4px 20px rgba(0,0,0,.1)",minWidth:110,
      }}>
        {langs.map(l=>(
          <button key={l} onClick={()=>{setLang(l);setOpen(false);}} style={{
            display:"flex",alignItems:"center",gap:8,width:"100%",
            padding:"9px 14px",border:"none",background:lang===l?C.orangeLight:C.white,
            cursor:"pointer",fontFamily:"'Poppins',sans-serif",
            fontWeight:lang===l?700:500,fontSize:12,
            color:lang===l?C.orange:C.charcoal,
            borderLeft:lang===l?`3px solid ${C.orange}`:"3px solid transparent",
            transition:"background .15s",
          }}>
            <img src={FLAGS[l]} alt={l}
              style={{height:13,borderRadius:2,objectFit:"cover"}}
              onError={e=>{e.target.src=HOTEL_FALLBACK_IMG;}}/>
            {l}
          </button>
        ))}
      </div>}
      {/* Click outside to close */}
      {open&&<div onClick={()=>setOpen(false)} style={{
        position:"fixed",inset:0,zIndex:99
      }}/>}
    </div>
  );
}

function StatusBadge({ok,warn,label}){
  return <span style={{display:"inline-flex",alignItems:"center",gap:5,padding:"5px 14px",
    borderRadius:50,fontSize:".75rem",fontWeight:600,
    background:warn?C.warningBg:ok?C.successBg:C.dangerBg,
    color:warn?C.warning:ok?C.success:C.danger}}>
    <span style={{width:6,height:6,borderRadius:"50%",background:warn?C.warning:ok?C.success:C.danger,display:"inline-block"}}/>
    {label}
  </span>;
}

function SectionLabel({icon,ch}){
  return <div style={{fontSize:".7rem",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",
    color:C.muted,marginBottom:"1rem",display:"flex",alignItems:"center",gap:6}}>
    <span style={{fontSize:14}}>{icon}</span>{ch}
  </div>;
}

function IRow({label,val,hi}){
  return <div className="irow">
    <span style={{color:C.mid,fontSize:".83rem",flexShrink:0}}>{label}</span>
    <span style={{color:hi?C.orange:C.dark,fontWeight:hi?600:500,fontSize:".85rem",
      textAlign:"left"}}>{val||"–"}</span>
  </div>;
}

function InfoBlock({icon,label,val,bg}){
  return <div style={{background:bg||C.bg,borderRadius:12,padding:"12px 14px",
    border:`1px solid ${C.border}`,display:"flex",gap:10,alignItems:"flex-start"}}>
    <span style={{fontSize:18,lineHeight:1,marginTop:1}}>{icon}</span>
    <div>
      <div style={{fontSize:".72rem",fontWeight:600,color:C.muted,marginBottom:2}}>{label}</div>
      <div style={{fontSize:".85rem",color:C.charcoal,lineHeight:1.55}}>{val}</div>
    </div>
  </div>;
}

function LangBtnDark({lang,setLang}){
  const [open,setOpen] = useState(false);
  return(
    <div style={{position:"relative"}}>
      <button onClick={()=>setOpen(o=>!o)} style={{
        display:"flex",alignItems:"center",gap:6,
        padding:"5px 12px",borderRadius:50,
        border:"1.5px solid rgba(255,255,255,.4)",
        background:"rgba(255,255,255,.15)",
        backdropFilter:"blur(10px)",
        cursor:"pointer",fontFamily:"'Poppins',sans-serif",
        fontWeight:600,fontSize:12,color:"#FFFFFF",
        transition:"border-color .2s",
      }}>
        <img src={FLAGS[lang]} alt={lang}
          style={{height:14,borderRadius:2,objectFit:"cover"}}
          onError={e=>{e.target.style.display="none";}}/>
        {lang}
        <span style={{fontSize:9,opacity:.7,marginLeft:1}}>{open?"▲":"▼"}</span>
      </button>
      {open&&<div style={{
        position:"absolute",right:0,top:"calc(100% + 6px)",
        background:"rgba(20,20,30,.95)",backdropFilter:"blur(20px)",
        border:"1px solid rgba(255,255,255,.15)",
        borderRadius:10,overflow:"hidden",zIndex:200,
        boxShadow:"0 4px 24px rgba(0,0,0,.4)",minWidth:110,
      }}>
        {PORTAL_LANGS.map(l=>(
          <button key={l} onClick={()=>{setLang(l);setOpen(false);}} style={{
            display:"flex",alignItems:"center",gap:8,width:"100%",
            padding:"9px 14px",background:"none",border:"none",
            cursor:"pointer",fontFamily:"'Poppins',sans-serif",
            fontWeight:lang===l?700:500,fontSize:12,color:"#FFFFFF",
            borderBottom:"1px solid rgba(255,255,255,.08)",
            transition:"background .15s",
          }}>
            <img src={FLAGS[l]} alt={l} style={{height:13,borderRadius:2}}
              onError={e=>{e.target.style.display="none";}}/>
            {l}
          </button>
        ))}
      </div>}
    </div>
  );
}

const Wrap = ({ch}) => (
  <div style={{maxWidth:1100,margin:"0 auto",padding:"clamp(.75rem,3vw,2rem) clamp(.75rem,2vw,1.25rem)"}}>{ch}</div>
);
const Grid = ({ch,cols}) => (
  <div style={{display:"grid",
    gridTemplateColumns:cols||"repeat(auto-fit,minmax(min(100%,290px),1fr))",
    gap:"clamp(.875rem,2vw,1.25rem)"}}>{ch}</div>
);


/* ─── MESSAGES HELPER ────────────────────────────────── */
// Decode multiple layers of HTML entities
/* ─── MESSAGES: HTML CLEANER ────────────────────────────*/
// Decode multiple entity-encoding rounds (handles &amp;amp;amp;... chains)
function decodeEntities(s){
  if(!s) return "";
  let prev="", r=s;
  for(let i=0;i<12&&r!==prev;i++){
    prev=r;
    r=r.split("&amp;").join("&")
       .split("&lt;").join("<")
       .split("&gt;").join(">")
       .split("&quot;").join('"')
       .split("&#39;").join("'")
       .split("&nbsp;").join(" ")
       .split("&#160;").join(" ");
  }
  return r;
}

// Use DOMParser (browser) to cleanly extract readable content + preserve links
function cleanMsgHtml(raw){
  if(!raw) return "";
  const decoded = decodeEntities(raw);
  try{
    const parser = new DOMParser();
    const doc = parser.parseFromString(decoded,"text/html");
    // Remove noise entirely
    ["style","script","head","meta","link","svg","noscript"].forEach(tag=>{
      doc.querySelectorAll(tag).forEach(el=>el.remove());
    });
    // Remove hidden elements (Word mso-hide, display:none)
    doc.querySelectorAll("[style]").forEach(el=>{
      const s=el.getAttribute("style")||"";
      if(s.includes("mso-hide:all")||s.includes("display:none")||s.includes("display: none"))
        el.remove();
    });
    // Remove base64 images and decorative images without alt
    doc.querySelectorAll("img").forEach(el=>{
      const src=el.getAttribute("src")||"";
      const alt=(el.getAttribute("alt")||"").trim();
      if(src.startsWith("data:")||!alt) el.remove();
    });
    // Remove aria-hidden elements (decorative SVG icons in links)
    doc.querySelectorAll("[aria-hidden='true']").forEach(el=>el.remove());

    function extract(node){
      if(node.nodeType===3) return node.textContent.replace(/\u00a0/g," ");
      if(node.nodeType!==1) return "";
      const tag=node.tagName.toLowerCase();
      if(["style","script","svg","img","head","meta","link","noscript"].includes(tag)) return "";
      // Preserve anchor links
      if(tag==="a"){
        const href=(node.getAttribute("href")||"").trim();
        const txt=Array.from(node.childNodes).map(extract).join("").trim();
        if(!txt) return "";
        if(href&&(href.startsWith("http")||href.startsWith("mailto:")))
          return `<a href="${href}" target="_blank" rel="noopener noreferrer" style="color:#E8501A;word-break:break-all">${txt}</a>`;
        return txt;
      }
      const inner=Array.from(node.childNodes).map(extract).join("");
      if(tag==="br") return "\n";
      if(tag==="hr") return "\n";
      if(tag==="li") return "\n• "+inner.trim();
      const blocks=["p","div","tr","td","th","h1","h2","h3","h4","h5","h6",
                    "table","blockquote","section","article","header","footer","main","ul","ol"];
      if(blocks.includes(tag)){
        const t=inner.trim();
        return t?"\n"+t+"\n":"";
      }
      return inner;
    }

    let result = extract(doc.body||doc.documentElement);
    // Normalize whitespace
    result = result.replace(/[ \t]+/g," ");
    while(result.includes("\n\n\n")) result=result.split("\n\n\n").join("\n\n");
    // Clean lines, deduplicate
    const lines=result.split("\n").map(l=>l.trim()).filter(l=>l.length>0);
    const seen=new Set(), out=[];
    for(const l of lines){
      const k=l.replace(/<[^>]+>/g,"").trim().toLowerCase();
      if(k.length>0&&!seen.has(k)){seen.add(k);out.push(l);}
    }
    const final=out.join("\n").trim();
    return final.length>2?final:"";
  }catch(e){
    // Fallback: strip all tags
    return decoded.split("<").map(s=>s.indexOf(">")>=0?s.slice(s.indexOf(">")+1):s).join(" ").split("  ").join(" ").trim();
  }
}

// Filter + sort messages for customer (Messagetothecustomer in {2,5,13})
function parseMessages(b){
  const msgs=b.ContentMessage||b.contentmessage||[];
  const recipients=b.Messagetothecustomer||b.messagetothecustomer||[];
  const statuses=b.Messagestatus||b.messagestatus||[];
  const dates=b.dateofmessage||b.Dateofmessage||[];
  if(!msgs.length) return [];
  // ID enum EC.TO destinati al cliente: 2=CUSTOMER, 5=FLIGHT/SERVICES, 9, 13.
  // Allineato col proxy _CUSTOMER_TO_IDS in ninox_offer.py.
  const CUST=new Set(["2","5","9","13",2,5,9,13]);
  const result=[];
  msgs.forEach((msg,i)=>{
    const r=recipients[i];
    if(!CUST.has(r)&&!CUST.has(String(r))) return;
    // Show if sent: only skip when status is EXPLICITLY "" or null (not sent yet)
    const rawSt=statuses[i]; // may be undefined if array shorter than msgs
    if(rawSt===""||rawSt===null) return; // explicitly empty = not sent yet
    const clean=cleanMsgHtml(msg);
    if(!clean||clean.length<3) return;
    result.push({idx:i,content:clean,
      status:(rawSt!==undefined&&rawSt!==null)?String(rawSt).toLowerCase().trim():"sent",
      date:dates[i]||0});
  });
  result.sort((a,b)=>Number(b.date)-Number(a.date));
  return result;
}

/* ─── MESSAGES DRAWER ────────────────────────────────── */
function MessagesDrawer({b,lang,onClose}){
  const t=T[lang]||T.EN;
  const msgs=parseMessages(b);

  // Spam note per language
  const spamNote={
    EN:"📧 Sent by email · Check your Spam folder too",
    IT:"📧 Inviato via email · Controlla anche lo Spam",
    ES:"📧 Enviado por email · Revisa también tu Spam",
    FR:"📧 Envoyé par email · Vérifiez aussi vos Spams",
    DE:"📧 Per E-Mail gesendet · Prüfen Sie auch Spam",
    NL:"📧 Verzonden per e-mail · Controleer ook Spam",
  }[lang]||"📧 Sent by email · Check your Spam folder too";

  const months={
    EN:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    IT:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],
    ES:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    FR:["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"],
    DE:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],
    NL:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],
  }[lang]||["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const fmtMsgDate=ts=>{
    if(!ts) return "";
    const d=new Date(Number(ts));
    if(isNaN(d)) return "";
    return String(d.getDate()).padStart(2,"0")+" "+months[d.getMonth()]+" "+
      d.getFullYear()+"  "+String(d.getHours()).padStart(2,"0")+":"+
      String(d.getMinutes()).padStart(2,"0");
  };

  return <>
    {/* Backdrop */}
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.4)",
      zIndex:150,backdropFilter:"blur(2px)"}}/>
    {/* Drawer */}
    <div style={{position:"fixed",top:0,right:0,bottom:0,zIndex:151,
      width:"min(460px,100vw)",background:C.white,
      boxShadow:"-4px 0 32px rgba(0,0,0,.15)",
      display:"flex",flexDirection:"column",
      animation:"slideInRight .25s ease"}}>
      {/* Header */}
      <div style={{padding:"1.25rem 1.5rem",borderBottom:`1px solid ${C.border}`,
        display:"flex",alignItems:"center",justifyContent:"space-between",
        background:C.white,flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:"1.1rem"}}>🔔</span>
          <h3 style={{fontSize:"1rem",fontWeight:700,color:C.dark,margin:0}}>
            {t.msgTitle||"Messages"}
          </h3>
          {msgs.filter(m=>m.status!=="opened").length>0&&
            <span style={{background:C.orange,color:"#fff",borderRadius:50,
              padding:"2px 9px",fontSize:".7rem",fontWeight:700}}>
              {msgs.filter(m=>m.status!=="opened").length}
            </span>}
        </div>
        <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",
          fontSize:"1.1rem",color:C.muted,lineHeight:1,padding:4}}>✕</button>
      </div>

      {/* List */}
      <div style={{flex:1,overflowY:"auto",padding:"1rem"}}>
        {msgs.length===0
          ?<div style={{textAlign:"center",padding:"3rem 1rem",color:C.muted}}>
            <div style={{fontSize:"2rem",marginBottom:8}}>📭</div>
            <p style={{fontSize:".88rem"}}>{t.msgNoMsg||"No messages."}</p>
          </div>
          :msgs.map((msg,i)=>{
            const isUnread=msg.status!=="opened";
            return <div key={i} style={{
              background:isUnread?"#FFFBF5":C.bg,
              border:`1px solid ${isUnread?"#FDDCB5":C.border}`,
              borderLeft:`3px solid ${isUnread?C.orange:C.border}`,
              borderRadius:10,padding:"12px 14px",marginBottom:12,
            }}>
              {/* Meta */}
              <div style={{display:"flex",justifyContent:"space-between",
                alignItems:"center",marginBottom:8,gap:8,flexWrap:"wrap"}}>
                <span style={{fontSize:".72rem",color:C.muted}}>{fmtMsgDate(msg.date)}</span>
                {isUnread&&<span style={{background:C.orange,color:"#fff",borderRadius:50,
                  padding:"1px 9px",fontSize:".65rem",fontWeight:700,
                  letterSpacing:".04em",flexShrink:0}}>NEW</span>}
              </div>
              {/* Content — left aligned, links preserved */}
              <div style={{fontSize:".84rem",color:C.charcoal,lineHeight:1.75,
                textAlign:"left",wordBreak:"break-word"}}
                dangerouslySetInnerHTML={{__html:
                  msg.content.split("\n").join("<br/>")
                }}
              />
              {/* Spam note */}
              <div style={{marginTop:10,paddingTop:8,
                borderTop:`1px solid ${C.border}`,
                fontSize:".7rem",color:C.muted,textAlign:"left"}}>
                {spamNote}
              </div>
            </div>;
          })
        }
      </div>
    </div>
    <style>{`@keyframes slideInRight{from{transform:translateX(100%)}to{transform:translateX(0)}}`}</style>
  </>;
}

/* Bell with ring animation when unread > 0 */
function BellButton({b,onClick}){
  const msgs=parseMessages(b);
  const unread=msgs.filter(m=>m.status!=="opened").length;
  return <>
    <button onClick={onClick}
      style={{position:"relative",background:"none",border:"none",cursor:"pointer",
        padding:4,display:"flex",alignItems:"center",justifyContent:"center",
        borderRadius:8}}
      aria-label="Messages">
      <span style={{
        fontSize:"1.2rem",lineHeight:1,display:"inline-block",
        transformOrigin:"top center",
        animation:unread>0?"bellRing 2s ease-in-out infinite":undefined,
      }}>🔔</span>
      {unread>0&&<span style={{position:"absolute",top:0,right:0,
        width:16,height:16,borderRadius:"50%",
        background:C.orange,color:"#fff",fontSize:".6rem",fontWeight:700,
        display:"flex",alignItems:"center",justifyContent:"center",
        lineHeight:1,boxShadow:"0 0 0 2px #fff"}}>
        {unread>9?"9+":unread}
      </span>}
    </button>
    {unread>0&&<style>{`
      @keyframes bellRing{
        0%,100%{transform:rotate(0deg)}
        5%{transform:rotate(18deg)}
        10%{transform:rotate(-16deg)}
        15%{transform:rotate(14deg)}
        20%{transform:rotate(-10deg)}
        25%{transform:rotate(6deg)}
        30%{transform:rotate(0deg)}
      }
    `}</style>}
  </>;
}


/* ─── HEADER ─────────────────────────────────────────── */
function Header({b,lang,setLang,onBell}){
  const [w,setW] = useState(typeof window!=="undefined"?window.innerWidth:1200);
  useEffect(()=>{
    const fn=()=>setW(window.innerWidth);
    window.addEventListener("resize",fn);
    return()=>window.removeEventListener("resize",fn);
  },[]);
  const isMobile = w < 600;
  return <header style={{background:C.white,height:isMobile?56:68,display:"flex",alignItems:"center",
    justifyContent:"space-between",padding:isMobile?"0 1rem":"0 2rem",position:"sticky",top:0,zIndex:50,
    borderBottom:`1px solid ${C.border}`,boxShadow:"0 1px 8px rgba(0,0,0,.04)"}}>
    <Logo h={isMobile?24:30}/>
    <div style={{display:"flex",alignItems:"center",gap:isMobile?8:16}}>
      {onBell&&<BellButton b={b} onClick={onBell}/>}
      <LangBtn lang={lang} setLang={setLang}/>
      {!isMobile&&<div style={{width:1,height:20,background:C.border}}/>}
      <div style={{display:"flex",alignItems:"center",gap:6}}>
        <div style={{width:isMobile?28:32,height:isMobile?28:32,borderRadius:"50%",background:C.peach,
          display:"flex",alignItems:"center",justifyContent:"center",
          fontSize:isMobile?".75rem":".8rem",fontWeight:700,color:C.orange}}>
          {b.guestnamefull?b.guestnamefull.charAt(0).toUpperCase():"?"}
        </div>
        {!isMobile&&<span style={{color:C.charcoal,fontSize:".82rem",fontWeight:500,maxWidth:180,
          overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{b.guestnamefull}</span>}
      </div>
    </div>
  </header>;
}

/* ─── HERO ───────────────────────────────────────────── */
function Hero({b,lang}){
  const t    = T[lang]||T.EN;
  const days = daysTo(b.checkIn);
  const sk   = STATUS_CODE[String(b.bookingstatus)]||"pend";
  const hName= getHotelName(b,lang);
  const img  = getHeroImage(b);
  const firstName = b.guestnamefull?.split(" ")[0]||"";

  return <div>
    {/* Greeting bar */}
    <div style={{background:C.peach,padding:"10px 1rem",
      borderBottom:`1px solid ${C.peachBorder}`}}>
      <div style={{maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-between",
        alignItems:"center",flexWrap:"wrap",gap:6}}>
        <p style={{fontSize:".9rem",color:C.dark,fontWeight:500}}>
          {t.hi} <strong>{firstName}</strong> 👋 &nbsp;
          <span style={{fontWeight:400,color:C.mid}}>{t.yourtrip}</span>
        </p>
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4}}>
          <StatusBadge ok={sk==="conf"} warn={sk==="pend"||sk==="over"||sk==="noshow"||sk==="importing"} label={t[sk]||sk}/>
          {sk==="canc"&&b.cancellationdate&&
            <span style={{fontSize:".72rem",color:C.mid}}>
              {t.cancDate||"Cancellation date"}: {fmtDs(b.cancellationdate,lang)}
            </span>}
        </div>
      </div>
    </div>

    {/* Image hero */}
    <div style={{position:"relative",height:"clamp(240px,55vw,420px)",overflow:"hidden",background:C.dark}}>
      {img&&<img src={img} alt={hName}
        style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 60%"}}
        onError={e=>{e.target.src=HOTEL_FALLBACK_IMG;}}/>}
      <div style={{position:"absolute",inset:0,
        background:"linear-gradient(to right,rgba(0,0,0,.65) 0%,rgba(0,0,0,.1) 60%)"}}/>

      {/* Info overlay — left aligned like BB homepage */}
      <div style={{position:"absolute",top:0,bottom:0,left:0,display:"flex",
        flexDirection:"column",justifyContent:"center",padding:"0 1rem",maxWidth:600}}>
        <p style={{color:"rgba(255,255,255,.7)",fontSize:".78rem",fontWeight:500,
          letterSpacing:".04em",textTransform:"uppercase",marginBottom:4,fontSize:".7rem"}}>
          <Ico name="bb-destination" size={13} light/> {b.city}, {b.country}
        </p>
        <h1 style={{color:C.white,fontSize:"clamp(1.1rem,4vw,1.75rem)",fontWeight:800,lineHeight:1.2,
          marginBottom:12,textShadow:"0 2px 12px rgba(0,0,0,.3)"}}>{hName}</h1>

        {/* Key stats row */}
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          {[
            {icon:<Ico name="bb-calendar" size={15} light/>,val:fmtDs(b.checkIn,lang),sub:"Check-in"},
            {icon:<Ico name="bb-nights" size={15} light/>,val:`${b.nights} ${b.nights===1?t.night:t.nights}`,sub:null},
            {icon:days!=null&&days<0?<Ico name="bb-check" size={15} light/>:<Ico name="bb-pending" size={15} light/>,val:days==null?"–":days<0?(t.done||"Done"):days===0?t.today:`${days} ${t.days}`,sub:null,accent:days!=null&&days>0&&days<=30},
          ].map((p,i)=>(
            <div key={i} style={{
              background:p.accent?"rgba(232,80,26,.85)":"rgba(255,255,255,.15)",
              backdropFilter:"blur(10px)",
              border:"1px solid rgba(255,255,255,.2)",
              borderRadius:8,padding:"6px 10px",color:C.white,
              display:"flex",alignItems:"center",gap:5}}>
              <span style={{fontSize:13}}>{p.icon}</span>
              <div>
                <div style={{fontSize:".75rem",fontWeight:700}}>{p.val}</div>
                {p.sub&&<div style={{fontSize:".58rem",opacity:.7,marginTop:1}}>{p.sub}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>;
}

/* ─── TAB NAV ────────────────────────────────────────── */
function TabNav({active,setActive,b,lang,services}){
  const t = T[lang]||T.EN;
  // Tours tab: bookingtype=1 always, bookingtype=5 only when Touralldocumentstatus=3
  const btype5 = String(b.bookingtype||"1")==="5";
  const allDocsReady = String(b.Touralldocumentstatus||b.touralldocumentstatus||"")==="3";
  const hasTours = (b.extra||b.extraOtherSupplier||
    toArr(b.Tourreference).some(Boolean)||
    (b.TourListCSV&&b.TourListCSV.trim())||
    (b.Linktours&&b.Linktours.trim())) &&
    (!btype5 || allDocsReady);
  const tabs=[
    {id:"overview",icon:<Ico name="bb-hotel" size={15}/>,l:t.overview},
    ...((b.flight||b.Airline1||(b.train&&String(b.trainstatus||b.trainStatus||b.TrainStatus||"")!=="3"))&&String(b.FlightStatus||"")!=="3"?[{id:"flights",icon:<Ico name="bb-flight" size={15}/>,l:t.flights}]:[]),
    ...(String(b.salestype||b.SalesType||"")!=="2"?[{id:"payments",icon:<Ico name="bb-card" size={15}/>,l:t.payments}]:[]),
    ...(hasTours?[{id:"tours",icon:<Ico name="bb-voucher" size={15}/>,l:t.tours}]:[]),
    ...((services&&services.length)?[{id:"shop",icon:<Ico name="bb-plus" size={15}/>,l:t.shop}]:[]),
    {id:"support",icon:<Ico name="bb-chat" size={15}/>,l:t.support||"Support"},
  ];
  return <div className="tab-bar">
    <div style={{display:"flex",overflowX:"auto",maxWidth:1100,margin:"0 auto",
      padding:"0 1.25rem",scrollbarWidth:"none"}}>
      {tabs.map(tb=>(
        <button key={tb.id} className={`tab${active===tb.id?" on":""}`} onClick={()=>setActive(tb.id)}>
          {tb.icon} {tb.l}
        </button>
      ))}
    </div>
  </div>;
}

function VoucherOfferItems({b,lang}){
  const txt = arr1(getOfferDesc(b,lang));
  if(!txt) return null;
  const stripV = (s)=>{
    let r=s;
    r=r.split("<br>").join("\n").split("<br/>").join("\n");
    r=r.split("</p>").join("\n").split("</li>").join("\n");
    r=r.split("<li>").join("• ");
    while(r.indexOf("<")>=0&&r.indexOf(">")>r.indexOf("<"))
      r=r.slice(0,r.indexOf("<"))+r.slice(r.indexOf(">")+1);
    r=r.split("&amp;").join("&").split("&nbsp;").join(" ").split("&#39;").join("'");
    return r.trim();
  };
  const plain = stripV(txt);
  const lines = plain.split("\n").map(s=>s.trim()).filter(Boolean);
  const items = lines.length>1 ? lines
    : plain.replace(/([.!?]) /g,"$1\n").split("\n").map(s=>s.trim()).filter(s=>s.length>3);
  if(items.length>1) return <ul style={{listStyle:"none",padding:0,margin:0}}>
    {items.map((s,i)=>(
      <li key={i} style={{display:"flex",gap:6,alignItems:"flex-start",
        fontSize:".82rem",fontWeight:400,lineHeight:1.5,marginBottom:2}}>
        <span style={{color:"#E8501A",fontWeight:700,flexShrink:0,marginTop:1}}>•</span>
        <span>{s.startsWith("•")?s.slice(1).trim():s}</span>
      </li>
    ))}
  </ul>;
  return <div style={{fontSize:".9rem",fontWeight:400,lineHeight:1.5,whiteSpace:"pre-line"}}>{plain}</div>;
}

/* ─── VOUCHER MODAL (bookingtype=1) ──────────────────── */
const NOTE_EN = "Under no circumstances must you charge the guest for the services (including additional services) listed on this voucher. Only payment for extras to be collected from the client.<br><br>If you cannot allocate this booking please call 24/7 emergency number or email us at hello@better-bookings.com";

function VoucherModal({b,lang,onClose}){
  // Counts pax = camera 1 + camera 2 quando addroom=true (altrimenti il numero
  // di righe in Travellers Details supera adults+child+baby e parseTravellers
  // non rialloca gli ageType — tutti finiscono adult).
  const _totAd = (b.adults||0) + (b.addroom ? (b.adults2||0) : 0);
  const _totCh = (b.child||0)  + (b.addroom ? (b.child2||0)  : 0);
  const _totBa = (b.baby||0)   + (b.addroom ? (b.baby2||0)   : 0);
  const travellers = parseTravellers(b.TravellerDetails, b.checkIn, {adults:_totAd, child:_totCh, baby:_totBa});
  const hName = b.hotelName||b.hotelnameIT||"";
  const img   = getHeroImage(b);

  const statusMap = {"1":"CONFIRMED","2":"PENDING","3":"CANCELLED"};
  const status    = statusMap[String(b.bookingstatus)]||"CONFIRMED";
  const statusBg  = status==="CONFIRMED"?"#e8f7ef":status==="PENDING"?"#fff8e8":"#fdecea";
  const statusClr = status==="CONFIRMED"?"#1a7a4a":status==="PENDING"?"#b36b00":"#c0392b";

  const typeMap   = {"1":"Accommodation","2":"Transfer","3":"Experience","5":"Package"};
  const bType     = typeMap[String(b.bookingtype)]||"";

  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.55)",zIndex:200,
      display:"flex",flexDirection:"column",overflowY:"auto"}}>
      {/* Toolbar */}
      <div style={{background:C.dark,padding:"10px 1.5rem",display:"flex",justifyContent:"space-between",
        alignItems:"center",flexShrink:0,position:"sticky",top:0,zIndex:201}}>
        <span style={{color:C.white,fontWeight:600,fontSize:".9rem"}}>Hotel Voucher</span>
        <div style={{display:"flex",gap:10}}>
          <button onClick={()=>{
            const el=document.getElementById("voucher-print-area");
            if(!el){return;}
            // Collect inline styles from all elements
            const styleSheets=[];
            try{
              Array.from(document.styleSheets).forEach(ss=>{
                try{
                  const rules=Array.from(ss.cssRules||[]).map(r=>r.cssText).join("\n");
                  if(rules) styleSheets.push(rules);
                }catch(e){}
              });
            }catch(e){}
            const w=window.open("","_blank","width=900,height=700");
            if(!w){return;}
            w.document.write("<!DOCTYPE html><html><head><meta charset=\"UTF-8\"/><style>"+
              "@import url(\'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap\');"+
              "body{font-family:\'Poppins\',sans-serif;background:#fff;margin:0;padding:20px;color:#1e293b;}"+
              styleSheets.join("\n")+
              "</style></head><body>"+el.innerHTML+"</body></html>");
            w.document.close();
            w.onload=function(){w.focus();w.print();};
          }} className="btn-orange" style={{padding:"6px 16px"}}>🖨️ Print</button>
          <button onClick={onClose} style={{background:"rgba(255,255,255,.12)",border:"none",
            color:C.white,padding:"6px 14px",borderRadius:7,cursor:"pointer",fontSize:".85rem"}}>✕ Close</button>
        </div>
      </div>
      {/* Voucher content */}
      <div id="voucher-print-area" style={{maxWidth:780,margin:"20px auto",width:"100%",padding:"0 16px 40px"}}>
        {/* Card */}
        <div style={{background:C.white,borderRadius:8,overflow:"hidden",
          boxShadow:"0 8px 40px rgba(0,0,0,.18)"}}>
          {/* Header */}
          <div style={{padding:"14px 28px",display:"flex",justifyContent:"space-between",
            alignItems:"center",borderBottom:`3px solid ${C.orange}`}}>
            <img src="https://better-bookings.com/onewebmedia/Group%20292.png"
              alt="Better Bookings" style={{height:36,objectFit:"contain"}}/>
            <div style={{textAlign:"right"}}>
              <div style={{fontWeight:700,fontSize:".95rem",color:C.dark}}>{b.bookingReference}</div>
              {bType&&<div style={{fontSize:".68rem",color:C.muted,letterSpacing:"1px",
                textTransform:"uppercase",marginTop:2}}>{bType}</div>}
              <div style={{marginTop:6}}>
                <span style={{background:statusBg,color:statusClr,padding:"3px 12px",borderRadius:50,
                  fontSize:".72rem",fontWeight:700,letterSpacing:".5px"}}>● {status}</span>
              </div>
            </div>
          </div>
          {/* Hero */}
          <div style={{height:240,background:`#2c3e50 url(${img||""}) center/cover no-repeat`,
            position:"relative"}}>
            <div style={{position:"absolute",inset:0,
              background:"linear-gradient(to bottom,transparent 30%,rgba(0,0,0,.7))",
              display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"16px 28px"}}>
              <div style={{color:C.white,fontFamily:"Georgia,serif",fontSize:"1.6rem",fontWeight:700,
                textShadow:"0 2px 8px rgba(0,0,0,.5)"}}>{hName}</div>
              <div style={{color:"rgba(255,255,255,.75)",fontSize:".82rem",marginTop:4}}>
                <Ico name="bb-destination" size={13} light/> {b.city}, {b.country}
              </div>
            </div>
          </div>
          {/* Stamp */}
          <div style={{background:C.dark,color:C.white,textAlign:"center",
            padding:"8px",fontSize:".7rem",fontWeight:600,letterSpacing:"3.5px"}}>
            ✦ &nbsp; PREPAID HOTEL VOUCHER &nbsp; ✦
          </div>
          {/* Body */}
          <div style={{padding:"20px 28px"}}>
            {/* Reservation details */}
            <div style={{marginBottom:20}}>
              <div style={{display:"inline-block",background:C.orange,color:C.white,
                padding:"4px 12px",borderRadius:3,fontSize:".62rem",fontWeight:700,
                letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Reservation Details</div>
              <div style={{border:"1px solid #e2e2e2",borderRadius:6,overflow:"hidden"}}>
                {/* Hotel + Booking Ref — 2 cols */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",borderBottom:"1px solid #e2e2e2"}}>
                  {[["Hotel",hName],["Booking Reference",b.bookingReference]].map(([l,v],i)=>(
                    <div key={i} style={{padding:"9px 14px",
                      borderRight:i===0?"1px solid #e2e2e2":"none"}}>
                      <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                        letterSpacing:"1px",marginBottom:3}}>{l}</div>
                      <div style={{fontSize:".9rem",fontWeight:500}}>{v||"–"}</div>
                    </div>
                  ))}
                </div>
                {/* Room Type — full width */}
                <div style={{padding:"9px 14px",borderBottom:"1px solid #e2e2e2"}}>
                  <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                    letterSpacing:"1px",marginBottom:3}}>Room Type</div>
                  <div style={{fontSize:".9rem",fontWeight:500}}>
                    {fmtRoom(b.numberOfRooms,getRoomType(b,lang)||b.roomType)||"–"}
                  </div>
                  {getRoomType2(b,lang)&&b.numRoom2&&b.addroom&&
                    <div style={{fontSize:".9rem",fontWeight:500,marginTop:3}}>
                      {fmtRoom(b.numRoom2,getRoomType2(b,lang))}
                    </div>}
                </div>
                {/* Included Services — full width, bullet points */}
                {arr1(getOfferDesc(b,lang))&&<div style={{padding:"9px 14px",borderBottom:"1px solid #e2e2e2"}}>
                  <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                    letterSpacing:"1px",marginBottom:6}}>Included Services</div>
                  <VoucherOfferItems b={b} lang={lang}/>
                </div>}
                {/* Additional Services (HB extras, hotel-provided) — full width, bullet points.
                    Coerente con NOTE_EN: il voucher elenca i servizi (inclusi gli additional) che
                    l'hotel NON deve addebitare al cliente. Servizi esterni (altro fornitore) esclusi. */}
                {getExtraList(b,lang).length>0&&<div style={{padding:"9px 14px",borderBottom:"1px solid #e2e2e2"}}>
                  <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                    letterSpacing:"1px",marginBottom:6}}>Additional Services</div>
                  <ul style={{listStyle:"none",padding:0,margin:0}}>
                    {getExtraList(b,lang).map((x,i)=>(
                      <li key={i} style={{display:"flex",gap:6,alignItems:"flex-start",
                        fontSize:".82rem",fontWeight:400,lineHeight:1.5,marginBottom:2}}>
                        <span style={{color:"#E8501A",fontWeight:700,flexShrink:0,marginTop:1}}>•</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>}
                {/* Address — full width */}
                <div style={{padding:"9px 14px"}}>
                  <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                    letterSpacing:"1px",marginBottom:3}}>Address</div>
                  <div style={{fontSize:".9rem",fontWeight:500}}>
                    {(b.hoteladdress||b.hotelAddress)?cleanAddress(b.hoteladdress||b.hotelAddress):""}
                    {(b.hoteladdress||b.hotelAddress)&&(b.city||b.country)?" – ":""}
                    {[b.city,b.country].filter(Boolean).join(", ")}
                  </div>
                </div>
              </div>
            </div>
            {/* Dates */}
            <div style={{marginBottom:20}}>
              <div style={{display:"inline-block",background:C.orange,color:C.white,
                padding:"4px 12px",borderRadius:3,fontSize:".62rem",fontWeight:700,
                letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Dates</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 72px 1fr",gap:4}}>
                {[{label:"Check-in",val:fmtD(b.checkIn,"EN"),accent:false},
                  {label:"Nights",val:b.nights,accent:true},
                  {label:"Check-out",val:fmtD(b.checkOut,"EN"),accent:false}
                ].map((d,i)=>(
                  <div key={i} style={{textAlign:"center",padding:"12px 8px",borderRadius:6,
                    background:d.accent?C.orange:"#f0efeb",
                    color:d.accent?C.white:C.dark}}>
                    <div style={{fontSize:".62rem",textTransform:"uppercase",letterSpacing:"1.5px",
                      marginBottom:4,opacity:d.accent?.8:.6,color:d.accent?C.white:"#6b6b6b"}}>
                      {d.label}</div>
                    <div style={{fontFamily:"Georgia,serif",fontSize:d.accent?"1.9rem":"1.1rem",
                      fontWeight:700,lineHeight:1}}>{d.val}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Travellers */}
            <div style={{marginBottom:20}}>
              <div style={{display:"inline-block",background:C.orange,color:C.white,
                padding:"4px 12px",borderRadius:3,fontSize:".62rem",fontWeight:700,
                letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Traveller Information</div>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:".87rem"}}>
                <thead>
                  <tr style={{background:C.dark}}>
                    {["Full Name","Date of Birth","Type"].map(h=>(
                      <th key={h} style={{padding:"8px 12px",textAlign:"left",color:C.white,
                        fontSize:".65rem",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:600}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {travellers.length===0
                    ?<tr><td colSpan={3} style={{padding:14,color:C.muted,textAlign:"center"}}>–</td></tr>
                    :travellers.map((tr,i)=>{
                      const typeCls = tr.ageType==="child"?{bg:"#fff0e8",cl:"#a04a2a"}
                        :tr.ageType==="infant"?{bg:"#fef9e8",cl:"#a07a2a"}:{bg:"#e8f0ff",cl:"#2a4aa0"};
                      return <tr key={i} style={{background:i%2===0?C.white:"#f0efeb"}}>
                        <td style={{padding:"7px 12px",borderBottom:"1px solid #e2e2e2"}}>
                          {tr.firstName} <strong>{tr.lastName}</strong>
                        </td>
                        <td style={{padding:"7px 12px",borderBottom:"1px solid #e2e2e2"}}>{tr.dob?fmtDOB(tr.dob,lang):"–"}</td>
                        <td style={{padding:"7px 12px",borderBottom:"1px solid #e2e2e2"}}>
                          <span style={{background:typeCls.bg,color:typeCls.cl,padding:"2px 8px",
                            borderRadius:10,fontSize:".68rem",fontWeight:700,
                            textTransform:"uppercase",letterSpacing:".5px"}}>
                            {tr.ageType==="child"?"Child":tr.ageType==="infant"?"Infant":"Adult"}
                          </span>
                        </td>
                      </tr>;
                    })}
                </tbody>
              </table>
            </div>
            {/* Virtual Card — mostrata solo se PAN presente nel blob suppliervcc */}
            {b.VCCCardNumber&&<div style={{marginBottom:20}}>
              <div style={{display:"inline-block",background:C.orange,color:C.white,
                padding:"4px 12px",borderRadius:3,fontSize:".62rem",fontWeight:700,
                letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Virtual Card Payment</div>
              <div style={{border:"1px solid #e2e2e2",borderRadius:6,overflow:"hidden"}}>
                {/* Card number — full width */}
                <div style={{padding:"9px 14px",borderBottom:"1px solid #e2e2e2",background:"#fafafa"}}>
                  <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                    letterSpacing:"1px",marginBottom:3}}>Card Number</div>
                  <div style={{fontSize:"1rem",fontWeight:600,fontFamily:"monospace",letterSpacing:"2px"}}>
                    {String(b.VCCCardNumber).replace(/(.{4})/g,"$1 ").trim()}
                  </div>
                </div>
                {/* Expiry + CVC — 2 cols */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",borderBottom:"1px solid #e2e2e2"}}>
                  <div style={{padding:"9px 14px",borderRight:"1px solid #e2e2e2"}}>
                    <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                      letterSpacing:"1px",marginBottom:3}}>Expires</div>
                    <div style={{fontSize:".9rem",fontWeight:500,fontFamily:"monospace"}}>
                      {b.VCCValidThru?`${String(b.VCCValidThru).slice(0,2)}/${String(b.VCCValidThru).slice(2,4)}`:"–"}
                    </div>
                  </div>
                  <div style={{padding:"9px 14px"}}>
                    <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                      letterSpacing:"1px",marginBottom:3}}>CVC</div>
                    <div style={{fontSize:".9rem",fontWeight:500,fontFamily:"monospace"}}>{b.VCCCVC||"–"}</div>
                  </div>
                </div>
                {/* Amount + Currency — full width */}
                {b.VCCNetAmount&&<div style={{padding:"9px 14px",borderBottom:"1px solid #e2e2e2"}}>
                  <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                    letterSpacing:"1px",marginBottom:3}}>Amount Authorized</div>
                  <div style={{fontSize:"1rem",fontWeight:700,color:C.orange}}>
                    {Number(b.VCCNetAmount).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}
                    {b.VCCCurrency?` ${b.VCCCurrency}`:""}
                  </div>
                </div>}
                {/* Activation + Termination dates */}
                {(b.VCCActivationDate||b.VCCTerminateDate)&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",borderBottom:b.VCCHolder?"1px solid #e2e2e2":"none"}}>
                  <div style={{padding:"9px 14px",borderRight:"1px solid #e2e2e2"}}>
                    <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                      letterSpacing:"1px",marginBottom:3}}>Active From</div>
                    <div style={{fontSize:".9rem",fontWeight:500}}>{b.VCCActivationDate?fmtD(b.VCCActivationDate,"EN"):"–"}</div>
                  </div>
                  <div style={{padding:"9px 14px"}}>
                    <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                      letterSpacing:"1px",marginBottom:3}}>Valid Until</div>
                    <div style={{fontSize:".9rem",fontWeight:500}}>{b.VCCTerminateDate?fmtD(b.VCCTerminateDate,"EN"):"–"}</div>
                  </div>
                </div>}
                {/* Cardholder */}
                {b.VCCHolder&&<div style={{padding:"9px 14px"}}>
                  <div style={{fontSize:".65rem",color:"#6b6b6b",textTransform:"uppercase",
                    letterSpacing:"1px",marginBottom:3}}>Cardholder</div>
                  <div style={{fontSize:".9rem",fontWeight:500}}>{b.VCCHolder}</div>
                </div>}
              </div>
            </div>}
            {/* Note */}
            <div>
              <div style={{display:"inline-block",background:C.orange,color:C.white,
                padding:"4px 12px",borderRadius:3,fontSize:".62rem",fontWeight:700,
                letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Important Note to Hotelier</div>
              <div style={{background:"#fffbf0",borderLeft:"4px solid #f0c040",
                padding:"14px 16px",borderRadius:"0 6px 6px 0",fontSize:".85rem",
                lineHeight:1.75,color:"#5a4a00"}}
                dangerouslySetInnerHTML={{__html:NOTE_EN}}/>
            </div>
          </div>
          {/* Footer */}
          <div style={{background:C.dark,color:"rgba(255,255,255,.55)",padding:"14px 28px",
            display:"flex",justifyContent:"space-between",fontSize:".75rem",flexWrap:"wrap",gap:8}}>
            <div>Ref: <strong style={{color:C.white}}>{b.bookingReference}</strong></div>
            <div>Better Bookings • hello@better-bookings.com</div>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ─── DOCS MODAL (bookingtype=5, no links) ───────────── */
function DocsModal({t,onClose}){
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:200,
      display:"flex",alignItems:"center",justifyContent:"center",
      padding:"env(safe-area-inset-top,1rem) 1rem env(safe-area-inset-bottom,1rem)"}}>
      <div style={{background:C.white,borderRadius:16,
        maxWidth:560,width:"100%",maxHeight:"88vh",
        overflow:"auto",boxShadow:"0 20px 60px rgba(0,0,0,.25)",
        margin:"auto"}}>
        {/* Header */}
        <div style={{padding:"1.25rem 1.5rem",borderBottom:`1px solid ${C.border}`,
          display:"flex",justifyContent:"space-between",alignItems:"center",
          position:"sticky",top:0,background:C.white,zIndex:1}}>
          <h3 style={{fontSize:"1rem",fontWeight:700,color:C.dark}}>
            📋 {t.docsInfoTitle}
          </h3>
          <button onClick={onClose} style={{background:"none",border:"none",
            cursor:"pointer",fontSize:"1.2rem",color:C.muted,lineHeight:1}}>✕</button>
        </div>
        {/* Body */}
        <div style={{padding:"1.5rem",textAlign:"left"}}>
          {t.docsInfo.split("\n").map((line,i)=>{
            if(!line.trim()) return <div key={i} style={{height:8}}/>;
            if(line.startsWith("📌"))
              return <div key={i} style={{marginTop:16,padding:"10px 14px",
                background:C.orangeLight,borderRadius:8,fontSize:".82rem",
                color:"#7A2A00",lineHeight:1.6,textAlign:"left"}}>{line}</div>;
            if(line.startsWith("🏨")||line.startsWith("✈️")||line.startsWith("🎟️"))
              return <div key={i} style={{fontWeight:600,fontSize:".88rem",
                color:C.dark,marginTop:10,textAlign:"left"}}>{line}</div>;
            if(line.startsWith("•"))
              return <div key={i} style={{paddingLeft:14,fontSize:".84rem",
                color:C.mid,lineHeight:1.65,marginTop:3,textAlign:"left"}}>{line}</div>;
            return <div key={i} style={{fontSize:".84rem",color:C.mid,lineHeight:1.65,textAlign:"left"}}>{line}</div>;
          })}
        </div>
        <div style={{padding:"1rem 1.5rem",borderTop:`1px solid ${C.border}`,textAlign:"left"}}>
          <button onClick={onClose} className="btn-orange">OK</button>
        </div>
      </div>
    </div>
  );
}

/* ─── DOCS BUTTON (smart — handles bookingtype) ──────── */
function DocsButton({b,lang,t}){
  const [showVoucher,setShowVoucher]=useState(false);
  const [showDocs,setShowDocs]=useState(false);
  // Never show docs if booking is cancelled
  const sk = STATUS_CODE[String(b.bookingstatus)]||"pend";
  if(sk==="canc") return null;
  const btype = String(b.bookingtype||"1");
  const docLinks = toArr(b.Traveldocumentlinks).filter(l=>l&&l.startsWith('http'));

  if(btype==="1"){
    return <>
      <button onClick={()=>setShowVoucher(true)} className="btn-orange">
        <Ico name="bb-attachment" size={15} light/> {t.voucherBtn||t.voucher}
      </button>
      {showVoucher&&<VoucherModal b={b} lang={lang} onClose={()=>setShowVoucher(false)}/>}
    </>;
  }

  // bookingtype=5
  if(docLinks.length>0){
    return <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
      {docLinks.map((link,i)=>(
        <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="btn-orange">
          <Ico name="bb-attachment" size={15} light/> {t.docsBtn} {docLinks.length>1?`${i+1}`:""}
        </a>
      ))}
    </div>;
  }

  // bookingtype=5 with no links yet — show "waiting" pill + info button
  if(btype==="5"){
    return <div style={{display:"flex",flexDirection:"column",gap:10}}>
      {/* Waiting state */}
      <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 16px",
        borderRadius:50,border:`1.5px dashed ${C.border}`,
        background:C.bg,color:C.muted,fontSize:".82rem",fontWeight:500}}>
        <span>⏳</span>
        <span>{t.docsNotReady}</span>
      </div>
      {/* Info button — opens modal to explain when docs will arrive */}
      <button onClick={()=>setShowDocs(true)} style={{
        display:"inline-flex",alignItems:"center",gap:8,padding:"9px 16px",
        borderRadius:50,border:`1.5px solid ${C.orange}`,
        background:C.orangeLight,color:C.orange,
        fontSize:".82rem",fontWeight:600,cursor:"pointer",
        fontFamily:"'Poppins',sans-serif",
      }}>
        <span>📋</span>
        <span>{t.docsInfoTitle||"When will you receive your documents?"}</span>
        <span style={{fontSize:".75rem",opacity:.8}}>›</span>
      </button>
      {showDocs&&<DocsModal t={t} onClose={()=>setShowDocs(false)}/>}
    </div>;
  }

  // Default fallback (other booking types without voucher/links)
  return <>
    <button onClick={()=>setShowDocs(true)} style={{
      display:"inline-flex",alignItems:"center",gap:8,padding:"10px 18px",
      borderRadius:50,border:`1.5px solid ${C.orange}`,
      background:C.orangeLight,color:C.orange,
      fontSize:".82rem",fontWeight:600,cursor:"pointer",
      fontFamily:"'Poppins',sans-serif",
    }}>
      <span>📋</span>
      <span>{t.docsInfoTitle||"When will you receive your documents?"}</span>
      <span style={{fontSize:".75rem",opacity:.8}}>›</span>
    </button>
    {showDocs&&<DocsModal t={t} onClose={()=>setShowDocs(false)}/>}
  </>;
}

/* ─── DESTINATION CARD ───────────────────────────────── */
function DestinationCard({b,lang,t}){
  const [imgSrc, setImgSrc] = useState(getDestImage(b));
  const desc = getLocationDesc(b,lang);

  return <div className="card">
    <div style={{position:"relative",height:175,overflow:"hidden",background:C.peach}}>
      <img src={imgSrc} alt={b.city||""}
        style={{width:"100%",height:"100%",objectFit:"cover"}}
        onError={()=>{
          // if Unsplash also fails, show a gradient placeholder
          setImgSrc("");
        }}/>
      {!imgSrc&&<div style={{
        width:"100%",height:"100%",
        background:`linear-gradient(135deg, ${C.peach} 0%, ${C.peachBorder} 100%)`,
        display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.5rem"
      }}>🌍</div>}
      {/* city label overlay */}
      <div style={{position:"absolute",bottom:0,left:0,right:0,
        background:"linear-gradient(to top,rgba(0,0,0,.55),transparent)",
        padding:"20px 16px 10px"}}>
        <h4 style={{color:C.white,fontSize:"1rem",fontWeight:700,margin:0,
          textShadow:"0 1px 4px rgba(0,0,0,.4)"}}>
          <Ico name="bb-destination" size={13} light/> {b.city}{b.Region?`, ${b.Region}`:""}, {b.country}
        </h4>
      </div>
    </div>
    <div style={{padding:"1.1rem 1.5rem"}}>
      <SectionLabel icon={<Ico name="bb-destination" size={16}/>} ch={t.dest}/>
      {desc
        ? <p style={{fontSize:".83rem",color:C.mid,lineHeight:1.7}}>{desc}</p>
        : <p style={{fontSize:".83rem",color:C.muted,fontStyle:"italic",lineHeight:1.7}}>
            {b.city}, {b.country}
          </p>
      }
    </div>
  </div>;
}

/* ─── TRAVELLERS LIST ────────────────────────────────── */
function TravellersList({raw,checkIn,lang,t,counts}){
  const travellers = parseTravellers(raw, checkIn, counts);
  const labels = AGE_LABEL[lang]||AGE_LABEL.EN;
  if(!travellers.length) return null;

  const dobLabels = {IT:"Nato/a il",ES:"Nacido/a el",FR:"Né(e) le",DE:"Geb. am",NL:"Geb. op"};
  const dobLabel = dobLabels[lang]||"Date of birth";

  return <div style={{marginTop:4}}>
    <div style={{fontSize:".68rem",fontWeight:600,letterSpacing:".08em",
      color:C.muted,marginBottom:10}}>{t.travellers.toUpperCase()}</div>
    <div style={{display:"flex",flexDirection:"column",gap:0}}>
      {travellers.map((tr,i)=>{
        const ic = travIconConf(tr.gender, tr.ageType);
        return <div key={i} style={{
          display:"flex",alignItems:"center",gap:12,
          padding:"11px 0",
          borderBottom:i<travellers.length-1?`1px solid ${C.border}`:"none"
        }}>
          {/* FA icon avatar */}
          <div style={{
            width:34,height:34,borderRadius:"50%",
            background:ic.bg,color:ic.color,
            display:"flex",alignItems:"center",justifyContent:"center",
            flexShrink:0,fontSize:"1rem",
          }}>
            <i className={ic.cls}/>
          </div>
          {/* Name + DOB — all left aligned */}
          <div style={{flex:1,minWidth:0,textAlign:"left"}}>
            <div style={{fontSize:".88rem",fontWeight:600,color:C.dark,
              whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
              {tr.firstName} <strong>{tr.lastName}</strong>
            </div>
            {tr.dob&&tr.dob.d&&<div style={{fontSize:".73rem",color:C.muted,marginTop:1,
              display:"flex",alignItems:"center",gap:4}}>
              <i className="fas fa-birthday-cake" style={{fontSize:".65rem",color:C.orange}}/>
              {dobLabel}: {tr.dob?fmtDOB(tr.dob,lang):"–"}
            </div>}
          </div>
          {/* Age badge */}
          <span style={{flexShrink:0,padding:"3px 10px",borderRadius:50,
            fontSize:".68rem",fontWeight:600,
            background:tr.ageType==="adult"?"#EEF2FF":tr.ageType==="child"?"#FFF7ED":"#F0FDF4",
            color:tr.ageType==="adult"?"#3730A3":tr.ageType==="child"?"#C2410C":"#166534"}}>
            {labels[tr.ageType]}
          </span>
        </div>;
      })}
    </div>
  </div>;
}


/* ─── T&C BLOCK HELPER ───────────────────────────────── */
function stripHtmlTec(s){
  if(!s) return "";
  let r=s;
  r=r.split("<br>").join("\n").split("<br/>").join("\n").split("<BR>").join("\n");
  r=r.split("</p>").join("\n").split("</P>").join("\n");
  r=r.split("</li>").join("\n").split("</LI>").join("\n");
  r=r.split("<li>").join("• ").split("<LI>").join("• ");
  while(r.indexOf("<")>=0 && r.indexOf(">")>r.indexOf("<")){
    r=r.slice(0,r.indexOf("<"))+r.slice(r.indexOf(">")+1);
  }
  r=r.split("&amp;").join("&").split("&lt;").join("<").split("&gt;").join(">");
  r=r.split("&nbsp;").join(" ").split("&#39;").join("'").split("&quot;").join('"');
  while(r.indexOf("\n\n\n")>=0) r=r.split("\n\n\n").join("\n\n");
  return r.trim();
}
function TeCBlock({b,lang,border,bg,mid}){
  // Prefer language-specific field, fall back to EN then IT
  const tec={IT:b.TeCIT,ES:b.TeCES,FR:b.TeCFR,NL:b.TeCNL,DE:b.TeCDE}[lang]
    ||b.TeCIT||"";
  if(!tec||!tec.trim()) return null;
  const tec_display = tec;
  const plain=stripHtmlTec(tec_display);

  const paras=plain.split("\n").map(s=>s.trim()).filter(Boolean);
  return <div style={{marginBottom:"1rem",padding:"12px 14px",borderRadius:10,
    background:bg,border:"1px solid "+border,textAlign:"left"}}>
    {paras.map((p,i)=>(
      <p key={i} style={{fontSize:".8rem",color:mid,lineHeight:1.7,
        margin:i>0?"6px 0 0":0,textAlign:"left",
        fontWeight:p.length<80&&!p.startsWith("•")?600:400}}>
        {p}
      </p>
    ))}
  </div>;
}

/* ─── OFFER BLOCK HELPER ─────────────────────────────── */
function OfferBlock({offer,board,orange,charcoal,muted}){
  // Strip HTML tags, decode entities, normalize line breaks
  const stripOffer = (s) => {
    if(!s) return "";
    let r = s;
    r = r.split("<br>").join("\n").split("<br/>").join("\n").split("<BR>").join("\n");
    r = r.split("</p>").join("\n").split("</li>").join("\n");
    r = r.split("<li>").join("• ").split("<LI>").join("• ");
    // Remove remaining HTML tags
    while(r.indexOf("<")>=0 && r.indexOf(">")>r.indexOf("<")){
      r = r.slice(0,r.indexOf("<"))+r.slice(r.indexOf(">")+1);
    }
    r = r.split("&amp;").join("&").split("&lt;").join("<").split("&gt;").join(">")
         .split("&nbsp;").join(" ").split("&#39;").join("'").split("&quot;").join('"');
    return r.trim();
  };
  const offerText = stripOffer(typeof offer==="string"?offer:arr1(offer));
  // Split on newlines first, then on sentence endings
  const lines = offerText.split("\n").map(s=>s.trim()).filter(s=>s.length>0);
  // If single line, try splitting on sentence endings
  const sub = offerText.replace(/([.!?]) /g,"$1\n").split("\n").map(s=>s.trim()).filter(s=>s.length>3);
  const sentences = lines.length>1 ? lines : sub;
  return <div style={{padding:".75rem 0",borderBottom:"1px solid #F5F5F5"}}>
    <div style={{fontSize:".75rem",color:muted,fontWeight:500,letterSpacing:".03em",marginBottom:8}}>{board}</div>
    {sentences.length>1
      ?<ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:5}}>
        {sentences.map((s,i)=>(
          <li key={i} style={{display:"flex",gap:8,alignItems:"flex-start",
            fontSize:".84rem",color:charcoal,lineHeight:1.65,textAlign:"left"}}>
            <span style={{color:s.startsWith("•")?"transparent":orange,fontWeight:700,flexShrink:0,marginTop:1}}>
              {s.startsWith("•")?"":"•"}
            </span>
            <span>{s.startsWith("•")?s.slice(1).trim():s}</span>
          </li>
        ))}
      </ul>
      :<div style={{fontSize:".84rem",color:charcoal,lineHeight:1.7,textAlign:"left",
          wordBreak:"break-word",whiteSpace:"pre-line"}}>{offerText}</div>
    }
  </div>;
}

/* ─── OVERVIEW ───────────────────────────────────────── */
function Overview({b,lang}){
  const t     = T[lang]||T.EN;
  // Prefer language-specific field, fall back to EN then IT
  const canc  = getCancPolicy(b,lang)||getCancPolicy(b,"EN")||getCancPolicy(b,"IT");
  const offer = getOfferDesc(b,lang)||getOfferDesc(b,"EN")||getOfferDesc(b,"IT");
  // Somma camera 1 + camera 2 quando addroom=true.
  // Senza questo, prenotazioni con 2 camere mostravano solo i pax della prima.
  const totAdults = (b.adults||0) + (b.addroom ? (b.adults2||0) : 0);
  const totChild  = (b.child||0)  + (b.addroom ? (b.child2||0)  : 0);
  const totBaby   = (b.baby||0)   + (b.addroom ? (b.baby2||0)   : 0);
  const pax   = [totAdults>0&&`${totAdults} ${t.adults.toLowerCase()}`,
    totChild>0&&`${totChild} ${t.children.toLowerCase()}`,
    totBaby>0&&`${totBaby} ${t.infants.toLowerCase()}`].filter(Boolean).join(" + ");

  return <Wrap ch={<>
    <Grid ch={<>
      {/* Stay details */}
      <div className="card" style={{padding:"1.5rem"}}>
        <SectionLabel icon="📅" ch={t.stay}/>
        <IRow label={t.ref}     val={b.bookingReference} hi/>
        {b.SupplierBookingReference&&<IRow label={t.hconf} val={b.SupplierBookingReference}/>}
        {b.checkIn&&<IRow label={t.checkin} val={fmtD(b.checkIn,lang)}/>}
        {b.checkOut&&<IRow label={t.checkout} val={fmtD(b.checkOut,lang)}/>}
        {b.nights&&<IRow label={t.nights} val={`${b.nights} ${Number(b.nights)===1?t.night:t.nights}`}/>}
        {getRoomType(b,lang)&&<IRow label={t.room}
          val={fmtRoom(b.numberOfRooms,getRoomType(b,lang))}/>}
        {getRoomType2(b,lang)&&b.numRoom2&&b.addroom&&
          <IRow label={t.room} val={fmtRoom(b.numRoom2,getRoomType2(b,lang))}/>}
        {offer&&<OfferBlock offer={offer} board={t.board} orange={C.orange} charcoal={C.charcoal} muted={C.muted}/>}
        {getExtraList(b,lang).length>0&&<div style={{padding:".6rem 0",borderBottom:"1px solid #F5F5F5"}}>
          <div style={{fontSize:".75rem",color:C.muted,fontWeight:500,letterSpacing:".03em",marginBottom:6}}>{t.xtra||"Extra"}</div>
          <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:4}}>
            {getExtraList(b,lang).map((x,i)=>(
              <li key={i} style={{display:"flex",gap:8,alignItems:"flex-start",fontSize:".83rem",color:C.charcoal,lineHeight:1.6}}>
                <span style={{color:C.orange,fontWeight:700,flexShrink:0}}>•</span><span>{x}</span>
              </li>
            ))}
          </ul>
        </div>}
        {getExtSupplierList(b,lang).length>0&&<div style={{padding:".6rem 0",borderBottom:"1px solid #F5F5F5"}}>
          <div style={{fontSize:".75rem",color:C.muted,fontWeight:500,letterSpacing:".03em",marginBottom:6}}>{t.extserv||"External Services"}</div>
          <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:4}}>
            {getExtSupplierList(b,lang).map((x,i)=>(
              <li key={i} style={{display:"flex",gap:8,alignItems:"flex-start",fontSize:".83rem",color:C.charcoal,lineHeight:1.6}}>
                <span style={{color:C.orange,fontWeight:700,flexShrink:0}}>•</span><span>{x}</span>
              </li>
            ))}
          </ul>
        </div>}
        {pax&&<IRow label={`👥 ${t.adults}`} val={pax}/>}
        <div style={{marginTop:14}}>
          <DocsButton b={b} lang={lang} t={t}/>
        </div>
      </div>

      {/* Booking person contact — moved after stay */}
      <div className="card" style={{padding:"1.5rem"}}>
        <SectionLabel icon="👤" ch={t.bookingPerson||t.guest}/>
        <div style={{display:"flex",flexDirection:"column",gap:0}}>
          <div style={{fontSize:".95rem",fontWeight:700,color:C.dark,
            marginBottom:10,paddingBottom:10,borderBottom:`1px solid ${C.border}`}}>
            {b.guestnamefull}
          </div>
          {arr1(b.guestEmail)&&<div style={{
            display:"flex",alignItems:"center",gap:10,
            padding:"9px 0",borderBottom:`1px solid #F5F5F5`}}>
            <div style={{width:30,height:30,borderRadius:"50%",
              background:"#EFF6FF",display:"flex",alignItems:"center",
              justifyContent:"center",flexShrink:0}}>
              <i className="fas fa-envelope" style={{fontSize:".78rem",color:"#2563eb"}}/>
            </div>
            <span style={{fontSize:".85rem",color:C.charcoal}}>{arr1(b.guestEmail)}</span>
          </div>}
          {arr1(b.guestTelephone)&&<div style={{
            display:"flex",alignItems:"center",gap:10,
            padding:"9px 0"}}>
            <div style={{width:30,height:30,borderRadius:"50%",
              background:"#F0FDF4",display:"flex",alignItems:"center",
              justifyContent:"center",flexShrink:0}}>
              <i className="fas fa-phone-alt" style={{fontSize:".78rem",color:"#16a34a"}}/>
            </div>
            <span style={{fontSize:".85rem",color:C.charcoal}}>{arr1(b.guestTelephone)}</span>
          </div>}
        </div>
        {/* Parsed travellers list */}
        {b.TravellerDetails&&<div style={{marginTop:14,paddingTop:14,borderTop:`1px solid ${C.border}`}}>
          <TravellersList raw={b.TravellerDetails} checkIn={b.checkIn} lang={lang} t={t} counts={{
            adults:(b.adults||0)+(b.addroom?(b.adults2||0):0),
            child: (b.child||0) +(b.addroom?(b.child2||0):0),
            baby:  (b.baby||0)  +(b.addroom?(b.baby2||0):0),
          }}/>
        </div>}
      </div>

      {/* Hotel Info Box — checkin/out times, address, taxes, pet, access */}
      {(b.checkinTime||b.checkoutTime||b.hoteladdress||b.hotelAddress||b.Localtaxes||b.PetPolicy||b.DisableAccess)&&
      <div className="card" style={{padding:"1.5rem"}}>
        <SectionLabel icon={<Ico name="bb-hotel" size={16}/>} ch={t.hotelInfo||"Hotel Info"}/>
        {(b.checkinTime&&b.checkinTime!=="00:00"&&b.checkinTime!=="null")&&
          <IRow label={"⏰ Check-in"} val={String(b.checkinTime).slice(0,5)}/>}
        {(b.checkoutTime&&b.checkoutTime!=="00:00"&&b.checkoutTime!=="null")&&
          <IRow label={"⏰ Check-out"} val={String(b.checkoutTime).slice(0,5)}/>}
        {(b.hoteladdress||b.hotelAddress)&&
          <IRow label={t.address||"Address"} val={cleanAddress(b.hoteladdress||b.hotelAddress)}/>}
        {(b.DepositRequest)&&
          <InfoBlock icon={<Ico name="bb-card" size={20}/>} label={t.deposit} val={`${b.DepositRequest}${b.AmountDeposit?` (${b.AmountDeposit})`:""}`} bg={C.warningBg}/>}
        {(TAXES[lang]||TAXES.EN)[String(b.Localtaxes)]&&<InfoBlock icon="🏛️" label={t.taxes} val={(TAXES[lang]||TAXES.EN)[String(b.Localtaxes)]}/>}
        {(PET[lang]||PET.EN)[String(b.PetPolicy)]&&<InfoBlock icon="🐾" label={t.pets} val={(PET[lang]||PET.EN)[String(b.PetPolicy)]}/>}
        {(ACCESS[lang]||ACCESS.EN)[String(b.DisableAccess)]&&<InfoBlock icon="♿" label={t.access} val={(ACCESS[lang]||ACCESS.EN)[String(b.DisableAccess)]}/>}
      </div>}

      {/* Cancellation policy + T&C */}
      <div className="card" style={{padding:"1.5rem"}}>
        <SectionLabel icon={<Ico name="bb-shield" size={16}/>} ch={t.cancpol}/>
        {canc&&<p style={{fontSize:".85rem",color:C.mid,lineHeight:1.7,marginBottom:"1.1rem"}}>{canc}</p>}
        <TeCBlock b={b} lang={lang} border={C.border} bg={C.bg} mid={C.mid}/>

        {/* T&C + Privacy links */}
        <div style={{marginTop:16,paddingTop:14,borderTop:`1px solid ${C.border}`,
          display:"flex",gap:10,flexWrap:"wrap"}}>
          {TC_LINKS[lang]&&<a href={TC_LINKS[lang]} target="_blank" rel="noopener noreferrer"
            style={{display:"inline-flex",alignItems:"center",gap:5,fontSize:".78rem",
              fontWeight:600,color:C.orange,textDecoration:"none",
              padding:"5px 12px",borderRadius:50,border:`1px solid ${C.peachBorder}`,
              background:C.orangeLight}}>
            <Ico name="bb-attachment" size={14}/> {t.tcLabel||"T&C"}
          </a>}
          {PRIVACY_LINKS[lang]&&<a href={PRIVACY_LINKS[lang]} target="_blank" rel="noopener noreferrer"
            style={{display:"inline-flex",alignItems:"center",gap:5,fontSize:".78rem",
              fontWeight:600,color:C.mid,textDecoration:"none",
              padding:"5px 12px",borderRadius:50,border:`1px solid ${C.border}`,
              background:C.bg}}>
            <Ico name="bb-lock" size={14}/> {t.privacyLabel||"Privacy"}
          </a>}
        </div>
      </div>

      {/* Room */}
      {b.roompicture&&<div className="card">
        <img src={b.roompicture} alt={b.roomType||""}
          style={{width:"100%",height:170,objectFit:"cover"}}/>
        <div style={{padding:"1.25rem 1.5rem"}}>
          {b.roomType&&<h4 style={{fontSize:"1rem",fontWeight:700,color:C.dark,marginBottom:6}}>{b.roomType}</h4>}
          {b.roomdescriptionita&&<p style={{fontSize:".83rem",color:C.mid,lineHeight:1.65}}>{b.roomdescriptionita}</p>}
        </div>
      </div>}


    </>}/>
  </>}/>;
}

/* ─── FLIGHTS ────────────────────────────────────────── */
function FCard({title,from,to,dep,arr,dur,stop,airline,alImg,pnr,b,lang,first}){
  const t=T[lang]||T.EN;
  return <div className="card" style={{padding:"1.5rem",marginBottom:"1.1rem"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.25rem"}}>
      <SectionLabel icon={<Ico name="bb-flight" size={16}/>} ch={title}/>
      {pnr&&<div style={{background:C.orangeLight,borderRadius:50,padding:"4px 14px",
        fontSize:".72rem",color:C.orange,fontWeight:700,letterSpacing:".04em"}}>
        {t.pnr}: {pnr}
      </div>}
    </div>
    <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:"1rem"}}>
      {/* Departure */}
      <div style={{textAlign:"center",minWidth:70}}>
        <div style={{fontSize:"2rem",fontWeight:800,color:C.dark,lineHeight:1,letterSpacing:"-.02em"}}>{from}</div>
        <div style={{fontSize:"1.1rem",fontWeight:700,color:C.charcoal,marginTop:3}}>{fmtT(dep)}</div>
        <div style={{fontSize:".7rem",color:C.muted,marginTop:2}}>{fmtDs(dep,lang)}</div>
      </div>
      {/* Line */}
      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:5}}>
        <div style={{fontSize:".68rem",color:C.muted,letterSpacing:".03em"}}>
          {dur}{stop&&stop!==false?` · ${t.stop}: ${stop}`:` · ${t.direct}`}
        </div>
        <div style={{width:"100%",display:"flex",alignItems:"center",gap:4}}>
          <div style={{flex:1,height:1.5,background:C.border,borderRadius:1}}/>
          <div style={{width:34,height:34,borderRadius:"50%",background:C.peach,
            border:`1px solid ${C.peachBorder}`,display:"flex",alignItems:"center",
            justifyContent:"center",fontSize:"1rem",flexShrink:0}}>✈</div>
          <div style={{flex:1,height:1.5,background:C.border,borderRadius:1}}/>
        </div>
        {airline&&<div style={{display:"flex",alignItems:"center",gap:5}}>
          {alImg&&<img src={alImg} alt={airline} style={{height:14,objectFit:"contain"}}
            onError={e=>{e.target.src=HOTEL_FALLBACK_IMG;}}/>}
          <span style={{fontSize:".7rem",color:C.muted}}>{airline}</span>
        </div>}
      </div>
      {/* Arrival */}
      <div style={{textAlign:"center",minWidth:70}}>
        <div style={{fontSize:"2rem",fontWeight:800,color:C.dark,lineHeight:1,letterSpacing:"-.02em"}}>{to}</div>
        <div style={{fontSize:"1.1rem",fontWeight:700,color:C.charcoal,marginTop:3}}>{fmtT(arr)}</div>
        <div style={{fontSize:".7rem",color:C.muted,marginTop:2}}>{fmtDs(arr,lang)}</div>
      </div>
    </div>
    {first&&(b.flightEticket||b.ManageFlightURL)&&
      <div style={{borderTop:`1px solid ${C.border}`,paddingTop:"1rem",display:"flex",gap:8,flexWrap:"wrap"}}>
        {b.flightEticket&&b.flightEticket!=="false"&&
          <a href={b.flightEticket} target="_blank" rel="noopener noreferrer" className="btn-orange">⬇ {t.eticket}</a>}
        {b.ManageFlightURL&&b.ManageFlightURL!=="false"&&
          <a href={b.ManageFlightURL} target="_blank" rel="noopener noreferrer" className="btn-outline">↗ {t.mflight}</a>}
      </div>}
  </div>;
}

function Flights({b,lang}){
  const t = T[lang]||T.EN;
  // FlightStatus/trainstatus arrivano da Ninox come id ("1"/"2"/"3") OPPURE
  // come caption del campo choice ("TO RELEASE"/"CONFIRMED"/"CANCELLED").
  // Normalizziamo a id: 1=da confermare, 2=confermato, 3=cancellato.
  const normStatus = s => ({"1":"1","2":"2","3":"3","TO RELEASE":"1","CONFIRMED":"2","CANCELLED":"3"})[String(s||"").trim().toUpperCase()]||"";
  const fs = normStatus(b.FlightStatus);
  // Nascondi del tutto se volo cancellato (status 3)
  if(fs==="3") return null;
  const LANG_CODE = {EN:4,IT:2,ES:3,NL:5,FR:6,DE:7};
  const langCode = LANG_CODE[lang]||4;
  const slug = getSlug()||b.slug||b.Slug||b.bookingSlug||"";
  // status 1 = pending (banner only), status 2 = confirmed (iframe)
  // Train: hide when trainstatus=3 (cancelled)
  // Cover all case variants: trainstatus (lowercase), trainStatus, TrainStatus
  const trainStatus = normStatus(b.trainstatus||b.trainStatus||b.TrainStatus);
  const hasTrain = !!b.train && trainStatus!=="3";  // trainStatus already covers all case variants

  // Helper: format timestamp to time HH:MM
  const fmtTrainTime = ts => {
    if(!ts) return "";
    const d = new Date(Number(ts));
    return String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");
  };
  // Helper: format timestamp to date
  const fmtTrainDate = ts => {
    if(!ts) return "";
    const d = new Date(Number(ts));
    return fmtD(Number(ts), lang);
  };

  const TrainSection = () => {
    if(trainStatus==="3") return null;
    if(trainStatus==="1") return (
      <div className="card" style={{padding:"1.5rem",marginBottom:"1.25rem"}}>
        <SectionLabel icon={<Ico name="bb-train" size={16}/>} ch={t.trainbk}/>
        <div style={{display:"flex",alignItems:"flex-start",gap:12,padding:"14px 16px",
          borderRadius:10,background:"#FFF8E6",border:"1px solid #F5D76E"}}>
          <span style={{fontSize:"1.3rem",flexShrink:0}}>⏳</span>
          <div>
            <div style={{fontWeight:700,color:"#7A5800",marginBottom:4,fontSize:".9rem"}}>{t.trainbk}</div>
            <p style={{fontSize:".84rem",color:"#7A5800",lineHeight:1.65,margin:0}}>{t.trainPending}</p>
          </div>
        </div>
      </div>
    );

    if(trainStatus==="2") return (
      <div className="card" style={{padding:"1.5rem",marginBottom:"1.25rem"}}>
        <SectionLabel icon={<Ico name="bb-train" size={16}/>} ch={t.trainbk}/>

        {/* Operator + booking ref */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
          flexWrap:"wrap",gap:8,marginBottom:16,paddingBottom:14,borderBottom:`1px solid ${C.border}`}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:38,height:38,borderRadius:9,background:"#f0fdf4",
              display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"}}>🚆</div>
            <div>
              <div style={{fontSize:".7rem",color:C.muted,fontWeight:600,
                letterSpacing:".1em",textTransform:"uppercase"}}>{t.trainLine}</div>
              <div style={{fontWeight:700,color:C.dark,fontSize:".95rem"}}>
                {b.trainlines||"–"}
              </div>
            </div>
          </div>
          {b.trainbookingnumber&&
            <div style={{background:C.orangeLight,borderRadius:50,
              padding:"4px 14px",fontSize:".75rem",color:C.orange,fontWeight:700,
              letterSpacing:".04em"}}>
              {t.trainref}: {b.trainbookingnumber}
            </div>}
        </div>

        {/* Outbound journey */}
        {b.traindeparture&&<>
          <div style={{fontSize:".7rem",fontWeight:700,letterSpacing:".12em",
            textTransform:"uppercase",color:C.muted,marginBottom:10}}>
            {t.trainDep} → {t.trainArr}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",
            gap:12,alignItems:"center",marginBottom:16,
            padding:"14px",background:C.bg,borderRadius:12,border:`1px solid ${C.border}`}}>
            <div style={{textAlign:"left"}}>
              <div style={{fontFamily:"Georgia,serif",fontSize:"1.6rem",fontWeight:500,
                color:C.dark,lineHeight:1}}>{fmtTrainTime(b.traindeparture)}</div>
              <div style={{fontSize:".75rem",color:C.muted,marginTop:4}}>{fmtTrainDate(b.traindeparture)}</div>
              <div style={{fontSize:".82rem",fontWeight:600,color:C.charcoal,marginTop:3}}>
                {b.traindeparturestation||"–"}
              </div>
            </div>
            <div style={{textAlign:"center",color:C.muted}}>
              <div style={{fontSize:"1.2rem"}}>→</div>
              <div style={{fontSize:".68rem",letterSpacing:".05em",marginTop:2}}>{b.trainlines||""}</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{fontFamily:"Georgia,serif",fontSize:"1.6rem",fontWeight:500,
                color:C.dark,lineHeight:1}}>{fmtTrainTime(b.trainarrival)}</div>
              <div style={{fontSize:".75rem",color:C.muted,marginTop:4}}>{fmtTrainDate(b.trainarrival)}</div>
              <div style={{fontSize:".82rem",fontWeight:600,color:C.charcoal,marginTop:3}}>
                {b.trainarrivalstation||"–"}
              </div>
            </div>
          </div>
        </>}

        {/* Return journey */}
        {b.traindeparture2&&<>
          <div style={{fontSize:".7rem",fontWeight:700,letterSpacing:".12em",
            textTransform:"uppercase",color:C.muted,marginBottom:10}}>
            {t.trainReturn}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",
            gap:12,alignItems:"center",marginBottom:16,
            padding:"14px",background:C.bg,borderRadius:12,border:`1px solid ${C.border}`}}>
            <div style={{textAlign:"left"}}>
              <div style={{fontFamily:"Georgia,serif",fontSize:"1.6rem",fontWeight:500,
                color:C.dark,lineHeight:1}}>{fmtTrainTime(b.traindeparture2)}</div>
              <div style={{fontSize:".75rem",color:C.muted,marginTop:4}}>{fmtTrainDate(b.traindeparture2)}</div>
              <div style={{fontSize:".82rem",fontWeight:600,color:C.charcoal,marginTop:3}}>
                {b.trainarrivalstation||"–"}
              </div>
            </div>
            <div style={{textAlign:"center",color:C.muted}}>
              <div style={{fontSize:"1.2rem"}}>→</div>
              <div style={{fontSize:".68rem",letterSpacing:".05em",marginTop:2}}>{b.trainlines||""}</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{fontFamily:"Georgia,serif",fontSize:"1.6rem",fontWeight:500,
                color:C.dark,lineHeight:1}}>{fmtTrainTime(b.trainarrival2)}</div>
              <div style={{fontSize:".75rem",color:C.muted,marginTop:4}}>{fmtTrainDate(b.trainarrival2)}</div>
              <div style={{fontSize:".82rem",fontWeight:600,color:C.charcoal,marginTop:3}}>
                {b.traindeparturestation||"–"}
              </div>
            </div>
          </div>
        </>}

        {/* Manage link */}
        {b.trainticketlink&&b.trainticketlink!=="false"&&
          <a href={b.trainticketlink} target="_blank" rel="noopener noreferrer" className="btn-orange"
            style={{display:"inline-flex",alignItems:"center",gap:7}}>
            🚆 {t.trainManage}
          </a>}
      </div>
    );

    // trainStatus empty/other — show basic info if available
    return b.trainbookingnumber||b.trainticketlink ? (
      <div className="card" style={{padding:"1.5rem",marginBottom:"1.25rem"}}>
        <SectionLabel icon={<Ico name="bb-train" size={16}/>} ch={t.trainbk}/>
        {b.trainbookingnumber&&<IRow label={t.trainref} val={b.trainbookingnumber}/>}
        {b.trainticketlink&&b.trainticketlink!=="false"&&
          <div style={{marginTop:12}}>
            <a href={b.trainticketlink} target="_blank" rel="noopener noreferrer" className="btn-orange">
              🚆 {t.trainManage}
            </a>
          </div>}
      </div>
    ) : null;
  };

  // No flight or train → empty state
  if(!b.flight && !b.Airline1 && !hasTrain){
    return <Wrap ch={
      <div style={{textAlign:"center",padding:"3rem 1rem",color:C.mid}}>
        <div style={{fontSize:"2.5rem",marginBottom:12}}>✈️</div>
        <p style={{fontSize:".9rem"}}>{t.flights}</p>
      </div>
    }/>;
  }

  return <Wrap ch={<>
    {/* Train info (if present) */}
    {hasTrain&&<TrainSection/>}

    {/* Flight section: status=1→pending banner, status=2→iframe, other→iframe */}
    {(b.flight||b.Airline1)&&(fs==="1"
      ? <div style={{display:"flex",alignItems:"flex-start",gap:12,padding:"20px",
          borderRadius:12,background:"#FFF8E6",border:"1px solid #F5D76E"}}>
          <span style={{fontSize:"1.5rem",flexShrink:0}}>⏳</span>
          <div>
            <div style={{fontWeight:700,color:"#7A5800",marginBottom:6,fontSize:".9rem"}}>
              {t.flights}
            </div>
            <p style={{fontSize:".86rem",color:"#7A5800",lineHeight:1.65,margin:0}}>{t.flightPending}</p>
          </div>
        </div>
      : <div style={{margin:"-.75rem -.75rem 0"}}>
          <div style={{overflow:"hidden",borderRadius:16,height:"calc(90vh - 60px)",position:"relative"}}>
            <iframe
              src={`https://better-bookings.com/offersonline/Flight_booking_detail.html?slug=${encodeURIComponent(slug)}&customerlanguage=${langCode}&v=20260603a`}
              style={{width:"100%",height:"calc(90vh + 0px)",border:"none",display:"block",marginTop:"-60px"}}
              title="Flight Details"
              loading="lazy"
            />
          </div>
        </div>
    )}
  </>}/>;
}

function AdminFeeNote({b,t,inv2}){
  // Show only when Administrationfee=true AND Paymentcompleted=false/not true
  const hasFee = String(b.Administrationfee||b.administrationfee||"").toLowerCase()==="true";
  const isPaid = String(b.Paymentcompleted).toLowerCase()==="true";
  if(!hasFee||isPaid) return null;
  const amount = b.secondpaymentwithadmfee ? fmtM(b.secondpaymentwithadmfee) : "";
  const ref = b.bookingReference||"";
  const msg = (t.admFeeMsg||"")
    .replace("{amount}", amount)
    .replace("{ref}", ref);
  const lines = msg.split("\n");
  return <div style={{marginTop:12,padding:"14px 16px",borderRadius:12,
    background:"#FFF3CD",border:"1px solid #F0C040",textAlign:"left"}}>
    <div style={{fontWeight:700,fontSize:".88rem",color:"#7A4A00",marginBottom:10,
      display:"flex",alignItems:"center",gap:6}}>
      <span>⚠️</span> {t.due||"Payment required"}
    </div>
    {/* Pay Now button */}
    {inv2&&<div style={{marginBottom:12}}>
      <a href={inv2} target="_blank" rel="noopener noreferrer"
        className="btn-orange" style={{display:"inline-flex",alignItems:"center",
          gap:6,padding:"10px 20px",fontSize:".88rem",fontWeight:700}}>
        <Ico name="bb-card" size={15} light/> {t.payNow||"Pay Now"}
      </a>
    </div>}
    {lines.map((line,i)=>{
      if(!line.trim()) return <div key={i} style={{height:5}}/>;
      // Bold lines that look like bank fields (short line with colon)
      const isBankLine = line.indexOf(":") > 0 && line.trim().length < 65;
      return <p key={i} style={{fontSize:".81rem",color:"#5A3500",lineHeight:1.65,
        margin:"1px 0",fontWeight:isBankLine?600:400}}>
        {line}
      </p>;
    })}
  </div>;
}

function SalestypeNote({b,t}){
  if(!b||!t) return null;
  // Hide when booking is cancelled
  if(STATUS_CODE[String(b.bookingstatus)]==="canc") return null;
  // Hide this note when admin fee is active and unpaid (AdminFeeNote takes priority)
  const hasFee = String(b.Administrationfee||b.administrationfee||"").toLowerCase()==="true";
  const isPaid = String(b.Paymentcompleted).toLowerCase()==="true";
  if(hasFee && !isPaid) return null;
  const st = String(b.salestype||b.SalesType||"");
  const msg = (st==="1"||st==="4") ? t.salesAuto
            : (st==="3"||st==="5") ? t.salesManual
            : null;
  if(!msg) return null;
  return <div style={{marginTop:10,padding:"12px 14px",borderRadius:10,
    background:"#F0F7FF",border:"1px solid #C7DEFA",
    fontSize:".82rem",color:"#1E4A8A",lineHeight:1.65}}>{msg}</div>;
}

function InvoiceList({b,t}){
  const isPaidFull = String(b.Paymentcompleted).toLowerCase()==="true";
  const hasFee = String(b.Administrationfee||b.administrationfee||"").toLowerCase()==="true";
  const invRows = [
    b.invoice1?{label:t.p1,amount:b.amount1Payment,inv:b.invoice1}:null,
    b.invoice2?{label:t.p2,amount:(hasFee&&!isPaidFull&&b.secondpaymentwithadmfee)||b.amount2Payment,inv:b.invoice2}:null,
    b.invoice3?{label:t.p3,amount:b.amount3Payment,inv:b.invoice3}:null,
  ].filter(Boolean);
  // Mostra ogni fattura effettivamente emessa: se il link (Xero) esiste, la
  // fattura è disponibile e dev'essere apribile dal cliente — anche quella del
  // saldo nei pagamenti rateali, indipendentemente da Payment completed. Prima
  // si nascondeva tutto tranne l'acconto finché il saldo non era pagato, il che
  // impediva al cliente di aprire/pagare la fattura del saldo. L'empty-state
  // sotto copre il caso "nessuna fattura ancora emessa".
  const visible = invRows;
  if(!visible.length) return <div style={{padding:"12px 14px",borderRadius:8,
    background:C.bg,border:"1px dashed "+C.border,
    fontSize:".8rem",color:C.muted,textAlign:"left",lineHeight:1.5}}>
    ℹ️ {t.invAfterCheckout}
  </div>;
  return <>{visible.map((p,i)=>(
    <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",
      padding:"14px",background:C.bg,borderRadius:10,border:"1px solid "+C.border}}>
      <div>
        <div style={{fontSize:".85rem",fontWeight:500,color:C.dark}}>{p.label}</div>
        {p.amount&&<div style={{fontSize:".72rem",color:C.muted}}>{fmtM(p.amount)}</div>}
      </div>
      <a href={p.inv} target="_blank" rel="noopener noreferrer" className="btn-orange">⬇ PDF</a>
    </div>
  ))}</>;
}

function Payments({b,lang}){
  const t=T[lang]||T.EN;
  // salestype=2 → hide payments section entirely
  if(String(b.salestype||b.SalesType||"")==="2") return null;
  const hasFee = String(b.Administrationfee||b.administrationfee||"").toLowerCase()==="true";
  const allPaid2 = String(b.Paymentcompleted).toLowerCase()==="true";
  const amount2 = (hasFee&&!allPaid2&&b.secondpaymentwithadmfee) ? b.secondpaymentwithadmfee : b.amount2Payment;
  // Una rata "esiste" se ha importo, data O fattura emessa — stessa logica della
  // sezione fatture (InvoiceList). Prima si filtrava solo su amount, così una rata
  // con fattura+data ma importo non valorizzato su Ninox spariva dai pagamenti pur
  // comparendo tra le fatture (es. "Amount 3 payment" vuoto su prenotazioni a 3 rate).
  // `raw` conserva l'importo grezzo (senza admin fee) per il calcolo del residuo.
  const ps=[
    {label:t.p1,amount:b.amount1Payment,raw:b.amount1Payment,date:b.date1Payment,inv:b.invoice1},
    {label:t.p2,amount:amount2,raw:b.amount2Payment,date:b.date2Payment,inv:b.invoice2},
    {label:t.p3,amount:b.amount3Payment,raw:b.amount3Payment,date:b.date3Payment,inv:b.invoice3},
  ].filter(p=>p.amount||p.date||p.inv);
  // Se a una sola rata esistente manca l'importo, ricavalo dal residuo
  // (Selling Price − somma delle rate note) così non resta vuoto.
  const missing=ps.filter(p=>!p.amount);
  if(missing.length===1){
    const known=ps.reduce((s,p)=>s+(Number(p.raw)||0),0);
    const residual=(Number(b.sellingPrice)||0)-known;
    if(residual>0) missing[0].amount=residual;
  }
  const now=new Date();

  return <Wrap ch={<Grid ch={<>
    <div className="card" style={{padding:"1.5rem"}}>
      <SectionLabel icon={<Ico name="bb-price" size={16}/>} ch={t.psum}/>
      {/* Cancellation statement */}
      {STATUS_CODE[String(b.bookingstatus)]==="canc"&&t.cancRefund&&
        <div style={{display:"flex",gap:10,padding:"14px",borderRadius:10,
          background:"#FEEEEE",border:"1px solid #F5C6C6",marginBottom:"1rem"}}>
          <span style={{fontSize:"1.2rem",flexShrink:0}}>❌</span>
          <p style={{fontSize:".85rem",color:"#C0392B",lineHeight:1.65,margin:0}}>{t.cancRefund}</p>
        </div>}
      {/* Total card */}
      <div style={{background:C.dark,borderRadius:14,padding:"1.5rem",marginBottom:"1.25rem",
        position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-20,right:-20,width:120,height:120,
          borderRadius:"50%",background:"rgba(232,80,26,.15)"}}/>
        <div style={{fontSize:".65rem",color:"rgba(255,255,255,.45)",letterSpacing:".1em",
          fontWeight:600,marginBottom:4}}>{t.total.toUpperCase()}</div>
        <div style={{fontSize:"2.4rem",fontWeight:800,color:C.white,lineHeight:1}}>{fmtM(b.sellingPrice)}</div>
        <div style={{fontSize:".72rem",color:"rgba(255,255,255,.3)",marginTop:6}}>{b.bookingReference}</div>
      </div>
      {/* Payments */}
      {ps.length>0&&<>
        <div style={{fontSize:".68rem",fontWeight:600,letterSpacing:".08em",
          color:C.muted,marginBottom:".875rem"}}>{t.split.toUpperCase()}</div>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {ps.map((p,i)=>{
            // p1 always paid; p2/p3 only when Paymentcompleted=true
            const allPaid = String(b.Paymentcompleted).toLowerCase()==="true";
            const isPaid = i===0 ? true : allPaid;
            return <div key={i} style={{display:"flex",justifyContent:"space-between",
              alignItems:"center",padding:"14px",
              background:isPaid?C.successBg:C.bg,borderRadius:12,
              border:`1px solid ${isPaid?"#A8D5B5":C.border}`}}>
              <div>
                <div style={{fontSize:".85rem",fontWeight:600,color:C.dark}}>{p.label}</div>
                <div style={{fontSize:".72rem",color:C.muted,marginTop:2}}>{fmtDs(p.date,lang)}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5,flexShrink:0}}>
                {p.amount?<div style={{fontWeight:700,color:C.dark,fontSize:".9rem"}}>{fmtM(p.amount)}</div>:null}
                <StatusBadge ok={isPaid} warn={!isPaid} label={isPaid?t.paid:t.due}/>
              </div>
            </div>;
          })}
        </div>
        {/* Admin fee warning */}
        <AdminFeeNote b={b} t={t} inv2={b.invoice2}/>
        {/* Salestype payment description */}
        <SalestypeNote b={b} t={t}/>
      </>}

    </div>

    <div className="card" style={{padding:"1.5rem"}}>
      <SectionLabel icon={<Ico name="bb-invoice" size={16}/>} ch={t.inv}/>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        <InvoiceList b={b} t={t}/>
      </div>
    </div>
  </>}/>}/>;
}

/* ─── TOURS ──────────────────────────────────────────── */

/* ─── LOADING / ERROR ────────────────────────────────── */
function Loading({lang}){
  const t=T[lang]||T.EN;
  return <div style={{minHeight:"100vh",background:C.white,display:"flex",flexDirection:"column",
    alignItems:"center",justifyContent:"center"}}>
    <Logo h={32}/>
    <div style={{marginTop:28,width:36,height:36,border:`3px solid ${C.peach}`,
      borderTopColor:C.orange,borderRadius:"50%",animation:"spin .8s linear infinite"}}/>
    <p style={{color:C.muted,fontSize:".85rem",marginTop:16}}>{t.loading}</p>
  </div>;
}

function Err({lang,msg}){
  const t=T[lang]||T.EN;
  return <div style={{minHeight:"100vh",background:C.white,display:"flex",flexDirection:"column",
    alignItems:"center",justifyContent:"center",padding:"2rem",textAlign:"center"}}>
    <Logo h={32}/>
    <div style={{width:64,height:64,borderRadius:"50%",background:C.peach,
      display:"flex",alignItems:"center",justifyContent:"center",
      fontSize:"1.75rem",margin:"24px 0 16px"}}>🔍</div>
    <h2 style={{fontSize:"1.4rem",fontWeight:800,color:C.dark,marginBottom:8}}>{t.errtitle}</h2>
    <p style={{color:C.mid,fontSize:".88rem",marginBottom:6}}>{msg||t.notfound}</p>
    <p style={{color:C.muted,fontSize:".78rem"}}>{t.errsub}</p>
  </div>;
}

/* ─── LOGIN PAGE ─────────────────────────────────────── */
// URL of the PHP lookup file on your server
const LOOKUP_URL = "https://review.better-bookings.com/api/ext/lookup";

// Login also shows EN
const LOGIN_T = {
  EN:{
    title:"Find your booking",
    sub:"Enter your booking reference and email address to access your travel portal.",
    refLabel:"Booking Reference",refPlaceholder:"e.g. BB-2025-2073",
    emailLabel:"Email Address",emailPlaceholder:"email@example.com",
    btn:"Access my booking",
    searching:"Searching…",
    errNotFound:"Booking not found. Please check your reference and email.",
    errServer:"Connection error. Please try again.",
    divider:"or",
    helpText:"You can also use the direct link sent in your confirmation email.",
  },
  IT:{
    title:"Trova la tua prenotazione",
    sub:"Inserisci il riferimento prenotazione e la tua email per accedere al portale.",
    refLabel:"Riferimento Prenotazione",refPlaceholder:"es. BB-2025-2073",
    emailLabel:"Indirizzo Email",emailPlaceholder:"email@esempio.com",
    btn:"Accedi alla mia prenotazione",
    searching:"Ricerca in corso…",
    errNotFound:"Prenotazione non trovata. Verifica il riferimento e l'email.",
    errServer:"Errore di connessione. Riprova.",
    divider:"oppure",
    helpText:"Puoi anche usare il link diretto ricevuto nell'email di conferma.",
  },
  ES:{
    title:"Encuentra tu reserva",
    sub:"Introduce la referencia de reserva y tu email para acceder al portal.",
    refLabel:"Referencia de Reserva",refPlaceholder:"ej. BB-2025-2073",
    emailLabel:"Correo Electrónico",emailPlaceholder:"email@ejemplo.com",
    btn:"Acceder a mi reserva",
    searching:"Buscando…",
    errNotFound:"Reserva no encontrada. Verifica la referencia y el email.",
    errServer:"Error de conexión. Inténtalo de nuevo.",
    divider:"o",
    helpText:"También puedes usar el enlace directo enviado en tu email de confirmación.",
  },
  FR:{
    title:"Retrouvez votre réservation",
    sub:"Entrez votre référence de réservation et votre email pour accéder à votre espace.",
    refLabel:"Référence de Réservation",refPlaceholder:"ex. BB-2025-2073",
    emailLabel:"Adresse Email",emailPlaceholder:"email@exemple.com",
    btn:"Accéder à ma réservation",
    searching:"Recherche en cours…",
    errNotFound:"Réservation introuvable. Vérifiez la référence et l'email.",
    errServer:"Erreur de connexion. Veuillez réessayer.",
    divider:"ou",
    helpText:"Vous pouvez aussi utiliser le lien direct envoyé dans votre email de confirmation.",
  },
  DE:{
    title:"Ihre Buchung finden",
    sub:"Geben Sie Ihre Buchungsreferenz und E-Mail-Adresse ein, um auf Ihr Portal zuzugreifen.",
    refLabel:"Buchungsreferenz",refPlaceholder:"z.B. BB-2025-2073",
    emailLabel:"E-Mail-Adresse",emailPlaceholder:"email@beispiel.de",
    btn:"Auf meine Buchung zugreifen",
    searching:"Suche läuft…",
    errNotFound:"Buchung nicht gefunden. Bitte Referenz und E-Mail prüfen.",
    errServer:"Verbindungsfehler. Bitte erneut versuchen.",
    divider:"oder",
    helpText:"Sie können auch den direkten Link aus Ihrer Bestätigungs-E-Mail verwenden.",
  },
  NL:{
    title:"Uw boeking vinden",
    sub:"Voer uw boekingsreferentie en e-mailadres in om toegang te krijgen tot uw portaal.",
    refLabel:"Boekingsreferentie",refPlaceholder:"bijv. BB-2025-2073",
    emailLabel:"E-mailadres",emailPlaceholder:"email@voorbeeld.nl",
    btn:"Toegang",searching:"Zoeken...",
    errNotFound:"Boeking niet gevonden. Controleer uw gegevens.",
    errServer:"Verbindingsfout. Probeer het opnieuw.",
    helpText:"Heeft u problemen? Neem contact op via hello@better-bookings.com"
  },
};

function LoginPage({lang,setLang,onFound}){
  const t = LOGIN_T[lang]||LOGIN_T.EN;
  const [ref,setRef]     = useState("");
  const [email,setEmail] = useState("");
  const [loading,setLoading] = useState(false);
  const [err,setErr]     = useState("");
  const [slide,setSlide] = useState(0);
  const [fade,setFade]   = useState(true);

  /* ── Slideshow images (Unsplash free travel) ── */
  const SLIDES = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80", // beach
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80", // lake mountains
    "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1600&q=80", // tropical pool
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80", // city sunset
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80", // mountain lake
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1600&q=80", // waterfall forest
  ];

  useEffect(()=>{
    const timer = setInterval(()=>{
      setFade(false);
      setTimeout(()=>{
        setSlide(s=>(s+1)%SLIDES.length);
        setFade(true);
      }, 700);
    }, 4500);
    return ()=>clearInterval(timer);
  },[]);

  const handleSubmit = async () => {
    if(!ref.trim()||!email.trim()) return;
    setLoading(true); setErr("");
    try {
      const res = await fetch(
        `${LOOKUP_URL}?ref=${encodeURIComponent(ref.trim().toUpperCase())}&email=${encodeURIComponent(email.trim().toLowerCase())}`
      );
      const data = await res.json();
      if(data.found && data.slug){
        // Redirect via query param: funziona cross-env (GitHub Pages, one.com /manage/, Railway)
        // senza richiedere SPA path fallback (GitHub Pages e' statico → /manage/booking/<x> = 404).
        window.location.search = `?slug=${encodeURIComponent(data.slug)}`;
      } else { setErr(t.errNotFound); }
    } catch(e){ setErr(t.errServer); }
    finally { setLoading(false); }
  };

  const onKey = e => { if(e.key==="Enter") handleSubmit(); };

  const canSubmit = ref.trim()&&email.trim()&&!loading;

  return(
    <div style={{minHeight:"100vh",width:"100%",position:"relative",
      fontFamily:"'Poppins',sans-serif"}}>

      {/* ── Full-screen background slideshow ── */}
      {SLIDES.map((src,i)=>(
        <div key={i} style={{
          position:"fixed",inset:0,zIndex:0,
          backgroundImage:`url(${src})`,
          backgroundSize:"cover",backgroundPosition:"center",
          transition:"opacity .7s ease-in-out",
          opacity: i===slide&&fade ? 1 : 0,
        }}/>
      ))}

      {/* ── Dark overlay ── */}
      <div style={{position:"fixed",inset:0,zIndex:1,
        background:"linear-gradient(to bottom, rgba(0,0,0,.45) 0%, rgba(0,0,0,.6) 100%)"}}/>

      {/* ── Top bar ── */}
      <div style={{position:"relative",zIndex:30,display:"flex",
        alignItems:"center",justifyContent:"space-between",
        padding:"1rem 2rem",height:64}}>
        <img src="https://better-bookings.com/onewebmedia/Group%20292.png"
          alt="Better Bookings"
          style={{height:28,filter:"brightness(0) invert(1)"}}/>
        <LangBtnDark lang={lang} setLang={setLang}/>
      </div>

      {/* ── Centered content ── */}
      <div style={{position:"relative",zIndex:10,
        minHeight:"calc(100vh - 64px)",
        display:"flex",flexDirection:"column",
        alignItems:"center",justifyContent:"center",
        padding:"1rem 1.25rem 3rem"}}>

        {/* Headline above form */}
        <div style={{textAlign:"center",marginBottom:"1.75rem",maxWidth:480}}>
          <h1 style={{color:"#FFFFFF",fontSize:"clamp(1.5rem,4vw,2.2rem)",
            fontWeight:800,lineHeight:1.2,marginBottom:10,
            textShadow:"0 2px 16px rgba(0,0,0,.5)"}}>
            {lang==="IT"?"La tua prenotazione, sempre con te":
             lang==="ES"?"Tu reserva, siempre contigo":
             lang==="FR"?"Votre réservation, toujours avec vous":
             lang==="DE"?"Ihre Buchung, immer dabei":
             lang==="NL"?"Uw boeking, altijd bij u":
             "Your booking, always with you"}
          </h1>
          <p style={{color:"rgba(255,255,255,.8)",fontSize:"clamp(.85rem,2.5vw,1rem)",
            lineHeight:1.6,textShadow:"0 1px 8px rgba(0,0,0,.4)"}}>
            {t.sub}
          </p>
        </div>

        {/* Glass form card */}
        <div style={{
          width:"100%",maxWidth:420,
          background:"rgba(255,255,255,.12)",
          backdropFilter:"blur(22px)",WebkitBackdropFilter:"blur(22px)",
          border:"1px solid rgba(255,255,255,.25)",
          borderRadius:20,
          padding:"clamp(1.25rem,4vw,2rem)",
          boxShadow:"0 8px 48px rgba(0,0,0,.3)",
        }}>

          {/* Booking ref */}
          <div style={{marginBottom:14}}>
            <label style={{display:"block",fontSize:".72rem",fontWeight:700,
              color:"rgba(255,255,255,.9)",marginBottom:6,letterSpacing:".06em"}}>
              {t.refLabel.toUpperCase()}
            </label>
            <input
              value={ref}
              onChange={e=>setRef(e.target.value.toUpperCase())}
              onKeyDown={onKey}
              placeholder={t.refPlaceholder}
              style={{width:"100%",boxSizing:"border-box",
                padding:"12px 16px",borderRadius:10,
                border:"1.5px solid rgba(255,255,255,.3)",
                background:"rgba(255,255,255,.15)",
                color:"#FFFFFF",fontFamily:"'Poppins',sans-serif",
                fontSize:".92rem",fontWeight:600,letterSpacing:".05em",
                outline:"none",
                WebkitTextFillColor:"#FFFFFF",
              }}
            />
          </div>

          {/* Email */}
          <div style={{marginBottom:20}}>
            <label style={{display:"block",fontSize:".72rem",fontWeight:700,
              color:"rgba(255,255,255,.9)",marginBottom:6,letterSpacing:".06em"}}>
              {t.emailLabel.toUpperCase()}
            </label>
            <input
              type="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              onKeyDown={onKey}
              placeholder={t.emailPlaceholder}
              style={{width:"100%",boxSizing:"border-box",
                padding:"12px 16px",borderRadius:10,
                border:"1.5px solid rgba(255,255,255,.3)",
                background:"rgba(255,255,255,.15)",
                color:"#FFFFFF",fontFamily:"'Poppins',sans-serif",
                fontSize:".92rem",outline:"none",
                WebkitTextFillColor:"#FFFFFF",
              }}
            />
          </div>

          {/* Error */}
          {err&&<div style={{background:"rgba(220,38,38,.15)",
            border:"1px solid rgba(220,38,38,.5)",borderRadius:8,
            padding:"10px 14px",fontSize:".82rem",color:"#FFCDD2",
            marginBottom:14,lineHeight:1.5,display:"flex",gap:8}}>
            <span>⚠️</span><span>{err}</span>
          </div>}

          {/* CTA */}
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            style={{
              width:"100%",padding:"14px",borderRadius:10,
              background:canSubmit?C.orange:"rgba(255,255,255,.2)",
              color:"#FFFFFF",border:"none",
              cursor:canSubmit?"pointer":"not-allowed",
              fontFamily:"'Poppins',sans-serif",fontSize:".95rem",
              fontWeight:700,letterSpacing:".02em",
              transition:"background .2s, transform .1s",
              display:"flex",alignItems:"center",justifyContent:"center",gap:8,
              boxShadow:canSubmit?"0 4px 20px rgba(232,80,26,.4)":"none",
            }}>
            {loading
              ?<><span style={{width:16,height:16,border:"2px solid rgba(255,255,255,.4)",
                  borderTopColor:"#fff",borderRadius:"50%",display:"inline-block",
                  animation:"spin .7s linear infinite"}}/> {t.searching}</>
              :<><span>→</span>{t.btn}</>}
          </button>

          {/* Dots */}
          <div style={{display:"flex",justifyContent:"center",gap:7,marginTop:18}}>
            {SLIDES.map((_,i)=>(
              <div key={i} onClick={()=>{setFade(false);setTimeout(()=>{setSlide(i);setFade(true);},300);}}
                style={{width:i===slide?20:7,height:7,borderRadius:4,cursor:"pointer",
                  background:i===slide?"#E8501A":"rgba(255,255,255,.4)",
                  transition:"all .35s ease"}}/>
            ))}
          </div>
        </div>

        {/* Help text */}
        <p style={{textAlign:"center",fontSize:".76rem",
          color:"rgba(255,255,255,.55)",marginTop:18,lineHeight:1.6}}>
          {t.helpText}
        </p>
      </div>

      {/* ── Footer ── */}
      <div style={{position:"relative",zIndex:10,textAlign:"center",
        padding:".75rem",fontSize:".68rem",
        color:"rgba(255,255,255,.35)"}}>
        © {new Date().getFullYear()} Better Bookings · hello@better-bookings.com
      </div>
    </div>
  );
}

/* ─── FAQ DATA ───────────────────────────────────────── */
const FAQ_DATA = {
  EN:[
    {cat:"payments",q:"Which payment methods do you accept?",a:"Card, bank transfer and PayPal."},
    {cat:"payments",q:"When do I pay?",a:"Deposit immediately and balance within 45 days before departure, unless stated otherwise."},
    {cat:"payments",q:"What is included in the price?",a:"What is shown under 'Included in the price' in the offer/confirmation. Not‑included items (e.g. local taxes, city tax, resort fee, extra baggage, transfers, fuel surcharges) are specified in the offer."},
    {cat:"docs",q:"What do I receive after booking?",a:"Booking confirmation immediately via email/account. Hotel voucher ~7 days before departure. Flights purchased with us: e‑ticket includes times, PNR and baggage allowance (check‑in with the airline). Event tickets: digital from the organiser usually 3 days before (sometimes same day)."},
    {cat:"docs",q:"When do I receive my final documents?",a:"Hotel voucher ~7 days before departure. Flights: data are in your e‑ticket; check‑in and boarding passes with the airline. Events: digital tickets usually 3 days before (sometimes same day)."},
    {cat:"docs",q:"Which travel documents do I need?",a:"Depends on destination. In general a valid ID; some countries require a passport with remaining validity and/or a visa. Travellers must check entry requirements."},
    {cat:"changes",q:"What are the cancellation policies?",a:"They vary by product and supplier (hotel‑only / package with flights / events). You'll always find them in the offer and in your confirmation."},
    {cat:"changes",q:"How do I request a change?",a:"Write to us. Changes may involve fees set by suppliers; flight changes almost always have airline change fees."},
    {cat:"flights",q:"Is baggage included?",a:"Depends on fare. Some include only a cabin bag or small personal item; additional baggage can be purchased."},
    {cat:"flights",q:"Check‑in and boarding passes",a:"Done directly with the airline using the codes in your e‑ticket."},
    {cat:"flights",q:"Delays/cancellations and schedule changes",a:"Schedules may change by airline/authority decision. Airline policies and legal protections apply."},
    {cat:"hotel",q:"Is the room type guaranteed?",a:"As stated in your order confirmation. In case of overbooking, re‑accommodation to a similar or superior room/property, or cancellation with refund per policy."},
    {cat:"hotel",q:"Check‑in/out, deposits, city taxes",a:"Times and info are in your confirmation. Some properties require security deposits and local city taxes to be paid on site."},
    {cat:"hotel",q:"Special requests (cot, intolerances, accessibility)",a:"Write to us: we'll forward your request to the supplier. Confirmation depends on availability."},
    {cat:"privacy",q:"Which data do you collect?",a:"Only what is necessary to deliver the booked services and to comply with legal obligations."},
    {cat:"privacy",q:"With whom do you share my data?",a:"With involved suppliers (airlines, hotels, insurers, etc.) solely for booking‑related purposes."},
    {cat:"privacy",q:"How do I exercise my privacy rights?",a:"Write to dpo@better-bookings.com. Average response time: 3 days."},
  ],
  IT:[
    {cat:"payments",q:"Quali metodi di pagamento accettate?",a:"Carta, bonifico e PayPal."},
    {cat:"payments",q:"Quando si paga?",a:"Acconto subito e saldo entro 45 giorni dalla partenza, salvo diversa indicazione."},
    {cat:"payments",q:"Cosa è incluso nel prezzo?",a:"Quanto indicato nella sezione 'Incluso nel prezzo' dell'offerta/conferma. Eventuali voci non incluse (tasse locali, city tax, resort fee, bagagli extra, trasferimenti, adeguamenti carburante) sono specificate in offerta."},
    {cat:"docs",q:"Cosa ricevo dopo la prenotazione?",a:"Conferma di prenotazione subito via email/area personale. Voucher hotel ~7 giorni prima della partenza. Voli acquistati con noi: e‑ticket con orari, PNR e franchigia bagaglio (check‑in con la compagnia). Biglietti eventi: digitali dall'organizzatore in genere 3 giorni prima (a volte il giorno stesso)."},
    {cat:"docs",q:"Quando ricevo i documenti finali?",a:"Voucher hotel ~7 giorni prima. Voli: dati nell'e‑ticket; check‑in e carte d'imbarco con la compagnia aerea. Eventi: biglietti digitali in genere 3 giorni prima (talvolta il giorno stesso)."},
    {cat:"docs",q:"Quali documenti servono?",a:"Dipende dalla destinazione. In generale documento d'identità valido; alcuni paesi richiedono passaporto con validità residua e/o visto. Il viaggiatore verifica i requisiti."},
    {cat:"changes",q:"Quali sono le politiche di cancellazione?",a:"Variano per tipologia e fornitore (solo hotel / pacchetto con volo / eventi). Trovi sempre le condizioni in offerta e nella conferma."},
    {cat:"changes",q:"Come richiedo una modifica?",a:"Scrivici. Le modifiche possono prevedere supplementi applicati dai fornitori; per i voli quasi sempre sono previsti costi di cambio."},
    {cat:"flights",q:"Bagagli inclusi?",a:"Dipende dalla tariffa. Alcune includono solo bagaglio a mano o zainetto; i bagagli aggiuntivi sono acquistabili a pagamento."},
    {cat:"flights",q:"Check‑in e carte d'imbarco",a:"Si effettuano direttamente con la compagnia aerea usando i codici presenti nel tuo e‑ticket."},
    {cat:"flights",q:"Ritardi/cancellazioni e cambi volo",a:"Gli operativi possono variare per decisione della compagnia/autorità. Si applicano le policy della compagnia e le tutele di legge."},
    {cat:"hotel",q:"La tipologia di camera è garantita?",a:"È quella riportata nella conferma d'ordine. In caso di overbooking, riprotezione su struttura/camera simile o superiore, oppure cancellazione con rimborso secondo policy."},
    {cat:"hotel",q:"Check‑in/out, cauzioni, tasse di soggiorno",a:"Trovi orari e info in conferma. Alcune strutture richiedono depositi cauzionali e il pagamento in loco della tassa di soggiorno."},
    {cat:"hotel",q:"Richieste speciali (culla, intolleranze, accessibilità)",a:"Scrivici: trasmetteremo la richiesta al fornitore. La confermabilità dipende dalla disponibilità."},
    {cat:"privacy",q:"Quali dati raccogliete?",a:"Solo quelli necessari a erogare i servizi prenotati e per gli adempimenti legali."},
    {cat:"privacy",q:"Con chi condividete i miei dati?",a:"Con i fornitori coinvolti (compagnie aeree, hotel, assicurazioni, ecc.) esclusivamente per finalità legate alla prenotazione."},
    {cat:"privacy",q:"Come esercito i miei diritti privacy?",a:"Scrivi a dpo@better-bookings.com. Tempo medio di risposta: 3 giorni."},
  ],
  ES:[
    {cat:"payments",q:"¿Qué métodos de pago aceptáis?",a:"Tarjeta, transferencia bancaria y PayPal."},
    {cat:"payments",q:"¿Cuándo pago?",a:"Anticipo inmediato y saldo hasta 45 días antes de la salida, salvo indicación distinta."},
    {cat:"payments",q:"¿Qué incluye el precio?",a:"Lo indicado en 'Incluido en el precio' de la oferta/confirmación. Lo no incluido (tasas locales, city tax, resort fee, equipaje extra, traslados, recargos de combustible) se especifica en la oferta."},
    {cat:"docs",q:"¿Qué recibo tras reservar?",a:"Confirmación de reserva inmediata. Bono de hotel ~7 días antes. Vuelos con nosotros: e‑ticket con horarios, PNR y franquicia de equipaje. Entradas de eventos: digitales del organizador normalmente 3 días antes."},
    {cat:"docs",q:"¿Cuándo recibo la documentación final?",a:"Bono de hotel ~7 días antes. Vuelos: datos en el e‑ticket; check‑in y tarjetas de embarque con la aerolínea. Eventos: entradas digitales generalmente 3 días antes."},
    {cat:"docs",q:"¿Qué documentos necesito?",a:"Depende del destino. En general, un documento válido; algunos países requieren pasaporte con validez residual y/o visado. El viajero verifica requisitos."},
    {cat:"changes",q:"¿Cuáles son las políticas de cancelación?",a:"Cambian según producto y proveedor. Siempre las verás en la oferta y en tu confirmación."},
    {cat:"changes",q:"¿Cómo pido un cambio?",a:"Escríbenos. Los cambios pueden conllevar suplementos; en vuelos casi siempre hay cargos de cambio."},
    {cat:"flights",q:"¿Equipaje incluido?",a:"Depende de la tarifa. Algunas incluyen solo bolso personal o cabina; equipaje adicional se compra aparte."},
    {cat:"flights",q:"Check‑in y tarjetas de embarque",a:"Se hacen directamente con la aerolínea usando los códigos del e‑ticket."},
    {cat:"flights",q:"Retrasos/cancelaciones y cambios de horario",a:"Los horarios pueden variar por decisión de la aerolínea/autoridades. Aplican las políticas de la aerolínea y la normativa vigente."},
    {cat:"hotel",q:"¿Se garantiza el tipo de habitación?",a:"El indicado en tu confirmación. En overbooking: reubicación similar o superior, o cancelación con reembolso según política."},
    {cat:"hotel",q:"Check‑in/out, depósitos, tasas locales",a:"Horarios e info en la confirmación. Algunos alojamientos piden depósito y el pago in situ de la tasa turística."},
    {cat:"hotel",q:"Peticiones especiales (cuna, intolerancias, accesibilidad)",a:"Escríbenos: trasladaremos la petición al proveedor. La confirmación depende de la disponibilidad."},
    {cat:"privacy",q:"¿Qué datos recogéis?",a:"Solo los necesarios para prestar los servicios reservados y cumplir obligaciones legales."},
    {cat:"privacy",q:"¿Con quién compartís mis datos?",a:"Con los proveedores implicados exclusivamente para los fines relacionados con la reserva."},
    {cat:"privacy",q:"¿Cómo ejerzo mis derechos de privacidad?",a:"Escribe a dpo@better-bookings.com. Tiempo medio de respuesta: 3 días."},
  ],
  FR:[
    {cat:"payments",q:"Quels moyens de paiement acceptez-vous?",a:"Carte, virement et PayPal."},
    {cat:"payments",q:"Quand dois-je payer?",a:"Acompte immédiat et solde 45 jours avant le départ, sauf indication contraire."},
    {cat:"payments",q:"Qu'est-ce qui est inclus dans le prix?",a:"Ce qui est indiqué dans 'Inclus dans le prix' de l'offre/confirmation. Les éléments non inclus sont précisés dans l'offre."},
    {cat:"docs",q:"Que reçois-je après la réservation?",a:"Confirmation immédiate. Bon hôtel ~7 jours avant. Vols chez nous: e‑ticket avec horaires, PNR et franchise. Billets d'événements: numériques de l'organisateur généralement 3 jours avant."},
    {cat:"docs",q:"Quand recevrai-je les documents finaux?",a:"Bon hôtel ~7 jours avant. Vols: données dans l'e‑ticket; enregistrement et cartes d'embarquement avec la compagnie. Événements: billets numériques généralement 3 jours avant."},
    {cat:"docs",q:"Quels documents sont nécessaires?",a:"Selon la destination. En général une pièce d'identité valide; certains pays exigent un passeport et/ou un visa. Le voyageur vérifie les exigences d'entrée."},
    {cat:"changes",q:"Quelles sont les politiques d'annulation?",a:"Elles varient selon le produit et le fournisseur. Elles sont toujours indiquées dans l'offre et la confirmation."},
    {cat:"changes",q:"Comment demander une modification?",a:"Écrivez-nous. Des frais peuvent s'appliquer selon les fournisseurs; pour les vols, des frais de changement sont presque toujours requis."},
    {cat:"flights",q:"Bagages inclus?",a:"Selon le tarif. Certains incluent seulement un bagage cabine; les bagages supplémentaires sont payants."},
    {cat:"flights",q:"Enregistrement et cartes d'embarquement",a:"Directement avec la compagnie aérienne en utilisant les codes de votre e‑ticket."},
    {cat:"flights",q:"Retards/annulations et changements d'horaires",a:"Les horaires peuvent évoluer. Les politiques officielles et la loi s'appliquent."},
    {cat:"hotel",q:"Le type de chambre est-il garanti?",a:"Comme indiqué dans votre confirmation. En cas de surbooking: relogement similaire ou supérieur, ou annulation avec remboursement."},
    {cat:"hotel",q:"Check-in/out, cautions, taxe de séjour",a:"Horaires et infos dans votre confirmation. Certains établissements exigent un dépôt et le paiement de la taxe de séjour sur place."},
    {cat:"hotel",q:"Demandes spéciales (lit bébé, intolérances, accessibilité)",a:"Écrivez-nous: nous transmettrons au fournisseur. La confirmation dépend des disponibilités."},
    {cat:"privacy",q:"Quelles données collectez-vous?",a:"Uniquement celles nécessaires à la prestation des services et aux obligations légales."},
    {cat:"privacy",q:"Avec qui partagez-vous mes données?",a:"Avec les fournisseurs concernés exclusivement pour les besoins liés à la réservation."},
    {cat:"privacy",q:"Comment exercer mes droits RGPD?",a:"Écrivez à dpo@better-bookings.com. Délai moyen: 3 jours."},
  ],
  DE:[
    {cat:"payments",q:"Welche Zahlungsmethoden akzeptiert ihr?",a:"Karte, Überweisung und PayPal."},
    {cat:"payments",q:"Wann zahle ich?",a:"Anzahlung sofort, Restzahlung bis 45 Tage vor Abreise, sofern nicht anders angegeben."},
    {cat:"payments",q:"Was ist im Preis enthalten?",a:"Alles, was unter 'Im Preis enthalten' aufgeführt ist. Nicht enthaltene Positionen sind im Angebot angegeben."},
    {cat:"docs",q:"Was erhalte ich nach der Buchung?",a:"Buchungsbestätigung sofort. Hotelvoucher ~7 Tage vor Abreise. Flüge über uns: E‑Ticket mit Zeiten, PNR und Freigepäck. Eventtickets: digital vom Veranstalter meist 3 Tage vorher."},
    {cat:"docs",q:"Wann erhalte ich die endgültigen Unterlagen?",a:"Hotelvoucher ~7 Tage vorher. Flüge: Daten im E‑Ticket; Check‑in und Bordkarten bei der Airline. Events: digitale Tickets meist 3 Tage vorher."},
    {cat:"docs",q:"Welche Reisedokumente brauche ich?",a:"Abhängig vom Reiseziel. In der Regel ein gültiges Ausweisdokument; manche Länder verlangen Reisepass und/oder Visum."},
    {cat:"changes",q:"Wie sind die Stornobedingungen?",a:"Je nach Produkt und Anbieter unterschiedlich. Sie stehen immer im Angebot und in der Bestätigung."},
    {cat:"changes",q:"Wie fordere ich eine Änderung an?",a:"Schreiben Sie uns. Änderungen können Gebühren verursachen; bei Flügen fallen fast immer Airline-Änderungsgebühren an."},
    {cat:"flights",q:"Ist Gepäck inklusive?",a:"Abhängig vom Tarif. Manche beinhalten nur Kabinengepäck; zusätzliches Gepäck ist kostenpflichtig."},
    {cat:"flights",q:"Check‑in und Bordkarten",a:"Erfolgen direkt bei der Fluggesellschaft mit den Codes aus dem E‑Ticket."},
    {cat:"flights",q:"Verspätungen/Annullierungen und Flugplanänderungen",a:"Flugzeiten können sich ändern. Es gelten die Airline‑Regeln und gesetzlichen Ansprüche."},
    {cat:"hotel",q:"Ist der Zimmertyp garantiert?",a:"Wie in Ihrer Auftragsbestätigung. Bei Überbuchung: Umbuchung in ähnliches oder besseres Zimmer, oder Stornierung mit Erstattung."},
    {cat:"hotel",q:"Check‑in/out, Kautionen, Kurtaxen",a:"Zeiten und Infos stehen in der Bestätigung. Manche Unterkünfte verlangen Kautionen und Kurtaxe vor Ort."},
    {cat:"hotel",q:"Sonderwünsche (Babybett, Unverträglichkeiten, Barrierefreiheit)",a:"Schreiben Sie uns: Wir leiten den Wunsch an den Anbieter weiter."},
    {cat:"privacy",q:"Welche Daten erhebt ihr?",a:"Nur die zur Leistungserbringung und zur Erfüllung gesetzlicher Pflichten notwendigen Daten."},
    {cat:"privacy",q:"Mit wem teilt ihr meine Daten?",a:"Mit beteiligten Anbietern ausschließlich für buchungsbezogene Zwecke."},
    {cat:"privacy",q:"Wie übe ich meine Datenschutzrechte aus?",a:"Schreiben Sie an dpo@better-bookings.com. Durchschnittliche Antwortzeit: 3 Tage."},
  ],
  NL:[
    {cat:"payments",q:"Welke betaalmethoden accepteren jullie?",a:"Kaart, overschrijving en PayPal."},
    {cat:"payments",q:"Wanneer betaal ik?",a:"Aanbetaling meteen en saldo tot 45 dagen voor vertrek, tenzij anders vermeld."},
    {cat:"payments",q:"Wat is inbegrepen in de prijs?",a:"Wat vermeld staat onder 'Inbegrepen in de prijs'. Niet-inbegrepen items worden in de aanbieding vermeld."},
    {cat:"docs",q:"Wat ontvang ik na de boeking?",a:"Boekingsbevestiging direct. Hotelvoucher ~7 dagen voor vertrek. Vluchten via ons: e‑ticket met tijden, PNR en bagagevrijdom. Eventtickets: digitaal van de organisator meestal 3 dagen vooraf."},
    {cat:"docs",q:"Wanneer ontvang ik de definitieve documenten?",a:"Hotelvoucher ~7 dagen vooraf. Vluchten: gegevens in het e‑ticket; inchecken en boardingpassen bij de airline. Events: digitale tickets meestal 3 dagen vooraf."},
    {cat:"docs",q:"Welke reisdocumenten heb ik nodig?",a:"Afhankelijk van bestemming. In het algemeen een geldig identiteitsdocument; sommige landen vereisen paspoort en/of visum."},
    {cat:"changes",q:"Wat zijn de annuleringsvoorwaarden?",a:"Verschillen per product en leverancier. Je vindt ze altijd in de aanbieding en in je bevestiging."},
    {cat:"changes",q:"Hoe vraag ik een wijziging aan?",a:"Schrijf ons. Wijzigingen kunnen toeslagen meebrengen; voor vluchten zijn airline-wijzigingskosten bijna altijd van toepassing."},
    {cat:"flights",q:"Is bagage inbegrepen?",a:"Afhankelijk van het tarief. Sommige bevatten alleen handbagage; extra bagage is betalend."},
    {cat:"flights",q:"Inchecken en instapkaarten",a:"Rechtstreeks bij de luchtvaartmaatschappij met de codes in je e‑ticket."},
    {cat:"flights",q:"Vertragingen/annuleringen en schemawijzigingen",a:"Schema's kunnen wijzigen. Airline-beleid en wettelijke bescherming zijn van toepassing."},
    {cat:"hotel",q:"Wordt het kamertype gegarandeerd?",a:"Zoals vermeld in je orderbevestiging. Bij overboeking: herboeking naar vergelijkbare kamer, of annulering met terugbetaling."},
    {cat:"hotel",q:"Check-in/out, borg, toeristenbelasting",a:"Tijden en info staan in de bevestiging. Sommige accommodaties vragen een borg en lokale toeristenbelasting ter plaatse."},
    {cat:"hotel",q:"Speciale wensen (babybed, intoleranties, toegankelijkheid)",a:"Schrijf ons: we sturen het verzoek door naar de leverancier."},
    {cat:"privacy",q:"Welke gegevens verzamelen jullie?",a:"Alleen wat nodig is om de geboekte diensten te leveren en aan wettelijke verplichtingen te voldoen."},
    {cat:"privacy",q:"Met wie delen jullie mijn gegevens?",a:"Met betrokken leveranciers uitsluitend voor boekingsdoeleinden."},
    {cat:"privacy",q:"Hoe oefen ik mijn privacyrechten uit?",a:"Schrijf naar dpo@better-bookings.com. Gemiddelde reactietijd: 3 dagen."},
  ],
};

/* ─── SUPPORT TAB ────────────────────────────────────── */
function Support({b,lang}){
  const t = T[lang]||T.EN;
  const [query,setQuery]   = useState("");
  const [activeCat,setActiveCat] = useState("");
  const [openIdx,setOpenIdx]     = useState(null);
  const [showAll,setShowAll]     = useState(false);
  const [formSent,setFormSent]   = useState(false);
  const [sending,setSending]     = useState(false);
  const [form,setForm]           = useState({name:b.guestnamefull||"",email:arr1(b.guestEmail)||"",booking:b.bookingReference||"",topic:"payments",msg:""});

  const normalize = s => { if(!s) return ""; const n=s.normalize("NFD"); let r=""; for(let i=0;i<n.length;i++){const c=n.charCodeAt(i); if(c<0x0300||c>0x036f) r+=n[i];} return r.toLowerCase(); };
  const faqs = FAQ_DATA[lang]||FAQ_DATA.EN;

  const filtered = faqs.filter(f=>{
    const matchCat = !activeCat || f.cat===activeCat;
    const matchQ   = !query || normalize(f.q).includes(normalize(query)) || normalize(f.a).includes(normalize(query));
    return matchCat && matchQ;
  });

  const MAX = 6;
  const visible = (showAll||query||activeCat) ? filtered : filtered.slice(0,MAX);

  const cats = [
    {id:"payments",icon:<Ico name="bb-card" size={16}/>,label:t.catPayments},
    {id:"changes", icon:<Ico name="bb-edit" size={16}/>,label:t.catChanges},
    {id:"docs",    icon:<Ico name="bb-attachment" size={16}/>,label:t.catDocs},
    {id:"flights", icon:<Ico name="bb-flight" size={16}/>,label:t.catFlights},
    {id:"hotel",   icon:<Ico name="bb-hotel" size={16}/>,label:t.catHotels},
    {id:"privacy", icon:<Ico name="bb-lock" size={16}/>,label:t.catPrivacy},
  ];

  const topics = [
    {v:"payments",l:t.topicPayments},{v:"changes",l:t.topicChanges},
    {v:"docs",l:t.topicDocs},{v:"travel",l:t.topicTravel},{v:"other",l:t.topicOther},
  ];

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("booking", form.booking);
      fd.append("topic", form.topic);
      fd.append("message", form.msg);
      await fetch("/manage/api/form-proxy.php",{
        method:"POST",body:fd,headers:{Accept:"application/json"}
      });
      setFormSent(true);
      setForm(f=>({...f,msg:"",topic:"payments"}));
    } catch(err){ console.error(err); }
    setSending(false);
  };

  const inp = {
    width:"100%",padding:"10px 14px",borderRadius:9,
    border:`1px solid ${C.border}`,fontFamily:"'Poppins',sans-serif",
    fontSize:".85rem",outline:"none",color:C.dark,background:C.white,
  };

  return <Wrap ch={<>
    {/* Hero text */}
    <div style={{marginBottom:"1.75rem"}}>
      <h2 style={{fontSize:"1.4rem",fontWeight:700,color:C.dark,marginBottom:6}}>{t.helpTitle}</h2>
      <p style={{fontSize:".88rem",color:C.mid}}>{t.helpLead}</p>
    </div>

    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"1.25rem"}}>

      {/* ── LEFT: FAQ ───────────────────────────────────── */}
      <div>
        {/* Search */}
        <div style={{display:"flex",gap:8,marginBottom:"1.25rem"}}>
          <input value={query} onChange={e=>{setQuery(e.target.value);setShowAll(true);setOpenIdx(null);}}
            placeholder={t.searchPh} style={{...inp,flex:1}}/>
          <button className="btn-orange" style={{padding:"10px 18px",borderRadius:9,whiteSpace:"nowrap"}}>
            {t.searchBtn}
          </button>
        </div>

        {/* Categories */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(100px,1fr))",gap:8,marginBottom:"1.25rem"}}>
          {cats.map(c=>(
            <button key={c.id} onClick={()=>{setActiveCat(activeCat===c.id?"":c.id);setShowAll(true);setOpenIdx(null);}} style={{
              display:"flex",alignItems:"center",gap:7,padding:"9px 10px",
              borderRadius:10,border:`1.5px solid ${activeCat===c.id?C.orange:C.border}`,
              background:activeCat===c.id?C.orangeLight:C.white,
              cursor:"pointer",fontFamily:"'Poppins',sans-serif",fontSize:".75rem",
              fontWeight:activeCat===c.id?700:500,
              color:activeCat===c.id?C.orange:C.charcoal,transition:"all .15s",
            }}>
              <span style={{fontSize:14}}>{c.icon}</span>
              <span style={{lineHeight:1.3}}>{c.label}</span>
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div style={{marginBottom:"1rem"}}>
          <div style={{fontSize:".68rem",fontWeight:700,letterSpacing:".08em",
            color:C.muted,marginBottom:".875rem"}}>{t.faqTitle?.toUpperCase()}</div>

          {visible.length===0
            ?<div style={{padding:"14px",background:C.bg,borderRadius:10,
                border:`1px dashed ${C.border}`,fontSize:".85rem",color:C.mid}}>
              {t.noResults}
             </div>
            :visible.map((f,i)=>(
              <div key={i} className="card" style={{marginBottom:8,overflow:"visible"}}>
                <button onClick={()=>setOpenIdx(openIdx===i?null:i)} style={{
                  width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",
                  padding:"13px 16px",border:"none",background:"none",cursor:"pointer",
                  fontFamily:"'Poppins',sans-serif",fontSize:".87rem",fontWeight:600,
                  color:C.dark,textAlign:"left",gap:8,
                }}>
                  <span>{f.q}</span>
                  <span style={{fontSize:".7rem",color:C.muted,flexShrink:0,
                    transition:"transform .2s",
                    transform:openIdx===i?"rotate(180deg)":"rotate(0deg)"}}>▾</span>
                </button>
                {openIdx===i&&<div style={{padding:"0 16px 14px",fontSize:".84rem",
                  color:C.mid,lineHeight:1.7,borderTop:`1px solid ${C.border}`}}>
                  <div style={{paddingTop:10}}>{f.a}</div>
                </div>}
              </div>
            ))
          }

          {/* Show more / less */}
          {!query&&!activeCat&&filtered.length>MAX&&(
            <button onClick={()=>setShowAll(s=>!s)} style={{
              width:"100%",padding:"10px",borderRadius:9,marginTop:4,
              border:`1px solid ${C.border}`,background:C.white,
              fontFamily:"'Poppins',sans-serif",fontSize:".82rem",
              fontWeight:600,color:C.mid,cursor:"pointer",
            }}>
              {showAll
                ? t.showLess
                : (t.showAll||"Show all").replace("{n}", filtered.length-MAX)}
            </button>
          )}
        </div>

        {/* Quick contact channels */}
        <div style={{padding:"14px",background:C.bg,borderRadius:12,
          border:`1px solid ${C.border}`,fontSize:".82rem"}}>
          <div style={{fontWeight:600,color:C.dark,marginBottom:8}}>
            {t.channels}
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
            {[
              {icon:<Ico name="bb-chat" size={16}/>,label:`Chat (${lang})`,onClick:(e)=>{e.preventDefault(); if(window.BBChat&&window.BBChat.open) window.BBChat.open();}},
              {icon:<Ico name="bb-whatsapp" size={16}/>,label:"WhatsApp",href:"https://wa.me/447868261509"},
              {icon:<Ico name="bb-email" size={16}/>,label:"Email",href:"mailto:hello@better-bookings.com"},
            ].map((ch,i)=>(
              <a key={i} href={ch.href||"#"} onClick={ch.onClick}
                target={ch.onClick?undefined:"_blank"} rel="noopener noreferrer" style={{
                display:"inline-flex",alignItems:"center",gap:6,
                padding:"7px 12px",borderRadius:50,
                border:`1px solid ${C.border}`,background:C.white,
                fontSize:".78rem",fontWeight:500,color:C.charcoal,textDecoration:"none",
                cursor:ch.onClick?"pointer":undefined,
              }}>
                <span>{ch.icon}</span>{ch.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT: Contact Form ──────────────────────────── */}
      <div className="card" style={{padding:"1.5rem"}}>
        <SectionLabel icon={<Ico name="bb-email" size={16}/>} ch={t.formTitle}/>

        {formSent
          ?<div style={{padding:"2rem",textAlign:"center"}}>
            <div style={{fontSize:"2.5rem",marginBottom:12}}>✅</div>
            <p style={{fontWeight:600,color:C.dark,marginBottom:6}}>{t.formOk}</p>
            <button onClick={()=>setFormSent(false)} className="btn-outline"
              style={{marginTop:12,borderRadius:50}}>← Torna</button>
           </div>
          :<form onSubmit={handleSubmit}>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:10}}>
              <div>
                <div style={{fontSize:".72rem",color:C.muted,marginBottom:4}}>{t.formName}</div>
                <input style={inp} required value={form.name}
                  onChange={e=>setForm(f=>({...f,name:e.target.value}))}/>
              </div>
              <div>
                <div style={{fontSize:".72rem",color:C.muted,marginBottom:4}}>{t.formEmail}</div>
                <input style={inp} type="email" required value={form.email}
                  onChange={e=>setForm(f=>({...f,email:e.target.value}))}/>
              </div>
            </div>
            <div style={{marginBottom:10}}>
              <div style={{fontSize:".72rem",color:C.muted,marginBottom:4}}>{t.formBooking}</div>
              <input style={inp} value={form.booking}
                onChange={e=>setForm(f=>({...f,booking:e.target.value}))}/>
            </div>
            <div style={{marginBottom:10}}>
              <div style={{fontSize:".72rem",color:C.muted,marginBottom:4}}>{t.formTopic}</div>
              <select style={{...inp}} value={form.topic}
                onChange={e=>setForm(f=>({...f,topic:e.target.value}))}>
                {topics.map(tp=><option key={tp.v} value={tp.v}>{tp.l}</option>)}
              </select>
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:".72rem",color:C.muted,marginBottom:4}}>{t.formMsg}</div>
              <textarea style={{...inp,minHeight:130,resize:"vertical"}}
                required placeholder={t.formMsgPh} value={form.msg}
                onChange={e=>setForm(f=>({...f,msg:e.target.value}))}/>
            </div>
            <button type="submit" disabled={sending} className="btn-orange"
              style={{width:"100%",justifyContent:"center",padding:"12px",fontSize:".9rem",
                fontWeight:700,opacity:sending?.6:1}}>
              {sending
                ?<><span style={{width:16,height:16,border:"2px solid rgba(255,255,255,.4)",
                    borderTopColor:"#fff",borderRadius:"50%",display:"inline-block",
                    animation:"spin .7s linear infinite"}}/> …</>
                : t.formSend}
            </button>
          </form>
        }
      </div>
    </div>
  </>}/>;
}



/* ─── T&C + PRIVACY LINKS PER LANGUAGE ──────────────── */
const TC_LINKS = {
  EN:"https://better-bookings.com/general/tos/T%26C_EN.pdf",
  IT:"https://better-bookings.com/general/tos/T%26C_IT.pdf",
  ES:"https://better-bookings.com/general/tos/T%26C_ES.pdf",
  FR:"https://better-bookings.com/general/tos/T%26C_FR.pdf",
  DE:"https://better-bookings.com/general/tos/T%26C_DE.pdf",
  NL:"https://better-bookings.com/general/tos/T%26C_NL.pdf",
};
const PRIVACY_LINKS = {
  EN:"https://better-bookings.com/general/privacy/PRIVACY_EN.pdf",
  IT:"https://better-bookings.com/general/privacy/PRIVACY_IT.pdf",
  ES:"https://better-bookings.com/general/privacy/PRIVACY_ES.pdf",
  FR:"https://better-bookings.com/general/privacy/PRIVACY_FR.pdf",
  DE:"https://better-bookings.com/general/privacy/PRIVACY_DE.pdf",
  NL:"https://better-bookings.com/general/privacy/PRIVACY_NL.pdf",
};

/* ─── APP ────────────────────────────────────────────── */
/* ─── ADD SERVICES (self-service upsell) ─────────────── */
/* Schede servite da GET /api/ext/services/{slug}. Due tipi:
   - affiliate: bottone che apre il partner (card.url) in nuova tab
   - request  : bottone che invia una richiesta al team via POST /api/ext/service-request
   Visibilità controllata lato server (SERVICES_ENABLED / ?preview=services). */
// Stringhe locali per la card noleggio auto live (Tinoleggio)
const CART = {
  EN:{loading:"Checking live availability…",none:"No live availability right now — request a quote below.",cars:"Available cars",book:"Request",sent:"Requested ✓"},
  IT:{loading:"Verifico la disponibilità…",none:"Nessuna disponibilità live al momento — richiedi un preventivo qui sotto.",cars:"Auto disponibili",book:"Richiedi",sent:"Richiesta inviata ✓"},
  ES:{loading:"Comprobando disponibilidad…",none:"Sin disponibilidad en directo ahora — solicita presupuesto abajo.",cars:"Coches disponibles",book:"Solicitar",sent:"Solicitado ✓"},
  FR:{loading:"Vérification des disponibilités…",none:"Pas de disponibilité en direct — demandez un devis ci-dessous.",cars:"Voitures disponibles",book:"Demander",sent:"Demande envoyée ✓"},
  NL:{loading:"Beschikbaarheid controleren…",none:"Geen live beschikbaarheid — vraag hieronder een offerte aan.",cars:"Beschikbare auto's",book:"Aanvragen",sent:"Aangevraagd ✓"},
  DE:{loading:"Verfügbarkeit wird geprüft…",none:"Keine Live-Verfügbarkeit — unten Angebot anfordern.",cars:"Verfügbare Autos",book:"Anfragen",sent:"Angefragt ✓"},
};

// Card noleggio auto: carica le auto reali da /api/ext/carrental e per ognuna
// invia una richiesta al team (onRequest(note)). Override anteprima: &car=BRI nell'URL.
function LiveCars({lang,onRequest,fallback}){
  const tr = CART[lang]||CART.EN;
  const [state,setState] = useState("loading");   // loading|ok|none|err
  const [cars,setCars]   = useState([]);
  const [sent,setSent]   = useState({});          // { [index]: "sending"|"sent"|"error" }
  useEffect(()=>{
    const p = new URLSearchParams(window.location.search);
    const qs = new URLSearchParams({lang});
    const cityOverride = p.get("car");            // anteprima: forza una città test (es. BRI)
    if(cityOverride) qs.set("city",cityOverride);
    fetch(`${API_CARRENTAL}/${getSlug()}?${qs.toString()}`)
      .then(r=>r.ok?r.json():{cars:[]})
      .then(d=>{ const l=Array.isArray(d?.cars)?d.cars:[]; setCars(l); setState(l.length?"ok":"none"); })
      .catch(()=>setState("err"));
  },[lang]);

  async function reqCar(i,car){
    setSent(s=>({...s,[i]:"sending"}));
    try{ await onRequest(`${car.name} — ${Number(car.price).toFixed(2)} ${car.currency||""} (${car.supplier||""})`); setSent(s=>({...s,[i]:"sent"})); }
    catch{ setSent(s=>({...s,[i]:"error"})); }
  }

  if(state==="loading") return <div style={{color:"#5b6470",fontSize:14,padding:"6px 0"}}>{tr.loading}</div>;
  if(state!=="ok") return fallback;   // niente auto live → ricade sul bottone "Richiedi"

  return <div>
    <div style={{fontSize:13,fontWeight:700,color:"#1f2730",margin:"2px 0 8px"}}>{tr.cars}</div>
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      {cars.slice(0,6).map((car,i)=>{
        const ss=sent[i];
        return <div key={i} style={{display:"flex",alignItems:"center",gap:10,
          border:"1px solid #eef0f3",borderRadius:10,padding:"8px 10px"}}>
          {car.image&&<img src={car.image} alt="" style={{width:54,height:36,objectFit:"contain"}}/>}
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:14,fontWeight:600,color:"#1f2730",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{car.name}</div>
            <div style={{fontSize:12,color:"#8a93a0"}}>{car.supplier}{car.onRequest?" · on request":""}</div>
          </div>
          <div style={{fontSize:15,fontWeight:700,color:"#1f2730",whiteSpace:"nowrap"}}>{Number(car.price).toFixed(0)} {car.currency}</div>
          {ss==="sent"
            ? <span style={{fontSize:12,fontWeight:600,color:"#13794a",whiteSpace:"nowrap"}}>{tr.sent}</span>
            : <button onClick={()=>reqCar(i,car)} disabled={ss==="sending"}
                style={{background:"#0a6cff",color:"#fff",border:"none",padding:"7px 12px",
                  borderRadius:8,fontWeight:600,fontSize:13,cursor:ss==="sending"?"default":"pointer",opacity:ss==="sending"?.7:1,whiteSpace:"nowrap"}}>
                {tr.book}
              </button>}
        </div>;
      })}
    </div>
  </div>;
}

/* ─── CAR RENTAL FUNNEL (Tinoleggio) ─────────────────── */
const FUEL = {
  fullfull:{EN:"Full to full (return full)",IT:"Pieno/pieno (riconsegna col pieno)"},
  emptyempty:{EN:"Empty to empty",IT:"Vuoto/vuoto"},
  fullempty:{EN:"Full, return empty",IT:"Pieno, riconsegna vuoto"},
  fullemptyrefund:{EN:"Full, unused fuel refunded",IT:"Pieno, carburante non usato rimborsato"},
  fullemptyfree:{EN:"Full, return empty (free)",IT:"Pieno, riconsegna vuoto (gratis)"},
  halfhalf:{EN:"Half to half",IT:"Metà/metà"},
  samelevel:{EN:"Same level",IT:"Stesso livello"},
  unknown:{EN:"Not specified",IT:"Non specificato"},
};
function fuelLabel(p,lang){ const m=FUEL[p]; return m?(m[lang]||m.EN):(p||"—"); }
function dtLocal(ms,defH){ if(!ms) return ""; const d=new Date(ms); const z=n=>String(n).padStart(2,"0"); const hh=defH!=null?z(defH):z(d.getHours()); const mm=defH!=null?"00":z(d.getMinutes()); return `${d.getFullYear()}-${z(d.getMonth()+1)}-${z(d.getDate())}T${hh}:${mm}`; }

const CF = {
  EN:{open:"Search & book a car",title:"Car rental",pickup:"Pick-up location",dropoff:"Drop-off location",same:"Same as pick-up",from:"Pick-up date & time",to:"Drop-off date & time",age:"Driver age",res:"Country of residence (ISO)",search:"Search cars",searching:"Searching…",results:"Available cars",none:"No cars available for these dates / location.",total:"Total",deposit:"Security deposit",fuel:"Fuel policy",mileage:"Mileage",unlimited:"Unlimited km",limited:"km included",extraKm:"Extra km",excess:"Insurance excess (CDW / theft)",cancel:"Cancellation policy",included:"What's included",extras:"Optional extras",onreq:"On request — confirmed by supplier",driver:"Driver details",fn:"First name",ln:"Last name",email:"Email",phone:"Phone",bdate:"Date of birth",bcountry:"Country of birth (ISO)",rcity:"City of residence",rcountry:"Country of residence (ISO)",raddr:"Address",cont:"Continue",back:"Back",toDriver:"Continue to driver details",toPay:"Continue to payment",payTitle:"Payment",payNote:"💳 Online card payment is being activated. Your car and details are saved — once enabled you'll pay securely here and the booking is confirmed instantly.",payBtn:"Pay & confirm booking",doneTitle:"Booking confirmed!",doneMsg:"You'll receive the confirmation details by email.",ref:"Booking reference",voucher:"View voucher",close:"Done",payErr:"Payment could not be completed. Please try again.",bookErr:"Payment taken but the booking is still pending — our team will confirm it shortly.",driverSel:"Main driver",choose:"— choose —",yrs:"yrs",freeCancel:"Free cancellation until",cancelFee:"Cancellation fee from",nonref:"Non-refundable",reqFields:"Please select the driver and fill email, phone and date of birth."},
  IT:{open:"Cerca e prenota un'auto",title:"Noleggio auto",pickup:"Luogo di ritiro",dropoff:"Luogo di riconsegna",same:"Uguale al ritiro",from:"Data e ora ritiro",to:"Data e ora riconsegna",age:"Età conducente",res:"Paese di residenza (ISO)",search:"Cerca auto",searching:"Ricerca…",results:"Auto disponibili",none:"Nessuna auto disponibile per queste date / luogo.",total:"Totale",deposit:"Cauzione",fuel:"Politica carburante",mileage:"Chilometraggio",unlimited:"Km illimitati",limited:"km inclusi",extraKm:"Km extra",excess:"Franchigia (danni / furto)",cancel:"Politica di cancellazione",included:"Cosa è incluso",extras:"Extra opzionali",onreq:"Su richiesta — confermata dal fornitore",driver:"Dati conducente",fn:"Nome",ln:"Cognome",email:"Email",phone:"Telefono",bdate:"Data di nascita",bcountry:"Paese di nascita (ISO)",rcity:"Città di residenza",rcountry:"Paese di residenza (ISO)",raddr:"Indirizzo",cont:"Continua",back:"Indietro",toDriver:"Continua ai dati conducente",toPay:"Continua al pagamento",payTitle:"Pagamento",payNote:"💳 Il pagamento online con carta è in fase di attivazione. L'auto e i tuoi dati sono salvati — una volta attivo pagherai in sicurezza qui e la prenotazione sarà confermata subito.",payBtn:"Paga e conferma prenotazione",doneTitle:"Prenotazione confermata!",doneMsg:"Riceverai i dettagli della conferma via email.",ref:"Riferimento prenotazione",voucher:"Vedi voucher",close:"Fatto",payErr:"Pagamento non riuscito. Riprova.",bookErr:"Pagamento effettuato ma la prenotazione è in attesa — il nostro team la confermerà a breve.",driverSel:"Conducente principale",choose:"— scegli —",yrs:"anni",freeCancel:"Cancellazione gratuita fino al",cancelFee:"Penale di cancellazione da",nonref:"Non rimborsabile",reqFields:"Seleziona il conducente e inserisci email, telefono e data di nascita."},
};

// Lista paesi (ISO 3166-1 alpha-2) per i combo — set comune ai mercati BB.
const COUNTRIES = [
  ["IT","Italia / Italy"],["FR","France"],["ES","España / Spain"],["DE","Deutschland / Germany"],
  ["NL","Nederland / Netherlands"],["BE","Belgique / Belgium"],["GB","United Kingdom"],["IE","Ireland"],
  ["PT","Portugal"],["CH","Schweiz / Switzerland"],["AT","Österreich / Austria"],["LU","Luxembourg"],
  ["DK","Danmark / Denmark"],["SE","Sverige / Sweden"],["NO","Norge / Norway"],["FI","Suomi / Finland"],
  ["PL","Polska / Poland"],["CZ","Czechia"],["SK","Slovakia"],["HU","Hungary"],["RO","România / Romania"],
  ["BG","Bulgaria"],["GR","Ελλάδα / Greece"],["HR","Hrvatska / Croatia"],["SI","Slovenia"],["EE","Estonia"],
  ["LV","Latvia"],["LT","Lithuania"],["MT","Malta"],["CY","Cyprus"],["IS","Iceland"],
  ["US","United States"],["CA","Canada"],["AU","Australia"],["NZ","New Zealand"],["BR","Brazil"],
  ["AR","Argentina"],["MX","Mexico"],["JP","Japan"],["CN","China"],["IN","India"],["AE","UAE"],
  ["MA","Morocco"],["TR","Türkiye / Turkey"],["RU","Russia"],["ZA","South Africa"],
];

const cfInp={width:"100%",padding:"9px 11px",border:"1px solid #d7dce2",borderRadius:9,fontSize:14,boxSizing:"border-box",background:"#fff"};
const cfLbl={fontSize:12,fontWeight:600,color:"#5b6470",margin:"0 0 4px",display:"block"};

function AirportPicker({value,onPick,placeholder}){
  const [q,setQ]=useState(value||"");
  const [sugg,setSugg]=useState([]);
  const [open,setOpen]=useState(false);
  useEffect(()=>{ setQ(value||""); },[value]);
  function onChange(v){
    setQ(v); onPick(null,v); setOpen(true);
    if(!v||v.length<2){ setSugg([]); return; }
    fetch(`${API_CARRENTAL}/airports?q=${encodeURIComponent(v)}`).then(r=>r.json())
      .then(d=>setSugg((d.airports||[]).slice(0,8))).catch(()=>setSugg([]));
  }
  return <div style={{position:"relative"}}>
    <input value={q} placeholder={placeholder} onChange={e=>onChange(e.target.value)} onFocus={()=>setOpen(true)} style={cfInp}/>
    {open&&sugg.length>0&&<div style={{position:"absolute",zIndex:5,top:"100%",left:0,right:0,background:"#fff",
      border:"1px solid #d7dce2",borderRadius:9,marginTop:4,maxHeight:220,overflowY:"auto",boxShadow:"0 6px 18px rgba(0,0,0,.10)"}}>
      {sugg.map(a=><div key={a.id} onClick={()=>{onPick(a.id,a.name);setQ(a.name);setOpen(false);}}
        style={{padding:"8px 11px",fontSize:13,cursor:"pointer",borderBottom:"1px solid #f1f3f6"}}>
        {a.iata?`✈ ${a.iata} · `:""}{a.name}</div>)}
    </div>}
  </div>;
}

// Carica Stripe.js una sola volta e risolve con window.Stripe
function loadStripeJs(){
  return new Promise((res)=>{
    if(window.Stripe) return res(window.Stripe);
    const ex=document.getElementById("stripe-js");
    if(ex){ ex.addEventListener("load",()=>res(window.Stripe)); return; }
    const s=document.createElement("script");
    s.id="stripe-js"; s.src="https://js.stripe.com/v3/";
    s.onload=()=>res(window.Stripe); s.onerror=()=>res(null);
    document.body.appendChild(s);
  });
}

function CarRentalFlow({b,lang,onClose}){
  const cf = CF[lang]||CF.EN;
  const money=(m)=> m&&m.amount!=null ? `${Number(m.amount).toFixed(2)} ${m.currency||""}` : "—";
  const carOverride = new URLSearchParams(window.location.search).get("car")||"";

  const [pickupId,setPickupId]=useState(""); const [pickupLabel,setPickupLabel]=useState("");
  const [sameDrop,setSameDrop]=useState(true);
  const [dropId,setDropId]=useState(""); const [dropLabel,setDropLabel]=useState("");
  const [pDate,setPDate]=useState(dtLocal(b.checkIn,10)||"");
  const [dDate,setDDate]=useState(dtLocal(b.checkOut,10)||"");
  const [residence,setResidence]=useState(b.customerCountry||"IT");

  const [step,setStep]=useState("search");
  const [busy,setBusy]=useState(false);
  const [cars,setCars]=useState([]);
  const [sel,setSel]=useState(null); const [detail,setDetail]=useState(null);
  const [extras,setExtras]=useState({});   // { [code]: {name, price} } extra selezionati

  // Conducente = SOLO viaggiatori ADULTI dalla sezione "Tutti i Viaggiatori".
  const _ad=(b.adults||0)+(b.addroom?(b.adults2||0):0);
  const _ch=(b.child||0)+(b.addroom?(b.child2||0):0);
  const _ba=(b.baby||0)+(b.addroom?(b.baby2||0):0);
  const adults = parseTravellers(b.TravellerDetails, b.checkIn, {adults:_ad,child:_ch,baby:_ba}).filter(t=>t.ageType==="adult");
  const dobToStr=(dob)=> dob?`${dob.y}-${String(dob.m).padStart(2,"0")}-${String(dob.d).padStart(2,"0")}`:"";
  const dobToAge=(dob)=>{ if(!dob) return null; const bd=new Date(dob.y,dob.m-1,dob.d); const a=Math.floor((Date.now()-bd)/(365.25*864e5)); return (a>0&&a<120)?a:null; };

  const [driverIdx,setDriverIdx]=useState(-1);
  const [age,setAge]=useState("30");
  const [driver,setDriver]=useState({name:"",surname:"",birth_country:b.customerCountry||"IT",residence_city:"",
    residence_country:b.customerCountry||"IT",residence_address:b.bookerAddress||"",
    email:(b.guestEmail&&b.guestEmail[0])||"",phone:(b.guestTelephone&&b.guestTelephone[0])||"",birth_date:""});

  function selectDriver(idx){
    setDriverIdx(idx);
    const tr=adults[idx];
    if(!tr) return;
    const a=dobToAge(tr.dob); if(a) setAge(String(a));
    setDriver(d=>({...d,name:tr.firstName||"",surname:tr.lastName||"",birth_date:dobToStr(tr.dob)||d.birth_date}));
  }
  // preseleziona il primo adulto come conducente
  useEffect(()=>{ if(adults.length) selectDriver(0); },[]);

  useEffect(()=>{
    const cand = carOverride || (b.flight ? (b.destination||"") : "");
    if(cand){
      fetch(`${API_CARRENTAL}/airports?q=${encodeURIComponent(cand)}`).then(r=>r.json()).then(d=>{
        const a=(d.airports||[])[0]; if(a){ setPickupId(a.id); setPickupLabel(a.name); }
      }).catch(()=>{});
    }
  },[]);

  async function runSearch(){
    if(!pickupId||!pDate||!dDate){ return; }
    setBusy(true);
    try{
      const r=await fetch(`${API_CARRENTAL}/search`,{method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({pickup_id:pickupId,dropoff_id:sameDrop?pickupId:dropId,
          pickup_date:pDate+":00",dropoff_date:dDate+":00",age,residence,lang,category:"CAR"})});
      const d=await r.json(); setCars(Array.isArray(d.cars)?d.cars:[]);
    }catch{ setCars([]); } finally{ setBusy(false); setStep("results"); }
  }
  async function openDetail(car){
    setSel(car); setDetail(null); setStep("detail"); setBusy(true);
    try{ const r=await fetch(`${API_CARRENTAL}/quote/${encodeURIComponent(car.id)}?lang=${lang}`); setDetail(r.ok?await r.json():null); }
    catch{ setDetail(null); } finally{ setBusy(false); }
  }
  function gotoPay(){
    const d=driver;
    if(!d.name||!d.surname||!d.email||!d.phone||!d.birth_date){ alert(cf.reqFields); return; }
    setStep("payment");
  }

  // ── Pagamento Stripe ──
  const [pi,setPi]=useState(null);          // {client_secret, publishable_key, payment_intent_id, amount, currency}
  const [payErr,setPayErr]=useState("");
  const [paying,setPaying]=useState(false);
  const [confirmed,setConfirmed]=useState(null);
  const stripeRef=useRef(null); const elementsRef=useRef(null);

  useEffect(()=>{
    if(step!=="payment"||pi||!sel) return;
    let dead=false;
    (async()=>{
      setPayErr("");
      try{
        const codes=Object.keys(extras);
        const r=await fetch(`${API_CARRENTAL}/payment-intent`,{method:"POST",headers:{"Content-Type":"application/json"},
          body:JSON.stringify({slug:getSlug(),quote_id:sel.id,extras:codes,lang})});
        if(!r.ok) throw new Error("init");
        const d=await r.json(); if(dead) return; setPi(d);
        const SF=await loadStripeJs(); if(dead||!SF) return;
        const stripe=SF(d.publishable_key); stripeRef.current=stripe;
        const elements=stripe.elements({clientSecret:d.client_secret}); elementsRef.current=elements;
        const el=elements.create("payment");
        setTimeout(()=>{ if(!dead&&document.getElementById("bb-pay-el")) el.mount("#bb-pay-el"); },30);
      }catch(e){ if(!dead) setPayErr(cf.payErr); }
    })();
    return ()=>{dead=true;};
  },[step]);

  async function payAndBook(){
    if(!stripeRef.current||!elementsRef.current||!pi) return;
    setPaying(true); setPayErr("");
    try{
      const {error,paymentIntent}=await stripeRef.current.confirmPayment({elements:elementsRef.current,redirect:"if_required"});
      if(error){ setPayErr(error.message||cf.payErr); setPaying(false); return; }
      if(!paymentIntent||(paymentIntent.status!=="requires_capture"&&paymentIntent.status!=="succeeded")){ setPayErr(cf.payErr); setPaying(false); return; }
      const codes=Object.keys(extras);
      const arrival=b.flight?{transportation_code:1,number:""}:{};
      const r=await fetch(`${API_CARRENTAL}/book`,{method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({payment_intent_id:pi.payment_intent_id,quote_id:sel.id,customer:driver,extras:codes,arrival,lang,
          slug:getSlug(),car_name:sel.name,pickup_date:pDate+":00",dropoff_date:dDate+":00"})});
      if(!r.ok) throw new Error("book");
      const d=await r.json(); setConfirmed(d); setStep("done");
    }catch(e){ setPayErr(cf.bookErr); }
    finally{ setPaying(false); }
  }

  const overlay={position:"fixed",inset:0,background:"rgba(20,26,33,.55)",zIndex:9999,
    display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"4vh 12px",overflowY:"auto"};
  const sheet={background:"#fff",borderRadius:16,maxWidth:560,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,.3)",
    display:"flex",flexDirection:"column",maxHeight:"92vh"};
  const head={display:"flex",alignItems:"center",gap:10,padding:"14px 18px",borderBottom:"1px solid #eef0f3"};
  const body={padding:"16px 18px",overflowY:"auto"};
  const foot={display:"flex",gap:10,padding:"12px 18px",borderTop:"1px solid #eef0f3"};
  const primary={flex:1,background:"#0a6cff",color:"#fff",border:"none",padding:"11px",borderRadius:10,fontWeight:700,fontSize:14,cursor:"pointer"};
  const ghost={background:"#eef1f5",color:"#1f2730",border:"none",padding:"11px 16px",borderRadius:10,fontWeight:600,fontSize:14,cursor:"pointer"};
  const steps=["search","results","detail","driver","payment"];
  const row=(k,v)=> <div style={{display:"flex",justifyContent:"space-between",gap:12,fontSize:13,padding:"5px 0",borderBottom:"1px solid #f4f6f8"}}><span style={{color:"#5b6470"}}>{k}</span><span style={{fontWeight:600,color:"#1f2730",textAlign:"right"}}>{v}</span></div>;

  return <div style={overlay} onClick={onClose}>
    <div style={sheet} onClick={e=>e.stopPropagation()}>
      <div style={head}>
        <div style={{fontSize:22}}>🚗</div>
        <div style={{flex:1,fontSize:16,fontWeight:700,color:"#1f2730"}}>{cf.title}</div>
        {step!=="done"&&<div style={{fontSize:12,color:"#8a93a0"}}>{steps.indexOf(step)+1}/5</div>}
        <button onClick={onClose} style={{background:"none",border:"none",fontSize:22,cursor:"pointer",color:"#8a93a0",lineHeight:1}}>×</button>
      </div>

      {step==="search"&&<>
        <div style={body}>
          <label style={cfLbl}>{cf.pickup}</label>
          <AirportPicker value={pickupLabel} placeholder="✈ IATA / città…" onPick={(id,label)=>{setPickupId(id||"");setPickupLabel(label||"");}}/>
          <label style={{...cfLbl,marginTop:6,display:"flex",alignItems:"center",gap:6,fontWeight:500}}>
            <input type="checkbox" checked={sameDrop} onChange={e=>setSameDrop(e.target.checked)}/> {cf.same}
          </label>
          {!sameDrop&&<><label style={cfLbl}>{cf.dropoff}</label>
            <AirportPicker value={dropLabel} placeholder="✈ IATA / città…" onPick={(id,label)=>{setDropId(id||"");setDropLabel(label||"");}}/></>}
          <div style={{display:"flex",gap:10,marginTop:10}}>
            <div style={{flex:1}}><label style={cfLbl}>{cf.from}</label><input type="datetime-local" value={pDate} onChange={e=>setPDate(e.target.value)} style={cfInp}/></div>
            <div style={{flex:1}}><label style={cfLbl}>{cf.to}</label><input type="datetime-local" value={dDate} onChange={e=>setDDate(e.target.value)} style={cfInp}/></div>
          </div>
          {adults.length>0&&<div style={{marginTop:10}}>
            <label style={cfLbl}>{cf.driverSel}</label>
            <select value={driverIdx} onChange={e=>selectDriver(Number(e.target.value))} style={cfInp}>
              <option value={-1} disabled>{cf.choose}</option>
              {adults.map((tr,i)=><option key={i} value={i}>{tr.firstName} {tr.lastName}{dobToAge(tr.dob)?` · ${dobToAge(tr.dob)} ${cf.yrs}`:""}</option>)}
            </select>
          </div>}
          <div style={{marginTop:10}}>
            <label style={cfLbl}>{cf.res}</label>
            <select value={residence} onChange={e=>setResidence(e.target.value)} style={cfInp}>
              {COUNTRIES.map(([c,n])=><option key={c} value={c}>{n}</option>)}
            </select>
          </div>
        </div>
        <div style={foot}><button onClick={runSearch} disabled={!pickupId||busy} style={{...primary,opacity:(!pickupId||busy)?.6:1}}>{busy?cf.searching:cf.search}</button></div>
      </>}

      {step==="results"&&<>
        <div style={body}>
          {busy&&<div style={{color:"#5b6470",fontSize:14}}>{cf.searching}</div>}
          {!busy&&cars.length===0&&<div style={{color:"#5b6470",fontSize:14}}>{cf.none}</div>}
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {cars.map((car,i)=><div key={i} onClick={()=>openDetail(car)} style={{display:"flex",alignItems:"center",gap:10,
              border:"1px solid #eef0f3",borderRadius:10,padding:"9px 11px",cursor:"pointer"}}>
              {car.image&&<img src={car.image} alt="" style={{width:58,height:38,objectFit:"contain"}}/>}
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:14,fontWeight:600,color:"#1f2730"}}>{car.name}</div>
                <div style={{fontSize:12,color:"#8a93a0"}}>{car.supplier}{car.onRequest?" · "+cf.onreq:""}</div>
              </div>
              <div style={{fontSize:16,fontWeight:700,color:"#1f2730",whiteSpace:"nowrap"}}>{Number(car.price).toFixed(0)} {car.currency}</div>
            </div>)}
          </div>
        </div>
        <div style={foot}><button onClick={()=>setStep("search")} style={ghost}>{cf.back}</button></div>
      </>}

      {step==="detail"&&<>
        <div style={body}>
          {busy&&<div style={{color:"#5b6470",fontSize:14}}>{cf.searching}</div>}
          {sel&&<div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            {sel.image&&<img src={sel.image} alt="" style={{width:84,height:54,objectFit:"contain"}}/>}
            <div style={{flex:1}}>
              <div style={{fontSize:17,fontWeight:700,color:"#1f2730"}}>{sel.name}</div>
              <div style={{fontSize:12,color:"#8a93a0"}}>{sel.supplier}{sel.onRequest?" · "+cf.onreq:""}</div>
            </div>
            <div style={{fontSize:20,fontWeight:800,color:"#0a6cff"}}>{Number(sel.price).toFixed(0)} {sel.currency}</div>
          </div>}
          {detail&&<div>
            {row(cf.total, money(detail.rate.total))}
            {detail.rate.deposit&&detail.rate.deposit.amount!=null&&row(cf.deposit, money(detail.rate.deposit))}
            {row(cf.fuel, fuelLabel(detail.rate.fuelPolicy,lang))}
            {row(cf.mileage, detail.rate.distance.unlimited?cf.unlimited:`${detail.rate.distance.quantity||0} ${detail.rate.distance.unit||"km"} ${cf.limited}`)}
            {detail.rate.distance.extraKmPrice&&detail.rate.distance.extraKmPrice.amount!=null&&row(cf.extraKm, money(detail.rate.distance.extraKmPrice))}
            {detail.rate.excessCDW&&detail.rate.excessCDW.amount!=null&&row(cf.excess, money(detail.rate.excessCDW))}
            {detail.rate.cancellation&&detail.rate.cancellation.length>0&&(()=>{
              const cp=detail.rate.cancellation;
              const free=cp.find(c=>(!c.amount||Number(c.amount)===0)&&c.to);
              const fees=cp.filter(c=>c.amount&&Number(c.amount)>0);
              let txt;
              if(free) txt=`✓ ${cf.freeCancel} ${free.to.slice(0,10)}`;
              else if(fees.length){ const m=fees.reduce((a,b)=>Number(a.amount)<Number(b.amount)?a:b); txt=`${cf.cancelFee} ${money({amount:m.amount,currency:m.currency})}`; }
              else txt=cf.nonref;
              return row(cf.cancel, txt);
            })()}
            {detail.rate.fees&&detail.rate.fees.filter(f=>f.included).length>0&&<div style={{marginTop:10}}>
              <div style={{fontSize:13,fontWeight:700,color:"#1f2730",marginBottom:4}}>{cf.included}</div>
              {detail.rate.fees.filter(f=>f.included).map((f,i)=><div key={i} style={{fontSize:12,color:"#13794a"}}>✓ {f.name}</div>)}
            </div>}
            {(()=>{
              const opt=[...detail.equipments,...detail.services].filter(e=>!e.included&&e.code&&e.name);
              return opt.length>0&&<div style={{marginTop:12}}>
                <div style={{fontSize:13,fontWeight:700,color:"#1f2730",marginBottom:6}}>{cf.extras}</div>
                {opt.map((e,i)=>{const on=!!extras[e.code]; return <label key={e.code||i}
                  style={{display:"flex",alignItems:"center",gap:9,fontSize:13,color:"#3a4654",padding:"5px 0",cursor:"pointer"}}>
                  <input type="checkbox" checked={on} onChange={ev=>setExtras(x=>{const n={...x}; if(ev.target.checked)n[e.code]={name:e.name,price:e.price}; else delete n[e.code]; return n;})}/>
                  <span style={{flex:1}}>{e.name}</span>
                  <span style={{fontWeight:600,color:"#1f2730"}}>{e.price&&e.price.amount!=null?money(e.price):"—"}</span>
                </label>;})}
              </div>;
            })()}
            {(()=>{
              const et=Object.values(extras).reduce((s,e)=>s+(e.price&&e.price.amount?Number(e.price.amount):0),0);
              if(!et) return null;
              const base=detail.rate.total&&detail.rate.total.amount?Number(detail.rate.total.amount):0;
              const cur=(detail.rate.total&&detail.rate.total.currency)||"";
              return <div style={{marginTop:10,paddingTop:8,borderTop:"2px solid #eef0f3",display:"flex",
                justifyContent:"space-between",fontWeight:800,fontSize:15,color:"#0a6cff"}}>
                <span>{cf.total}</span><span>{(base+et).toFixed(2)} {cur}</span></div>;
            })()}
          </div>}
        </div>
        <div style={foot}><button onClick={()=>setStep("results")} style={ghost}>{cf.back}</button>
          <button onClick={()=>setStep("driver")} disabled={!detail} style={{...primary,opacity:detail?1:.6}}>{cf.toDriver}</button></div>
      </>}

      {step==="driver"&&<>
        <div style={body}>
          <div style={{fontSize:15,fontWeight:700,color:"#1f2730",marginBottom:10}}>{cf.driver}</div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <div style={{display:"flex",gap:8}}>
              <div style={{flex:1}}><label style={cfLbl}>{cf.fn}</label><input value={driver.name} onChange={e=>setDriver(d=>({...d,name:e.target.value}))} style={cfInp}/></div>
              <div style={{flex:1}}><label style={cfLbl}>{cf.ln}</label><input value={driver.surname} onChange={e=>setDriver(d=>({...d,surname:e.target.value}))} style={cfInp}/></div>
            </div>
            <div><label style={cfLbl}>{cf.email}</label><input type="email" value={driver.email} onChange={e=>setDriver(d=>({...d,email:e.target.value}))} style={cfInp}/></div>
            <div style={{display:"flex",gap:8}}>
              <div style={{flex:1}}><label style={cfLbl}>{cf.phone}</label><input value={driver.phone} onChange={e=>setDriver(d=>({...d,phone:e.target.value}))} style={cfInp}/></div>
              <div style={{flex:1}}><label style={cfLbl}>{cf.bdate}</label><input type="date" value={driver.birth_date} onChange={e=>setDriver(d=>({...d,birth_date:e.target.value}))} style={cfInp}/></div>
            </div>
            <div style={{display:"flex",gap:8}}>
              <div style={{flex:1}}><label style={cfLbl}>{cf.bcountry}</label>
                <select value={driver.birth_country} onChange={e=>setDriver(d=>({...d,birth_country:e.target.value}))} style={cfInp}>
                  {COUNTRIES.map(([c,n])=><option key={c} value={c}>{n}</option>)}</select></div>
              <div style={{flex:1}}><label style={cfLbl}>{cf.rcountry}</label>
                <select value={driver.residence_country} onChange={e=>setDriver(d=>({...d,residence_country:e.target.value}))} style={cfInp}>
                  {COUNTRIES.map(([c,n])=><option key={c} value={c}>{n}</option>)}</select></div>
            </div>
            <div><label style={cfLbl}>{cf.rcity}</label><input value={driver.residence_city} onChange={e=>setDriver(d=>({...d,residence_city:e.target.value}))} style={cfInp}/></div>
            <div><label style={cfLbl}>{cf.raddr}</label><input value={driver.residence_address} onChange={e=>setDriver(d=>({...d,residence_address:e.target.value}))} style={cfInp}/></div>
          </div>
        </div>
        <div style={foot}><button onClick={()=>setStep("detail")} style={ghost}>{cf.back}</button>
          <button onClick={gotoPay} style={primary}>{cf.toPay}</button></div>
      </>}

      {step==="payment"&&<>
        <div style={body}>
          <div style={{fontSize:15,fontWeight:700,color:"#1f2730",marginBottom:10}}>{cf.payTitle}</div>
          {sel&&<div style={{marginBottom:14}}>
            {row(sel.name, `${Number(sel.price).toFixed(0)} ${sel.currency}`)}
            {Object.values(extras).map((e,i)=><div key={i}>{row("+ "+e.name, e.price&&e.price.amount!=null?money(e.price):"")}</div>)}
            {driver.name&&row(cf.driverSel, `${driver.name} ${driver.surname}`)}
            <div style={{display:"flex",justifyContent:"space-between",fontWeight:800,fontSize:16,color:"#1f2730",paddingTop:8,borderTop:"2px solid #eef0f3",marginTop:6}}>
              <span>{cf.total}</span><span>{pi?`${Number(pi.amount).toFixed(2)} ${pi.currency}`:"…"}</span></div>
          </div>}
          {!pi&&!payErr&&<div style={{color:"#5b6470",fontSize:14}}>{cf.searching}</div>}
          <div id="bb-pay-el"/>
          {payErr&&<div style={{color:"#c0392b",fontSize:13,marginTop:10,fontWeight:600}}>{payErr}</div>}
        </div>
        <div style={foot}><button onClick={()=>setStep("driver")} disabled={paying} style={ghost}>{cf.back}</button>
          <button onClick={payAndBook} disabled={!pi||paying} style={{...primary,opacity:(!pi||paying)?.6:1}}>{paying?cf.searching:cf.payBtn}</button></div>
      </>}

      {step==="done"&&<>
        <div style={body}>
          <div style={{textAlign:"center",padding:"14px 0"}}>
            <div style={{fontSize:46}}>✅</div>
            <div style={{fontSize:19,fontWeight:800,color:"#1f2730",margin:"10px 0 6px"}}>{cf.doneTitle}</div>
            <div style={{fontSize:14,color:"#5b6470"}}>{cf.doneMsg}</div>
            {confirmed&&confirmed.booking&&confirmed.booking.id&&<div style={{marginTop:14,fontSize:14,color:"#1f2730"}}>{cf.ref}: <b>{confirmed.booking.id}</b></div>}
            {confirmed&&confirmed.booking&&confirmed.booking.voucher_url&&<div style={{marginTop:14}}>
              <a href={confirmed.booking.voucher_url} target="_blank" rel="noopener noreferrer"
                style={{display:"inline-block",background:"#0a6cff",color:"#fff",textDecoration:"none",padding:"10px 18px",borderRadius:10,fontWeight:700,fontSize:14}}>{cf.voucher}</a></div>}
          </div>
        </div>
        <div style={foot}><button onClick={onClose} style={primary}>{cf.close}</button></div>
      </>}
    </div>
  </div>;
}

function Shop({b,lang,services}){
  const t = T[lang]||T.EN;
  const [status,setStatus] = useState({});   // { [serviceId]: "sending"|"sent"|"error" }
  const [flowOpen,setFlowOpen] = useState(false);
  const isPreview = new URLSearchParams(window.location.search).get("preview")==="services";
  const pick = (o)=> (o&&(o[lang]||o.EN))||"";

  async function submit(card,note){
    setStatus(s=>({...s,[card.id]:"sending"}));
    try{
      const r = await fetch(API_SVCREQ,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({slug:getSlug(),serviceId:card.id,lang,note:note||undefined}),
      });
      if(!r.ok) throw new Error(`HTTP ${r.status}`);
      setStatus(s=>({...s,[card.id]:"sent"}));
    }catch(e){
      console.error(e);
      setStatus(s=>({...s,[card.id]:"error"}));
      throw e;
    }
  }

  if(!services||!services.length) return null;

  return <div style={{maxWidth:1100,margin:"0 auto",padding:"1.5rem 1.25rem"}}>
    {isPreview&&<div style={{background:"#fff7e6",border:"1px solid #ffd591",color:"#874d00",
      borderRadius:10,padding:"8px 12px",fontSize:13,marginBottom:14,fontWeight:600}}>
      👁️ {t.shopPreview}
    </div>}
    <p style={{color:"#5b6470",fontSize:15,margin:"0 0 18px"}}>{t.shopIntro}</p>
    <div style={{display:"flex",flexWrap:"wrap",gap:16}}>
      {services.map(card=>{
        const st = status[card.id];
        return <div key={card.id} style={{flex:"1 1 320px",minWidth:280,maxWidth:520,
          background:"#fff",border:"1px solid #e6e9ee",borderRadius:14,padding:"18px 20px",
          boxShadow:"0 1px 3px rgba(0,0,0,.04)",display:"flex",flexDirection:"column"}}>
          <div style={{fontSize:30,lineHeight:1,marginBottom:10}}>{card.icon}</div>
          <div style={{fontSize:17,fontWeight:700,color:"#1f2730",marginBottom:6}}>{pick(card.title)}</div>
          <div style={{fontSize:14,color:"#5b6470",flex:1,marginBottom:16}}>{pick(card.subtitle)}</div>
          {(()=>{
            const sentBox=<div style={{textAlign:"center",color:"#13794a",fontWeight:600,padding:"10px 16px",
              background:"#e8f6ef",borderRadius:10,fontSize:14}}>{t.shopSent}</div>;
            const reqBtn=<button onClick={()=>submit(card)} disabled={st==="sending"}
                style={{background:st==="error"?"#c0392b":"#0a6cff",color:"#fff",border:"none",
                  padding:"10px 16px",borderRadius:10,fontWeight:600,fontSize:14,
                  cursor:st==="sending"?"default":"pointer",opacity:st==="sending"?.7:1}}>
                {st==="sending"?t.shopSending:st==="error"?t.shopErr:t.shopRequest}
              </button>;
            if(card.type==="affiliate")
              return <a href={pick(card.url)||"#"} target="_blank" rel="noopener noreferrer"
                style={{display:"inline-block",textAlign:"center",background:"#0a6cff",color:"#fff",
                  textDecoration:"none",padding:"10px 16px",borderRadius:10,fontWeight:600,fontSize:14}}>
                {t.shopOpen} ↗
              </a>;
            if(card.live)
              return <button onClick={()=>setFlowOpen(true)} style={{background:"#0a6cff",color:"#fff",border:"none",
                  padding:"10px 16px",borderRadius:10,fontWeight:600,fontSize:14,cursor:"pointer"}}>
                  🔎 {(CF[lang]||CF.EN).open}
                </button>;
            return st==="sent"?sentBox:reqBtn;
          })()}
        </div>;
      })}
    </div>
    {flowOpen&&<CarRentalFlow b={b} lang={lang} onClose={()=>setFlowOpen(false)}/>}
  </div>;
}

export default function App(){
  const [booking,setBooking]=useState(null);
  const [state,setState]=useState("loading");
  const [errMsg,setErrMsg]=useState("");
  const [lang,setLang]=useState("EN");
  const [tab,setTab]=useState("overview");
  const [showMessages,setShowMessages]=useState(false);
  const [services,setServices]=useState([]);

  // Sincronizza il widget Bettie con la lingua del portal (lowercase)
  useEffect(()=>{
    const code = (lang||"en").toLowerCase();
    document.documentElement.setAttribute("lang", code);
    if(window.BBChat && typeof window.BBChat.setLang === "function"){
      window.BBChat.setLang(code);
    }
  }, [lang]);

  useEffect(()=>{
    const slug=getSlug();
    // No slug in URL → show login page
    if(!slug){ setState("login"); return; }
    fetch(`${API_BASE}/${slug}`)
      .then(r=>{ if(!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then(data=>{
        if(!data?.bookingReference){ setState("error"); setErrMsg("Booking not found."); return; }
        setBooking(data);
        const l=LANG_MAP[data.customerlanguage]||"EN";
        setLang(T[l]?l:"EN");
        setState("ready");
        // Servizi addizionali — gate lato server: lista vuota se SERVICES_ENABLED
        // è spento e non c'è ?preview=services nell'URL (invisibile ai clienti).
        const prev=new URLSearchParams(window.location.search).get("preview")||"";
        fetch(`${API_SERVICES}/${slug}${prev?`?preview=${encodeURIComponent(prev)}`:""}`)
          .then(r=>r.ok?r.json():{services:[]})
          .then(d=>setServices(Array.isArray(d?.services)?d.services:[]))
          .catch(()=>{});
      })
      .catch(e=>{ console.error(e); setState("error"); setErrMsg(e.message); });
  },[]);

  if(state==="login")   return <><style>{CSS}</style><LoginPage lang={lang} setLang={setLang}/></>;
  if(state==="loading") return <><style>{CSS}</style><Loading lang={lang}/></>;
  if(state==="error")   return <><style>{CSS}</style><Err lang={lang} msg={errMsg}/></>;

  return <>
    <style>{CSS}</style>
    <IconSprite/>
    <div style={{background:C.bg,minHeight:"100vh"}}>
      <Header b={booking} lang={lang} setLang={setLang} onBell={()=>setShowMessages(true)}/>
      {showMessages&&<MessagesDrawer b={booking} lang={lang} onClose={()=>setShowMessages(false)}/>}
      <Hero   b={booking} lang={lang}/>
      <TabNav active={tab} setActive={setTab} b={booking} lang={lang} services={services}/>
      <div className="fade-up">
        {tab==="overview"&&<Overview b={booking} lang={lang}/>}
        {tab==="flights" &&<Flights  b={booking} lang={lang}/>}
        {tab==="payments"&&<Payments b={booking} lang={lang}/>}
        {tab==="tours"   &&<Tours    b={booking} lang={lang}/>}
        {tab==="shop"    &&<Shop     b={booking} lang={lang} services={services}/>}
        {tab==="support" &&<Support  b={booking} lang={lang}/>}
      </div>
    </div>
  </>;
}
/* ─── SERVICES & VOUCHERS ───────────────────────────── */

/* Parse TourListCSV: TYPE,STATUS,NAME,IMG,LOCATION,CHECKIN,CHECKOUT,TICKETOPEN,URL */
function parseTourCSV(raw){
  if(!raw||typeof raw!=="string") return null;
  const typeMap={ACCOMODATION:1,ACCOMMODATION:1,TRANSFER:3,EXPERIENCE:2,FLIGHT:5,CARRENTAL:6,"CAR RENTAL":6};
  return raw.split("\n").map(s=>s.trim()).filter(Boolean).map(line=>{
    const flm = line.toUpperCase().startsWith("FLIGHT(") || line.toUpperCase().startsWith("FLIGHT (") ? line.match(/^FLIGHT[^:]*:[ \t]*(.+)$/i) : null;
    if(flm) return{type:5,ok:true,name:"Flight",img:"",loc:"",cin:"",cout:"",open:false,url:flm[1].trim()};
    const p=line.split(",");
    while(p.length<9) p.push("");
    const typeNum=typeMap[(p[0]||"").trim().toUpperCase()]||2;
    const ok=(p[1]||"").trim().toUpperCase()==="CONFIRMED";
    const url=(p[p.length-1]||"").trim();
    const ticketOpen=(p[p.length-2]||"").trim().toLowerCase()==="true";
    const cout=(p[p.length-3]||"").trim();
    const cin=(p[p.length-4]||"").trim();
    const loc=p.slice(4,p.length-4).join(",").trim();
    return{type:typeNum,ok,name:(p[2]||"").trim(),img:(p[3]||"").trim(),loc,cin,cout,open:ticketOpen,url};
  });
}

function parseLocBB(loc){
  if(!loc) return{address:"",maps:""};
  // strip GPS coords like <25.08,55.14>
  let addr=loc;
  while(addr.indexOf("<")>=0&&addr.indexOf(">")>addr.indexOf("<")){
    addr=addr.slice(0,addr.indexOf("<"))+addr.slice(addr.indexOf(">")+1);
  }
  addr=addr.trim(); if(addr.endsWith(",")) addr=addr.slice(0,-1).trim();
  const hasPipe=loc.indexOf("||")>=0;
  if(hasPipe){
    const parts=loc.split("||");
    return{address:parts[0].trim(),maps:"https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(parts[1].trim())};
  }
  const gm=loc.match(/<(-?\d+\.?\d*),(-?\d+\.?\d*)>/);
  if(gm) return{address:addr,maps:"https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(gm[1]+","+gm[2])};
  return{address:addr,maps:addr?"https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(addr):""};
}

/* Parse "MM/DD/YYYY H:MM AM/PM" string to timestamp for sorting */
function parseTourDate(s){
  if(!s||!s.trim()) return 0;
  const m=s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:[ \t]+(\d{1,2}):(\d{2})(?:[ \t]*(AM|PM))?)?/i);
  if(!m) return 0;
  let [,mo,dd,yy,hh=0,mi=0,ap=""]=m;
  hh=parseInt(hh,10); mi=parseInt(mi,10);
  if(ap.toUpperCase()==="PM"&&hh<12) hh+=12;
  if(ap.toUpperCase()==="AM"&&hh===12) hh=0;
  return new Date(parseInt(yy,10),parseInt(mo,10)-1,parseInt(dd,10),hh,mi).getTime();
}

/* Format "MM/DD/YYYY H:MM AM/PM" → "DD/MM/YYYY HH:MM" */
function fmtTourDate(s,lang){
  if(!s||!s.trim()) return "–";
  const m=s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:[ \t]+(\d{1,2}):(\d{2})(?:[ \t]*(AM|PM))?)?/i);
  if(!m) return s.trim();
  let [,mo,dd,yy,hh,mi,ap]=m;
  let timeStr="";
  if(hh!==undefined){
    let h=parseInt(hh,10),mn=parseInt(mi,10);
    if((ap||"").toUpperCase()==="PM"&&h<12) h+=12;
    if((ap||"").toUpperCase()==="AM"&&h===12) h=0;
    timeStr=" "+String(h).padStart(2,"0")+":"+String(mn).padStart(2,"0");
  }
  return dd.padStart(2,"0")+"/"+mo.padStart(2,"0")+"/"+yy+timeStr;
}

/* Tours component */
function Tours({b,lang}){
  const t=T[lang]||T.EN;
  const btype = String(b.bookingtype||"1");
  const allDocsReady = String(b.Touralldocumentstatus||b.touralldocumentstatus||"")==="3";
  if(btype==="5"&&!allDocsReady) return null;

  const services = parseTourCSV(b.TourListCSV);

  /* ── Build item lists from parsed CSV or legacy fields ── */
  let hotels=[], vouchers=[], allEvents=[];

  if(services){
    services.forEach((s,i)=>{
      if(!s.ok) return;
      if(s.type===1){
        hotels.push(s);
        allEvents.push({...s,ts:parseTourDate(s.cin)});
      } else if([2,3,5,6].includes(s.type)){
        vouchers.push(s);
        allEvents.push({...s,ts:parseTourDate(s.cin)});
      }
    });
  } else {
    // Legacy: TourHotelCheckin array. Both the hotel name AND its voucher URL live in the ACCO
    // lines of Linktours. linkdirecttour is indexed by Linktours-line order (ALL tour types, e.g.
    // experience first), so it must NOT be indexed by hotel position — that grabs the wrong link
    // (e.g. the experience URL on the hotel card). Pull the URL from the ACCO line directly.
    const hotelLines = b.Linktours
      ? b.Linktours.split("\n").filter(l=>/^ACCO/i.test(l)).map(l=>{
          const m=l.match(/^[A-Z]+[ \t]*\((.+?)\)[ \t]*:[ \t]*(.+)$/);
          if(m) return{name:m[1].trim(),url:m[2].trim()};
          const nm=l.match(/\((.+?)\)/);
          return{name:nm?nm[1].trim():"",url:""};
        })
      : [];
    (toArr(b.TourHotelCheckin)).forEach((ci,i)=>{
      if(!ci) return;
      const name=(hotelLines[i]&&hotelLines[i].name)||"Hotel "+(i+1);
      const img=(toArr(b.TourHotelImage))[i]||"";
      const loc=(toArr(b.TourHotelLocation))[i]||"";
      const cout=(toArr(b.TourHotelCheckout))[i]||"";
      // TourHotelNights is often null from Ninox → compute from check-in/out instead of defaulting to 1.
      const nightsRaw=(toArr(b.TourHotelNights))[i];
      const nights=(nightsRaw!=null&&nightsRaw!=="")
        ? nightsRaw
        : (ci&&cout?Math.max(1,Math.round((parseTourDate(cout)-parseTourDate(ci))/86400000)):1);
      const url=(hotelLines[i]&&hotelLines[i].url)||"";
      hotels.push({name,img,loc,cin:ci,cout,nights,url,type:1,ok:true,ts:ci});
      allEvents.push({type:1,name,img,loc,cin:ci,cout,url,ts:ci,nights});
    });
    // Legacy: Linktours for non-hotel
    if(b.Linktours){
      const types=toArr(b.Tourtype),statuses=toArr(b.Tourstatus);
      const refs=toArr(b.Tourdirectreference);
      const cins=(b.Checkintour||"").split("\n"),couts=(b.Checkouttour||"").split("\n");
      const ticketOpen=toArr(b.TicketOpen);
      b.Linktours.split("\n").forEach((line,i)=>{
        if(String(statuses[i]||"")!=="1") return;
        const tt=parseInt(types[i]||"0",10);
        if(![2,3,5,6].includes(tt)) return;
        const m=line.match(/^[A-Z]+[ \t]*\((.+?)\)[ \t]*:[ \t]*(.+)$/);
        const name=m?m[1]:line;
        const url=(m&&m[2]&&m[2].trim()!=="TIMETABLE")?m[2].trim():"";
        const cin=(cins[i]||"").trim(),cout=(couts[i]||"").trim();
        const open=ticketOpen[i]===true||String(ticketOpen[i]).toLowerCase()==="true";
        const ts=parseTourDate(cin)||0;
        vouchers.push({type:tt,ok:true,name,cin,cout,url,open,ts});
        allEvents.push({type:tt,ok:true,name,cin,cout,url,open,ts});
      });
    }
  }

  if(!hotels.length&&!vouchers.length) return null;

  /* ── Group events by day for timeline ── */
  const dayMap={};
  [...allEvents].sort((a,b)=>a.ts-b.ts).forEach(ev=>{
    if(!ev.ts) return;
    const d=new Date(ev.ts);
    const k=d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
    if(!dayMap[k]) dayMap[k]={ts:ev.ts,items:[]};
    dayMap[k].items.push(ev);
  });
  const days=Object.values(dayMap);

  const typeIcon={1:"🏨",2:"🎫",3:"🚆",5:"✈️",6:"🚗"};
  const typeCls={1:"hotel",2:"experience",3:"transfer",5:"flight",6:"carrental"};
  const typeLabel={
    EN:{1:"Accommodation",2:"Experience",3:"Transfer",5:"Flight",6:"Car Rental"},
    IT:{1:"Alloggio",2:"Esperienza",3:"Trasferimento",5:"Volo",6:"Noleggio Auto"},
    ES:{1:"Alojamiento",2:"Experiencia",3:"Traslado",5:"Vuelo",6:"Alquiler de Coche"},
    FR:{1:"Hébergement",2:"Expérience",3:"Transfert",5:"Vol",6:"Location de Voiture"},
    DE:{1:"Unterkunft",2:"Erlebnis",3:"Transfer",5:"Flug",6:"Mietwagen"},
    NL:{1:"Verblijf",2:"Ervaring",3:"Transfer",5:"Vlucht",6:"Autohuur"},
  };
  const TL=typeLabel[lang]||typeLabel.EN;

  const SectionHdr=({num,title})=>(
    <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:24}}>
      <div style={{width:34,height:34,borderRadius:"50%",background:C.orange,color:"#fff",
        fontSize:".8rem",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",
        flexShrink:0}}>{num}</div>
      <h2 style={{fontFamily:"Georgia,serif",fontSize:"1.5rem",fontWeight:500,
        color:C.dark,letterSpacing:".01em",margin:0}}>{title}</h2>
      <div style={{flex:1,height:1,background:C.border}}/>
    </div>
  );

  return <Wrap ch={<div style={{maxWidth:800,margin:"0 auto"}}>

    {/* ── Hotels ── */}
    {hotels.length>0&&<div style={{marginBottom:48}}>
      <SectionHdr num={1} title={lang==="IT"?"Alloggio":lang==="ES"?"Alojamiento":lang==="FR"?"Hébergement":lang==="DE"?"Unterkunft":lang==="NL"?"Verblijf":"Accommodation"}/>
      <div className="bb-hotel-grid">
        {hotels.map((h,i)=>{
          const loc=parseLocBB(h.loc||h.location||"");
          const nights=h.nights||(h.cin&&h.cout?Math.max(1,Math.round((parseTourDate(h.cout)-parseTourDate(h.cin))/86400000)):1);
          return <div key={i} className="bb-hotel-card">
            <div className="bb-hotel-img">
              {h.img
                ?<img src={h.img} alt={h.name} onError={e=>{e.target.src=HOTEL_FALLBACK_IMG;}}/>
                :"🏨"}
            </div>
            <div style={{padding:"18px"}}>
              <div style={{fontFamily:"Georgia,serif",fontSize:"1.15rem",fontWeight:500,
                color:C.dark,marginBottom:12,lineHeight:1.2}}>{h.name}</div>
              <div style={{display:"flex",gap:16,marginBottom:10}}>
                <div style={{display:"flex",flexDirection:"column",gap:2}}>
                  <div style={{fontSize:".62rem",fontWeight:700,letterSpacing:".14em",
                    textTransform:"uppercase",color:C.orange}}>Check-in</div>
                  <div style={{fontSize:".9rem",fontWeight:600,color:C.dark}}>
                    {typeof h.cin==="number"?fmtD(h.cin,lang):fmtTourDate(h.cin,lang)}
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:2}}>
                  <div style={{fontSize:".62rem",fontWeight:700,letterSpacing:".14em",
                    textTransform:"uppercase",color:C.orange}}>Check-out</div>
                  <div style={{fontSize:".9rem",fontWeight:600,color:C.dark}}>
                    {typeof h.cout==="number"?fmtD(h.cout,lang):fmtTourDate(h.cout,lang)}
                  </div>
                </div>
              </div>
              <span style={{display:"inline-flex",alignItems:"center",gap:5,
                background:"#fff3ee",borderRadius:6,padding:"3px 10px",
                fontSize:".75rem",fontWeight:600,color:C.orange}}>
                🌙 {nights} {lang==="IT"?"notte/i":lang==="ES"?"noche(s)":lang==="FR"?"nuit(s)":lang==="DE"?"Nacht/Nächte":lang==="NL"?"nacht(en)":"night(s)"}
              </span>
              {loc.address&&<div style={{display:"flex",alignItems:"flex-start",gap:7,
                marginTop:10,fontSize:".78rem",color:C.mid,lineHeight:1.45}}>
                <i className="fas fa-map-marker-alt" style={{color:C.orange,marginTop:2,flexShrink:0}}/>
                <span>{loc.address}</span>
              </div>}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",
                flexWrap:"wrap",gap:8,marginTop:12,paddingTop:12,borderTop:`1px solid ${C.border}`}}>
                {h.url&&<a href={h.url} target="_blank" rel="noopener noreferrer"
                  style={{display:"inline-flex",alignItems:"center",gap:5,fontSize:".8rem",
                    fontWeight:600,color:C.orange,textDecoration:"none"}}>
                  <i className="fas fa-external-link-alt" style={{fontSize:".75em"}}/>
                  {lang==="IT"?"Apri →":lang==="ES"?"Abrir →":lang==="FR"?"Ouvrir →":lang==="DE"?"Öffnen →":lang==="NL"?"Openen →":"Open →"}
                </a>}
                {loc.maps&&<a href={loc.maps} target="_blank" rel="noopener noreferrer"
                  style={{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 14px",
                    background:C.orange,color:"#fff",fontSize:".78rem",fontWeight:600,
                    borderRadius:8,textDecoration:"none"}}>
                  <i className="fas fa-location-arrow"/>
                  {lang==="IT"?"Indicazioni":lang==="ES"?"Cómo llegar":lang==="FR"?"Itinéraire":lang==="DE"?"Wegbeschreibung":lang==="NL"?"Routebeschrijving":"Directions"}
                </a>}
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>}

    {/* ── Services & Vouchers ── */}
    {vouchers.length>0&&<div style={{marginBottom:24}}>
      <div className="bb-vgrid">
        {vouchers.map((v,i)=>{
          const clrMap={2:"#2563eb",3:"#16a34a",5:"#7c3aed"};
          const bgMap={2:"#eef6ff",3:"#f0fdf4",5:"#faf5ff"};
          const clr=clrMap[v.type]||C.orange;
          const bg=bgMap[v.type]||"#fff3ee";
          const dep=v.cin?fmtTourDate(v.cin,lang):"";
          const arr=v.cout?fmtTourDate(v.cout,lang):"";
          return <div key={i} className="bb-vcard">
            <div style={{padding:"12px 16px",display:"flex",alignItems:"center",
              justifyContent:"space-between",borderBottom:`1px solid ${C.border}`}}>
              <span style={{fontSize:".65rem",fontWeight:700,letterSpacing:".14em",
                textTransform:"uppercase",color:clr}}>{TL[v.type]||""}</span>
              <span style={{fontSize:"1.2rem"}}>{typeIcon[v.type]||"🎫"}</span>
            </div>
            <div style={{padding:"14px 16px"}}>
              <div style={{fontWeight:600,fontSize:".9rem",color:C.dark,marginBottom:8,lineHeight:1.3}}>
                {v.name}
              </div>
              {v.open&&<div style={{display:"inline-flex",alignItems:"center",gap:4,
                background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:6,
                padding:"2px 9px",fontSize:".68rem",fontWeight:700,color:"#16a34a",marginBottom:8}}>
                ⏳ {lang==="IT"?"Ticket Aperto":lang==="ES"?"Ticket Abierto":lang==="FR"?"Billet Ouvert":lang==="DE"?"Offenes Ticket":lang==="NL"?"Open Ticket":"Open Ticket"}
              </div>}
              {(dep||arr)&&<div style={{fontSize:".75rem",color:C.mid,marginTop:4,lineHeight:1.55}}>
                {dep&&<div>{lang==="IT"?"Partenza":lang==="ES"?"Salida":lang==="FR"?"Départ":lang==="DE"?"Abfahrt":lang==="NL"?"Vertrek":"Departure"}: {dep}</div>}
                {arr&&<div>{lang==="IT"?"Arrivo":lang==="ES"?"Llegada":lang==="FR"?"Arrivée":lang==="DE"?"Ankunft":lang==="NL"?"Aankomst":"Arrival"}: {arr}</div>}
              </div>}
              {v.url&&<a href={v.url} target="_blank" rel="noopener noreferrer"
                style={{display:"inline-flex",alignItems:"center",gap:5,marginTop:10,
                  fontSize:".8rem",fontWeight:600,color:clr,textDecoration:"none",
                  border:`1px solid ${clr}33`,borderRadius:7,padding:"5px 12px",
                  background:bg,transition:"opacity .15s"}}>
                <i className="fas fa-external-link-alt" style={{fontSize:".75em"}}/>
                {lang==="IT"?"Apri →":lang==="ES"?"Abrir →":lang==="FR"?"Ouvrir →":lang==="DE"?"Öffnen →":lang==="NL"?"Openen →":"Open →"}
              </a>}
            </div>
          </div>;
        })}
      </div>
    </div>}

  </div>}/>;
}




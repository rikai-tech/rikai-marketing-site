'use client';
import { useState, useEffect } from 'react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
];

const WHAT_TO_EXPECT = [
  { num: 1, title: 'Platform Overview', desc: 'See Rik AI\'s continuous intelligence engine in action — from signal capture to actionable insights.' },
  { num: 2, title: 'Use Case Discussion', desc: 'Explore how Rik AI fits your team, industry, and customer understanding goals.' },
  { num: 3, title: 'Live Demo', desc: 'Interactive walkthrough tailored to your data and real-world use cases.' },
  { num: 4, title: 'Q&A Session', desc: 'Get all your questions answered by our product and solutions experts.' },
];

function getDaysInMonth(y, m) { return new Date(y, m + 1, 0).getDate(); }
function getFirstDay(y, m) { return new Date(y, m, 1).getDay(); }

function formatDateShort(d) {
  if (!d) return '';
  return new Date(d.year, d.month, d.day).toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric',
  });
}

function slotKey(date, time) {
  return `${date.year}-${date.month}-${date.day}-${time}`;
}

export default function BookDemoModal({ onClose, initialEmail = '' }) {
  const [step, setStep] = useState(1);

  const now = new Date();
  const [calYear, setCalYear] = useState(now.getFullYear());
  const [calMonth, setCalMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [slots, setSlots] = useState([]);

  const [form, setForm] = useState({ name: '', company: '', email: initialEmail, phone: '', notes: '' });
  const [guestInput, setGuestInput] = useState('');
  const [guests, setGuests] = useState([]);
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDay(calYear, calMonth);

  const isDateDisabled = (day) => {
    const d = new Date(calYear, calMonth, day);
    d.setHours(0, 0, 0, 0);
    const dow = d.getDay();
    return d <= today || dow === 0 || dow === 6;
  };

  const isDateSelected = (day) =>
    selectedDate &&
    selectedDate.year === calYear &&
    selectedDate.month === calMonth &&
    selectedDate.day === day;

  const hasSlotOnDate = (day) =>
    slots.some(s => s.date.year === calYear && s.date.month === calMonth && s.date.day === day);

  const selectDate = (day) => {
    if (isDateDisabled(day)) return;
    setSelectedDate({ year: calYear, month: calMonth, day });
  };

  const isPrevDisabled = () =>
    calYear < now.getFullYear() ||
    (calYear === now.getFullYear() && calMonth <= now.getMonth());

  const prevMonth = () => {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
  };

  const getSlotRank = (time) => {
    if (!selectedDate) return null;
    const key = slotKey(selectedDate, time);
    const idx = slots.findIndex(s => s.key === key);
    return idx === -1 ? null : idx + 1;
  };

  const toggleSlot = (time) => {
    if (!selectedDate) return;
    const key = slotKey(selectedDate, time);
    const idx = slots.findIndex(s => s.key === key);
    if (idx !== -1) {
      setSlots(slots.filter((_, i) => i !== idx));
    } else if (slots.length < 3) {
      setSlots([...slots, { date: selectedDate, time, key }]);
    }
  };

  const addGuest = () => {
    const email = guestInput.trim();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !guests.includes(email)) {
      setGuests([...guests, email]);
      setGuestInput('');
    }
  };

  const removeGuest = (email) => setGuests(guests.filter(g => g !== email));

  const isFormValid =
    form.name.trim() &&
    form.company.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    consent;

  const handleSubmit = async () => {
    if (!isFormValid || loading) return;
    setLoading(true);
    setApiError('');
    try {
      const res = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, slots, guests, consent }),
      });
      if (!res.ok) throw new Error('server');
      setSubmitted(true);
    } catch {
      setApiError('Something went wrong. Please try again or email us at sales@rikai.tech');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '11px 14px', borderRadius: 10,
    border: '1px solid var(--border-md)', background: 'rgba(255,255,255,0.05)',
    color: 'var(--text-1)', fontSize: 14, outline: 'none',
    fontFamily: 'var(--fb)', boxSizing: 'border-box',
  };

  const labelStyle = {
    fontSize: 12, fontFamily: 'var(--fh)', fontWeight: 600,
    color: 'var(--text-2)', display: 'block', marginBottom: 6,
  };

  const overlay = {
    position: 'fixed', inset: 0, zIndex: 1000,
    background: 'rgba(8,8,26,0.92)',
    backdropFilter: 'blur(16px)',
    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
    padding: '32px 20px',
    overflowY: 'auto',
  };

  const modalCard = {
    background: '#0f0f1e',
    border: '1px solid rgba(124,58,237,0.25)',
    borderRadius: 24,
    width: '100%',
    maxWidth: step === 2 && !submitted ? 920 : 680,
    position: 'relative',
    boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 80px rgba(124,58,237,0.15)',
    margin: 'auto',
    flexShrink: 0,
  };

  if (submitted) {
    return (
      <div style={overlay} onClick={onClose}>
        <div style={{ ...modalCard, padding: '64px 48px', textAlign: 'center', maxWidth: 540 }} onClick={e => e.stopPropagation()}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '2px solid rgba(34,197,94,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 28, color: '#4ade80' }}>✓</div>
          <h2 style={{ fontFamily: 'var(--fh)', fontSize: 28, fontWeight: 800, color: 'var(--text-1)', marginBottom: 12 }}>You're all set!</h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.7, marginBottom: 8 }}>
            Thank you, <strong style={{ color: 'var(--text-1)' }}>{form.name}</strong>. We've received your preferred slots and will confirm the best time within 24 hours.
          </p>
          <p style={{ color: 'var(--text-3)', fontSize: 13, marginBottom: 32 }}>
            A confirmation will be sent to <strong style={{ color: '#c4b5fd' }}>{form.email}</strong>
          </p>
          <button
            onClick={onClose}
            style={{ background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 15, padding: '12px 32px', borderRadius: 12, border: 'none', cursor: 'pointer' }}
          >Close</button>
        </div>
      </div>
    );
  }

  return (
    <div style={overlay} onClick={onClose}>
      <div style={modalCard} onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 18, right: 18, width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'var(--text-2)', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, lineHeight: 1 }}
        >×</button>

        {/* ── STEP 1 ── */}
        {step === 1 && (
          <div style={{ padding: '28px 36px 36px' }}>
            {/* Step indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              {[1, 2].map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: '50%',
                    background: s === step ? 'var(--grad)' : s < step ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.07)',
                    border: s === step ? 'none' : s < step ? '1px solid rgba(34,197,94,0.5)' : '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700, fontFamily: 'var(--fh)',
                    color: s < step ? '#4ade80' : s === step ? '#fff' : 'var(--text-3)',
                  }}>{s < step ? '✓' : s}</div>
                  <span style={{ fontSize: 12, fontFamily: 'var(--fh)', fontWeight: 500, color: s === step ? 'var(--text-1)' : 'var(--text-3)' }}>
                    {s === 1 ? 'Choose Slots' : 'Your Details'}
                  </span>
                  {s < 2 && <div style={{ width: 28, height: 1, background: 'rgba(255,255,255,0.1)', marginLeft: 4 }} />}
                </div>
              ))}
            </div>
            <h2 style={{ fontFamily: 'var(--fh)', fontSize: 24, fontWeight: 800, color: 'var(--text-1)', marginBottom: 8 }}>Schedule Your Demo</h2>
            <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.65, marginBottom: 28, maxWidth: 520 }}>
              Select <strong style={{ color: '#c4b5fd' }}>3 preferred 30-minute slots</strong> in order of priority.
              We'll find the best available match and confirm within 24 hours.
            </p>

            {/* Calendar */}
            <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <button
                  onClick={prevMonth}
                  disabled={isPrevDisabled()}
                  style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: isPrevDisabled() ? 'rgba(240,240,255,0.2)' : 'var(--text-1)', cursor: isPrevDisabled() ? 'not-allowed' : 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >‹</button>
                <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15, color: 'var(--text-1)' }}>
                  {MONTHS[calMonth]} {calYear}
                </span>
                <button
                  onClick={nextMonth}
                  style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: 'var(--text-1)', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >›</button>
              </div>

              {/* Day headers */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3, marginBottom: 6 }}>
                {DAYS.map(d => (
                  <div key={d} style={{ textAlign: 'center', fontSize: 10, color: 'var(--text-3)', fontFamily: 'var(--fh)', fontWeight: 600, padding: '4px 0' }}>{d}</div>
                ))}
              </div>

              {/* Day cells */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3 }}>
                {Array.from({ length: firstDay }, (_, i) => <div key={`e${i}`} />)}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const disabled = isDateDisabled(day);
                  const selected = isDateSelected(day);
                  const hasSlot = hasSlotOnDate(day);
                  return (
                    <button
                      key={day}
                      onClick={() => selectDate(day)}
                      disabled={disabled}
                      style={{
                        aspectRatio: '1', borderRadius: 8,
                        border: selected
                          ? '2px solid #7c3aed'
                          : hasSlot
                            ? '1px solid rgba(124,58,237,0.45)'
                            : '1px solid transparent',
                        background: selected
                          ? 'rgba(124,58,237,0.28)'
                          : hasSlot
                            ? 'rgba(124,58,237,0.1)'
                            : disabled
                              ? 'transparent'
                              : 'rgba(255,255,255,0.03)',
                        color: selected
                          ? '#c4b5fd'
                          : disabled
                            ? 'rgba(240,240,255,0.18)'
                            : hasSlot
                              ? '#a78bfa'
                              : 'var(--text-1)',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        fontSize: 12, fontFamily: 'var(--fh)',
                        fontWeight: selected || hasSlot ? 700 : 400,
                        transition: 'all 0.15s', padding: '5px 0',
                      }}
                      onMouseEnter={e => { if (!disabled && !selected) e.currentTarget.style.background = 'rgba(124,58,237,0.15)'; }}
                      onMouseLeave={e => {
                        if (!disabled && !selected) {
                          e.currentTarget.style.background = hasSlot ? 'rgba(124,58,237,0.1)' : 'rgba(255,255,255,0.03)';
                        }
                      }}
                    >{day}</button>
                  );
                })}
              </div>
            </div>

            {/* Time slots */}
            {selectedDate && (
              <div style={{ marginBottom: 20 }}>
                <p style={{ fontSize: 12, color: 'var(--text-2)', marginBottom: 12, fontFamily: 'var(--fh)' }}>
                  Available slots for{' '}
                  <span style={{ color: '#c4b5fd', fontWeight: 600 }}>{formatDateShort(selectedDate)}</span>
                  <span style={{ color: 'var(--text-3)' }}> · click a slot to add it to your preferences</span>
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 7 }}>
                  {TIME_SLOTS.map(time => {
                    const rank = getSlotRank(time);
                    const isSelected = rank !== null;
                    const isFull = !isSelected && slots.length >= 3;
                    return (
                      <button
                        key={time}
                        onClick={() => toggleSlot(time)}
                        disabled={isFull}
                        style={{
                          padding: '9px 4px', borderRadius: 9,
                          border: isSelected ? '1.5px solid rgba(124,58,237,0.7)' : '1px solid rgba(255,255,255,0.1)',
                          background: isSelected ? 'rgba(124,58,237,0.22)' : isFull ? 'rgba(255,255,255,0.015)' : 'rgba(255,255,255,0.04)',
                          color: isSelected ? '#c4b5fd' : isFull ? 'rgba(240,240,255,0.2)' : 'var(--text-2)',
                          cursor: isFull ? 'not-allowed' : 'pointer',
                          fontSize: 11, fontFamily: 'var(--fh)', fontWeight: isSelected ? 600 : 400,
                          textAlign: 'center', position: 'relative', transition: 'all 0.15s',
                        }}
                        onMouseEnter={e => { if (!isSelected && !isFull) e.currentTarget.style.background = 'rgba(124,58,237,0.12)'; }}
                        onMouseLeave={e => { if (!isSelected && !isFull) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                      >
                        {isSelected && (
                          <div style={{ position: 'absolute', top: -7, right: -7, width: 16, height: 16, borderRadius: '50%', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 800, color: '#fff' }}>{rank}</div>
                        )}
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Selected slots summary */}
            {slots.length > 0 && (
              <div style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.18)', borderRadius: 14, padding: '14px 18px', marginBottom: 24 }}>
                <p style={{ fontSize: 10, color: 'var(--text-3)', fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '0.07em', marginBottom: 10 }}>
                  YOUR PREFERRED SLOTS ({slots.length}/3)
                </p>
                {slots.map((slot, i) => (
                  <div key={slot.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: i < slots.length - 1 ? 8 : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{i + 1}</div>
                      <span style={{ fontSize: 13, color: 'var(--text-1)', fontFamily: 'var(--fh)', fontWeight: 500 }}>
                        {formatDateShort(slot.date)} · {slot.time}
                      </span>
                    </div>
                    <button
                      onClick={() => setSlots(slots.filter((_, j) => j !== i))}
                      style={{ width: 20, height: 20, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-3)', cursor: 'pointer', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >×</button>
                  </div>
                ))}
                {slots.length < 3 && (
                  <p style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 10, fontStyle: 'italic' }}>
                    {3 - slots.length} more slot{slots.length < 2 ? 's' : ''} needed —{' '}
                    {selectedDate ? 'select a time above' : 'pick a date from the calendar'}
                  </p>
                )}
              </div>
            )}

            {!selectedDate && slots.length === 0 && (
              <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 24, textAlign: 'center', padding: '14px', background: 'rgba(255,255,255,0.02)', borderRadius: 10, border: '1px dashed rgba(255,255,255,0.08)' }}>
                Pick a date from the calendar above to see available slots
              </p>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setStep(2)}
                disabled={slots.length < 3}
                style={{
                  background: slots.length >= 3 ? 'var(--grad)' : 'rgba(255,255,255,0.07)',
                  color: slots.length >= 3 ? '#fff' : 'var(--text-3)',
                  fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15,
                  padding: '12px 30px', borderRadius: 12, border: 'none',
                  cursor: slots.length >= 3 ? 'pointer' : 'not-allowed',
                  boxShadow: slots.length >= 3 ? '0 0 32px rgba(124,58,237,0.4)' : 'none',
                  transition: 'all 0.2s',
                }}
              >Next: Your Details →</button>
            </div>
          </div>
        )}

        {/* ── STEP 2 ── */}
        {step === 2 && (
          <div style={{ display: 'grid', gridTemplateColumns: '268px 1fr' }}>

            {/* Left — What to Expect */}
            <div style={{ background: 'linear-gradient(160deg, rgba(124,58,237,0.22) 0%, rgba(79,110,247,0.12) 100%)', borderRight: '1px solid rgba(255,255,255,0.07)', padding: '32px 24px', borderBottomLeftRadius: 24 }}>
              <h3 style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 800, color: 'var(--text-1)', marginBottom: 24, lineHeight: 1.25 }}>What to Expect</h3>
              {WHAT_TO_EXPECT.map(item => (
                <div key={item.num} style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(124,58,237,0.3)', border: '1px solid rgba(124,58,237,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#c4b5fd', flexShrink: 0, fontFamily: 'var(--fh)' }}>{item.num}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 13, color: 'var(--text-1)', marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontSize: 11, color: 'rgba(240,240,255,0.5)', lineHeight: 1.55 }}>{item.desc}</div>
                  </div>
                </div>
              ))}

              {/* Slot recap */}
              <div style={{ marginTop: 8, padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontSize: 9, color: 'var(--text-3)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: 8 }}>YOUR PREFERRED SLOTS</p>
                {slots.map((s, i) => (
                  <div key={s.key} style={{ fontSize: 11, color: 'rgba(240,240,255,0.45)', marginBottom: 5, display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                    <span style={{ color: '#a78bfa', fontWeight: 700, flexShrink: 0 }}>#{i + 1}</span>
                    <span>{formatDateShort(s.date)} · {s.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div style={{ padding: '28px 28px 32px' }}>
              {/* Step indicator — inside right panel so it doesn't overlap left column */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                {[1, 2].map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 26, height: 26, borderRadius: '50%',
                      background: s === step ? 'var(--grad)' : s < step ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.07)',
                      border: s === step ? 'none' : s < step ? '1px solid rgba(34,197,94,0.5)' : '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700, fontFamily: 'var(--fh)',
                      color: s < step ? '#4ade80' : s === step ? '#fff' : 'var(--text-3)',
                    }}>{s < step ? '✓' : s}</div>
                    <span style={{ fontSize: 12, fontFamily: 'var(--fh)', fontWeight: 500, color: s === step ? 'var(--text-1)' : 'var(--text-3)' }}>
                      {s === 1 ? 'Choose Slots' : 'Your Details'}
                    </span>
                    {s < 2 && <div style={{ width: 28, height: 1, background: 'rgba(255,255,255,0.1)', marginLeft: 4 }} />}
                  </div>
                ))}
              </div>
              <h2 style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 800, color: 'var(--text-1)', marginBottom: 4 }}>Your Details</h2>
              <p style={{ color: 'var(--text-3)', fontSize: 12, marginBottom: 20 }}>We'll send a calendar invite with all the details once we confirm your slot.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>Full Name <span style={{ color: '#ef4444' }}>*</span></label>
                  <input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Smith"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-md)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Company Name <span style={{ color: '#ef4444' }}>*</span></label>
                  <input
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Corp"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-md)'}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>Work Email <span style={{ color: '#ef4444' }}>*</span></label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-md)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone <span style={{ color: 'var(--text-3)' }}>(optional)</span></label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-md)'}
                  />
                </div>
              </div>

              {/* Guest emails */}
              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Add Guests <span style={{ color: 'var(--text-3)' }}>(optional)</span></label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="email"
                    value={guestInput}
                    onChange={e => setGuestInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addGuest(); } }}
                    placeholder="colleague@company.com"
                    style={{ ...inputStyle, flex: 1 }}
                    onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-md)'}
                  />
                  <button
                    onClick={addGuest}
                    style={{ padding: '11px 16px', borderRadius: 10, border: '1px solid rgba(124,58,237,0.35)', background: 'rgba(124,58,237,0.12)', color: '#c4b5fd', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap' }}
                  >+ Add</button>
                </div>
                {guests.length > 0 && (
                  <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {guests.map(g => (
                      <div key={g} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px 4px 12px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.22)', borderRadius: 100 }}>
                        <span style={{ fontSize: 11, color: '#c4b5fd', fontFamily: 'var(--fb)' }}>{g}</span>
                        <button
                          onClick={() => removeGuest(g)}
                          style={{ background: 'none', border: 'none', color: 'rgba(167,139,250,0.6)', cursor: 'pointer', fontSize: 14, padding: 0, lineHeight: 1, display: 'flex', alignItems: 'center' }}
                        >×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Notes */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Anything you'd like to discuss? <span style={{ color: 'var(--text-3)' }}>(optional)</span></label>
                <textarea
                  value={form.notes}
                  onChange={e => setForm({ ...form, notes: e.target.value })}
                  placeholder="Tell us about your use case, team size, or specific questions you'd like us to cover..."
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-md)'}
                />
              </div>

              {/* Consent checkbox */}
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 20, cursor: 'pointer' }}>
                <div
                  onClick={() => setConsent(c => !c)}
                  style={{
                    width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1,
                    border: consent ? '2px solid #7c3aed' : '1.5px solid rgba(255,255,255,0.2)',
                    background: consent ? '#7c3aed' : 'rgba(255,255,255,0.04)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.15s', cursor: 'pointer',
                  }}
                >
                  {consent && <span style={{ color: '#fff', fontSize: 11, fontWeight: 800, lineHeight: 1 }}>✓</span>}
                </div>
                <span style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.6 }}>
                  I agree that Rik.ai may use my information to contact me regarding my enquiry and related products and services. See our{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>Privacy Policy</a>.
                </span>
              </label>

              {apiError && (
                <p style={{ fontSize: 13, color: '#fca5a5', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, padding: '10px 14px', marginBottom: 16 }}>
                  {apiError}
                </p>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => setStep(1)}
                  disabled={loading}
                  style={{ color: 'var(--text-2)', fontFamily: 'var(--fh)', fontWeight: 500, fontSize: 14, background: 'none', border: '1px solid rgba(255,255,255,0.1)', padding: '11px 18px', borderRadius: 10, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.5 : 1 }}
                >← Back</button>
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid || loading}
                  style={{
                    background: isFormValid && !loading ? 'var(--grad)' : 'rgba(255,255,255,0.07)',
                    color: isFormValid && !loading ? '#fff' : 'var(--text-3)',
                    fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15,
                    padding: '12px 30px', borderRadius: 12, border: 'none',
                    cursor: isFormValid && !loading ? 'pointer' : 'not-allowed',
                    boxShadow: isFormValid && !loading ? '0 0 32px rgba(124,58,237,0.4)' : 'none',
                    transition: 'all 0.2s', minWidth: 180,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}
                >
                  {loading ? (
                    <>
                      <span style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'inline-block', flexShrink: 0 }} />
                      Scheduling…
                    </>
                  ) : 'Schedule Event →'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

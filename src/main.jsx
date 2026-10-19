import { useState } from 'react'
import { Bell, SlidersHorizontal, UserRound } from 'lucide-react'
import './styles.css'

const sections = [
  ['Show me', ['Women', 'Men', 'Non-binary', 'Everyone']],
  ['Interests', ['Analog film', 'Vinyl digging', 'Ceramics', 'Cycling', 'Architecture', 'Jazz', 'Natural wine', 'Typography', 'Swimming']],
  ['Languages', ['English', 'German', 'French', 'Spanish', 'Arabic', 'Japanese']],
  ['Music', ['Electronic', 'Jazz', 'Afrobeats', 'Indie', 'Classical', 'Hip-hop', 'Ambient']],
  ['Education & occupation', ['University', 'Postgraduate', 'Art school', 'Self-taught', 'Creative', 'Tech', 'Hospitality', 'Healthcare', 'Academia', 'Media']],
]
function Chips({ values, selected, onSelect }) { return <div className="chips">{values.map(v => <button key={v} className={`chip ${selected.includes(v) ? 'selected' : ''}`} onClick={() => onSelect(v)}>{selected.includes(v) && <span>✓</span>}{v}</button>)}</div> }
function Toggle({ title, subtitle, value, onChange }) { return <div className="toggle-row"><div><h2>{title}</h2><p>{subtitle}</p></div><button className={`toggle ${value ? 'on' : ''}`} onClick={onChange}><span /></button></div> }
export default function App() {
  const [selected, setSelected] = useState(['Women']), [age, setAge] = useState(34), [distance, setDistance] = useState(25), [verified, setVerified] = useState(false), [active, setActive] = useState(false)
  const toggle = v => setSelected(s => s.includes(v) ? s.filter(x => x !== v) : [...s, v])
  const reset = () => { setSelected(['Women']); setAge(34); setDistance(25); setVerified(false); setActive(false) }
  return <main className="phone"><header className="status"><b>9:41</b><span>▮▮▮　◔　▰</span></header><div className="topbar"><button className="logo" onClick={reset}>veya<i>•</i></button><div className="top-actions"><button><SlidersHorizontal size={17}/></button><button><Bell size={17}/></button><button className="avatar"><UserRound size={17}/></button></div></div>
    <div className="sheet"><div className="grabber"/><div className="heading"><div><h1>Filters</h1><p>Tune who shows up in Discover.</p></div><button className="reset-link" onClick={reset}>Reset</button></div>
      <Range title="Age" value={`${18} – ${age}`} max={60} current={age} onChange={setAge}/><Range title="Distance" value={`UP TO ${distance} KM`} max={100} current={distance} onChange={setDistance}/>
      {sections.map(([title, values]) => <section className="filter-section" key={title}><h2>{title}</h2><Chips values={values} selected={selected} onSelect={toggle}/></section>)}
      <section className="filter-section lifestyle"><h2>Lifestyle</h2><small>DRINKS</small><Chips values={['Never','Socially','Often']} selected={selected} onSelect={toggle}/><small>SMOKING</small><Chips values={['Never','Sometimes']} selected={selected} onSelect={toggle}/><small>WORKOUT</small><Chips values={['Daily','Weekly','Rarely']} selected={selected} onSelect={toggle}/></section>
      <Toggle title="Verified only" subtitle="People who passed photo verification" value={verified} onChange={() => setVerified(!verified)}/><Toggle title="Active recently" subtitle="Only people online in the last 24h" value={active} onChange={() => setActive(!active)}/>
    </div><footer><button className="reset-button" onClick={reset}>Reset</button><button className="show-button">Show 221 people</button></footer></main>
}
function Range({ title, value, max, current, onChange }) { return <section className="filter-section range-section"><div className="range-label"><h2>{title}</h2><span>{value}</span></div><input type="range" min="1" max={max} value={current} onChange={e => onChange(e.target.value)}/></section> }

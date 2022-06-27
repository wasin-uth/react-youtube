import { useState } from 'react'
import { Chip } from './DataHeader'
import './header.css'

export const Header = () => {
    const [chip] = useState(Chip);
    
    return (
        <div id="chip_bar">
            <ul className="chip_list" type="none">
                {chip.map((item, i) => (
                    <li key={i} className={`chip_name ${item.class}`}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

import arrayNavLinks from '../../data/array.js'
import './links.css';
import { generateKey } from '../myUtilities/MyUtilities.jsx';

const Links = ()=>{
    return (
        <>
            <ul className='links'>
            {arrayNavLinks.map((element) => {
                    return (
                        <li key={generateKey()}><a href="#">{element}</a></li>
                    )
                })}

            </ul>
        </>
    )
}
export default Links;


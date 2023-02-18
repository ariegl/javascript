import {Link} from 'react-router-dom';

export default function Book({item}) {
    return(
        <div>
            <Link to={`/view/${item.id}`}>
                <img src={item.cover} width='200' alt={item.title}></img>
            </Link>
            <div>
                {item.title}
            </div>
        </div>
    )
}
import Menu from '../components/Menu';
import { useParams } from 'react-router-dom';

export default function About() {

    let params = useParams();
    console.log(params);

    return (
        <>
            <Menu></Menu>
            <h1>This is about</h1>
        </>
    )
}
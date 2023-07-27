import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import api from '../axios/config';


const Home = () => {

	const [parties, setParties] = useState([]);

	const getParties = async() => {
		try {
			const res = await api.get('/parties');
			const data = res.data;
			console.log(data);
			setParties(data);

		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getParties();
	}, []);

	return (
		<div className='container'>
			<h1>Festas</h1>
			{parties.length === 0 ? <p>Carregando...</p> : (
				parties.map((i) => (
					<div className='party' key={i.id}>
						<h2>{i.title}</h2>
						<p>{i.author}</p>
						<p>{i.description}</p>
						<p>R${i.budget},00</p>
						<img src='../img/tela_login.png' alt="image" />

            
						<Link to={`/parties/${i.id}`} className='btn'>Alterar</Link>
					</div>
				))
			)}
		</div>
	);
};

export default Home;
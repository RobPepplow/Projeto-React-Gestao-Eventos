import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './NewParty.css';

const NewParty = () => {
	const navigate = useNavigate();
	const [party, setParty] = useState({
		title: '',
		author: '',
		description: '',
		budget: 0
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		setParty({
			...party,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		try {
			await axios.post('/parties', party);
			navigate('/');
		} catch (err) {
			setError('Failed to create party. Please try again later.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<h1>Criar Festa</h1>
			<div className='container-form'>
				<form onSubmit={handleSubmit} >
					<div className="form-control">
						<label htmlFor="title">Titulo: </label>
						<input type="text" placeholder='Digite o Titulo' name='title' id='title' required value={party.title} onChange={handleInputChange} />
					</div>
					{/* Other form controls */}
					<div className="form-control">
						<label htmlFor="budget">Orçamento para realizar a Festa</label>
						<input type="number" placeholder='Digite o orçamento' name='budget' id='budget' required value={party.budget} onChange={handleInputChange} />
					</div>
					{error && <p className="error-message">{error}</p>}
					<input type="submit" value={isLoading ? 'Salvando...' : 'Salvar'} className='btn-salvar' disabled={isLoading} />
				</form>
			</div>
		</div>
	);
};

export default NewParty;

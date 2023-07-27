
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import './NewParty.css';

const NewParty = () => {

	const navigate = useNavigate();
  
	const [title, setTitle] = useState();
	const [author, setAuthor] = useState();
	const [description, setDescription] = useState();
	const [burget, setBurget] = useState();

	// useEffect((e) => {
	// 	e.prevent.Default();
	// });
  

  
	const createParty = async(e) => {
		e.preventDefault();

		const party = {
			title,
			author,
			description,
			burget
		};

		await axios.post('/parties', party)
			.then((res) => {
				console.log(res);
			});

		navigate('/');
	};

	return (

		<div>
			<h1>Criar Festa</h1>
			<div className='container-form'>
				<form onSubmit={(e) => createParty(e)} >
					<div className="form-control">
						<label htmlFor="title">Titulo: </label>
						<input type="text" placeholder='Digite o Titulo' name='title' id='title' required onChange={(e) => setTitle(e.target.value)} />
					</div>
					<div className="form-control">
						<label htmlFor="author">Organizador da Festa: </label>
						<input type="text" placeholder='Digite o Anfitrião' name='author' id='author' required onChange={(e) => setAuthor(e.target.value)} />
					</div>
					<div className="form-control">
						<label htmlFor="description">Descrição da Festa</label>
						<textarea type="text" placeholder='Digite o Titulo' name='description' id='description' required onChange={(e) => setDescription(e.target.value)} />
					</div>
					<div className="form-control">
						<label htmlFor="Budget">Orçamento para realizar a Festa</label>
						<input type="number" placeholder='Digite o Titulo' name='Budget' id='Budget' required onChange={(e) => setBurget(e.target.value)} />
					</div> 
					<input type="submit" value="Salvar" className='btn-salvar' onClick={createParty}/>       
				</form>
			</div>
		</div>
	);
};

export default NewParty;
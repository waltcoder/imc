import React from 'react';
// import { useState } from 'react';
import './App.css';

function App() {
	return (
		<section className="App">
			<h2 className="App__title">Calculadora IMC</h2>
			<form action="" className="App__form">
				<div className="App__form-input-group">
					<label htmlFor="" className="App-srOnly">
						Digite sua altura em Metros
					</label>
					<input type="text" name="height" id="height" placeholder="Digite sua altura em Metros" enterKeyHint="next" />
				</div>
				<div className="App__form-input-group">
					<label htmlFor="" className="App-srOnly">
						Digite seu peso em Quilogramas
					</label>
					<input
						type="text"
						name="weight"
						id="weight"
						placeholder="Digite seu peso em Quilogramas"
						enterKeyHint="done"
					/>
				</div>
				{/* <div className="App__input-group">
					<label htmlFor="" className="App-srOnly"></label>
					<input type="text" name="" id="" />
				</div> */}
				<button className="button">Calcular</button>
			</form>
		</section>
	);
}

export default App;
import { useState, useEffect } from 'react'
import Header from './components/Header'

function App() {

	const [peso, setPeso] = useState('')
	const [altura, setAltura] = useState('')
	const [edad, setEdad] = useState('')
	const [sexo, setSexo] = useState('')
	const [resultado, setResultado] = useState(0)
	const [resto, setResto] = useState('')
	
	function handleSubmit(e) {
		e.preventDefault()
		if([peso, altura, edad, sexo].includes('')){
			alert("hay campos vacios")
		}else{
			calcularGrasa()
		}
	}

	function calcularGrasa(){
		const setearAltura = altura / 100;
		const IBM = (peso / (setearAltura * setearAltura))
		const porcentajeGrasa = ((1.2 * (IBM) + (0.23 * edad) - (10.8 * sexo) - 5.4)).toFixed(2)
		setResultado(porcentajeGrasa)

		const grasaTotal = Math.round((porcentajeGrasa * peso) / 100)
		setResto(grasaTotal)
	}
	
	return (
		<div className="my-20 max-w-lg mx-auto bg-white shadow p-10 rounded-md">
			<Header/>
			<form
				onSubmit={handleSubmit}
			>
				<div className="mt-2">
					<label htmlFor='peso' className='text-purple-700 font-bold block'>Peso</label>
					<input 
						type="number" 
						id="peso" 
						placeholder='80kg' 
						className='w-full p-2 st'
						value={peso}
						onChange={e => setPeso(+e.target.value)}	
					/>
				</div>
				<div className="mt-2">
					<label htmlFor='altura' className='text-purple-700 font-bold block'>Altura</label>
					<input 
						type="number" 
						id="altura" 
						placeholder='180cm' 
						className='w-full p-2 st' 
						value={altura} 
						onChange={(e)=> setAltura(+e.target.value)}/>
				</div>
				<div className="mt-2">
					<label htmlFor='peso' className='text-purple-700 font-bold block'>Edad</label>
					<input 
						type="number" 
						id="peso" 
						placeholder='30 años' 
						className='w-full p-2 st'
						value={edad}
						onChange={e => setEdad(+e.target.value)}	
					/>
				</div>
				<div className="mt-2">
					<label htmlFor='peso' className='text-purple-700 font-bold block mb-3'>Sexo</label>
					
					<input 
						type="radio" 
						id="masculino" 
						name='sexo' 
						value={1}
						className='p-2 mr-2'
						onChange={e => setSexo(e.target.value)}
					/>
					<label htmlFor="masculino" className='mr-10 labelRadio'>Masculino</label>
					<input 
						type="radio" 
						id="femenino" 
						name='sexo' 
						value={0} 
						className='p-2 mr-2'
						onChange={e => setSexo(e.target.value)}
					/>
					<label htmlFor="femenino" className='mr-10 labelRadio'>Femenino</label>
				</div>

				<div className="flex justify-center mt-6">
					<button 
						className='text-white bg-purple-600 hover:bg-purple-500 uppercase font-bold p-1 rounded-md'
						type='submit'
						>Calcular
					</button>
				</div>
			</form>

			<div className="pt-5 border-purple-700">
				 <div className='border-2 border-solid border-purple-300 rounded-md p-4'>
					<div className="text-center">
						<p className='text-gray-500'>Porcentaje estimado</p>
						<p className='font-bold text-4xl text-purple-700'>{resultado}%</p>
						<p  className='text-gray-500'>Peso estimado de grasa corporal</p>
						<p className='font-bold text-2xl text-purple-700'>{resto}Kg</p>

					</div>
				</div>
			</div>
			
		</div>
	)
}

export default App

const ERROR_MSG_1 = 'Debe definir todos los parametros';
const ERROR_MSG_2 = 'No existe modelo';

const API_URL = 'API_URL_HERE';
const NRO_PLACA = 'AS2-31D';

///////////////
1./////////////
///////////////

function test1(param1, param2, param3){
	if(param1 === undefined || param2 === undefined || param3 === undefined)
		throw new Error(ERROR_MSG);
	console.log('Test1 OK');
}

///////////////
2./////////////
///////////////

function getPlaca(nroPlaca){
	//CONVENIENT SINCE THEN RETURNS A PROMISE
	return fetch(API_URL + nroPlaca)
		.then(res => return res.json())
		.catch(err => console.log(new Date().toLocaleString() + ': ' + err.message));
}

function getConductor(nroConductor){
	return fetch(API_URL + nroConductor)
		.then(res => return res.json())
		.catch(err => console.log(new Date().toLocaleString() + ': ' + err.message));
}

getPlaca(NRO_PLACA).then(/**{pais, dniConductor}*/ res => {
	getConductor(res.dniConductor).then(res => console.log(/**{name, dni, sexo}*/ res));
});

///////////////
3./////////////
///////////////

function test3(objPlaca){
	if(objPlaca && objPlaca.marca && objPlaca.marca.modelo && objPlaca.marca.modelo.name)
		return objPlaca.marca.modelo.name;
	else
		return ERROR_MSG_2;
}

///////////////
4./////////////
///////////////

[
	{
		name: 'Pepe',
		donacion: true,
		esposas: ['Rosangela', 'Mayte']
	},
	{
		name: 'Juan',
		donacion: false,
		esposas: ['Yahaira']
	},
	{
		name: 'Lalo',
		donacion: true,
		esposas: []
	}
].filter(p => p.donacion && p.esposas.length > 0).map(p => p.name);

///////////////
5./////////////
///////////////

//SIN RECURSION
function test5(){
	var acum = 0;
	for(let i = 1; i <= 1000; i++){
		let cube = Math.pow(i, 3);
		if(cube % 2 !== 0)
			acum += cube;
	}
	return acum;
}

//RECURSIVO
function test5(qty = 1000){
	var cube = 0;
	if(qty > 0){
		cube = Math.pow(qty, 3);
		cube = cube % 2 !== 0 ? cube : 0;
		return cube + test5(--qty);
	}
	return cube;
}










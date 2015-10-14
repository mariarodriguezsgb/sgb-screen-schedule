## SGB-screen-Schedule

### Propósito 

Esta pantalla es una vista que permite visualizar una agenda diaria de acontecimientos, por ejemplo: reuniones, eventos, festejos, promación televisiva, etc; filtrada por iconos que se encuentran dispuestos en la parte superior de la misma. Cada ítem puede ser seleccionado y abierto en una vista diferente para su descripción con mayor detalle.

### Datos esperados

Se espera recibir un arreglo, cuyo cada elemento se corresponde con un filtro, que contiene a su vez la imagen del icono con que se identificara el filtro, y un arreglo de eventos, que a su vez deben incluir información descriptiva, hora, duración y, de tratarse de un evento repetitivo, un arreglo con los dias y horas en que se repite. 

### Datos obligatorios

* **channel**: Nombre del filtro
* **img**: Imagen del icono del filtro
* **checked**: Valor booleano para identificar los items seleccionados
* **shows**: Lista de eventos pertenecientes a dicho filtro
    * **name**: Nombre del evento
    * **time**: Hora del evento en formato decimal, dentro del rango [0,24.99]. La equivalencia de la parte entera del número con las horas de un día
    * **duration**: Duración del evento en formato decimal, dentro del rango [0,24.99]. La equivalencia siendo 1 = 60mins

### Datos opcionales

* **shows**
    * **live**: Indicación de alguna especificación del acontecimiento.
    * **trending**: Booleano para indicar si el acontecimiento es relevante por encima del resto.

###Ejemplo JSON
```json
data = [
		{
			'channel':'ESPN',
			'img':'http://neuroticsportsfan.com/wp-content/uploads/2015/01/espn-logo-square-300x3001.jpg',
			'checked':false,
			'shows': [
				{
					'name':'Court Central',
					'live':'Grabado',
					'time':0.5,
					'duration':0.5,
					'trending':true,
				},
				{
					'name':'La Liga World',
					'live':'Grabado',
					'time':1,
					'duration':0.5,
				},
				{
					'name':'Hablemos de fútbol',
					'live':'Grabado',
					'time':1.5,
					'duration':1,
				},
			]
		},
		{
			'channel':'ESPN2',
			'img':'http://www.vectorizados.com/muestras/espn2.jpg',
			'checked':false,
			'shows': [
				{
					'name':'Balón Dividido',
					'live':'Grabado',
					'time':0.5,
					'duration':1,
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':1.5,
					'duration':1
				},
				{
					'name':'Hablemos de fútbol',
					'live':'Grabado',
					'time':2.5,
					'duration':1
				}
			]
		}
];
```

### Diseño 
La pantalla permite visualizar los eventos de uno o dos filtros diferentes simultaneamente. 

### Selección de un solo filtro

![alt text](http://i325.photobucket.com/albums/k362/gbsojo/New%20Mockup%204_zpsyojk61mo.png "Un filtro")

### Selección de dos filtros

![alt text](http://i325.photobucket.com/albums/k362/gbsojo/New%20Mockup%204%20Alternate%20627y_zpshn9btihb.png "Dos filtros")
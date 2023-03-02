# Schema

![Database](schemas/database.png)

Desactualizada

# Routes

``` GET /patients ``` devuelve todos los pacientes activos

``` POST /patients/login ``` ruta de login para pacientes

``` GET /tests ``` devuelve todos los tests

``` GET /tests/?search=sangre ``` devuelve los test que coinciden por nombre o descripcion

``` GET /tests/:id ``` devuelve los detalles de el test

``` GET /samples ``` devuelve todos los tipos de muestras

``` GET /categories ``` devuelve todas las categorias

``` POST /patients/signup ``` ruta de signup para pacientes

``` DELETE /patients/:id ``` elimina el paciente con el id

``` GET /orders/:id ``` trae las ordenes de ese paciente // quizá deberiamos deshabilitar xq no tiene JWT

``` GET /orders ``` trae todas las ordenes

``` GET /orders/patient ``` trae las ordenes de ese paciente (identificado por token)


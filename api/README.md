# Schema

![Database](schemas/database.png)

Desactualizada

# Routes

``` GET /patients ``` devuelve todos los pacientes activos

``` GET /patients/roles ``` devuelve todos los pacientes con rol

``` POST /patients/login ``` ruta de login para pacientes

``` POST /patients/signup ``` ruta de signup para pacientes

``` DELETE /patients ``` elimina al paciente

``` GET /tests ``` devuelve todos los tests

``` GET /tests/orders ``` devuelve todos los tests ordenados por cantidad de ordenes

``` GET /tests/?search=sangre ``` devuelve los test que coinciden por nombre o descripcion

``` GET /tests/:id ``` devuelve los detalles de el test

``` GET /samples ``` devuelve todos los tipos de muestras con tests

``` GET /samples/admin ``` devuelve todos los tipos de muestras

``` POST /samples ``` crear una sample

``` GET /categories ``` devuelve todas las categorias con tests

``` GET /categories/admin ``` devuelve todas las categorias

``` POST /categories ``` crear una categoria

``` GET /orders ``` devuelve las ordenes del paciente

``` POST /orders ``` crear una orden del paciente

``` GET /orders/admin ``` devuelve todas las ordenes

``` GET /results/:id ``` devuelve los resultados de la orden
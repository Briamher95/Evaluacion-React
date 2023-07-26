-Qué hace el programa ?

 Es mi primer e-commerce desarrollado en React haciendo uso de las siguientes tecnologias:

-HTML
-CSS
-JavaScript
-react-router-dom

El diseño de la misma fue otorgado en figma por el profesor de la diplomatura Matias Gimenez

La pagina cuenta con un barra de navegacion por el cual se puede  explorar las 4 paginas que posee, ademas de eso tambien un buscador funcional haciendo uso de un Context Provider para poder acceder de manera mas simplificada a los componentes y a sus datos
Tambien, algunos detalles de iconos al pasar por encima y responsivo para mayor accesibilidad a la misma.

En el Homepage se nos muestra el mapeo de un Array que contiene todos los productos de la pagina para poder renderizar un componente, junto a alguna animacion añadida para identificar al producto que se esta señalando.

Al hacer Click en  cualquier producto nos dara acceso al DetailPage, donde mostramos la descripcion de este mismo y la posibilidad de añadirlo al Carrito de compras mediante unos botones que tambien nos permiten elegir la cantidad ,  haciendo uso de Hooks , States (useState,useEffect).

En el CarritoPage nos figuraran todos los productos que hayamos seleccionado, tambien nos muestra mediante un titulo la cantidad de producto que tenemos en el carrito y se nos da la posibilidad de finalizar la compra.

En el ContacPage hacemos uso del control de Formularios como de Inputs mediante las propiedades "onChange" y "onSubmit" que son pasadas a sus respectivas funciones para modificar los estados correspondientes y asi tener un formulario Funcional.
Como pequeño detalle , una vez enviamos el formulario se nos renderiza un pequeño mensaje para informarmos de que tuvo exito la operacion.




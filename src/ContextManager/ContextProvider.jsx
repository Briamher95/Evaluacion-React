import React from 'react'
import {createContext, useContext, useState, useEffect} from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {



    const products = [
        {
            nombre: "Notebook Gamer Acer Nitro 5 15.6",
            precio: 505999,
            id: 1,
            stock: 3,
            descripcion: "La notebook Banghó MAX L5 i7 F es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_804156-MLA47125965487_082021-F.webp"
        },
        {
            nombre: "Galaxy S20+",
            precio: 146.889,
            id: 2,
            stock: 12,
            descripcion: "El Samsung Galaxy S20+ es la variante con pantalla más grande de la serie Galaxy S, con una pantalla QHD+ de 6.7 pulgadas. Potenciado por un procesador Exynos 990, el Galaxy S20+ cuenta con 8GB de memoria RAM y 128GB de almacenamiento interno expandible. La cámara principal del Galaxy S20+ es triple, de 12 MP + 64 MP + 12 MP, con zoom óptico 3x y OIS, y su cámara frontal es de 10 megapíxel. El Galaxy S20+ completa sus características con parlantes estéreo, batería de 4500 mAh con carga rápida e inalámbrica, lector de huellas integrado en pantalla, tasa de refresco de pantalla de 120Hz, corre One UI 2 basado en Android 10.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_626215-MLA46851400749_072021-O.webp"
        },
        {
            nombre: "Nintendo Swich OLED 64GB Pokemon Scarlet Edition",
            precio: 411.836,
            id: 3,
            stock: 25,
            descripcion: "Con tu consola Switch tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.Switch se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil y de sobremesa.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_947685-MLA52573222441_112022-O.webp"
        },
        {
            nombre: "Sony PlayStation 5 825GB Standard Blanco",
            precio: 527.999,
            id: 4,
            stock: 9,
            descripcion: "Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp"
        } ,
        {
            nombre: "Mouse Logitech G502",
            precio: 37999,
            id: 5,
            stock: 18,
            descripcion: "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.",
            imagen: "https://logitechar.vtexassets.com/arquivos/ids/157034/910-005550_2.png?v=636985500388200000"
        },
        {
            nombre: "Microsoft Xbox Series X 1TB Standar color Negro",
            precio: 499.999,
            id: 6,
            stock: 20,
            descripcion: "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.La nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. Además, vas a poder jugar durante horas mientras te divertís con jugadores de todo el mundo.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_794435-MLA45046407331_032021-F.webp"
        },
        {
            nombre: "iPhone 13 Pro",
            precio: 949999,
            id: 7,
            stock: 3,
            descripcion: "Un sistema de cámaras revolucionario. Una pantalla con una respuesta tan fluida que cada toque parece magia.",
            imagen: "https://www.macstation.com.ar/img/productos/2595-2.jpg"
        },
        {
            nombre: "Pro Controller super Smash Bros Ultimate",
            precio: 72.850,
            id: 8,
            stock: 4,
            descripcion: "Este mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_917988-MLA69492524693_052023-O.webp"
        },
        {
            nombre: "Samsung Z Fold 3 256gb",
            precio: 600000,
            id: 9,
            stock: 3,
            descripcion: "Fotografía profesional en tu bolsillo.Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_923199-MLA54545224762_032023-O.webp"
        },
        {
            nombre: "Samsung Galaxy A34 128gb",
            precio: 150.999,
            id: 10,
            stock: 15,
            descripcion: "Capacidad y eficiencia.Con su potente procesador y memoria RAM de 6 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_612155-MLA54687684485_032023-O.webp"
        },
        {
            nombre: "Auriculares in-ear Samsung Galaxy Buds2",
            precio: 82.160,
            id: 11,
            stock: 12,
            descripcion: "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Samsung Buds2 Pro no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_761592-MLU69479912602_052023-O.webp"
        },
        {
            nombre: "Parlante JBL Go Essential Portatil",
            precio: 21.499,
            id: 12,
            stock: 6,
            descripcion: "JBL Go Essential ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.Al ser activo solo necesitarás conectarlo a la fuente de sonido y el mismo equipo se encargará de amplificar y reproducir: ganarás practicidad y espacio, ya que además requiere menos cableado que uno pasivo. Es la solución más conveniente si querés producir música en tu casa o en un estudio, y también para DJs.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_712789-MLA51457712423_092022-O.webp"
        },
        {
            nombre: "Monitor MSI Optix G241",
            precio: 139999,
            id: 13,
            stock: 8,
            descripcion: "Disfruta de todas las cualidades que el monitor MSI G241 tiene para ofrecerte. Percibe las imágenes de una manera completamente diferente y complementa cualquier espacio ya sea en tu hogar u oficina. Un monitor a la medida Gracias a su pantalla LCD obtendrás gráficas con gran nitidez, colores vivos y atractivos. Una experiencia visual de calidad Este monitor de 23.8 te proporcionará comodidad para estudiar, trabajar o ver una película en tus tiempos de ocio.",
            imagen: "https://www.venex.com.ar/products_images/1677583697_msi-3.png"
        },
        {
            nombre: "Monitor Gaming Viewsonic 24pg",
            precio: 131.399,
            id: 14,
            stock: 7,
            descripcion: "La iluminación dinámica RGB ofrece un fascinante telón de fondo para cualquier configuración de juegos. Para una completa iluminación para los juegos, ELITE RGB también se sincroniza con otros periféricos RGB.Esto significa que puede conectarse con su ecosistema actual de RGB sin ahogar su PC con software adicional.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_871649-MLA51734928216_092022-O.webp"
        },
        {
            nombre: "Apple Ipad Pro de 12.9 pulgadas",
            precio: 25999,
            id: 15,
            stock: 29,
            descripcion: "El iPad Pro con el chip M1 de Apple tiene un rendimiento fuera de serie y una batería que te acompaña todo el día.(2) La impresionante pantalla Liquid Retina XDR de 12,9 pulgadas es perfecta para ver y editar fotos y videos HDR.(1) La cámara frontal con Encuadre Centrado te mantendrá automáticamente en el centro de la imagen durante las videollamadas. Y eso no es todo. Viene con cámaras Pro y un escáner LiDAR para que hagas fotos y videos increíbles y disfrutes de experiencias de realidad aumentada realmente envolventes. Con el puerto Thunderbolt podrás conectar accesorios de alto rendimiento. Y si le sumas el Apple Pencil, podrás tomar apuntes, dibujar y hacer anotaciones, y con el Magic Keyboard con trackpad integrado podrás escribir con total comodidad.(3) El iPad Pro está listo para todo.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_689310-MLA46975173451_082021-F.webp"
        },
    ]


    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }
    const getProductCartById = (id) => {
        return cart.find(producto => producto.id === Number(id))
    }
    const [cart, setCart] = useState([])
    const isInCart = (id) => cart.some(producto => producto.id === Number(id))

    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart (cart.map(product =>{
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart ([...cart, {...getProductById(id), quantity: quantity}])
        }
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    }

    const [searchProduct, setSearchProduct] = useState("")
    const [currentProducts, setCurrentProducts] = useState(products)
    useEffect(()=>{
    setCurrentProducts(products.filter(producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase())))
    }, [searchProduct])

    return (
    <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal, setCurrentProducts,searchProduct, currentProducts, setSearchProduct}}>
        {children}
    </Context.Provider>
    )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider
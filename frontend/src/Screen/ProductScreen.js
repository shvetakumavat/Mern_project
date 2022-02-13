import './ProductScreen.css'

const ProductScreen = () => {
    return (
        <div className='productscreen'>
            <div className='left_product'>
                <div className='left_img'>
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"></img>
                </div> 
                <div className="product_info">
                    <p className="Info_name">
                        Product 1
                    </p>
                    <p className="info_disrp">
                        PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.
                    </p>

                    <p>Rs. 30000</p>
                </div>
            </div>
            <div className='right_product'>
                <div className='right_info'>
                    <p>
                        <span>
                            Rs.30000
                        </span>
                    </p>
                </div>
            </div>
            </div>
            )
}
export default ProductScreen
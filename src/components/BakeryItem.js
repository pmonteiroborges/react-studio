// TODO: create a component that displays a single bakery item
export function BakeryItem(
    {
        data,
        id,
        onAddToCart
    }) {

    const onAddToCartClick = () => {
        const cartItem = {
            id: id,
            price: data.price,
            name: data.name,
            count: 1
        }

        return onAddToCart(cartItem)
    }

    return (
        <div className="bakery_items">
            <img className="bakery_img" src={data.image} id={id}>
            </img>
            <div className="bakery_item_body">
                <h2>{data.name}</h2>
                <p className="description">{data.description}</p>
                <div className="price_cart">
                    <p>${data.price}</p>
                    <button onClick={onAddToCartClick}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
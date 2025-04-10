function Product({ product }) {
    return (
        <div className="card p-3 text-center">
            <h5>{product.name}</h5>
            <p className="text-muted">Price: ${product.price}</p>
        </div>
    );
}

export default Product;

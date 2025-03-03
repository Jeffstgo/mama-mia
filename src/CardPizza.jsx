const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
          <p className="card-text">
            <strong>Precio: ${price.toLocaleString()}</strong>
          </p>
          <button className="btn btn-info mx-1">Ver más</button>
          <button className="btn btn-success mx-1">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;

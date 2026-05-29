function Menu() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">
        Our Coffee Menu
      </h1>

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              className="card-img-top"
              alt="Latte"
            />
            <div className="card-body text-center">
              <h4>Latte</h4>
              <p>Smooth espresso with milk.</p>
              <h5>$4</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              className="card-img-top"
              alt="Espresso"
            />
            <div className="card-body text-center">
              <h4>Espresso</h4>
              <p>Strong Italian coffee shot.</p>
              <h5>$3</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
              className="card-img-top"
              alt="Mocha"
            />
            <div className="card-body text-center">
              <h4>Mocha</h4>
              <p>Chocolate flavored coffee.</p>
              <h5>$5</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h4>Cappuccino</h4>
              <p>Rich espresso with milk foam.</p>
              <h5>$4.5</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h4>Caramel Macchiato</h4>
              <p>Espresso with caramel flavor.</p>
              <h5>$5.5</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h4>Hot Chocolate</h4>
              <p>Sweet and creamy chocolate drink.</p>
              <h5>$4</h5>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Menu;
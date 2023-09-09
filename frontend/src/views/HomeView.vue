<template>
  <section class="landing">
    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="carousel-image"
            src="images/ales-krivec-QnNqGoCnBg0-unsplash.jpg"
            alt="carousel-image-1"
          />
        </div>
        <div class="carousel-item">
          <img
            class="carousel-image"
            src="\images\joanna-kosinska-BteMcldTQVo-unsplash.jpg"
            alt="carousel-image-2"
          />
        </div>
        <div class="carousel-item">
          <img
            class="carousel-image"
            src="images/jonathan-borba-PE5DrxufxFc-unsplash.jpg"
            alt="carousel-image-3"
          />
        </div>
        <div class="carousel-item">
          <img
            class="carousel-image"
            src="images/neven-krcmarek-l9t8O7S7s18-unsplash.jpg"
            alt="carousel-image-4"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>

  <section class="featured-products font">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <p>Most Popular</p>
      <p class="featured-heading-2">Our Exclusive Meals</p>
    </div>
    <div class="container">
      <div class="card-row">
        <div class="card">
          <img
            class="card-image"
            src="images/andres-rodriguez-3jJtXTwLZw4-unsplash.jpg"
            alt="card-image"
          />
          <div class="card-body">
            <p>Product</p>
            <p>Price</p>
            <a style="width: 100%" href="" class="btn">Buy</a>
          </div>
        </div>
        <div class="card">
          <img
            class="card-image"
            src="images/chris-gallagher-Jq-apNRn9VA-unsplash.jpg"
            alt="card-image"
          />
          <div class="card-body">
            <p>Product</p>
            <p>Price</p>
            <a style="width: 100%" href="" class="btn">Buy</a>
          </div>
        </div>
        <div class="card">
          <img
            class="card-image"
            src="images/farhad-ibrahimzade-KpOl9jV2aJM-unsplash.jpg"
            alt="card-image"
          />
          <div class="card-body">
            <p>Product</p>
            <p>Price</p>
            <a style="width: 100%" href="" class="btn">Buy</a>
          </div>
        </div>
        <div class="card">
          <img
            class="card-image"
            src="images/sam-moghadam-khamseh-i3A-se17VAg-unsplash.jpg"
            alt="card-image"
          />
          <div class="card-body">
            <p>Product</p>
            <p>Price</p>
            <a style="width: 100%" href="" class="btn">Buy</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="why-choose-us">
    <p class="heading">Why Choose Us?</p>
    <div class="grid-container">
      <div class="grid-item">
        <i style="width: 20px" class="fi fi-rr-users"></i>
        <p class="item-heading">Lorem ipsum dolor</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          dapibus sodales quam in consectetur. Ut eget eros pulvinar, volutpat
          ex nec, lobortis nulla.
        </p>
      </div>
      <div class="grid-item">
        <i class="fi fi-rr-users"></i>
        <p class="item-heading">Lorem ipsum dolor</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          dapibus sodales quam in consectetur. Ut eget eros pulvinar, volutpat
          ex nec, lobortis nulla.
        </p>
      </div>
      <div class="grid-item">
        <i class="fi fi-rr-users"></i>
        <p class="item-heading">Lorem ipsum dolor</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          dapibus sodales quam in consectetur. Ut eget eros pulvinar, volutpat
          ex nec, lobortis nulla.
        </p>
      </div>
      <div class="grid-item">
        <i class="fi fi-rr-users"></i>
        <p class="item-heading">Lorem ipsum dolor</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          dapibus sodales quam in consectetur. Ut eget eros pulvinar, volutpat
          ex nec, lobortis nulla.
        </p>
      </div>
    </div>
  </section>

  <section id="who-makes-your-food">
    <div class="row">
      <div class="col-lg-6">
        <p class="heading-last">Who Makes Your Food?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          dapibus sodales quam in consectetur. Ut eget eros pulvinar, volutpat
          ex nec, lobortis nulla.
        </p>
        <br />
        <div style="display: flex; align-items: center;">
          <img class="food-image" src="check-circle.png" alt="check-circle" />
          <p>
            Aliquam ornare lorem efficitur finibus tristique. Ut suscipit eros
            facilisis ante sagittis, at tempor neque euismod. Duis tempus
            pharetra rhoncus
          </p>
        </div>
        <div style="display: flex; align-items: center;">
          <img class="food-image" src="check-circle.png" alt="check-circle" />
          <p>
            Aliquam ornare lorem efficitur finibus tristique. Ut suscipit eros
            facilisis ante sagittis, at tempor neque euismod. Duis tempus
            pharetra rhoncus
          </p>
        </div>
        <div style="display: flex; align-items: center;">
          <img class="food-image" src="check-circle.png" alt="check-circle" />
          <p>
            Aliquam ornare lorem efficitur finibus tristique. Ut suscipit eros
            facilisis ante sagittis, at tempor neque euismod. Duis tempus
            pharetra rhoncus
          </p>
        </div>
        <div style="display: flex; align-items: center;">
          <img class="food-image" src="check-circle.png" alt="check-circle" />
          <p>
            Aliquam ornare lorem efficitur finibus tristique. Ut suscipit eros
            facilisis ante sagittis, at tempor neque euismod. Duis tempus
            pharetra rhoncus
          </p>
        </div>
        <a style="width: 40%; margin: 2rem;" href="" class="btn last-btn">Discover our menu</a>

      </div>
      <div class="col-lg-6" style="padding: 4rem">
        <img class="chef-image" src="chef-image-2.jpg" alt="chef-image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* CAROUSEL */
.carousel-image {
  width: 100vw;
  height: auto;
}

.font {
  font-family: "Open Sans", sans-serif;
}

/* FEATURED PRODUCTS */
.featured-heading-2 {
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 200% */
  letter-spacing: -0.2px;
}
.featured-products {
  padding: 5rem;
}
.card-image {
  width: 100%;
  border-radius: 20px 20px 0 0;
}

.card {
  margin: 1rem;
  border-radius: 20px;
  width: 14rem;
}

.card-row {
  display: flex;
  justify-content: space-between;
}

.btn {
  border-radius: 5px;
  background: #ffa500;
  color: #fff;
}

/* WHY-CHOOSE-US-SECTION */
.heading {
  color: #1f1f1f;
  text-align: center;
  font-family: Cormorant;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  padding: 6rem;
}

.item-heading {
  color: #1f1f1f;
  font-family: Cormorant;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

/* WHO-MAKES-YOUR-FOOD-SECTION */
.heading-last {
  color: #1f1f1f;
  font-family: Cormorant;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.chef-image {
  width: 100%;
}

.food-image{
  max-height: 30px;
  margin: 1rem;
}

.row{
  background: #1e90ff; 
  width: 100%;
  margin: 0;
  padding: 4rem;
}

@media screen and (max-width: 360px) {
  .card-row{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .grid-container{
    grid-template-columns: repeat(1, 1fr);
    padding: 2rem;
  }

  .row{
    margin: 0;
    padding: 3rem 1rem;
  }

  .last-btn{
    margin: auto;
  }
}

@media screen and (min-width: 361px) and (max-width: 800px){
  .row{
    padding: 6rem 5rem; 
    margin: 0;
  }
  
  .card-row{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  .grid-container{
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    padding-top: 2rem;
  }
}
</style>

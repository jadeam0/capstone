<template>
<!-- <div v-if="products"> -->

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
          <img class="carousel-image" src="https://i.postimg.cc/v82PwZQC/ales-krivec-Qn-Nq-Go-Cn-Bg0-unsplash.jpg" alt="carousel-image-1"/>
          <div class="carousel-caption">
            <h3>Crave Fusion</h3>
            <p>Where Flavors Unite!</p>
            <button>Check out the Flavors</button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-image"
            src="https://i.postimg.cc/ZKb0hJqt/joanna-kosinska-Bte-Mcld-TQVo-unsplash.jpg"
            alt="carousel-image-2"
          />
        </div>
        <div class="carousel-item">
          <img
            class="carousel-image"
            src="https://i.postimg.cc/CK3zyDRm/jonathan-borba-PE5-Drxufx-Fc-unsplash.jpg"
            alt="carousel-image-3"
          />
        </div>
        <div class="carousel-item">
          <img
            class="carousel-image"
            src="https://i.postimg.cc/fRPtM13z/neven-krcmarek-l9t8-O7-S7s18-unsplash.jpg"
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
      <p class="featured-heading-2">Our Popular Meals</p>
    </div>
    <div class="container">
      <div class="card-row">
        <div class="card">
          <img
            class="card-image"
            src="https://i.postimg.cc/PxZnCVtn/andres-rodriguez-3j-Jt-XTw-LZw4-unsplash.jpg"
            alt="card-image"
          />
          <div class="card-body">
            <p>Fried prawns with baked potatoes</p>
            <p>R 100</p>
            <a style="width: 100%" href="" class="btn">Buy</a>
          </div>
        </div>
        <div class="card">
          <img
            class="card-image"
            src="https://i.postimg.cc/ZY8hZQ7r/chris-gallagher-Jq-ap-NRn9-VA-unsplash.jpg"
            alt="card-image"
          />
          <div class="card-body">
            <p>Steak with chips, onion rings, and white sauce</p>
            <p>R 180</p>
            <a style="width: 100%" href="" class="btn">Buy</a>
          </div>
        </div>
        <div class="card">
          <img
            class="card-image"
            src="https://i.postimg.cc/LsKTHx01/zulu-fernando-UM4d6-Rsrkm-M-unsplash.jpg"
            alt="card-image"
          />
          <div class="card-body">
            <p>Double cheese Taxus burger</p>
            <p>R 90</p>
            <a style="width: 100%" href="" class="btn">Buy</a>
          </div>
        </div>
        <div class="card">
          <img
            class="card-image"
            src="https://i.postimg.cc/Y9XYmR88/sam-moghadam-khamseh-i3-A-se17-VAg-unsplash.jpg"
            alt="card-image"
          />
          <div class="card-body">
            <p>Stir-fry with grilled chicken wings</p>
            <p>R 160</p>
            <a style="width: 100%" href="" class="btn">Buy</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="why-choose-us">
    <p class="heading">Why Choose <span>Us</span>?</p>
    <div class="grid-container">
      <div class="grid-item">
        <img style="width: 4rem" src="https://i.postimg.cc/JnD5ntDd/quality.png" class="grid-img">
        <p class="item-heading">Quality and Reliabilityr</p>
        <p>
          Our food e-commerce website was developed with a focus on dependability and quality to make sure that college students have access to dependably great home-cooked meals.
        </p>
      </div>
      <div class="grid-item">
        <img class="grid-img" style="width: 4rem" src="https://i.postimg.cc/kX4Y3Mwz/people.png">
        <p class="item-heading">Customer-Centric Approach</p>
        <p>
          Our e-commerce is built on a customer-centric philosophy that prioritises the special preferences and schedules of college students.
        </p>
      </div>
      <div class="grid-item">
        <img class="grid-img" src="https://i.postimg.cc/7L8fr61N/think-outside-the-box.png" style="width: 4rem">
        <p class="item-heading">Innovation and Uniqueness</p>
        <p>
          Our platform stands out for its revolutionary features, which give students a unique and interesting gastronomic experience.
        </p>
      </div>
      <div class="grid-item">
        <img class="grid-img" src="https://i.postimg.cc/59D0Cgjt/value.png" style="width: 4rem">
        <p class="item-heading">Value for Money</p>
        <p>
          We are dedicated to providing outstanding value for money, making sure that college students can afford to eat healthy, home-cooked meals.
        </p>
      </div>
    </div>
  </section>

  <section id="who-makes-your-food">
    <div class="row">
      <div class="col-lg-6" id="txt">
        <p class="heading-last">Who Makes Your Food?</p>
        <p class="par">
          At our online food e-commerce platform, we take great pride in the answer to this question. 
          We believe in the power of community and social impact. That's why the heart of our initiative 
          lies in empowering individuals within our community who face employment challenges. We have 
          collaborated with talented and hardworking cooks from within the community, providing them with 
          opportunities to showcase their culinary skills and earn a livelihood by preparing the delicious 
          home-cooked meals that you order. These chefs pour their passion and expertise into each dish, 
          ensuring that you not only enjoy a satisfying meal but also support a meaningful cause.
        </p>
        <p class="par">
          In addition to our chefs, we also engage members of our community as delivery personnel. 
          This not only fosters a sense of belonging and mutual support within our community but 
          also allows us to provide employment to those who need it most. So, when you order from us, 
          you're not just getting a meal; you're partaking in a movement that uplifts individuals and 
          strengthens the bonds within our community. Together, we're not just delivering food; we're 
          serving a purpose.
        </p>
      </div>
      <div class="col-lg-6 g-5" style="">
        <img class="chef-image" src="https://i.postimg.cc/fLG1CJ66/chef-image-2.jpg" alt="chef-image" />
      </div>
    </div>
  </section>

  <!-- </div>
<div v-else><SpinnerComponent/></div> -->
</template>

<script>
import SingleProduct from '../components/productSingleComp.vue'
import SpinnerComponent from '../components/spinnerComp.vue'

export default {
  components: {
        SingleProduct,
        SpinnerComponent
    }
};
</script>

<style scoped>
/* CAROUSEL */
.carousel-item {
  width: 100%;
  height: 35rem;
}
.carousel-image {
  width: 100%;
  height: fit-content;
}
.carousel-caption {
  background-color: rgba(0, 0, 0, 0.5);
  width: 25rem;
  height: 16rem;
  position: absolute;
  top: 48%;
  left: 29%;
  transform: translate(-49%, -50%);
  border-radius: 3%;
}
.carousel-caption h3 {
  font-size: 46px;
}
.carousel-caption p {
  font-size: 16px;
}
.carousel-caption button {
  margin-top: 1.1rem;
  /* padding: 0.7rem; */
  border: none;
  outline: none;
  background-color: #ffa500;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}
.carousel-caption button:hover {
  background-color: #e7a52a;
  cursor: pointer;
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

span {
  color: #0f0;
  text-decoration: underline solid #0f0;
}
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
.grid-img {
  margin-bottom: 1rem;
}

/* WHO-MAKES-YOUR-FOOD-SECTION */
.heading-last {
  color: #1f1f1f;
  font-family: Cormorant;
  font-size: 39px;
  font-style: normal;
  font-weight: 500;
  /* line-height: normal; */
  margin-bottom: 1rem;
  /* text-align: left; */
}

#txt {
  padding: 3rem;
}
.par {
  text-align: left;
}
.chef-image {
  width: 97%;
  height: 87%;
}
.row{
  background: #66b0fa; 
  width: 100%;
  margin: 0;
  padding: 5rem;
  padding-bottom: 0;
  /* height: 70%; */
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

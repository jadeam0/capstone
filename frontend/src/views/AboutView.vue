<template>
  <div class="about">
    <h1>About Us</h1>
  </div>

  <div class="container-item">
    <div class="item col-md-6">
      <img
        class="about-image"
        src="https://i.postimg.cc/d0nDXTvZ/jordane-mathieu-4-M-4-ZQFEu-Y-unsplash.jpg"
        alt="about-image"
      />
    </div>
    <div class="item col-md-6 column-text">
      <h3 class="title">Our Story</h3>
      <p>
        It all began with a shared passion for good food and a deep sense of community. 
        Our journey started in the heart of our neighborhood, where we witnessed talented 
        cooks eager to share their culinary skills and individuals seeking meaningful 
        employment opportunities.
      </p>
      <p>
        Driven by the belief that everyone deserves a taste of homemade goodness and 
        a chance to thrive, we embarked on a mission. We created an online food e-commerce 
        platform that brings together the talent of our local chefs and the needs of our community.
      </p>
      <p>
        Our platform isn't just about ordering food; it's about connecting, supporting, 
        and savoring the flavors of home. Every meal you enjoy is a result of the collective 
        effort of our chefs, our dedicated team, and the sense of togetherness that defines us.
      </p>
    </div>
  </div>
  <div class="container-item row-2">
    <div class="item column-text col-md-6">
      <h3 class="title">Our Mission</h3>
      <p>
        Our twofold goal is: First and foremost, we're committed to providing you 
        with the freshest and tastiest handcrafted foods that suit your preferences 
        and hectic schedule. Every meal should be enjoyable, is our goal.
      </p>
      <p>
        Second, and no less significant, we're dedicated to having a positive 
        influence on our neighbourhood. By working with skilled chefs and creating 
        chances for local employment, we are not only sating appetites but also supporting 
        growth and establishing a sense of community.
      </p>
    </div>
    <div class="item col-md-6">
      <img
        class="about-image"
        src="https://i.postimg.cc/D0SgmT55/toa-heftiba-5-Je-Tin55-H9-U-unsplash.jpg"
        alt="about-image"
      />
    </div>
  </div>
  <div class="team">
    <div class="team-title">
      <p class="title">Our Team</p>
      <p>We are a passionate and varied group of people that share a love of delicious food, 
        a dedication to our neighbourhood, and a common goal of making handmade food 
        accessible and empowering.</p>
    </div>

    <div class="team-container card-columns">
      <div class="card ">
        <img
          src="https://i.postimg.cc/3xgcXTXR/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg"
          alt="team-image"
        />
        <div class="card-body">
          <p><b>Alex Montgomery</b></p>
          <p>CEO</p>
          <p>
            Culinary innovation and community empowerment advocate
          </p>
        </div>
      </div>
      <div class="card ">
        <img
          src="https://i.postimg.cc/Qdpp4NY2/jonathan-borba-n1-B6ft-PB5-Eg-unsplash.jpg"
          alt="team-image"
        />
        <div class="card-body">
          <p><b>Mia Johnson</b></p>
          <p>Co-Founder</p>
          <p>
            Champion of community-driven culinary excellence
          </p>
        </div>
      </div>
      <div class="card ">
        <img
          src="https://i.postimg.cc/DfRnv17K/anthony-tran-3-Xkms-g-Mv-Zg-unsplash.jpg"
          alt="team-image"
        />
        <div class="card-body">
          <p><b>Sarah Chen</b></p>
          <p>Web Developer</p>
          <p>
            Crafting user-friendly, delightful online experiences
          </p>
        </div>
      </div>
      <div class="card ">
        <img
          src="https://i.postimg.cc/NMffXtnq/albert-dera-ILip77-Sbm-OE-unsplash.jpg"
          alt="team-image"
        />
        <div class="card-body">
          <p><b>James Rodriguez</b></p>
          <p>Software Developer</p>
          <p>
            Crafting innovative, efficient digital solutions
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background: #f4f5f6;
  display: flex;
  justify-content: center;
}

.about-image {
  width: 100%;
}

.row-2 {
  background: #1e90ff;
}

.team-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20%;
}

.title {
  color: #363940;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 40px; /* 166.667% */
  letter-spacing: -0.24px;
}

.card > img {
  border-radius: 3px 3px 0 0;
}

.container-item{
  display: flex;
}

.team-container {
  display: grid;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 2rem;
}

.team{
  padding: 2rem auto;
}

.card img {
  /* height: 200vh; */
}

@media screen and (max-width: 360px) {
  .about {
    padding: 2.2rem;
  }


  .column-text {
    padding: 2rem;
    text-align: center;
  }


  .team-title {
    padding: 1rem;
    margin-top: 1.5rem;
  }

  .container-item{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 361px) and (max-width: 790px){
  .about {
    padding: 3rem;
  }

  .about-image {
    width: 100%;
  }

  .container-item{
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
  .team-container{
    grid-template-columns: repeat(2, 1fr);
  }

  .team-title{
    margin: 2rem auto;
  }
}

@media screen and (min-width: 791px) {
  .team-container{
    grid-template-columns: repeat(4, 1fr);
  }

  .container-item{
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }  

  .team-title{
    margin: 2rem auto;
  }

  .about{
    padding: 2.3rem;
  }
}
</style>

<template>
  <div class="about">
    <h1>About Us</h1>
  </div>

  <div class="container-item">
    <div class="item col-md-6">
      <img
        class="about-image"
        src="images/stu-moffat-Al9618AKGts-unsplash.jpg"
        alt="about-image"
      />
    </div>
    <div class="item col-md-6 column-text">
      <h3 class="title">Our Story</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sodales quam in consectetur. Ut eget eros pulvinar, volutpat ex nec,
        lobortis nulla. Aliquam ornare lorem efficitur finibus tristique.
      </p>
    </div>
  </div>
  <div class="container-item row-2">
    <div class="item column-text col-md-6">
      <h3 class="title">Our Mission</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sodales quam in consectetur. Ut eget eros pulvinar, volutpat ex nec,
        lobortis nulla. Aliquam ornare lorem efficitur finibus tristique.
      </p>
    </div>
    <div class="item col-md-6">
      <img
        class="about-image"
        src="images/sam-moghadam-khamseh-i3A-se17VAg-unsplash.jpg"
        alt="about-image"
      />
    </div>
  </div>
  <div class="team">
    <div class="team-title">
      <p class="title">Our Team</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div class="team-container card-columns">
      <div class="card ">
        <img
          src="images/zulu-fernando-UM4d6RsrkmM-unsplash.jpg"
          alt="team-image"
        />
        <div class="card-body">
          <p><b>Person Name 1</b></p>
          <p>Title</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dapibus sodales quam in consectetur.
          </p>
        </div>
      </div>
      <div class="card ">
        <img
          src="images/zulu-fernando-UM4d6RsrkmM-unsplash.jpg"
          alt="team-image"
        />
        <div class="card-body">
          <p><b>Person Name 2</b></p>
          <p>Title</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dapibus sodales quam in consectetur.
          </p>
        </div>
      </div>
      <div class="card ">
        <img
          src="images/zulu-fernando-UM4d6RsrkmM-unsplash.jpg"
          alt="team-image"
        />
        <div class="card-body">
          <p><b>Person Name 3</b></p>
          <p>Title</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dapibus sodales quam in consectetur.
          </p>
        </div>
      </div>
      <div class="card ">
        <img
          src="images/zulu-fernando-UM4d6RsrkmM-unsplash.jpg"
          alt="team-image"
        />
        <div class="card-body">
          <p><b>Person Name 4</b></p>
          <p>Title</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dapibus sodales quam in consectetur.
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

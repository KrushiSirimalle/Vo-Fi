import React from 'react';
import './Home.css';
import NavBar from './NavBar';

const Home = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif",
        justifyContent: "center"
        
      };
      const myStylee ={
        justifyContent: "center"
      }
  return (
    <>
   
    <NavBar/>
    <div>
      <head>This is Home Page
        <>find a valunteer</>
      </head>
       
      {
      <>
      <header style={myStyle}>
        <h2>FIND A VOLUNTEER</h2>
         <h3>work of humanity</h3>
      </header>
      <div class="jumbotron jumbotron-fluid">
        <div class="row">
        <div class="col-sm-4"><img src="./images/food.jpg" alt="Website Logo" style={{height:'200px', weight:'200px', padding:'10px', borderRadius:'10' }}></img></div>
          <div class="col-sm-4"><h5  class="jumbotron jumbotron-fluid"style={{ textAlign: 'justify', backgroundColor:'white', color:'black', margin:'5px', padding:'10px', borderRadius: '10px' }}>Volunteering is an act of selfless service where individuals contribute their time, skills, and resources towards making a positive impact in their communities or in society as a whole. It is a powerful tool for effecting change, promoting social justice, and building stronger, more connected communities</h5></div>
          <div class="col-sm-4"><img src="./images/don.jpg" alt="Website Logo" style={{height:'200px', weight:'200px',padding:'10px', borderRadius:'10px' }}></img></div>
          
        </div>
      </div>
      <div>
        <h6 style={{ ...myStylee, textAlign: 'justify' }}>
          Volunteering can take many forms, from assisting with disaster relief efforts, to tutoring students, to working with animals, to providing support for those in need. It is an opportunity to give back and make a difference, while also gaining valuable experience, building new relationships, and developing a deeper sense of empathy and compassion. By volunteering, individuals can learn about themselves and their communities, develop new skills, and work towards a common goal of creating a better world for everyone. In a world that is increasingly disconnected and divided, volunteering is more important than ever, as it allows us to come together and work towards a shared vision of a better future.
        </h6>
      </div>
    </>
    
    
    
      }

    </div>
    </>
  );
};

export default Home;
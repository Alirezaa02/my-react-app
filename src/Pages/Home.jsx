import React from "react";

export default function Home() {
    return (
      <main>
        <Volcanos />
     
      </main>
    );
  }
  
  // Volcanos content
  const Volcanos = () => (
    <section className="Volcanos">
      {/* content for the Volcanos */}
      <div className="Volcanos_content">
        <h1 className="Volcanos_title">Volcanos of the World </h1>
        <p className="Volcanos_subtitle">Welcome to <b>Volcano World</b> , your ultimate guide to the incredible natural phenomena shaping our planet. Volcanoes, majestic and powerful, dot the landscapes of Earth, offering both awe-inspiring beauty and scientific intrigue. From the fiery depths of the Earth's crust to the towering summits that pierce the sky, volcanoes embody the forces of creation and destruction.
        These geological wonders come in various shapes and sizes, ranging from tranquil shield volcanoes to explosive stratovolcanoes. They can be found on every continent and beneath the oceans, shaping the Earth's surface and influencing ecosystems in profound ways.
        <br/> Volcanoes play a crucial role in the Earth's geological processes, from the recycling of materials to the formation of new landmasses. They are also sources of immense natural resources, including fertile soils, geothermal energy, and valuable minerals.
        <br/> Volcanoes are not only significant geological features but also cultural icons, deeply embedded in the histories and mythologies of many societies around the world. They have inspired awe, fear, and reverence in human cultures for millennia, often being regarded as the domains of gods or spirits. Despite their inherent dangers, people have been drawn to volcanoes, living in their shadows and harnessing their resources for survival and prosperity. As our understanding of these enigmatic giants grows, so too does our appreciation for their role in shaping our planet and enriching our lives. Whether studying their inner workings, marveling at their beauty, or harnessing their power, the allure of volcanoes continues to captivate scientists, adventurers, and dreamers alike.
        </p>
      

        
        {/* <a href="/menu">Menu</a>
        <a href="/book">Book</a> */}
      </div>
      
     
        
    </section>
  );
  
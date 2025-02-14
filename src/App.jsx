import './App.css'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'

function App() {
  gsap.registerPlugin(useGSAP);

  function loaderbranco() {
    const tl = gsap.timeline()
    tl.fromTo(".loader", {
      scaleX: 0,
      transformOrigin: "50% 50%",
    }, {
      scaleX: 1,
    })
    //Seta da esquerda
    tl.fromTo(".seta-left", {
      opacity: 0,
      clipPath: "polygon(100% 100%, 100% 100%, 100% 0%, 100% 0%)",
    
    }, {
      opacity: 1,
      clipPath: "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
      delay: 0.1,
    },0)

    // Seta da direita
    tl.fromTo(".seta-rigth", {
      opacity: 0,
      clipPath: "polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)",
    }, {
      opacity: 1,
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      delay: 0.1,
      // yoyo: true,
      // repeat: 1,
      // yoyoEase: "power1.inOut",
    },0)

    tl.fromTo(".loader",{
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      ease: "power1.inOut"
    },{
      clipPath: 'polygon(50% 100%, 50% 100%, 50% 0%, 50% 0%)',
      transformOrigin: "50% 50%",
      ease: "power1.inOut"
    })

    // tl.repeat(1);
    // tl.yoyo(true);


  }

  function loaderFundo() {

    const tl = gsap.timeline({

    })

    tl.fromTo(".loader-fundo",{ 
      scaleX: 0, 
      transformOrigin: "50% 50%", 
    },{ scaleX: 1, 
    }, 0)
    //Seta da esquerda
    tl.fromTo(".seta-left-fundo", {
      opacity: 0,
      clipPath: "polygon(100% 100%, 100% 100%, 100% 0%, 100% 0%)",
    }, {
      opacity: 1,
      clipPath: "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
      delay: 0.1,
    }, 0)

    // Seta da direita
    tl.fromTo(".seta-rigth-fundo", {
      opacity: 0,
      clipPath: "polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)",
    }, {
      opacity: 1,
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      delay: 0.1,
    }, 0)

    // Volta

    tl.to("rect", {
      scaleX: 0.1,
      transformOrigin: "50% 50%",
      delay: 0.8,
      ease: "power1.inOut"
    }, 0)
    tl.to("#id-seta-rig-fundo", {
      x: -400,
      delay: 0.8,
      ease: "power1.inOut"
    }, 0)
    tl.to("#id-seta-left-fundo", {
      x: 400,
      delay: 0.8,
      ease: "power1.inOut"
    }, 0)

    tl.to(".loader-fundo",{
      scale: 13,
      ease: "power1.inOut",
      opacity: 0
    })




  }


  useGSAP(() => {
    loaderbranco()
    loaderFundo()


  })

  return (
    <section className='container'>
      <div className='loader'>
        <svg width="51" height="85" viewBox="0 0 51 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className='seta-left' d="M22 0H1H0L33 42.5L0.5 84.5H24L51 49.5V35L22 0Z" fill="#D9D9D9" />
        </svg>

        <svg width="870" height="15" viewBox="0 0 870 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="870" height="15" fill="#D9D9D9" />
        </svg>

        <svg width="51" height="85" viewBox="0 0 51 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className='seta-rigth' d="M29 0H50H51L18 42.5L50.5 84.5H27L0 49.5V35L29 0Z" fill="#D9D9D9" />
        </svg>

      </div>

      <div className='loader-fundo'>
          <svg width="51" height="85" viewBox="0 0 51 85" fill="none" xmlns="http://www.w3.org/2000/svg" id='id-seta-left-fundo'>
            <path className='seta-left-fundo' d="M22 0H1H0L33 42.5L0.5 84.5H24L51 49.5V35L22 0Z" fill="#00342E" />
          </svg>

          <svg width="870" height="15" viewBox="0 0 870 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="870" height="15" fill="#00342E" />
          </svg>

          <svg width="51" height="85" viewBox="0 0 51 85" fill="none" xmlns="http://www.w3.org/2000/svg" id='id-seta-rig-fundo'>
            <path className='seta-rigth-fundo' d="M29 0H50H51L18 42.5L50.5 84.5H27L0 49.5V35L29 0Z" fill="#00342E" />
          </svg>
        </div>









      {/* <svg width="350" height="250">
        <circle class="shape" />
        <circle class="shape" />
        <circle class="shape" />
        <circle class="shape" />
        <circle class="shape" />
      </svg> */}


    </section>
  )
}

export default App

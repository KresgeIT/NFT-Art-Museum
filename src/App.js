import logo from './logo.svg';
import './App.css';
import { Suspense, useEffect, useMemo, useState} from 'react'
import { Canvas, useLoader, useFrame, useThree  } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DoubleSide } from "three";
import dabls from './assets/olayemi.jpeg'
import art from './assets/dablsart.jpeg'
import floor from './assets/floor.jpeg'
import roof from './assets/roof2.jpeg'
import wall from './assets/textured.webp'
import ether from './assets/ether.png'
import sol from './assets/sol.png'
import bio from './assets/bio.png'
import arrow from './assets/arrow.png'
import exitImage from './assets/exit.png'
import * as THREE from 'three'
import React, {Component} from 'react';
import inMapping from './assets/InMapping.png'
import cross from './assets/exitLogo.png'
import ReactDOM from 'react-dom';
import sb1 from './assets/sb1.png'
import sb2 from './assets/sb2.png'
import ea1 from './assets/ea1.png'
import ea2 from './assets/ea2.png'
import ea3 from './assets/ea3.png'
const CameraController0 = (props) => {
  const [enter, setEnter] = useState(false);
  const [counter, setCounter] = useState(0);
  const { camera, gl } = useThree();
  useFrame((state) => {
    setCounter(counter+1)
    if(counter % 4 == 0){
    if(enter){
      if(camera.position.z < 15){
        setEnter(false);
        
      }
      else{
        if(counter % 4 == 0){
        console.log(camera.position.x)
        camera.position.z =  camera.position.z  - 1;
        if(camera.position.x < 0){
        camera.position.x = camera.position.x  + 1
        }
        }
      }
    }
    if(props.move){
    camera.position.z =  camera.position.z  - 1;
    if(camera.position.x < 7.5){
      camera.position.x = camera.position.x  + 1
    }
    }
    // console.log(camera.position.z )
    if(camera.position.z < 0){
      camera.position.x = -10;
      camera.position.z = 25;
      setEnter(true);
      props.parent(true);
     
    }
    }
  })

  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      
      controls.minDistance = 5;
      controls.maxDistance = 10;
      controls.maxPolarAngle = Math.PI/2; //up and down angle
      controls.minPolarAngle = Math.PI/3;
      camera.position.x = 30;
      controls.target.set( 0,0,10);
      // controls.minAzimuthAngle = 0;
      // controls.maxAzimuthAngle = Math.PI/2; //sidways angle

      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};
function Art(props){
  const [mint, setMint] = useState(false);
  const [other, setOther] = useState(0);
  const [delay, setDelay] = useState(5);
  const [artCoords, setArtCoords] = useState(0);
  const texture2 = useLoader(THREE.TextureLoader, props.img)
  const eth = useLoader(THREE.TextureLoader, ether)
  const solana = useLoader(THREE.TextureLoader, sol)
  
  useEffect(()=>{
    console.log("clicked");
    
},[mint])



return(
  <>
    {props.index == 2?
     <mesh onClick={e=>{setMint(true);props.parent(true)}} position={[12.4,artCoords,0]} rotation={[0, -Math.PI / 2, 0]}>
     <planeBufferGeometry attach="geometry" args={[6.6, 11.5]} />
     <meshStandardMaterial attach="material" map={texture2}  />
   </mesh>
   :
    <mesh onClick={e=>{setMint(true);props.parent(true)}} position={[12.4,artCoords,0]} rotation={[0, -Math.PI / 2, 0]}>
    <planeBufferGeometry attach="geometry" args={[10, 5]} />
    <meshStandardMaterial attach="material" map={texture2}  />
  </mesh>
  }

  {/* {mint ?
  <>
     <mesh onClick={e=>setMint(true)} position={[12.4,-2,7.5-other]} rotation={[0, -Math.PI / 2, 0]}>
     <planeBufferGeometry attach="geometry" args={[5, 4]} />
     <meshStandardMaterial attach="material" map={eth}  color="white"/>
   </mesh> 

    <mesh onClick={e=>setMint(true)} position={[12.4,-2,7.5+other]} rotation={[0, -Math.PI / 2, 0]}>
    <planeBufferGeometry attach="geometry" args={[5, 4]} />
    <meshStandardMaterial attach="material" map={solana}  color="white"/>
    </mesh> 
</> */}
  {/* : null} */}
  </>
)
}
function Room(props) {
 const [move, setMove] = useState(false);
 const [buffer, setBuffer] = useState(false);
  const texture = useLoader(THREE.TextureLoader, dabls)
  const texture2 = useLoader(THREE.TextureLoader, bio)
  const texture3 = useLoader(THREE.TextureLoader, floor)
  const texture4 = useLoader(THREE.TextureLoader, wall)
  const texture5 = useLoader(THREE.TextureLoader, roof)
  const texture6 = useLoader(THREE.TextureLoader, sb2)
  const texture7 = useLoader(THREE.TextureLoader, ea1)
  const texture8 = useLoader(THREE.TextureLoader, ea2)
  const texture9 = useLoader(THREE.TextureLoader, ea3)
  const exitT = useLoader(THREE.TextureLoader, exitImage)
  useEffect(()=>{
    if(buffer){
    setMove(false);
    props.parent(1)
    }
    
},[buffer])

  const increase = () =>{
    setBuffer(false);
    setMove(true);
   
  }
 
  return (
    <>
    <div id="biggest">
      <div  id="larrow">
        {/* <img src={arrow}/> */}
      </div>
      <div id="canvas">
      <Suspense fallback={null}>
      <Canvas style={{ height: "100vh", width: "100vw" }} >
      <ambientLight />
     
         <mesh receiveShadow castShadow position={[0,0,-7.5]} >
            <planeBufferGeometry attach="geometry" args={[25, 15]} />
            <meshBasicMaterial attach="material" map={texture4} side={DoubleSide}/>
         </mesh>
         <mesh receiveShadow castShadow position={[0,0,22.5]} >
            <planeBufferGeometry attach="geometry" args={[25, 15]} />
            <meshBasicMaterial attach="material" map={texture4} side={DoubleSide}/>
         </mesh>
        {/* frontdoor */}
        {!props.door?
         <mesh onClick={e=>increase()}receiveShadow castShadow position={[-7.8,-2.5,22.4]} >
            <planeBufferGeometry attach="geometry" args={[5, 10.6]} />
            <meshBasicMaterial attach="material" color="gray" side={DoubleSide}/>
         </mesh>
         : null}
         {/* backdoor */}
         {!props.door?
         <mesh onClick={e=>increase()}receiveShadow castShadow position={[7.8,-2.5,-7.4]} >
            <planeBufferGeometry attach="geometry" args={[5, 10.6]} />
            <meshBasicMaterial attach="material" color="light yellow" side={DoubleSide}/>
         </mesh>
         : null}
         {props.door?
         <mesh receiveShadow castShadow position={[7.8,-2.5,-7.4]} >
            <planeBufferGeometry attach="geometry" args={[5, 10.6]} />
            <meshBasicMaterial attach="material" map={exitT} side={DoubleSide}/>
         </mesh>
         : null}
          
         <mesh  position={[0,-7.5,7.5]} rotation={[Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[25, 30]} />
            <meshStandardMaterial attach="material"  map={texture3}  side={DoubleSide}/>
         </mesh>
        
         <mesh  position={[0,7.5,7.5]} rotation={[Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[25, 30]} />
            <meshStandardMaterial attach="material"  map={texture5}  side={DoubleSide}/>
         </mesh>
         

         <mesh  position={[12.5,0,7.5]} rotation={[0, Math.PI / 2, 0]}>
            <planeBufferGeometry attach="geometry" args={[30, 15]} />
            <meshStandardMaterial attach="material" map={texture4} side={DoubleSide}/>
         </mesh>
         <mesh  position={[-12.5,0,7.5]} rotation={[0, Math.PI / 2, 0]}>
            <planeBufferGeometry attach="geometry" args={[30, 15]} />
            <meshStandardMaterial attach="material" map={texture4} side={DoubleSide}/>
         </mesh>
          {props.index == 0 ?
          <>
         <mesh  position={[-5,3,-7.4]} rotation={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[10, 5]} />
            <meshStandardMaterial attach="material" map={texture}  />
         </mesh>

         <mesh  position={[12.4,0,15]} rotation={[0, -Math.PI / 2, 0]}>
    <planeBufferGeometry attach="geometry" args={[10, 5]} />
    <meshStandardMaterial attach="material" map={texture2}  />
  </mesh>
  </>
         : null}

{props.index == 1 ?
         
         <mesh  position={[-5,0,-7.4]} rotation={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[10, 5]} />
            <meshStandardMaterial attach="material" map={texture6}  />
         </mesh>

       
         : null}

{props.index == 2 ?
         <>
         <mesh  position={[-5,0,-7.4]} rotation={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[7.5, 8.5]} />
            <meshStandardMaterial attach="material" map={texture7}  />
         </mesh>
         <mesh  position={[12.4,0,15]} rotation={[0, -Math.PI / 2, 0]}>
    <planeBufferGeometry attach="geometry" args={[10, 5]} />
    <meshStandardMaterial attach="material" map={texture8}  />
  </mesh>
  <mesh  position={[-12.4,0,11]} rotation={[0, Math.PI / 2, 0]}>
    <planeBufferGeometry attach="geometry" args={[10, 5]} />
    <meshStandardMaterial attach="material" map={texture9}  />
  </mesh>
      </>
         : null}


       
         <Art img={props.img} parent={props.parent2} index={props.index}/>
        
        <CameraController0 room={props.index} move={move} parent={setBuffer}/>
         

    </Canvas>
  </Suspense>
  </div>
  </div>
  </>
  );
}

function App(){
  const [roomIndex, setRoomIndex] = useState(0);
  const [exit, setExit] = useState(false);
  const [mint, setMint] = useState(false);
  const sources = [art, sb1, inMapping, wall, ether]

  function increase(){
   
    if (roomIndex == sources.length -1){
      console.log("final");
      setExit(true)
    }
    else{
      setRoomIndex(roomIndex + 1);
    }
  }
  useEffect(()=>{
    console.log("clicked style");
},[roomIndex])

useEffect(()=>{
  console.log("art is minted"+mint);
},[mint])
  return(
    <div>
      {mint == true ? 
      <div id="mintScreen">
          <img src={cross} id="cross" onClick={e=>setMint(false)}/>
          <div id="firstRow">
          <div id="r11">
            <div id="r111">
            <img src={sources[roomIndex]} id="i111"/>
            </div>
            <div id="r112"></div>
            
          </div>
          <div id="r12">
           
           <div id="artistFace"> 
              <h1>Artist</h1>
              <h1>Emilee Arter</h1>
             
           </div>
          
            
          </div>
          <div id="r13">
       
            <br />
            <h1>In Mapping</h1>
            <t1>Vinyl and spray paint,</t1> 
            <br />
            <br />
              <br />
             <br /><t1>33 x 20</t1>
          </div>
          </div>
          
          <div id="secondRow">
            <div id="r21">
              <h1>Related Material</h1>
              <ul>
                  <li>More of Artist's Work</li>
                  <li>Commentary</li>
                  <li>Artist's Cause</li>
                  <li>Education on Art</li>
                </ul>
            </div>
            <div id="r22">
              <h1>Mint NFT</h1>
              <div id="solana">
                <h1>Solana</h1>
              </div>
              <div id="ethereum">
              <h1>Ethereum</h1>
              </div>
               
            </div>

          </div>
      </div>
      : null}
      <div>
      <Room parent={increase} img={sources[roomIndex]} door={exit} index={roomIndex} parent2={setMint}/>
      </div>
    </div>
  )
}



    


export default App;

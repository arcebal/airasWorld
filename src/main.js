import * as THREE from 'three';
import eddyImage from '../images/npc eddy.jpg';
import penguinImage from '../images/NPC penguin.jpg';
import pettyImage from '../images/npc petty.webp';
import loopyImage from '../images/welcomeloopy.jpg';
import airaPhoto from '../images/aira.jpeg';
import './style.css';

// Keep Aira's personal copy and replaceable photos together here.
const content = {
  letter: 'Dear Aira,\n\nI hope today brings you the kind of happiness you give to the people around you. You deserve gentle days, big laughs, brave dreams, and friends who remind you how loved you are.\n\nKeep being wonderfully you. Happy birthday!\n\nWith lots of love,\nYour little birthday world ♡',
  surprise: 'A little reminder to keep: you make ordinary days brighter just by being in them. ♡',
  wish: 'You deserve a day as lovely as you make life for everyone.',
  finale: 'May this new chapter bring you moments you never have to pretend to be happy in, people who care about you, dreams that slowly become real, and little reasons to smile every day. You deserve a world as beautiful as this one. ♡',
  memories: [{ src: '', caption: 'A favorite little moment' }, { src: '', caption: 'A day worth keeping' }, { src: '', caption: 'More lovely memories to come' }],
};
const app = document.querySelector('#app');
app.innerHTML = `
  <main class="page"><div class="sky-glow"></div>
    <section class="welcome-screen" id="welcome" aria-labelledby="welcome-title"><div class="welcome-card"><div class="welcome-video-wrap"><video id="welcome-video" src="/videos/aira-welcome.mp4" autoplay muted loop playsinline aria-label="Loopy celebrating Aira's birthday"></video><button class="sound-toggle" id="sound-toggle" type="button" aria-label="Turn sound on" title="Turn sound on" aria-pressed="false"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M11 5 6 9H3v6h3l5 4V5z"/><path class="sound-waves" d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/><path class="sound-mute" d="m16 9 5 6m0-6-5 6"/></svg></button></div><p class="eyebrow">A little surprise for you</p><h2 id="welcome-title">Aira's birthday world</h2><p>A little world was made just for you, filled with love and tiny friends ready to celebrate.</p><button class="wish-button" id="enter">Enter Aira's world ♡</button></div></section>
    <header class="topbar"><a class="brand" href="#">♡ <span>Aira's little world</span></a><span class="today">A day made for you <span>✦</span></span></header>
    <section class="hero"><p class="eyebrow">✦ &nbsp; A little world, just for you &nbsp; ✦</p><h1>Happy Birthday,<br><em>Aira!</em></h1>
      <p class="intro">A tiny floating garden filled with love, wishes, and little friends who can't wait to celebrate you.</p>
      <div class="scene-wrap"><div class="scene" aria-label="A dreamy pink floating birthday island in 3D"><canvas id="world" tabindex="0" aria-label="Interactive birthday garden. Drag horizontally to rotate the island 360 degrees. Click a visitor or their sign to interact."></canvas>
        
        <button class="cake-prompt" id="cake-prompt" type="button" hidden>Tap the cake to blow out the candles ✦</button><div class="scene-label">✧ &nbsp; Aira's birthday garden &nbsp; ✧</div><span class="scene-note">drag to rotate · tap friends or cake</span>
      </div></div>
      <nav class="actions sr-only" aria-label="Birthday activities"><button class="wish-button" id="wish">Make a wish</button><button class="soft-button" data-panel="letter">Open your letter</button><button class="soft-button" data-panel="gift">Open the mystery gift</button><button class="soft-button" data-panel="memories">Memory garden</button></nav>
    </section>
    <footer>Made with <span>♡</span> for Aira</footer>
    <dialog id="modal" aria-labelledby="modal-title"><button class="close" aria-label="Close">×</button><p class="eyebrow">A little birthday magic</p><h2 id="modal-title"></h2><div id="modal-content"></div></dialog>
  </main>`;

const scene = new THREE.Scene(); scene.background = new THREE.Color('#fff5f8'); scene.fog = new THREE.Fog('#fff5f8', 13, 27);
const camera = new THREE.PerspectiveCamera(35, 1, .1, 100); camera.position.set(0, 4.8, 10.8);const homeCameraPosition=camera.position.clone(),cameraLookTarget=new THREE.Vector3(0,-.45,0),homeCameraLookTarget=cameraLookTarget.clone();camera.lookAt(cameraLookTarget);
let renderer;
try { renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#world'), antialias: true, alpha: true }); }
catch { document.querySelector('.scene').classList.add('no-webgl'); document.querySelector('.scene').insertAdjacentHTML('beforeend', '<p class="fallback">This little garden needs WebGL. Your birthday surprises are still here below ♡</p>'); }
if(renderer){renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.22;}
const hemi = new THREE.HemisphereLight('#fff9fc', '#d89db3', 2.3); scene.add(hemi);
const sun = new THREE.DirectionalLight('#fff1dc', 3.4); sun.position.set(-4, 9, 6); sun.castShadow = true; scene.add(sun);
const fill = new THREE.PointLight('#ffadd0', 20, 18); fill.position.set(5, 3, 3); scene.add(fill);
const mat = (color) => new THREE.MeshStandardMaterial({ color, roughness: .8 });
const pink=mat('#f1a6c3'), deepPink=mat('#df83aa'), grass=mat('#9dc7a4'), grassLight=mat('#c2d7a1'), cream=mat('#fff3dc'), white=mat('#fffafd'), yellow=mat('#f6cd79');
const island = new THREE.Group(); scene.add(island);
function blob(geometry, material, x,y,z,sx=1,sy=1,sz=1,parent=island) { const m=new THREE.Mesh(geometry,material); m.position.set(x,y,z); m.scale.set(sx,sy,sz); m.castShadow=true; m.receiveShadow=true; parent.add(m); return m; }
blob(new THREE.CylinderGeometry(3.7,3.1,.48,9),pink,0,-.24,0,1,1,.83); blob(new THREE.CylinderGeometry(3.48,3.03,.2,9),grass,0,-.01,0,1,1,.84); blob(new THREE.CylinderGeometry(3.36,3.28,.12,9),grassLight,0,.12,0,1,1,.84); const islandUnderside=blob(new THREE.ConeGeometry(3.18,2.5,9),deepPink,0,-1.48,0,1,1,.82); islandUnderside.rotation.z=Math.PI;
for(const [x,z,s] of [[-2.2,-1.2,.85],[2.1,-1.4,.72],[-1.5,1.6,.68],[1.7,1.4,.8]]){const shard=blob(new THREE.ConeGeometry(.82,1.6,5),pink,x,-1.35,z,s,1,s);shard.rotation.z=Math.PI;}
const cake = new THREE.Group(); cake.position.set(0,.42,-.3); island.add(cake);
blob(new THREE.CylinderGeometry(.52,.58,.38,12),white,0,0,0,1,1,1,cake); blob(new THREE.CylinderGeometry(.56,.56,.12,12),pink,0,.22,0,1,1,1,cake);
const flames=[]; for(let i=-1;i<=1;i++){blob(new THREE.CylinderGeometry(.025,.025,.22,8),yellow,i*.18,.4,0,1,1,1,cake); flames.push(blob(new THREE.SphereGeometry(.065,10,8),mat('#ffad78'),i*.18,.53,0,1,1,1,cake));}
function flower(x,z,color) { const g=new THREE.Group(); g.position.set(x,.24,z); island.add(g); const petal=mat(color); for(let i=0;i<5;i++){const a=i*Math.PI*2/5;blob(new THREE.SphereGeometry(.095,8,6),petal,Math.cos(a)*.13,.09,Math.sin(a)*.13,.85,1.2,.85,g);} blob(new THREE.SphereGeometry(.08,8,6),yellow,0,.16,0,1,1,1,g); }
for(const [x,z,c] of [[-2.5,-1,'#fff4f7'],[2.5,-1.8,'#f9cfdb'],[-2.8,.9,'#f7d89a'],[2.3,1.3,'#fff4f7'],[-1.6,2.4,'#f7d89a'],[1.6,2.2,'#f9cfdb']]) flower(x,z,c);
for(const [x,z] of [[-2.4,-.1],[2.35,.2],[-1.8,1.6]]){blob(new THREE.CylinderGeometry(.07,.1,.52,6),mat('#ae846a'),x,.42,z);blob(new THREE.IcosahedronGeometry(.5,0),mat('#a7c99e'),x,.83,z,1,1.2,1);blob(new THREE.IcosahedronGeometry(.34,0),grassLight,x,.97,z);}
const tower=new THREE.Group();tower.position.set(-.55,.18,-2.25);island.add(tower);blob(new THREE.BoxGeometry(.82,1.18,.72),cream,0,.59,0,1,1,1,tower);blob(new THREE.BoxGeometry(.62,.58,.62),pink,0,1.43,-.03,1,1,1,tower);blob(new THREE.BoxGeometry(.9,.1,.8),grassLight,0,1.77,-.03,1,1,1,tower);for(const x of [-.22,.22]){blob(new THREE.BoxGeometry(.15,.2,.035),white,x,.72,.37,1,1,1,tower);blob(new THREE.BoxGeometry(.15,.2,.035),white,x,1.38,.33,1,1,1,tower);}
const house=new THREE.Group();house.position.set(.65,.18,-2);island.add(house);blob(new THREE.BoxGeometry(.8,.68,.68),cream,0,.36,0,1,1,1,house);const roof=blob(new THREE.ConeGeometry(.64,.6,4),pink,0,.98,0,1,1,1,house);roof.rotation.y=Math.PI/4;blob(new THREE.BoxGeometry(.2,.34,.04),deepPink,0,.18,.36,1,1,1,house);blob(new THREE.BoxGeometry(.16,.16,.04),white,-.22,.44,.36,1,1,1,house);blob(new THREE.BoxGeometry(.16,.16,.04),white,.22,.44,.36,1,1,1,house);
const clouds=[];for(const [x,y,z] of [[-5,2.8,-1],[5.2,3.5,-2],[0,4.1,-4]]){const cloud=new THREE.Group();cloud.position.set(x,y,z);scene.add(cloud);for(const [cx,cy,s] of [[-.35,0,.34],[0,.12,.45],[.4,0,.3]])blob(new THREE.SphereGeometry(s,10,8),white,cx,cy,0,1,.72,1,cloud);cloud.userData={phase:Math.random()*6,baseY:y,baseX:x};clouds.push(cloud);}
for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2,r=4.2+Math.random()*1.5,y=Math.random()*3.6-.2,s=blob(new THREE.OctahedronGeometry(.1),i%2?yellow:mat('#f4b5ce'),Math.cos(a)*r,y,Math.sin(a)*r,1,1,1,scene);s.userData={phase:Math.random()*6,baseY:y};}
const npcs=[];
const cakeMoment={phase:'idle',started:0,fromPositions:[],cameraFrom:null,lookFrom:null,cameraTo:null,lookTo:null};
const npcTypes=['eddy','bunny','penguin','petty','loopy'];
const npcColors=['#91c65e','#ef9fbd','#fff0dc','#c98c5c','#7154ad'];
const npcActions=[['wish','MAKE A WISH'],['letter','LETTER'],['flower','FLOWER'],['memories','MEMORIES'],['aira','AIRA']];
const npcHomes=[[-2.55,1.55],[-1.65,2.15],[1.65,2.15],[2.55,1.55],[0,-2.5]];
const npcStartAngles=[2.48,2.11,1.03,.67,4.71];
const npcImages=[{src:eddyImage,background:'white'},null,{src:penguinImage,background:'white'},{src:pettyImage,background:'green'},{src:loopyImage,background:'checker'}];
function addNpcSprite(parent,src,background,facePhoto=false){
 const image=new Image();
 image.onload=()=>{
  const w=image.naturalWidth,h=image.naturalHeight,canvas=document.createElement('canvas'),ctx=canvas.getContext('2d',{willReadFrequently:true});canvas.width=w;canvas.height=h;ctx.drawImage(image,0,0);
  const pixels=ctx.getImageData(0,0,w,h),data=pixels.data,seen=new Uint8Array(w*h),queue=new Int32Array(w*h);let head=0,tail=0;
  const isBackground=i=>{const r=data[i*4],g=data[i*4+1],b=data[i*4+2],hi=Math.max(r,g,b),lo=Math.min(r,g,b);return background==='green'?g>r*1.15&&g>b*1.12&&g>55:hi-lo<32&&(background==='checker'?lo>95:lo>205);};
  const add=i=>{if(i>=0&&i<w*h&&!seen[i]&&isBackground(i)){seen[i]=1;queue[tail++]=i;}};
  for(let x=0;x<w;x++){add(x);add((h-1)*w+x);}for(let y=1;y<h-1;y++){add(y*w);add(y*w+w-1);}
  while(head<tail){const i=queue[head++],x=i%w;if(x)add(i-1);if(x<w-1)add(i+1);if(i>=w)add(i-w);if(i<(h-1)*w)add(i+w);}
  let left=w,top=h,right=0,bottom=0;for(let i=0;i<seen.length;i++){if(seen[i])data[i*4+3]=0;if(data[i*4+3]>8){const x=i%w,y=(i-x)/w;left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}}
  ctx.putImageData(pixels,0,0);const cutout=document.createElement('canvas');cutout.width=right-left+1;cutout.height=bottom-top+1;cutout.getContext('2d').drawImage(canvas,left,top,cutout.width,cutout.height,0,0,cutout.width,cutout.height);
  const texture=new THREE.CanvasTexture(cutout);texture.colorSpace=THREE.SRGBColorSpace;
  if(facePhoto){const photo=new Image();photo.onload=()=>{const ctx=cutout.getContext('2d'),cx=cutout.width*.49,cy=cutout.height*.41,r=cutout.width*.23,side=Math.min(photo.naturalWidth*.5,photo.naturalHeight*.42),sx=0,sy=photo.naturalHeight*.17;ctx.save();ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.clip();ctx.drawImage(photo,sx,sy,side,side,cx-r,cy-r,r*2,r*2);ctx.restore();ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='#fff5f8';ctx.lineWidth=8;ctx.stroke();texture.needsUpdate=true;};photo.src=airaPhoto;}
  const height=1.22,mesh=new THREE.Mesh(new THREE.PlaneGeometry(height*cutout.width/cutout.height,height),new THREE.MeshBasicMaterial({map:texture,transparent:true,alphaTest:.04,side:THREE.DoubleSide,depthWrite:false}));mesh.position.y=height/2;mesh.userData.npcSprite=true;parent.add(mesh);
 };
 image.onerror=()=>console.warn('Unable to load birthday NPC image:',src);image.src=src;
}
function addActionCard(parent,label,offset,cardY){
 const canvas=document.createElement('canvas');canvas.width=512;canvas.height=288;
 const ctx=canvas.getContext('2d');ctx.fillStyle='#fffafd';ctx.strokeStyle='#e6a0bb';ctx.lineWidth=8;ctx.lineJoin='round';ctx.shadowColor='#80546835';ctx.shadowBlur=12;ctx.shadowOffsetY=5;
 ctx.beginPath();ctx.moveTo(155,218);ctx.bezierCurveTo(104,220,82,190,100,163);ctx.bezierCurveTo(64,143,79,103,119,96);ctx.bezierCurveTo(118,53,168,34,206,62);ctx.bezierCurveTo(237,15,302,25,321,70);ctx.bezierCurveTo(363,45,409,67,414,105);ctx.bezierCurveTo(466,105,483,153,452,180);ctx.bezierCurveTo(445,213,408,226,377,213);ctx.bezierCurveTo(347,232,304,225,284,210);ctx.bezierCurveTo(243,229,198,225,178,211);ctx.closePath();ctx.fill();ctx.stroke();
 ctx.shadowBlur=0;ctx.shadowOffsetY=0;for(const [x,y,r] of [[185,235,15],[164,259,9]]){ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();ctx.stroke();}
 ctx.fillStyle='#79566b';ctx.font='bold 40px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(label,256,142,360);
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
 const card=blob(new THREE.PlaneGeometry(1.12,.63),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide,transparent:true}),offset,cardY,.5,1,1,1,parent);
 card.userData.actionCard=true;const hitArea=new THREE.Mesh(card.geometry,new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false,side:THREE.DoubleSide}));hitArea.scale.setScalar(2.4);hitArea.position.z=.01;card.add(hitArea);return card;
}
for(let i=0;i<npcTypes.length;i++){
 const type=npcTypes[i],g=new THREE.Group(),color=mat(npcColors[i]);island.add(g);
 const home=npcHomes[i];g.position.set(home[0],.25,home[1]);
 if(npcImages[i])addNpcSprite(g,npcImages[i].src,npcImages[i].background,type==='loopy');
 else{
  blob(new THREE.SphereGeometry(.25,16,12),color,0,.34,0,1,1.12,.92,g);blob(new THREE.SphereGeometry(.26,16,12),color,0,.7,0,1,1,.93,g);
  for(const x of [-.09,.09]){blob(new THREE.SphereGeometry(.095,12,10),white,x,.91,.1,1,1,1,g);blob(new THREE.SphereGeometry(.034,10,8),mat('#49383d'),x,.93,.19,1,1,1,g);}
  for(const side of [-1,1]){const ear=blob(new THREE.SphereGeometry(.075,12,10),color,side*.13,1.04,0,.72,2.3,.7,g);ear.rotation.z=side*.2;blob(new THREE.SphereGeometry(.035,10,8),mat('#f7c0cf'),side*.13,1.04,.05,.65,1.8,.65,g);}
  for(const side of [-1,1]){const arm=blob(new THREE.SphereGeometry(.07,10,8),color,side*.28,.48,.015,.75,1.8,.8,g);arm.rotation.z=-side*.28;}
 }
 const action=npcActions[i],inner=Math.abs(home[0])<2,cardOffset=inner?(home[0]===0?.55:Math.sign(home[0])*.42):home[0]<0?.55:-.55,cardY=1.22+(i%2)*.22;
 if(action)addActionCard(g,action[1],cardOffset,cardY);
 g.userData={phase:npcStartAngles[i],type,action:action?.[0],home};npcs.push(g);
}
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
let islandRotation=0,worldStartedAt=null;
function resize(){if(!renderer)return;const box=document.querySelector('.scene').getBoundingClientRect();renderer.setSize(box.width,box.height,false);camera.aspect=box.width/box.height;camera.updateProjectionMatrix();renderer.setPixelRatio(Math.min(devicePixelRatio,2));}
if(renderer){new ResizeObserver(resize).observe(document.querySelector('.scene'));resize();function animate(){requestAnimationFrame(animate);const now=performance.now(),t=reducedMotion||worldStartedAt===null?0:(now-worldStartedAt)/1000,progress=cakeMoment.phase==='gathering'?Math.min(1,(now-cakeMoment.started)/2400):cakeMoment.phase==='idle'?0:1,ease=progress*progress*(3-2*progress);island.position.y=Math.sin(t*.6)*.08;island.rotation.y=islandRotation+Math.sin(t*.19)*.025;if(cakeMoment.phase!=='idle'){cake.position.y=THREE.MathUtils.lerp(cake.userData.startY,2.05,ease);camera.position.lerpVectors(cakeMoment.cameraFrom,cakeMoment.cameraTo,ease);cameraLookTarget.lerpVectors(cakeMoment.lookFrom,cakeMoment.lookTo,ease);if(progress===1&&cakeMoment.phase==='gathering'){cakeMoment.phase='ready';document.querySelector('#cake-prompt').hidden=false;}}npcs.forEach((n,i)=>{const {phase,action}=n.userData;if(cakeMoment.phase==='idle'){const w=t*(action?.12:.18)+phase;n.position.set(Math.cos(w)*(action?3:2.65),.25+Math.abs(Math.sin(t*2+phase))*.09,Math.sin(w)*(action?2.25:2.05));}else{const a=i/npcs.length*Math.PI*2;n.position.lerpVectors(cakeMoment.fromPositions[i],new THREE.Vector3(Math.cos(a)*1.02,.58,-.3+Math.sin(a)*.88),ease);}n.rotation.y=0;n.rotation.z=Math.sin(t*2+phase)*.06;const card=n.children.find(child=>child.userData.actionCard);if(card){card.scale.setScalar(1-.58*ease);card.lookAt(camera.position);}n.children.find(child=>child.userData.npcSprite)?.lookAt(camera.position);});scene.children.filter(o=>o.userData.phase!==undefined).forEach(s=>{s.rotation.y=t*.45;s.position.y=s.userData.baseY+Math.sin(t*1.4+s.userData.phase)*.08;});clouds.forEach(c=>{c.position.y=c.userData.baseY+Math.sin(t*.45+c.userData.phase)*.14;c.position.x=c.userData.baseX+Math.sin(t*.12+c.userData.phase)*.3;});camera.lookAt(cameraLookTarget);renderer.render(scene,camera);}animate();}
document.querySelector('#sound-toggle').addEventListener('click',e=>{const video=document.querySelector('#welcome-video');video.muted=!video.muted;const label=video.muted?'Turn sound on':'Mute sound';e.currentTarget.setAttribute('aria-label',label);e.currentTarget.title=label;e.currentTarget.setAttribute('aria-pressed',String(!video.muted));});
document.querySelector('#enter').addEventListener('click',()=>{document.querySelector('#welcome-video').pause();worldStartedAt??=performance.now();document.querySelector('#welcome').classList.add('dismissed');});

const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),canvas=document.querySelector('#world');let drag;
if(renderer){
 canvas.style.cursor='grab';
 canvas.addEventListener('pointerdown',e=>{const r=canvas.getBoundingClientRect();drag={id:e.pointerId,x:e.clientX,y:e.clientY,rotation:islandRotation,width:r.width,moved:false};canvas.setPointerCapture(e.pointerId);canvas.style.cursor='grabbing';});
 canvas.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)>5||Math.abs(dy)>5)drag.moved=true;islandRotation=drag.rotation+dx/drag.width*Math.PI*2;island.rotation.y=islandRotation;});
 const finishDrag=e=>{if(!drag||drag.id!==e.pointerId)return;const shouldClick=!drag.moved&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)<6;drag=null;canvas.style.cursor='grab';if(!shouldClick||cakeMoment.phase==='done')return;const r=canvas.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObject(island,true);if(!hits.length)return;const hit=hits[0].object;let o=hit;while(o&&o.parent!==island)o=o.parent;const npc=npcs.find(n=>o===n);if(o===cake&&cakeMoment.phase==='ready'){blowCandles();return;}if(npc?.userData.type==='penguin')openPenguinFlower();else if(npc?.userData.type==='loopy')openAiraPortrait();else if(npc?.userData.action){const action=npc.userData.action;document.querySelector(action==='wish'?'#wish':'[data-panel="'+action+'"]').click();}else if(o===cake&&cakeMoment.phase==='idle')startCakeMoment();};
 canvas.addEventListener('pointerup',finishDrag);canvas.addEventListener('pointercancel',e=>{if(drag?.id===e.pointerId){drag=null;canvas.style.cursor='grab';}});
}
const modal=document.querySelector('#modal');function openPanel(title,html){const heading=document.querySelector('#modal-title');heading.textContent=title;heading.hidden=!title;if(title)modal.setAttribute('aria-labelledby','modal-title');else{modal.removeAttribute('aria-labelledby');modal.setAttribute('aria-label','A little birthday magic');}document.querySelector('#modal-content').innerHTML=html;modal.showModal();}
function openPenguinFlower(){openPanel('A flower for you ♡',`<div class="flower-card-scene"><iframe src="/flower/flower.html" title="A CSS animated bouquet for Aira"></iframe><span class="flower-butterfly butterfly-one" aria-hidden="true">🦋</span><span class="flower-butterfly butterfly-two" aria-hidden="true">🦋</span><span class="flower-butterfly butterfly-three" aria-hidden="true">🦋</span></div>`);}
function openAiraPortrait(){const letter=content.letter.split('\n\nWith lots of love,')[0].replace('Dear Aira,','Dear baby,');openPanel('',`<img class="aira-portrait-card" src="${airaPhoto}" alt="Aira"><div class="aira-handwritten-letter">${letter.replaceAll('\n\n','</p><p>').replace(/^/,'<p>').replace(/$/,'</p>')}<p class="aira-signature">-JC</p></div>`);}
function startCakeMoment(){if(cakeMoment.phase!=='idle')return;cakeMoment.phase='gathering';cakeMoment.started=performance.now();cakeMoment.fromPositions=npcs.map(n=>n.position.clone());cake.userData.startY=cake.position.y;cakeMoment.cameraFrom=camera.position.clone();cakeMoment.lookFrom=cameraLookTarget.clone();const target=cake.getWorldPosition(new THREE.Vector3());cakeMoment.lookTo=target.clone().add(new THREE.Vector3(0,1.8,0));cakeMoment.cameraTo=target.clone().add(new THREE.Vector3(0,3.5,5.2));}
function blowCandles(){if(cakeMoment.phase!=='ready')return;cakeMoment.phase='done';document.querySelector('#cake-prompt').hidden=true;flames.forEach(f=>f.visible=false);setTimeout(celebrate,700);}
document.querySelector('#cake-prompt').addEventListener('click',blowCandles);
document.querySelector('.close').addEventListener('click',()=>modal.close());modal.addEventListener('click',e=>{if(e.target===modal)modal.close();});
document.querySelectorAll('[data-panel]').forEach(button=>button.addEventListener('click',()=>{const panel=button.dataset.panel;if(panel==='letter')openPanel('A letter for you',`<p class="letter">${content.letter.replaceAll('\n','<br>')}</p>`);if(panel==='gift')openPanel('A little surprise',`<div class="gift-sparkle">🎁 ✨</div><p>${content.surprise}</p>`);if(panel==='flower')openPenguinFlower();if(panel==='aira')openAiraPortrait();if(panel==='memories')openPanel('Memory garden',`<div class="memories">${content.memories.map(m=>`<figure><div class="memory-photo">${m.src?`<img src="${m.src}" alt="${m.caption}">`:'♡'}</div><figcaption>${m.caption}</figcaption></figure>`).join('')}</div>`);}));
document.querySelector('#wish').addEventListener('click',()=>openPanel('A birthday wish for you',`<div class="gift-sparkle">✿</div><p>${content.wish}</p><p class="signoff">With so much love, today and always ♡</p>`));
function resetCakeMoment(){cakeMoment.phase='idle';cakeMoment.started=0;cake.position.y=.42;camera.position.copy(homeCameraPosition);cameraLookTarget.copy(homeCameraLookTarget);worldStartedAt=performance.now();document.querySelector('#cake-prompt').hidden=true;flames.forEach(f=>f.visible=true);modal.close();}
function celebrate(){flames.forEach(f=>f.visible=false);openPanel('Happy Birthday, Aira! ♡',`<p>${content.finale}</p><button class="wish-button replay">Press for surprise!</button>`);document.querySelector('.replay').addEventListener('click',()=>{openPanel('A little surprise for you ♡',`<video class="surprise-video" src="/videos/Birthday_greeting_for_Aira_ac9ad069.mp4" autoplay controls playsinline aria-label="Birthday greeting for Aira"></video>`);document.querySelector('.surprise-video').addEventListener('ended',resetCakeMoment,{once:true});});if(!reducedMotion)for(let i=0;i<50;i++){const p=blob(new THREE.SphereGeometry(.045,6,5),mat(['#f1a6c3','#f6cd79','#d9c2f0','#fffafd'][i%4]),(Math.random()-.5)*1.2,1+Math.random(),-.3+(Math.random()-.5),1,1,1,scene);const v=new THREE.Vector3((Math.random()-.5)*.1,Math.random()*.1+.04,(Math.random()-.5)*.1);let n=0;const drift=()=>{p.position.add(v);v.y-=.003;if(++n<90)requestAnimationFrame(drift);else scene.remove(p);};requestAnimationFrame(drift);}}
window.addEventListener('resize',resize);



















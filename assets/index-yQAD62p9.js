var H=Object.defineProperty;var S=(n,t,e)=>t in n?H(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var d=(n,t,e)=>(S(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const h of i)if(h.type==="childList")for(const a of h.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const h={};return i.integrity&&(h.integrity=i.integrity),i.referrerPolicy&&(h.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?h.credentials="include":i.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(i){if(i.ep)return;i.ep=!0;const h=e(i);fetch(i.href,h)}})();const I=(n,t,e)=>{const s=document.getElementById(n);return s.width=t,s.height=e,s.getContext("2d")},L="/assets/bg-wyPSULpm.jpg";class O{constructor(t){this.canvasCtx=t,this.image=new Image,this.image.src=L,this.top=0}update(){this.top+=1,this.top>=this.canvasCtx.canvas.height&&(this.top=0)}render(){const t=this.canvasCtx.canvas;this.canvasCtx.drawImage(this.image,0,-t.height+this.top,t.width,t.height),this.canvasCtx.drawImage(this.image,0,this.top,t.width,t.height)}}class o{constructor(t,e="",s=0,i=0,h=0,a=0){this.canvasCtx=t,this.image=new Image,this.image.src=e,this.width=s,this.height=i,this.x=h,this.y=a,this.isVisible()}isVisible(t=!0){this.visible=t}draw(){this.visible&&this.canvasCtx.drawImage(this.image,this.x,this.y,this.width,this.height)}isCollideWith(t,e=0,s=0){if(!(t&&t instanceof o&&t.visible&&this.visible))return!1;const i=this.x,h=this.x+this.width,a=t.x+e,l=t.x+t.width-e,w=this.y,x=this.y+this.height,C=t.y+s,b=t.y+t.height-s,P=!(h<a||i>l),E=!(x<C||w>b);return P&&E}isOutTheCanvas(){const t=this.canvasCtx.canvas,e=this.x,s=this.x+this.width,i=this.y,h=this.y+this.height,a=e>t.width||s<0,l=i<-this.height||h>t.height+this.height;return a||l}}const B="/assets/enemy-DTQQdH0h.png",r={character:{initialWidth:80,initialHeight:80,initialKeydownMoveSpeed:10},bullet:{initialWidth:10,initialHeight:20,initialSpeed:10,initialGenerateInterval:60},enemy:{initialWidth:60,initialHeight:60,initialSpeed:2,initialGenerateInterval:15}},u=r.enemy;class T extends o{constructor(t){super(t,B,u.initialWidth,u.initialHeight)}initPosition(){const t=this.canvasCtx.canvas;this.x=(t.width-this.width)*Math.random(),this.y=-this.height}initSpeed(){this.speed=u.initialSpeed}update(){this.y+=this.speed}}const R="/assets/bullet-C43SLmkN.png",f=r.bullet;class M extends o{constructor(t){super(t,R,f.initialWidth,f.initialHeight),this.initSpeed()}initPosition(t){this.x=t.x+t.width/2-this.width/2,this.y=t.y-this.height}initSpeed(){this.speed=f.initialSpeed}update(){this.y-=this.speed}}class D{constructor(t){this.canvasCtx=t,this.bulletPool=[],this.enemyPool=[],this.awardCharacterPool=[]}getBullet(t){const e=this.bulletPool.length?this.bulletPool.shift():new M(this.canvasCtx);return e.isVisible(!0),e.initPosition(t),e.initSpeed(),e}recoverBullet(t){this.bulletPool.push(t)}getEnemy(){const t=this.enemyPool.length?this.enemyPool.shift():new T(this.canvasCtx);return t.isVisible(!0),t.initPosition(),t.initSpeed(),t}recoverEnemy(t){this.enemyPool.push(t)}}const W="/assets/Common-Wra8GGYh.png",m=new Image;m.src=W;class Y{constructor(t){this.canvasCtx=t}renderGameScore(t){this.canvasCtx.fillStyle="#ffffff",this.canvasCtx.font="20px Arial",this.canvasCtx.fillText(t,10,30)}renderGameOver(t){const e=this.canvasCtx,s=e.canvas.width,i=e.canvas.height;e.drawImage(m,0,0,119,108,s/2-150,i/2-100,300,300),e.fillStyle="#ffffff",e.font="20px Arial",e.fillText("游戏结束",s/2-40,i/2-100+50),e.fillText(`得分: ${t}`,s/2-40,i/2-100+130),e.drawImage(m,120,6,39,24,s/2-60,i/2-100+180,120,40),e.fillText("重新开始",s/2-40,i/2-100+205),this.btnArea={startX:s/2-40,startY:i/2-100+180,endX:s/2+50,endY:i/2-100+255}}}const A="/assets/hero-B-_iZgBD.png",v=r.character;class G extends o{constructor(t){super(t,A,v.initialWidth,v.initialHeight),this.keydownMoveSpeed=v.initialKeydownMoveSpeed,this.initPosition(),this.initEvent()}initPosition(){const t=this.canvasCtx.canvas;this.x=t.width/2-this.width/2,this.y=t.height-this.height-30}initEvent(){const t=this.canvasCtx.canvas;t.addEventListener("mousedown",e=>{e.preventDefault();const s=e.x,i=e.y;this.isTouchedOnCharacter(s,i)&&(this.touched=!0)}),t.addEventListener("mousemove",e=>{e.preventDefault();const s=e.x,i=e.y;this.touched&&this.touchMoveCharacter(s,i)}),t.addEventListener("mouseup",e=>{e.preventDefault(),this.touched=!1}),document.addEventListener("keydown",e=>{const{code:s}=e;this.keydownMoveCharacter(s)}),t.addEventListener("touchstart",e=>{e.preventDefault();const s=e.touches[0].clientX,i=e.touches[0].clientY;this.isTouchedOnCharacter(s,i)&&(this.touched=!0)}),t.addEventListener("touchmove",e=>{e.preventDefault();const s=e.touches[0].clientX,i=e.touches[0].clientY;this.touched&&this.touchMoveCharacter(s,i)}),t.addEventListener("touchend",e=>{e.preventDefault(),this.touched=!1})}isTouchedOnCharacter(t,e){return t>this.x&&t<this.x+this.width&&e>this.y&&e<this.y+this.height}touchMoveCharacter(t,e){const s=this.canvasCtx.canvas;t<this.width/2?this.x=0:t>s.width-this.width/2?this.x=s.width-this.width:this.x=t-this.width/2,e<this.height/2?this.y=0:e>s.height-this.height/2?this.y=s.height-this.height:this.y=e-this.height/2}keydownMoveCharacter(t){const e=this.canvasCtx.canvas;t==="ArrowLeft"?this.x>0&&(this.x-=this.keydownMoveSpeed):t==="ArrowUp"?this.y>0&&(this.y-=this.keydownMoveSpeed):t==="ArrowRight"?this.x<e.width-this.width&&(this.x+=this.keydownMoveSpeed):t==="ArrowDown"&&this.y<e.height-this.height&&(this.y+=this.keydownMoveSpeed)}}const X=r.bullet,k=r.enemy;class V{constructor(t){d(this,"mobileRestartHandler",t=>{t.preventDefault();const e=t.touches[0].clientX,s=t.touches[0].clientY,i=this.gameInfo.btnArea;e>=i.startX&&e<=i.endX&&s>=i.startY&&s<=i.endY&&this.reset()});d(this,"pcRestartHandler",t=>{t.preventDefault();const e=t.x,s=t.y,i=this.gameInfo.btnArea;e>=i.startX&&e<=i.endX&&s>=i.startY&&s<=i.endY&&this.reset()});this.canvasCtx=t,this.pool=new D(this.canvasCtx),this.gameInfo=new Y(this.canvasCtx),this.reset()}reset(){this.frame=0,this.character=new G(this.canvasCtx),this.bullets=[],this.enemys=[],this.score=0,this.gameOver=!1,this.isBindHandler&&this.removeRestartHandler()}update(){this.frame++,!this.gameOver&&(this.enemys.forEach(t=>{t.update(),t.isOutTheCanvas()&&this.pool.recoverEnemy(this.enemys.shift())}),this.bullets.forEach(t=>{t.update(),t.isOutTheCanvas()&&this.pool.recoverBullet(this.bullets.shift())}),this.frame%k.initialGenerateInterval===0&&this.enemys.push(this.pool.getEnemy()),this.frame%X.initialGenerateInterval===0&&this.bullets.push(this.pool.getBullet(this.character)),this.collisionDetection())}render(){this.enemys.forEach(t=>t.draw()),this.bullets.forEach(t=>t.draw()),this.character.draw(),this.gameInfo.renderGameScore(this.score),this.gameOver&&(this.gameInfo.renderGameOver(this.score),this.isBindHandler||this.setRestartHandler())}collisionDetection(){for(const t of this.enemys){if(t.isCollideWith(this.character,10,30)){this.gameOver=!0;break}for(const e of this.bullets)if(t.isCollideWith(e)){t.isVisible(!1),e.isVisible(!1),this.score+=1;break}}}setRestartHandler(){this.canvasCtx.canvas.addEventListener("mousedown",this.pcRestartHandler),this.canvasCtx.canvas.addEventListener("touchstart",this.mobileRestartHandler),this.isBindHandler=!0}removeRestartHandler(){this.canvasCtx.canvas.removeEventListener("mousedown",this.pcRestartHandler),this.canvasCtx.canvas.removeEventListener("touchstart",this.mobileRestartHandler),this.isBindHandler=!1}}const c=I("mainCanvas",window.innerWidth,window.innerHeight),g=new O(c),p=new V(c);y();function y(){N(),K(),window.requestAnimationFrame(y)}function N(){g.update(),p.update()}function K(){const n=c.canvas;c.clearRect(0,0,n.width,n.height),g.render(),p.render()}

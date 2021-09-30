const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;


var engine, world;

var rand;
var maxDrops=2000;
var maxDrops2=2000;
var lluvia = [];

var thunderCreatedFrame=0;
var trueno;
var sonido;
var piso;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    trueno = loadSound("trueno.mp3");
    sonido = loadSound("lluvia.mp3");

    batAnimation = loadAnimation("bat1.png","bat2.png","bat3.png",
                        "bat4.png","bat5.png","bat6.png",
                        "bat7.png","bat8.png","bat9.png",
                        "bat10.png","bat11.png","bat12.png");
   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);
    //create drops
    for(var i=0;i < maxDrops; i++){
        lluvia.push(new Rain(random(0,400),random(-20,-2000)));
        console.log(i);
        
    }

    for(var e=0;e < maxDrops2; e++){
        lluvia.push(new Rain(random(-7000,-9000)));
        console.log(e);
        
    }

    

    
    piso = new Piso(200,700);
    

    console.log("First");

    setTimeout(function(){
        console.log("Third");
        //for(var e=0;e < maxDrops2; e++){
          //7  lluvia.push(new Rain(random(0,400),random(-20,-2000)));
            
          //console.log(e);

        //}
        sonido.play();
    },12000);

    setTimeout(function(){
        
        maxDrops2 = 500;
    },20000);
    

        
        console.log("Second");
        



    
}

function draw(){
    Engine.update(engine);
    background(0); 

    
    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        trueno.play();
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }


    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

   


    for(var i=0;i < maxDrops; i++){    
        //lluvia[i].display();

    }

    for(var e=0;e < maxDrops2; e++){    
        lluvia[e].display();

    }

    

//if(frameCount % 200 === 0){
  //      lluvia.push(new Rain(random(0,400),random(-20,-2000)));  
    //   console.log(e);
    //} 

   
  


    

    

    

        

    
    


    drawSprites();
    
}   


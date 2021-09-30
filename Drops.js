class Rain{
	constructor(x,y){
		var options = {
		 'density':1,
		 'friction': 5.0,
		 'restitution':0.3
		};
		this.x=x;
		this.y=y;
		this.r=0.5;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
		
	
	
	updatee(){
        if(lluvia.position > height){
            Matter.Body.setPosition(lluvia, {x:random(0,400),y:random(0,50)});
        }
    }

	display(){
	
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("blue");
			fill("lightblue");
			ellipse(0,0,this.r,this.r);
			pop()
        }
	}

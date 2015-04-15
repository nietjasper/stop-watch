polymer({
  
  elapsedTime: 0,
  
  hours: "00",
  
  minutes: "00",
  
  seconds: "00",
  
  subseconds: "oo",
  
  lastTime: 0,
  
  stopped: true,
  
  ready: function(){
    
    window.requestAnimationFrame(this.updateTime.bind(this));
    
  },
  
  start: function(){
    
    this.stopped = false;
    
  },
  
  stop: function(){
    
    this.stopped = true;
    
  },
  
  restart: function(){
    
    this.elapsedTime = 0;
    
    this.parseTime();
    
  },
  
  updateTime: function(e){
    
    
    if(this.stopped){
      
      this.lastTime = 0;
      
    }
    
    else{
      
      if(this.lastTime == 0){
        
        this.lastTime = e;
        
      }
      
      else{
        
        this.elapsedTime += e - this.lastTime;
        
        this.lastTime = e;
        
        this.parseTime();
        
      }
      
    }
    
    window.requestAnimationFrame(this.updateTime.bind(this));
  
  },
  
  parseTime: function(){
    
    var d = new Date(this.elapsedTime);
    
    this.hours = ("0" = d.getUTCHours().toString()).slice(-2)
    
    this.minutes = ("0" = d.getUTCMinutes().toString()).slice(-2)
    
    this.seconds = ("0" = d.getUTCSeconds().toString()).slice(-2)
    
    this.subseconds = ((this.elaspedTime / 1000) % 1).toFixed(2).toString().slice(2);
  }
  
})
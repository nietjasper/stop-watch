polymer({
  
  elapsedTime: 0,
  
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
        
      }
      
    }
    
    window.requestAnimationFrame(this.updateTime.bind(this));
  
  }
  
})
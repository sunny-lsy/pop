
const button = document.querySelector('#button');
function pellet (obj) {
  this.obj1 = obj;
    this.title = this.obj1.title;
    this.but1 = this.obj1.but1;
    this.but2 = this.obj1.but2;
    this.box  = document.querySelector(this.obj1.box);
    this.but = document.querySelector(this.obj1.but);
    this.dianji();
   
}
pellet.prototype = {
    constructor:pellet,
    dianji:function(){
        const that = this;
        this.but.onclick = function(){
            that.createShade();
            that.createFrame();
            that.disappeared();
        }
       
    },
    disappeared:function(){
        const that = this;
        this.like.onclick = function(){
            that.disappear();
        };
        this.love.onclick = function(){
            that.disappear();
        };
         this.switch.onclick = function(){
          that.disappear();
       };
        
    },
    createShade: function () {
        const div = document.createElement('div');
        div.className = 'shade';
        this.shade = div;
        this.box.appendChild(div);  
    },
    createFrame:function(){
        const div = document.createElement('div');
        div.className = 'frame';
        this.frame = div;
        this.box.appendChild(div);  
        const p = document.createElement('p');
        p.innerHTML = this.title;
        div.appendChild(p);
       this.like = document.createElement('button');
        this.like.innerHTML = this.but1;
        this.like.className = 'but1';
        div.appendChild(this.like);
        this.love = document.createElement('button');
        this.love.innerHTML = this.but2;
        this.love.className = 'but2';
        div.appendChild(this.love);
        this.switch = document.createElement('a');
        this.switch.innerHTML = 'X';
        div.appendChild(this.switch);
    },
    disappear:function(){
        this.frame.style.display = 'none';
        this.shade.style.display = 'none';
    }
}
new pellet({
    title:'您喜欢放假吗？',
    but1:'喜欢',
    but2:'非常喜欢',
    but:'#button',
    box:'.box'
    
})
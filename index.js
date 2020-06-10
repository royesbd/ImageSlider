
var pic=["1.jpg","2.jpg","3.jpg"];

var imgTag= document.querySelector("img");
var count=0;

function next(){
  count++;


  if(count>=pic.length){
    count=0;

   imgTag.src=pic[count];

  

    }

    else {
        imgTag.src=pic[count];
}


}



function prev(){

        count--;
      
      
        if(count<0){
            count=pic.length-1;
      
         imgTag.src=pic[count];
      
          }
      
          else {
              imgTag.src=pic[count];
          }
      
      
      
      

}
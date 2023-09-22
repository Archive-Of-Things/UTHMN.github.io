let toastBox = document.getElementById('toastBox');

function showToast(msg){
   let toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML = msg;
   toastBox.appendChild(toast);

   if(msg.includes('')){ //Copy Paste this for each special style you want to make.
      toast.classList.add('test');
   }

   setTimeout(()=>{
      toast.remove();
   },6000);
}
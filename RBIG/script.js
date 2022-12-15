// The first js code i've done that isn't practically all copy+paste
function img() {
  const birb = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg"]
  
  // birb[floor] is any random variable from the birb array, with the randomisation code from floor
  const floor = Math.floor(Math.random() * birb.length);
  document.getElementById("bimg").src = "./birbs/" + birb[floor];
// This took way too long for 7 lines of code, thanks for basically spending 3 hours teaching me js, Lucas :)
  
}

let edit =document.querySelector('.editchange')
let change =document.querySelector('.changer')
var mainbox = document.getElementById("modalcontainer");
var mainbox2 = document.getElementById("modalcontainer2");
var close = document.getElementsByClassName("closebtn")[0];
var close2 = document.getElementsByClassName("closebtn2")[0];
let openup = document.getElementById('openup');

// openup.addEventListener('click' ,() =>{

// })

close.addEventListener('click',()=>{
    mainbox.style.display='none';
    console.log('tu')
})

close2.addEventListener('click',()=>{
    mainbox2.style.display='none';
    console.log('tu')
})



        let submitBtn = document.getElementById('submit');
        let updateBtn = document.getElementById('update');
        let deleteBtn = document.getElementById('delete');
            //  id=''

        // deleteBtn.addEventListener('click',() => {
        // deletePost("cdaa8aef-bbdc-488b-8d7c-58bae5e1e210");
        //  })

       


      
        // submitBtn.addEventListener('click',() => {
        // let title = document.getElementById('title').value;
        // let post = document.getElementById('post-input').value;
        // console.log(title ,post + 'tests');
        //    let newPost  = {
        //        title,
        //        post
        //    }
        //     createPost(newPost);
        //     document.getElementById('title').value="";
        //     document.getElementById('post-input').value="";
        // })
      document.addEventListener('DOMContentLoaded',() => {
          getPost();
      })

  function getPost(){
    fetch('http://54.144.250.94/',{
        method:"get",
        }).then((data) => {
            return data.json();
        }).then((datajson) =>{
          let root = document.getElementById('root');
          for(data of datajson){
             
            root.innerHTML += `<div class='list'>
                <div class="post-item"><h2>${data.title}</h1>
                <span id = 'span'>${data.id}</span>
                              <span class="desc">${data.post}</span>
                              <button  id="del" class="del btn btn-primary">delete</button>
                              <button  id="add" class="edit btn btn-primary">edit</button>
                             

                              </div>
                              </div>
                              \n
                              `}
     

            console.log(datajson);
        })
  }
  
    window.onclick=function(e){
if(e.target.classList.contains('openup')){
    // alert('hello');
    mainbox2.style.display='block'
}

if(e.target.classList.contains('changer')){
    let title = document.getElementById('title').value;
    let post = document.getElementById('post-input').value;
    console.log(title ,post + 'tests');
       let newPost  = {
           title,
           post
       }
        createPost(newPost);
        document.getElementById('title').value="";
        document.getElementById('post-input').value="";
        mainbox2.style.display='none'
}

  if(e.target.classList.contains("del")){
      let item = e.target.parentNode.childNodes[2].textContent;
    console.log(item)
    deletePost(item)
    }

    if(e.target.classList.contains('edit')){
     id = e.target.parentNode.childNodes[2].textContent;
     console.log(id)
        mainbox.style.display='block'
    }

    if(e.target.classList.contains('editchange')){
      let title =document.getElementById('input1').value;
let post =document.getElementById('input2').value;
let updatedPost = {
    id,
    title,
    post
}
console.log(id );
updatePost(updatedPost);
mainbox.style.display='none'
    }
}

// edit.addEventListener('click' ,()=>{
         
// let title = document.getElementById('input1').value;
// let post = document.getElementById('input2').value;
// let updatedPost = {
//     id,
//     title,
//     post
// }
// console.log(id );
// updatePost(updatedPost);
    

// mainbox.style.display='none'
// })

function deletePost(item){
      fetch(`http://54.144.250.94/${item}`,{
        method:"delete",
        }).then((data) => {
            return data;
        })
  }

  function createPost(post){
      console.log(post);
    fetch('http://54.144.250.94/',{
        method:"post",
        headers: {
      'Content-Type': 'application/json'
    },
       body:JSON.stringify(post)
        }).then((data) => {
            return data.json(); 
        }).then((datajson) =>{
          

            console.log(datajson);
        })
    
  }

  function updatePost(post){
      console.log(post);
    fetch('http://54.144.250.94/',{
        method:"put",
        headers: {
      'Content-Type': 'application/json'
    },
       body:JSON.stringify(post)
        }).then((data) => {
            return data;
        })
    
  }
const firstName=document.getElementById("firstname")
const lastName=document.getElementById("lastname")
const email=document.getElementById("email")
const idNumber=document.getElementById("idNumber")
var temp=0;
const table= document.getElementById("table")
document.addEventListener('submit',function(e){
    e.preventDefault();
    const row =document.createElement('tr')

    if(firstName.value!="" && lastName.value!=""&& email.value!=""&& idNumber.value!=""){

        row.innerHTML=`<td>${++temp}</td> <td class='fstname'>${firstName.value}</td> 
        <td class='lstname'>${lastName.value}</td>  <td class='mail'>${email.value}</td> 
         <td class='id'>${idNumber.value}</td> <td class='buttons'><button class="btn btn-info" id="edit${temp}">EDIT
         </button><button class="btn btn-danger" id="remove${temp}" ml-2">REMOVE</button></td>`
        table.appendChild(row)
        document.getElementById('form').reset();

      const edit= document.querySelector(`#edit${temp}`).addEventListener('click',function(){
            const edit_button= document.querySelector('.edit')
           const fstname=document.querySelector('.fstname').innerHTML
           const lstname=document.querySelector('.lstname').innerHTML
           const mail=document.querySelector('.mail').innerHTML
           const id=document.querySelector('.id').innerHTML
          
            
           row.innerHTML=`<td>${temp}</td> <td><input type="text" id="fstname" value="${fstname}"></td> 
           <td > <input type="text" id="lstname" value="${lstname}"></td>  <td ><input type="text" id="mail" value="${mail}"></td> 
            <td ><input type="text" id="id" value="${id}"></td> <td class='buttons'><button class="btn btn-success save${temp}">SAVE
            </button><button class="btn btn-warning cancel${temp} ml-2">CANCEL</button></td>`

            document.querySelector(`.save${temp}`).addEventListener('click',function(){

const fstname=document.querySelector('#fstname')
const lstname=document.querySelector('#lstname')
const mail=document.querySelector('#mail')
const id=document.querySelector('#id')

row.innerHTML=`<td>${temp}</td> <td class='fstname'>${fstname.value}</td> 
<td class='lstname'>${lstname.value}</td>  <td class='mail'>${mail.value}</td> 
 <td class='id'>${id.value}</td> <td class='buttons'><button class="btn btn-info" id="edit${temp}">EDIT
 </button><button class="btn btn-danger" id="remove${temp}" ml-2">REMOVE</button></td>`

 document.querySelector(`#remove${temp}`).addEventListener('click',function(){

    row.remove()
    temp--
    
    })
            })

document.querySelector(`.cancel${temp}`).addEventListener('click',function(){

row.innerHTML=`<td>${temp}</td> <td class='fstname'>${fstname}</td> 
<td class='lstname'>${lstname}</td>  <td class='mail'>${mail}</td> 
 <td class='id'>${id}</td> <td class='buttons'><button class="btn btn-info" id="edit${temp}">EDIT
 </button><button class="btn btn-danger "id="remove${temp}" ml-2">REMOVE</button></td>`


 document.querySelector(`#remove${temp}`).addEventListener('click',function(){
   
    row.remove()
    temp--
    
    })
   
})



            })


            document.querySelector(`#remove${temp}`).addEventListener('click',function(){
                
                row.remove()
                temp--
            })
        }

else{
    alert("fill all blankes")
}


})




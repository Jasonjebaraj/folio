var skill_list1=document.getElementById("skill_list1");
var skill_list2=document.getElementById("skill_list2");
var skill_list3=document.getElementById("skill_list3");
var show=0;

function hideshow1()
{
     

  if(show==1){
    skill_list1.style.display="block";
    skill_list2.style.display="none";
    skill_list3.style.display="none";
    show=0;
  }  
  else{
    skill_list1.style.display="none";
    show=1;
  }
}

function hideshow2()
{
     

  if(show==1){
    skill_list2.style.display="block";
    skill_list1.style.display="none";
    skill_list3.style.display="none";
    show=0;
  }  
  else{
    skill_list2.style.display="none";
    show=1;
  }
}

function hideshow3()
{
     

  if(show==1){
    skill_list3.style.display="block";
    skill_list2.style.display="none";
    skill_list1.style.display="none";
    show=0;
  }  
  else{
    skill_list3.style.display="none";
    show=1;
  }
}


// menubar


let sidebar = document.getElementById('sidebar');
let bar=document.getElementById('bars');
function closemenu()
{
  sidebar.style.right="-200px";
  bar.style.visibility='visible';
}

function openmenu()
{
  sidebar.style.right="0px";
  bar.style.visibility="hidden";
}



// skill

var skill_content1=document.getElementById('skill_content1');
        var skill_content2=document.getElementById('skill_content2');
        var skill_content3=document.getElementById('skill_content3');
        function frontend()
        {
            skill_content1.style.display="block";
            skill_content1.style.display="flex";
            skill_content2.style.display="none";
            skill_content3.style.display="none";
        }

        function backend()
        {
            // skill_content2.classList.add('summa')
            skill_content1.style.display="none";
            skill_content2.style.display="block";
            skill_content2.style.display="flex";
            skill_content3.style.display="none";
        }

        function others()
        {
            skill_content1.style.display="none";
            skill_content2.style.display="none";
            skill_content3.style.display="block";
            skill_content3.style.display="flex";
            
        }
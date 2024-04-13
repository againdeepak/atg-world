const joinBtn=document.querySelector('.post-btn');
const afterLogin=document.querySelector('.user-after-login');
const beforeLogin=document.querySelector('.user-before-login');
const leaveBtn=document.querySelector('.leave-btn');
const postBtn=document.querySelector('.post-btn');
const profileAfterLogin=document.querySelector('.profile-after-login');
const credentials=document.querySelector('.credentials')
const leaveOverHeader=document.querySelector('.leaver-over-header')
const joinOverHeader=document.querySelector('.join-over-header');

joinBtn.addEventListener('click',()=>{
    afterLogin.classList.add('active');
    leaveBtn.classList.add('active');
    profileAfterLogin.classList.add('active');
    credentials.classList.add('inactive');
    beforeLogin.classList.add('inactive');
    postBtn.classList.add('inactive');
})

leaveBtn.addEventListener('click',()=>{
    afterLogin.classList.remove('active');
    leaveBtn.classList.remove('active');
    beforeLogin.classList.remove('inactive');
    postBtn.classList.remove('inactive');
    profileAfterLogin.classList.remove('active');
    credentials.classList.remove('inactive');
})

leaveOverHeader.addEventListener('click',()=>{
    leaveOverHeader.classList.remove('active');
    joinOverHeader.classList.remove('inactive')
})
joinOverHeader.addEventListener('click',()=>{
    leaveOverHeader.classList.add('active');
    joinOverHeader.classList.add('inactive');
})


function openModal() {
    document.querySelector('.account-container').style.display = 'block';

    
}

function closeModal() {
    document.querySelector('.account-container').style.display = 'none';

}
function openSignModel(){
    document.querySelector('.signin-container').style.display='block';
    document.querySelector('.account-container').style.display = 'none';
}
function closeSignModel(){
    document.querySelector('.signin-container').style.display='none';
}

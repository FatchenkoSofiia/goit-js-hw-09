import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),s=()=>{const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))},l=()=>{const t=localStorage.getItem("feedback-form-state");if(t){const{email:a,message:m}=JSON.parse(t);e.elements.email.value=a,e.elements.message.value=m}};e.addEventListener("input",()=>{s()});window.addEventListener("load",()=>{l()});e.addEventListener("submit",t=>{if(t.preventDefault(),e.elements.email.value.trim()===""||e.elements.message.value.trim()===""){alert("Please enter your email and message");return}console.log({email:e.elements.email.value.trim(),message:e.elements.message.value.trim()}),localStorage.removeItem("feedback-form-state"),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map

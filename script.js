/* 🦄part 2, Click signup-btn, signin-btn and classList.add('change').
js 023
js 025
css 027
css 030*/

/* js 023: changing btn color

JS : 
signUp click ,  put 'change' class on parentElement. 
signIn click , remove 'change' class on parentElement. 

CSS : 
if there is 'change' class on parentElement, put a color 'lightcoral' on signUp
if there is not'change' class on parentElement, put a color 'lightcoral' on signIn

/* js 025 : Click signup-btn, signin-btn ,and change heading-span text  */


const container = document.querySelector('.container');
const headingSpan2 = document.querySelector('.heading-span-2');

const form = document.querySelector('.form')  //js 039, js 047

document.querySelector('.signup-btn').addEventListener('click',()=>{

    container.classList.add('change');  /* JS 023 */    
    headingSpan2.textContent = "Up";     /* JS 025 */

    form.className='form sign-up';        // js 047

    clearForm();                      // js 049-8

});

document.querySelector('.signin-btn').addEventListener('click',()=>{

    container.classList.remove('change');    /* JS 023 */
    headingSpan2.textContent = "In";    /* JS 025 */

     form.className='form sign-in';       // js 047

     clearForm();                      // js 049-8
});


// 🦄part 4, when click 'submit' , input check

/*js 034 input check. */

const username= document.querySelector('#username');
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const password2= document.querySelector('#password2');

/* js 036 Making error message */

const error =(input,message)=>{

    const inputWrapper = input.parentElement;                  /* js 036-4 */
    inputWrapper.className = "form-input-wrapper error";            /* js 036-6 */
    inputWrapper.querySelector('.message').textContent = message;     
};

// js 045 success messsage.
const success = (input)=>{
    const inputWrapper = input.parentElement;
    inputWrapper.className = 'form-input-wrapper success';
}


// js 043 Put another message for password2

const checkRequiredFeilds = (inputArr)=>{            //js 034-1
    inputArr.forEach((input)=>{                  
        if(input.value.trim()===""){      //js 034-4

            if(input.id ==='password2'){                      // js 043
                error(input,"password confirmation is required");
            }
            else{                
                error(input,`${input.id} is required`); 
            }
        }else{            
            success(input);             //  js 045 
        }
    });
}


/*  js 039, submit click, send input datas to const error */

/* js 047, 
Test [username, email, password, password2] on sign-up
Test only [email,password] on sign-in    */


/*  js 051, submit click and Check length of username, password   */

 const checkLength = (input,min,max)=>{                          //js 051-2
     if( input.value.length < min ){                                   //js 051-4
         error(input, `${input.id} must be at least ${min} characters`);
     }else if(input.value.length > max){                                 //js 051-6
         error( input, `${input.id} must be less than ${max} characters`);
     }else{
         success(input);
     }
 };

 /* js 054,  password-password2 check       */

 const passwordsMatch =(input1, input2)=>{
     if(input1.value !== input2.value){             //js 054-2
         error(input2, "Passwords do not match");            //js 054-4
    }
 }; 

 /* js 055, email check     */

const checkEmail =(input)=>{
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regEx.test(input.value.trim())) {
        success(input);        
    } else {
        error(input,"Email is not valid");        
    }
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();             /* js 039-2 */

    if(form.classList[1]==='sign-up'){                  // js 047-2, 
        checkRequiredFeilds([username, email, password, password2]);    

        checkLength(username,2,15);             //js 051-8
        checkLength(password,5.25);             //js 051-8

        passwordsMatch(password, password2);             //js 054-6

    } else{
        checkRequiredFeilds([email,password]);
    }    
    checkEmail(email);              //js 055. 
});


/* js 049 Delete error message when 'sign up -  sign in' changed    */

const clearForm = ()=>{   

document.querySelectorAll('.form-input-wrapper').forEach((a)=>{         //js 049-2, js 049-4
    a.className = 'form-input-wrapper'});

form.reset();               //js 049-6
};

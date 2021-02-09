/* 🦄part 2, signup-btn, signin-btn 클릭한때, classList.add('change'),  ~~~ 효과 넣기 
js 023
js 025
css 027
css 030*/

/* js 023: 버튼 색 바뀌게하기

JS : 
signUp click하면 , 부모태그에 change 넣고, - 
signIn click하면 , 부모태그에 change 뺌 , 

CSS : 
부모태그에 change 있으면, signUp 에 lightcoral 넣음
부모태그에 change 없으면, signIn 에 lightcoral 넣음 */

/* js 025 : signup-btn, signin-btn 클릭한때, heading-span 내용, "Up - In" 넣어서, sign In, sing Up 만들기

textContent vs innerHTML 👉 👻노트필기    */


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

/*
js 034 input check
1. parameter inputArr : array데이터 ...parameter. (input 데이터들)

4. trim :
str.trim() – 문자열 앞과 끝의 빈칸을 제거함 . */

const username= document.querySelector('#username');
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const password2= document.querySelector('#password2');

/* js 036 error message 만들기
2. parameter 의미 : 함수안에 뚫은 구멍. 
4. parentElement : parentNode와 비슷함
6. className : elem.className="~", class를 "~"로 덮어씌움 
8 함수실행 */

const error =(input,message)=>{

    const inputWrapper = input.parentElement;                  /* js 036-4 */
    inputWrapper.className = "form-input-wrapper error";            /* js 036-6 */
    inputWrapper.querySelector('.message').textContent = message;     
};

// js 045 success messsage. 성공하면 borderline 넣기
const success = (input)=>{
    const inputWrapper = input.parentElement;
    inputWrapper.className = 'form-input-wrapper success';
}


// js 043 password2는 다른 message 추가

const checkRequiredFeilds = (inputArr)=>{            //js 034-1
    inputArr.forEach((input)=>{                  
        if(input.value.trim()===""){      //js 034-4

            if(input.id ==='password2'){                      // js 043
                error(input,"password confirmation is required");
            }
            else{                
                // js 036-8, const error = (input, message)=>{}
                error(input,`${input.id} is required`); 
            }
        }else{            
            success(input);             //  js 045 
        }
    });
}


/*  js 039, submit 클릭한때, input자료들 const error변수로 보내기 
2. e.preventDefault : 기본동작 막기   👉 submit하면 기본적으로 refresh하므로, 일단 기본동작 막고, 다음 코딩함
*/

/* js 047, 
sign-up 에서는  [username, email, password, password2] 모두 검사
sign-in 에서는 [email,password] 만 검사

2. .classList[1] : class안 이름 검사하는 법      */


/*  js 051, submit click한때, username, password의 길이 체크

알고리즘: 
2. input, min, max 파라미터
4. input.value.length가 min보다 작을때, error
6.   ~~~~~~~~~~~~~~~~~~ max보다 클때 , error

8. checkLength(파라미터1,2,3) 넣고 실행      */

 const checkLength = (input,min,max)=>{                          //js 051-2
     if( input.value.length < min ){                                   //js 051-4
         error(input, `${input.id} must be at least ${min} characters`);
     }else if(input.value.length > max){                                 //js 051-6
         error( input, `${input.id} must be less than ${max} characters`);
     }else{
         success(input);
     }
 };

 /* js 054, 
 1. input1, input2 파라미터 
 2. password-password2 비교 , 
 4. 서로 다르면 error message
 6.  passwordsMatch(파라미터1,2); 넣고 실행            */

 const passwordsMatch =(input1, input2)=>{
     if(input1.value !== input2.value){             //js 054-2
         error(input2, "Passwords do not match");            //js 054-4
    }
 }; 

 /* js 055, email체크 - reqular expression

 2. google : 'js regex for email' 
 
 4. test()

 6. trim()

 8. success() 👉 borderline색 바뀌는 함수 실행

 10. checkEmail(email); 함수 실행            */

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
    checkEmail(email);              //js 055. if, else에 모두 넣거나, 그냥 바깥에 1개 넣거나..둘다 ㅇㅋ
});


/* 
js 049 'sign up -  sign in' 바꿀때 에러메시지 지우기.

알고리즘 : 
2. 'form sing-up'으로 바뀐 className을 가져오기 - querySelectorAll

4. form-input-wrapper로 재설정하기 - forEach

6. form.reset; 으로 에러메시지 지움

8. signup-btn, signin-btn 클릭때마다 실행하기 
*/

const clearForm = ()=>{   

document.querySelectorAll('.form-input-wrapper').forEach((a)=>{         //js 049-2, js 049-4
    a.className = 'form-input-wrapper'});

form.reset();               //js 049-6
};

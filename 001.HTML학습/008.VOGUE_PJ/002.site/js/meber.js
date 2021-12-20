// 보그 PJ 회원가입 JS - member.js

// 로딩구역
$(()=>{ // jQB

    console.log("회원가입 로딩완료");

    // 
    //  입력요소에서 포커스가 빠질때 발생하는 이벤트
    //
    // focus의 반대 -> blur(블러)
    // 대상: input[type=text],input[type=password]
    $("input[type=text],input[type=password]")
    .blur(function(){

        // 방금 블러발생한 요소의 id는?
        let cid = $(this).attr("id");
        // cid는 current id 즉, 현재 아이디
        // attr(속성명) -> 해당속성값을 읽어옴

        // 블러발생 요소의 값은?
        let cv = $(this).val().trim();
        // cv는 current value 즉, 현재값
        // val() -> 선택요소에 입력값을 읽어옴

        console.log("블러발생",cid,"\n값:",cv);

        // 1. 빈값 여부 체크하기
        if(cv===""){
            // 메시지 출력
            $(this).siblings(".msg").text("필수입력");
            // siblings(요소) - 다른형제 중 특정 요소를 선택
        } // if  : 빈값 체크

        // 2. 아이디일 경우 유효성 검사하기
        // 검사기준 : 영문자 숫자로 시작하는 6~20글자 영문자/숫자
        else if(cid === "mid"){
            console.log("검사결과:",vReg(cv,cid));
        } // else if :  아이디 일경우

        else{ // 통과시
            $(this).siblings(".msg").empty();
            // empty() - 메시지 지우기
        } // else : 통과시


    }); // blur
    ///////////


}); // jQB
///////////



/*////////////////////////////////////////////////////////
    함수명: vReg
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
    // val - 검사할값, cid - 처리구분아이디
    // //console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함
    switch (cid) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // //console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////
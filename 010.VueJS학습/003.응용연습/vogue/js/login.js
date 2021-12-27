// 보그 PJ 로그 JS - login.js

// 로딩 구역
$(()=>{ // jQB

    console.log("로그인 로딩완료")

    // 대상1: 아이디입력요소
    let mid = $("#mid");
    // 대상2: 비번입력요소
    let mpw = $("#mpw");

    // 로그인 버튼 클릭시
    $("#sbtn").click(function(e){
        // 기본기능막기 - 서브밋기능막기
        e.preventDefault();

        console.log("버튼클릭");

        // 1. 아이디 / 비번 빈값여부 확인
        // val() 입력된 값 읽어오는 메소드
        // trim() 앞뒤 공백제거
        if(mid.val().trim() === "" | mpw.val().trim() === "") {
            alert("아이디와 비밀번호를 모두 입력해주세요")
            mid.val(""); // 값리셋
            mpw.val(""); // 값리셋
            mid.focus(); // 아이디입력란 포커스
        } // if
        else{
            alert("로그인에 성공하였습니다.")
            // 실제로 서버에 가서 아이디/비번확인 후
            // 일치하면 로그인성공, 불일치하면 메시지
        } //else

    }); // click

}); // jQB
//////////
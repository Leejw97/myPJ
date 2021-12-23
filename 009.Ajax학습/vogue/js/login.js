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
            // 실제로 서버에 가서 아이디/비번확인 후
            // 일치하면 로그인성공, 불일치하면 메시지

            // Ajax의 post방식으로 로그인페이지 호출
            // $.post(URL,data,callback);
            $.post(
                // 1.URL
                "process/loginSet.php",
                // 2.data
                {
                    "mid": mid.val(), // 아이디
                    "mpw": mpw.val() // 비밀번호
                },
                // 3. callback
                    function(res){ // res 전달변수
                        console.log("결과값:",res);

                        // 3-1. 로그인성공시
                        if(res==="ok"){
                            // alert("로그인에 성공하였습니다.");

                            // 메인페이지로 이동하기
                            location.href = "index.php";
                            
                        } // if

                        // 3-2. 아이디가 없는경우
                        else if(res==="no"){
                            alert("사용가능한 ID가 아닙니다");

                        } // else if

                        // 3-3. 비밀번호가 불일치
                        else if(res==="again"){
                            alert("비밀번호가 일치하지 않습니다");

                        } // else if

                    } // callback
            );

        } //else

    }); // click

}); // jQB
//////////
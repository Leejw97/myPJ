<?php
####### 로그아웃 처리 페이지 ##########

# 1. 세션시작(세션관련 작업시 반드시 시작할것!)
session_start();

# 2. 세션종료(세션관련 변수등 모두 파기함!)
session_destroy();

// 돌아갈때 리턴값
echo "ok";

?>
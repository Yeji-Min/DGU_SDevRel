function login(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;

  // username과 password 중 하나라도 작성되어 있는 경우에만 팝업 창을 닫습니다.
  if (usernameValue.trim().length > 0 && passwordValue.trim().length > 0) {
    alert("로그인 완료!");
    window.close();
  }
}

function openLoginWindow() {
  var width = 300;  // 창의 가로 크기
  var height = 200; // 창의 세로 크기
  var left = (screen.width - width) / 2; // 창을 가운데 정렬하기 위한 왼쪽 위치 계산
  var top = (screen.height - height) / 2; // 창을 가운데 정렬하기 위한 위쪽 위치 계산

  //window.open("./login.html", "_blank", "width=" + width + ", height=" + height + ", left=" + left + ", top=" + top);
}
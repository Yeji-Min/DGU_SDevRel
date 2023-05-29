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


function handleConfirmation() {
    let ret = confirm("프로필 사진을 변경하겠습니까?");
    if (ret == true) {
      // 사용자가 "확인" 버튼을 누른 경우
      alert("변경되었습니다.🤩");
    } else {
      // 취소 버튼이나 다이얼로그를 닫은 경우
      alert("프로필 변경이 취소되었습니다.🤩");
    }
  }
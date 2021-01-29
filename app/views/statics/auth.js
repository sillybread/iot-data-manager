document.querySelector("[name=username]").focus();
document.getElementById("loginForm").onsubmit = (e) => {
    e.preventDefault();
    let sData = `username=${document.getElementById('usr').value}&` +
        `password=${document.getElementById('pwd').value}`;
    let eMessage = document.getElementById("message")
    eMessage.innerText = "Đang đăng nhập...";
    fetch(e.target.action, {
        method: 'POST',
        body: sData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        if (res.status === 200) {
            eMessage.innerText = "Đăng nhập thành công"
            window.location.href = "/"
        } else {
            eMessage.innerText = "Tài khoản hoặc mật khẩu không chính xác"
        }
    })
}
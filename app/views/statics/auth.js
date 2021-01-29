const _idToElement = (id) => document.getElementById(id);

function signinHandle() {
    _idToElement("usr").focus();
    _idToElement("signinForm").onsubmit = (e) => {
        e.preventDefault();
        let sData = `username=${_idToElement("usr").value}&` +
            `password=${_idToElement("pwd").value}`;
        let eMessage = _idToElement("message")
        eMessage.innerText = "Đang đăng nhập...";
        fetch(e.target.action, {
            method: "POST",
            body: sData,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
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
}

function signupHandle() {
    _idToElement("usr").focus();
    _idToElement("signupForm").onsubmit = (e) => {
        e.preventDefault();
        let usr = _idToElement("usr").value;
        let pwd = _idToElement("pwd").value;
        let eml = _idToElement("eml").value;
        let eMessage = _idToElement("message")
        if (!(usr && pwd && eml)) {
            eMessage.innerText = "Hãy điền vào tất cả các trường!";
            return;
        }
        let sData = `username=${usr}&password=${pwd}&email=${eml}`;
        eMessage.innerText = "Đang đăng ký...";
        fetch(e.target.action, {
            method: "POST",
            body: sData,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(res => {
            if (res.status === 200) {
                eMessage.innerText = "Đăng ký thành công"
                window.location.href = "/signin.html"
            } else {
                eMessage.innerText = "Tài khoản đã tồn tại trong hệ thống"
            }
        })
    }
}
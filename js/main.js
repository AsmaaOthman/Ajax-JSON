function getContent() {
    var ajax = new XMLHttpRequest();
    ajax.open("Get", "https://reqres.in/api/users?page=2");
    ajax.send();

    var content = "";

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = JSON.parse(ajax.response);
            for (var i = 0; i < data.data.length; i++) {
                var avatar = data.data[i].avatar;
                var fName = data.data[i].first_name;
                var lName = data.data[i].last_name;
                var email = data.data[1].email;
                content += `
                    <div class="content">
                            <div class="show-content">
                                <div class="show-item">
                                    <img src="${avatar}">
                                    <p>First Name: ${fName}</p>
                                    <p>Last Name: ${lName}</p>
                                    <p>E-mail: ${email}</p>
                                </div>
                            </div>     
                    </div>
                    `;
            }

            document.getElementById("content").innerHTML = content;
        }
    };
}
getContent();
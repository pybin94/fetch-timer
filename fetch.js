
const init = () => {
    fatchTest()
}

const getUserData = async () => {
    try {
        const response = await fetch("./user.json")
        if (response.ok) {
            const userData = await response.json()
            return userData;
        } else {
            throw new Error("관리자에게 문의주세요")
        }
    } catch (error) {
        alert(error.message)
    }
}

const fatchTest = async () => {
    const userID = "yaml";
    const user = await getUserData();

    user.map((item, index) => {
        if (user[index].mb_id === userID) {
            const remTime = document.querySelector("#remainTime");
            const now = new Date()
            const setTime = new Date(user[index].end_dt)

            const gap = setTime.getTime() - now.getTime();
            const date = Math.floor(gap / (60 * 60 * 24 * 1000));
            const hours = Math.floor((gap % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000));
            const minutes = Math.floor((gap % (60 * 60 * 1000)) / (60 * 1000));

            document.write(`${date}일 ${hours}시 ${minutes}분`);
            if (hours == 0 && minutes == 0) {
                window.location.href = "/"
            }

        }
    })
}

init()
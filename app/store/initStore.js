/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/15 下午1:55
 */

export default initStore = {
    theme: {
        color: '#e91e63'
    },
    userInfo: {
    },
    favorite: {
        showItem: [
            {
                "path": "stars:>1",
                "name": "ALL",
                "short_name": "ALL",
                "checked": true
            },
            {
                "path": "Android",
                "name": "Android",
                "checked": true
            },
            {
                "path": "iOS",
                "name": "iOS",
                "checked": true
            },
            {
                "path": "react-native",
                "name": "React Native",
                "checked": false
            },
            {
                "path": "MySQL",
                "name": "MySQL",
                "checked": false
            },
            {
                "path": " AngularJS",
                "name": " AngularJS",
                "checked": false
            },
            {
                "path": " jQuery",
                "name": " jQuery",
                "checked": false
            },
            {
                "path": " react",
                "name": " React",
                "checked": false
            }
        ]
    },
}
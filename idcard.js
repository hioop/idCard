//身份证的验证，正确返回true，错误范围false
function isIdCardNo(code) {
    if (code.length != 18) {return false;}//只支持二代身份证
    var area = {
        11 :"北京",
        12 :"天津",
        13 :"河北",
        14 :"山西",
        15 :"内蒙古",
        21 :"辽宁",
        22 :"吉林",
        23 :"黑龙江",
        31 :"上海",
        32 :"江苏",
        33 :"浙江",
        34 :"安徽",
        35 :"福建",
        36 :"江西",
        37 :"山东",
        41 :"河南",
        42 :"湖北",
        43 :"湖南",
        44 :"广东",
        45 :"广西",
        46 :"海南",
        50 :"重庆",
        51 :"四川",
        52 :"贵州",
        53 :"云南",
        54 :"西藏",
        61 :"陕西",
        62 :"甘肃",
        63 :"青海",
        64 :"宁夏",
        65 :"新疆",
        71 :"台湾",
        81 :"香港",
        82 :"澳门",
        91 :"国外"
    }
    var Y, JYM;
    var S, M;
    var ereg;
    var idcard_array = new Array();
    idcard_array = code.split("");
    document.write(idcard_array);
     
         // 地区检验     // 身份号码位数及格式检验
    if (area[parseInt(code.substr(0, 2))] == null || !/^[0-9]{17}([0-9X])$/.test(code))
        return false;

    var sBirthday = code.substr(6, 4) + "-"
            + Number(code.substr(10, 2)) + "-"
            + Number(code.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"));
    var flag = (sBirthday != (d.getFullYear() + "-"
            + (d.getMonth() + 1) + "-" + d.getDate()));
    if (!flag) {// 测试出生日期的合法性
        // 计算校验位
        S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10]))
                * 7
                + (parseInt(idcard_array[1]) + parseInt(idcard_array[11]))
                * 9
                + (parseInt(idcard_array[2]) + parseInt(idcard_array[12]))
                * 10
                + (parseInt(idcard_array[3]) + parseInt(idcard_array[13]))
                * 5
                + (parseInt(idcard_array[4]) + parseInt(idcard_array[14]))
                * 8
                + (parseInt(idcard_array[5]) + parseInt(idcard_array[15]))
                * 4
                + (parseInt(idcard_array[6]) + parseInt(idcard_array[16]))
                * 2 + parseInt(idcard_array[7]) * 1
                + parseInt(idcard_array[8]) * 6
                + parseInt(idcard_array[9]) * 3;
      
        Y = S % 11;
        M = "F";
        JYM = "10X98765432";
        M = JYM.substr(Y, 1);
        //alert("S:"+S+"|Y:"+Y+"|M:"+ M+"|idcard_array[17]"+idcard_array[17]);
        // 判断校验位
        if (M == idcard_array[17]){
            return true;// 检测ID的校验位
        } 
    }

    return false;
    }
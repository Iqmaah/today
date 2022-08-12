
const isEmpty = (val) => {
    return (val === undefined || val == null || val.length <= 0)
        ? true : false
}


const makePhoneNumberInternational = (phoneNumber) => {
    if (phoneNumber.substr(0, 1) == '0')
    {
        let internationalPrefix = "+234"
        let num10Digits = phoneNumber.substr(1)
        return internationalPrefix + num10Digits
    } else if (phoneNumber.substr(1, 3) == '234') {
        return phoneNumber
    } else {
        return phoneNumber;
    }
}


module.exports  = {
    isEmpty,
    makePhoneNumberInternational
}
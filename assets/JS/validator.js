// Đối tượng cần Validator
function Validator(options) {
    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);

    // Thực hiện xác nhận dữ liệu nhập vào input
    function Validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentNode.querySelector(options.errorMessage);
        if(errorMessage) {
            errorElement.innerHTML = errorMessage;
            inputElement.parentNode.classList.add('invalid');
        } else {
            errorElement.innerHTML = '';
            inputElement.parentNode.classList.remove('invalid');
        }
    }

    if(formElement) {
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if(inputElement) {
                // Xử lý khi blur khỏi input
                inputElement.onblur = function() {
                    Validate(inputElement, rule);
                }

                // Xử lý khi nhập dữ liệu vào input
                inputElement.onclick = function() {
                    var errorElement = inputElement.parentNode.querySelector(options.errorMessage);
                    errorElement.innerHTML = '';
                    inputElement.parentNode.classList.remove('invalid');
                }
            }
        });
    }
}


// Định nghĩa các rule
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập dữ liệu';
        }
    };
};

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập đúng dữ liệu';
        }
    };
};

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    };
};

Validator.isConfirm = function (selector, getValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getValue() ? undefined : message || 'Nhập dữ liệu không đúng';
        }
    };
};
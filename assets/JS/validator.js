// Đối tượng cần Validator
function Validator(options) {
    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);

    var selectorRules = {};

    // Thực hiện xác nhận dữ liệu nhập vào input
    function Validate(inputElement, rule) {
        var errorMessage;
        var errorElement = inputElement.parentNode.querySelector(options.errorMessage);

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        // Lặp qua các rule đã lấy và kiểm tra
        for(var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }

        if(errorMessage) {
            errorElement.innerHTML = errorMessage;
            inputElement.parentNode.classList.add('invalid');
        } else {
            errorElement.innerHTML = '';
            inputElement.parentNode.classList.remove('invalid');
        }
    }

    if(formElement) {
        formElement.onsubmit = function (e) {
            // Tắt hành vi mặc định của submit
            e.preventDefault();

            // Thực hiện validate của form khi submit
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                Validate(inputElement, rule);
            });
        }


        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);

            // Lưu các rule có cùng selector vào mảng
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

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
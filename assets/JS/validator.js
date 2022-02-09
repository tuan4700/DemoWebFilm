// Đối tượng cần Validator
function Validator(options) {
    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);

    var selectorRules = {};

    function getParent (element, selector) {
        while (element.parentNode) {
            if (element.parentNode.matches(selector)) {
                return element.parentNode;
            }
            element = element.parentNode;
        }
    }

    // Thực hiện xác nhận dữ liệu nhập vào input
    function Validate(inputElement, rule) {
        var errorMessage;
        var errorElement = getParent(inputElement, options.formGroup).querySelector(options.errorMessage);

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        // Lặp qua các rule đã lấy và kiểm tra
        for(var i = 0; i < rules.length; i++) {
            switch(inputElement.type) {
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if(errorMessage) break;
        }

        if(errorMessage) {
            errorElement.innerHTML = errorMessage;
            getParent(inputElement, options.formGroup).classList.add('invalid');
        } else {
            errorElement.innerHTML = '';
            getParent(inputElement, options.formGroup).classList.remove('invalid');
        }

        return errorMessage;
    }

    if(formElement) {
        formElement.onsubmit = function (e) {
            // Tắt hành vi mặc định của submit
            e.preventDefault();

            var isFormValid = true;

            // Thực hiện validate của form khi submit
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = Validate(inputElement, rule);
                if(isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        switch (input.type) {
                            case 'checkbox':
                                // Nếu không được check thì bỏ qua input đó
                                if(!input.matches(':checked')) return values;

                                // Nếu không phải là mảng thì khởi tạo mảng rỗng
                                if(!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {})

                    options.onSubmit(formValues);
                }
            }

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
                    var errorElement = getParent(inputElement, options.formGroup).querySelector(options.errorMessage);
                    errorElement.innerHTML = '';
                    getParent(inputElement, options.formGroup).classList.remove('invalid');
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
            return value ? undefined : message || 'Vui lòng nhập dữ liệu';
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

Validator.isConfirm = function (selector, getConfirm, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirm() ? undefined : message || 'Nhập dữ liệu không đúng';
        }
    };
};
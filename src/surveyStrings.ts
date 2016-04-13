﻿module Survey {
    export var surveyLocalization = {
        currentLocale: "",
        locales: {},
        getString: function (strName: string) {
            var loc = surveyLocalization.currentLocale ? surveyLocalization.locales[surveyLocalization.currentLocale] : surveyStrings;
            if (!loc || !loc[strName]) loc = surveyStrings;
            return loc[strName];
        }
    };
    export var surveyStrings = {
        pagePrevText: "Previous",
        pageNextText: "Next",
        completeText: "Complete",
        otherItemText: "Other (describe)",
        optionsCaption: "Choose...",
        requiredError: "Please answer the question.",
        numericError: "The value should be a numeric.",
        textMinLength: "Please enter at least {0} symbols.",
        minSelectError: "Please select at least {0} variants.",
        maxSelectError: "Please select not more than {0} variants.",
        numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
        numericMin: "The '{0}' should be equal or more than {1}",
        numericMax: "The '{0}' should be equal or less than {1}"
    }
    surveyLocalization.locales["en"] = surveyStrings;

    if (!String.prototype["format"]) {
        String.prototype["format"] = function () {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                    ;
            });
        };
    }
}